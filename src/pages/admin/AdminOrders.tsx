import axios from "axios"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, } from "lucide-react"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface GiftItem {
  giftId: string;
  giftName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  _id: string;
}

interface Orders {
  _id: string;
  userId: string;
  description: string;
  totalPrice: number;
  createdAt?: string;
  status: string;
  items: GiftItem[];
  giftName: string;
}

export default function OrdersTab() {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orders.length / itemsPerPage)

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const authToken = localStorage.getItem("adminToken");

        if (!authToken) {
          setError('Authentication requires');
          return;
        }

        const response = await fetch('api/api/admin/orders', {
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
          setOrders(data.data)
        } else {
          setError(data.message || 'Failed to fetch orders')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching Orders');
        console.error('Error fetching Orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  const updateOrder = async (orderId: string, status: string) => {
    const updatePayload = {
      orderId,
      status,
    };

    const token = localStorage.getItem("authToken");

    if (!token) {
      console.error("No token found. Please login.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/api/admin/update-order-status",
        updatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Order status updated approved:", response.data);
      setOrders(prev =>
        prev.map(order =>
          order._id === orderId ? { ...order, status } : order
        )
      );

    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error approving Invoice:", error.response.data);
      } else {
        console.error("Error approving invoice:", error);
      }
    }
  }



  const getVariant = (status: string) => {
    switch (status) {
      case "pending":
        return "outline";
      case "processing":
        return "primary";
      case "delivered":
        return "default";
      case "shipped":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "primary";
    }
  };

  if (loading) {
    return (
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
            <CardDescription>View and manage orders</CardDescription>
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
            <CardTitle>All Orders</CardTitle>
            <CardDescription>View and manage orders</CardDescription>
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
          <CardTitle>All Orders</CardTitle>
          <CardDescription>Manage and track all customer orders</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Order ID</TableHead>
                <TableHead className="text-center">Customer ID </TableHead>
                <TableHead className="text-center hidden md:table-cell">Products</TableHead>
                <TableHead className="text-center hidden md:table-cell">Created At</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            {orders.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No transactions found.</p>
            ) : (
              <TableBody>
                {currentOrders.map((order) => (
                  <TableRow>
                    <TableCell className="font-medium">{order._id}</TableCell>
                    <TableCell>{order.userId}</TableCell>
                    <TableCell className="text-center hidden md:table-cell">{order.items[0].giftName} </TableCell>
                    <TableCell className="text-center hidden md:table-cell">
                      {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}
                    </TableCell>
                    <TableCell className="text-center">#{order.totalPrice}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getVariant(order.status)}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateOrder(order._id, "processing")}>processing</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrder(order._id, "shipped")}>shipped</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrder(order._id, "delivered")}>delivered</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrder(order._id, "cancelled")}>cancelled</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button onClick={handlePrevious} variant="outline" size="sm">
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button onClick={handleNext} variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
