import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, DollarSign, ShoppingCart, Users } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    title: "Total Orders",
    value: "2,345",
    description: "+15% from last month",
    icon: ShoppingCart
  },
  {
    title: "Total Customers",
    value: "1,234",
    description: "+8% from last month",
    icon: Users
  },
  {
    title: "Active Products",
    value: "345",
    description: "+5% from last month",
    icon: BarChart
  }
];

const recentOrders = [
  { id: "ORD001", customer: "John Doe", product: "Gaming Laptop", total: "$1,299.99", status: "Completed" },
  { id: "ORD002", customer: "Jane Smith", product: "Wireless Earbuds", total: "$149.99", status: "Processing" },
  { id: "ORD003", customer: "Bob Johnson", product: "Smart Watch", total: "$299.99", status: "Pending" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest transactions from your store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium">Order ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Customer</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Product</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle">{order.id}</td>
                    <td className="p-4 align-middle">{order.customer}</td>
                    <td className="p-4 align-middle">{order.product}</td>
                    <td className="p-4 align-middle">{order.total}</td>
                    <td className="p-4 align-middle">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        order.status === "Completed" ? "bg-green-100 text-green-800" :
                        order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      )}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}