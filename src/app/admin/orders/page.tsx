import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { Search } from "lucide-react"
  
  const orders = [
    { id: "ORD001", name: "John Doe", email: "john@example.com", ticket: "All-Access Pass", quantity: 2, amount: 15000, status: "Paid" },
    { id: "ORD002", name: "Jane Smith", email: "jane@example.com", ticket: "Party Pass", quantity: 1, amount: 5000, status: "Paid" },
    { id: "ORD003", name: "Bob Johnson", email: "bob@example.com", ticket: "Sports Pass", quantity: 4, amount: 12000, status: "Pending" },
    { id: "ORD004", name: "Alice Williams", email: "alice@example.com", ticket: "All-Access Pass", quantity: 1, amount: 7500, status: "Failed" },
  ];
  
  export default function OrdersPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold font-headline">Orders</h1>
        
        <div className="flex items-center gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, email, or order ID..." className="pl-10" />
            </div>
            <Button>Export CSV</Button>
        </div>
        
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Ticket</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.ticket}</TableCell>
                  <TableCell className="text-center">{order.quantity}</TableCell>
                  <TableCell>₦{order.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={
                        order.status === "Paid" ? "default" : order.status === "Pending" ? "secondary" : "destructive"
                    }>
                        {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
  