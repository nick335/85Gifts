import axios from "axios";
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner";

interface Transaction {
  transferReference?: string;
  _id: string;
  description: string;
  totalPrice: number;
  transactionDate?: string;
  status: string;
}

export default function TransactionsTab() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transaction.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(transaction.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const authToken = localStorage.getItem("adminToken");

        if (!authToken) {
          setError('Authentication requires');
          return;
        }

        const response = await fetch('api/api/admin/admintransactions', {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setTransaction(data.data)
        } else {
          setError(data.message || 'Failed to fetch transactions')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching transaction');
        console.error('Error fetching transactions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);


  const approveTransaction = async (transactionId: string) => {
    const approvePayload = {
      transactionId
    };

    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("No token found. Please login.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/api/admin/approve-transaction",
        approvePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      toast.success("Transaction approved");
      console.log("Transaction approved", response.data);
      setTransaction(prev =>
        prev.map(tx =>
          tx._id === transactionId ? { ...tx, status: "completed" } : tx
        )
      );
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error("Error approving Invoice:", error.response.data);
      } else {
        console.error("Error approving invoice:", error);
        toast.error("Error approving invoice");
      }
    }
  }

  const declineTransaction = async (transactionId: string) => {
    const approvePayload = {
      transactionId
    };

    const token = localStorage.getItem("adminToken");

    if (!token) {
      toast.error("No token found. Please login.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/api/admin/decline-transaction",
        approvePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      toast.success("Transaction declined", response.data);
      setTransaction(prev =>
        prev.map(tx =>
          tx._id === transactionId ? { ...tx, status: "declined" } : tx
        )
      );
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error("Error declining Invoice:", error.response.data);
      } else {
        console.error("Error declining invoice:", error);
      }
    }
  }

  const getVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "declined":
        return "destructive";
      default:
        return "outline";
    }
  };

  if (loading) {
    return (
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
            <CardDescription>View and manage payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
            <CardDescription>View and manage payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-red-600 font-bold">⚠️{error}</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>View and manage payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Transaction ID</TableHead>
                <TableHead className="text-center">Customer ID</TableHead>
                <TableHead className="text-center hidden md:table-cell">Description</TableHead>
                <TableHead className="text-center hidden md:table-cell">Date</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            {transaction.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No transactions found.</p>
            ) : (
              <TableBody>
                {currentTransactions.map((tx) => (
                  <TableRow key={tx._id}>
                    <TableCell className="font-medium">{tx.transferReference}</TableCell>
                    <TableCell>{tx._id}</TableCell>
                    <TableCell className="text-left hidden md:table-cell">{tx.description}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {tx.transactionDate ? new Date(tx.transactionDate).toLocaleDateString() : "N/A"}
                    </TableCell>
                    <TableCell className="text-center">
                      ₦{new Intl.NumberFormat().format(tx.totalPrice)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getVariant(tx.status)}>{tx.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => approveTransaction(tx._id)}>Accept</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => declineTransaction(tx._id)}>Decline</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button onClick={handlePrevious} variant="outline" size="sm" disabled={currentPage === 1}>
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button onClick={handleNext} variant="outline" size="sm" disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
