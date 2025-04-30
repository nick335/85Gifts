import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsersTab() {
  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage user accounts and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Avatar</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="hidden md:table-cell">Joined</TableHead>
                <TableHead className="hidden md:table-cell">Orders</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>EJ</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">Emily Johnson</TableCell>
                <TableCell>emily.johnson@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Jan 12, 2023</TableCell>
                <TableCell className="hidden md:table-cell">8</TableCell>
                <TableCell className="text-right">
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">Michael Chen</TableCell>
                <TableCell>michael.chen@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Feb 23, 2023</TableCell>
                <TableCell className="hidden md:table-cell">5</TableCell>
                <TableCell className="text-right">
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>SW</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">Sarah Williams</TableCell>
                <TableCell>sarah.williams@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Mar 15, 2023</TableCell>
                <TableCell className="hidden md:table-cell">12</TableCell>
                <TableCell className="text-right">
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">David Rodriguez</TableCell>
                <TableCell>david.rodriguez@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Apr 2, 2023</TableCell>
                <TableCell className="hidden md:table-cell">3</TableCell>
                <TableCell className="text-right">
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">Jessica Lee</TableCell>
                <TableCell>jessica.lee@example.com</TableCell>
                <TableCell className="hidden md:table-cell">May 18, 2023</TableCell>
                <TableCell className="hidden md:table-cell">7</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline">Inactive</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">Robert Kim</TableCell>
                <TableCell>robert.kim@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Jun 5, 2023</TableCell>
                <TableCell className="hidden md:table-cell">9</TableCell>
                <TableCell className="text-right">
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">Amanda Garcia</TableCell>
                <TableCell>amanda.garcia@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Jul 22, 2023</TableCell>
                <TableCell className="hidden md:table-cell">4</TableCell>
                <TableCell className="text-right">
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
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
