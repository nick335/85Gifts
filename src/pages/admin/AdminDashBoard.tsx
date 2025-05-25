import { useState } from "react"
import {
  ShoppingCart,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import OrdersTab from "./AdminOrders.tsx"
import UsersTab from "./Users"
import TransactionsTab from "./Transactions"
import Areachart from "./AreaChart"


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders") // Add this line

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <main className="flex-1">

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full">
              <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">Overview of performance and recent activity.</p>
          </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +20.1% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +12.2% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +3.1% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <div className="flex items-center text-sm text-red-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  -1.5% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sales Chart */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>View your store sales performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <SalesChart /> */}
                <Areachart/>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Navigation */}
          <div className="mt-6">
            <div className="border-b">
              <div className="flex -mb-px space-x-6">
                <button
                  className={`py-2 border-b-2 font-medium text-sm px-1 ${
                    activeTab === "orders"
                      ? "border-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  Orders
                </button>
                <button
                  className={`py-2 border-b-2 font-medium text-sm px-1 ${
                    activeTab === "users"
                      ? "border-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("users")}
                >
                  Users
                </button>
                <button
                  className={`py-2 border-b-2 font-medium text-sm px-1 ${
                    activeTab === "transactions"
                      ? "border-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("transactions")}
                >
                  Transactions
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "orders" && <OrdersTab />}
          {activeTab === "users" && <UsersTab />}
          {activeTab === "transactions" && <TransactionsTab />}
        </div>
      </main>
    </div>
  )
}


