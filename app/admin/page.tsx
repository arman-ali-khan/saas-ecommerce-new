import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Store, Globe } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    description: "+20.1% from last month",
    icon: Users
  },
  {
    title: "Total Sites",
    value: "345",
    description: "+15% from last month",
    icon: Store
  },
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+8% from last month",
    icon: DollarSign
  },
  {
    title: "Active Domains",
    value: "123",
    description: "+5% from last month",
    icon: Globe
  }
];

export default function AdminDashboard() {
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
    </div>
  );
}