import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
              <TableRow>
                <TableCell className="font-medium">TRX-9876</TableCell>
                <TableCell>#ORD-7652</TableCell>
                <TableCell>Emily Johnson</TableCell>
                <TableCell className="hidden md:table-cell">Apr 23, 2023</TableCell>
                <TableCell className="text-right">$89.99</TableCell>
                <TableCell className="text-right">Credit Card</TableCell>
                <TableCell className="text-right">
                  <Badge>Completed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TRX-9875</TableCell>
                <TableCell>#ORD-7651</TableCell>
                <TableCell>Michael Chen</TableCell>
                <TableCell className="hidden md:table-cell">Apr 22, 2023</TableCell>
                <TableCell className="text-right">$129.50</TableCell>
                <TableCell className="text-right">PayPal</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TRX-9874</TableCell>
                <TableCell>#ORD-7650</TableCell>
                <TableCell>Sarah Williams</TableCell>
                <TableCell className="hidden md:table-cell">Apr 22, 2023</TableCell>
                <TableCell className="text-right">$39.99</TableCell>
                <TableCell className="text-right">Credit Card</TableCell>
                <TableCell className="text-right">
                  <Badge>Completed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TRX-9873</TableCell>
                <TableCell>#ORD-7649</TableCell>
                <TableCell>David Rodriguez</TableCell>
                <TableCell className="hidden md:table-cell">Apr 21, 2023</TableCell>
                <TableCell className="text-right">$149.99</TableCell>
                <TableCell className="text-right">Credit Card</TableCell>
                <TableCell className="text-right">
                  <Badge variant="destructive">Refunded</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TRX-9872</TableCell>
                <TableCell>#ORD-7648</TableCell>
                <TableCell>Jessica Lee</TableCell>
                <TableCell className="hidden md:table-cell">Apr 21, 2023</TableCell>
                <TableCell className="text-right">$79.95</TableCell>
                <TableCell className="text-right">Apple Pay</TableCell>
                <TableCell className="text-right">
                  <Badge>Completed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TRX-9871</TableCell>
                <TableCell>#ORD-7647</TableCell>
                <TableCell>Robert Kim</TableCell>
                <TableCell className="hidden md:table-cell">Apr 20, 2023</TableCell>
                <TableCell className="text-right">$215.50</TableCell>
                <TableCell className="text-right">Credit Card</TableCell>
                <TableCell className="text-right">
                  <Badge>Completed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TRX-9870</TableCell>
                <TableCell>#ORD-7646</TableCell>
                <TableCell>Amanda Garcia</TableCell>
                <TableCell className="hidden md:table-cell">Apr 20, 2023</TableCell>
                <TableCell className="text-right">$59.99</TableCell>
                <TableCell className="text-right">PayPal</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
              </TableRow>
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
