// import { useState } from "react"
// import {
//   BarChart3,
//   Package,
//   ShoppingCart,
//   Users,
//   CreditCard,
//   DollarSign,
//   Activity,
//   ArrowUpRight,
//   ArrowDownRight,
//   Search,
//   Bell,
//   Menu,
//   X,
// } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import OrdersTab from "./orders-tab"
// // import UsersTab from "./users-tab"
// // import TransactionsTab from "./transactions-tab"
// // import { useMobile } from "@/hooks/use-mobile/"
// // import SalesChart from "./sales-chart"

// export default function Dashboard() {
//   const isMobile = useMobile()
//   const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
//   const [activeTab, setActiveTab] = useState("orders") // Add this line

//   return (
//     <div className="flex min-h-screen bg-background">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed inset-y-0 z-50 flex w-64 flex-col border-r bg-card transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
//       >
//         <div className="flex h-16 items-center border-b px-6">
//           <h2 className="text-lg font-semibold">ShopAdmin</h2>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute right-4 top-4 md:hidden"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X className="h-5 w-5" />
//             <span className="sr-only">Close sidebar</span>
//           </Button>
//         </div>
//         <nav className="flex-1 overflow-auto py-4">
//           <div className="px-3 py-2">
//             <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">Overview</h3>
//             <div className="space-y-1">
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <a href="#" className="flex items-center gap-3">
//                   <BarChart3 className="h-4 w-4" />
//                   Dashboard
//                 </a>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <a href="#" className="flex items-center gap-3">
//                   <Activity className="h-4 w-4" />
//                   Analytics
//                 </a>
//               </Button>
//             </div>
//           </div>
//           <div className="px-3 py-2">
//             <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">Management</h3>
//             <div className="space-y-1">
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <a href="#" className="flex items-center gap-3">
//                   <ShoppingCart className="h-4 w-4" />
//                   Orders
//                   <Badge className="ml-auto">24</Badge>
//                 </a>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <a href="#" className="flex items-center gap-3">
//                   <Package className="h-4 w-4" />
//                   Products
//                 </a>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <a href="#" className="flex items-center gap-3">
//                   <Users className="h-4 w-4" />
//                   Users
//                 </a>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <a href="#" className="flex items-center gap-3">
//                   <CreditCard className="h-4 w-4" />
//                   Transactions
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </nav>
//         <div className="border-t p-4">
//           <div className="flex items-center gap-3">
//             <Avatar>
//               <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <span className="text-sm font-medium">John Doe</span>
//               <span className="text-xs text-muted-foreground">Admin</span>
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-4 w-4"
//                   >
//                     <circle cx="12" cy="12" r="1" />
//                     <circle cx="12" cy="5" r="1" />
//                     <circle cx="12" cy="19" r="1" />
//                   </svg>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem>Support</DropdownMenuItem>
//                 <DropdownMenuItem>Logout</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1">
//         {/* Header */}
//         <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
//           <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
//             <Menu className="h-5 w-5" />
//             <span className="sr-only">Toggle menu</span>
//           </Button>
//           <div className="w-full flex-1 md:w-auto md:flex-none">
//             <form>
//               <div className="relative">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search..."
//                   className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button variant="outline" size="icon">
//               <Bell className="h-4 w-4" />
//               <span className="sr-only">Notifications</span>
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="icon" className="rounded-full">
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Logout</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-6">
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
//               <p className="text-muted-foreground">Overview of your store performance and recent activity.</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <Select defaultValue="7days">
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Select period" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="today">Today</SelectItem>
//                   <SelectItem value="yesterday">Yesterday</SelectItem>
//                   <SelectItem value="7days">Last 7 days</SelectItem>
//                   <SelectItem value="30days">Last 30 days</SelectItem>
//                   <SelectItem value="90days">Last 90 days</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button>Download Report</Button>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//                 <DollarSign className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$45,231.89</div>
//                 <div className="flex items-center text-sm text-green-500">
//                   <ArrowUpRight className="mr-1 h-4 w-4" />
//                   +20.1% from last month
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">Orders</CardTitle>
//                 <ShoppingCart className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+2,350</div>
//                 <div className="flex items-center text-sm text-green-500">
//                   <ArrowUpRight className="mr-1 h-4 w-4" />
//                   +12.2% from last month
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">Customers</CardTitle>
//                 <Users className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+12,234</div>
//                 <div className="flex items-center text-sm text-green-500">
//                   <ArrowUpRight className="mr-1 h-4 w-4" />
//                   +3.1% from last month
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
//                 <Activity className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">3.24%</div>
//                 <div className="flex items-center text-sm text-red-500">
//                   <ArrowDownRight className="mr-1 h-4 w-4" />
//                   -1.5% from last month
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sales Chart */}
//           <div className="mt-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Sales Overview</CardTitle>
//                 <CardDescription>View your store sales performance over time</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <SalesChart />
//               </CardContent>
//             </Card>
//           </div>

//           {/* Tabs Navigation */}
//           <div className="mt-6">
//             <div className="border-b">
//               <div className="flex -mb-px space-x-6">
//                 <button
//                   className={`py-2 border-b-2 font-medium text-sm px-1 ${
//                     activeTab === "orders"
//                       ? "border-primary"
//                       : "border-transparent text-muted-foreground hover:text-foreground"
//                   }`}
//                   onClick={() => setActiveTab("orders")}
//                 >
//                   Orders
//                 </button>
//                 <button
//                   className={`py-2 border-b-2 font-medium text-sm px-1 ${
//                     activeTab === "users"
//                       ? "border-primary"
//                       : "border-transparent text-muted-foreground hover:text-foreground"
//                   }`}
//                   onClick={() => setActiveTab("users")}
//                 >
//                   Users
//                 </button>
//                 <button
//                   className={`py-2 border-b-2 font-medium text-sm px-1 ${
//                     activeTab === "transactions"
//                       ? "border-primary"
//                       : "border-transparent text-muted-foreground hover:text-foreground"
//                   }`}
//                   onClick={() => setActiveTab("transactions")}
//                 >
//                   Transactions
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Tab Content */}
//           {activeTab === "orders" && <OrdersTab />}
//           {activeTab === "users" && <UsersTab />}
//           {activeTab === "transactions" && <TransactionsTab />}
//         </div>
//       </main>
//     </div>
//   )
// }
