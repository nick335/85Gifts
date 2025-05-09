import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, } from "lucide-react"


export default function TransactionsTab() {
 
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
                <TableHead>Transaction ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Payment Method</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
           <TableBody>
          {[
                {
                  id: "TRX-9876",
                  order: "#ORD-7652",
                  name: "Emily Johnson",
                  date: "Apr 23, 2023",
                  amount: "$89.99",
                  method: "Credit Card",
                  status: "Completed",
                  variant: "default",
                },
                {
                  id: "TRX-9875",
                  order: "#ORD-7651",
                  name: "Michael Chen",
                  date: "Apr 22, 2023",
                  amount: "$129.50",
                  method: "PayPal",
                  status: "Pending",
                  variant: "outline",
                },
                {
                  id: "TRX-9874",
                  order: "#ORD-7650",
                  name: "Sarah Williams",
                  date: "Apr 22, 2023",
                  amount: "$39.99",
                  method: "Credit Card",
                  status: "Completed",
                  variant: "default",
                },
                {
                  id: "TRX-9873",
                  order: "#ORD-7649",
                  name: "David Rodriguez",
                  date: "Apr 21, 2023",
                  amount: "$149.99",
                  method: "Credit Card",
                  status: "Refunded",
                  variant: "destructive",
                },
                {
                  id: "TRX-9872",
                  order: "#ORD-7648",
                  name: "Jessica Lee",
                  date: "Apr 21, 2023",
                  amount: "$79.95",
                  method: "Apple Pay",
                  status: "Completed",
                  variant: "default",
                },
                {
                  id: "TRX-9871",
                  order: "#ORD-7647",
                  name: "Robert Kim",
                  date: "Apr 20, 2023",
                  amount: "$215.50",
                  method: "Credit Card",
                  status: "Completed",
                  variant: "default",
                },
                {
                  id: "TRX-9870",
                  order: "#ORD-7646",
                  name: "Amanda Garcia",
                  date: "Apr 20, 2023",
                  amount: "$59.99",
                  method: "PayPal",
                  status: "Pending",
                  variant: "outline",
                },
                ].map((tx) => (
                <TableRow key={tx.id}>
                 <TableCell className="font-medium">{tx.id}</TableCell>
                 <TableCell>{tx.order}</TableCell>
                 <TableCell>{tx.name}</TableCell>
                 <TableCell className="hidden md:table-cell">{tx.date}</TableCell>
                 <TableCell className="text-right">{tx.amount}</TableCell>
                 <TableCell className="text-right">{tx.method}</TableCell>
                 <TableCell className="text-right">
                 <Badge variant="outline">{tx.status}</Badge>
                 </TableCell>
                  <TableCell className="text-right">
                  <DropdownMenu>
                   <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                     <MoreHorizontal className="h-4 w-4" />
                       </Button>
                        </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                          <DropdownMenuItem>Accept</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                           </DropdownMenu>
                  </TableCell>
                </TableRow>
                ))}
                </TableBody>
                </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
