import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Globe, Plus } from "lucide-react";

const domains = [
  { id: 1, domain: "fashion-store.com", owner: "John Doe", site: "Fashion Store", status: "Active", ssl: true },
  { id: 2, domain: "tech-shop.com", owner: "Jane Smith", site: "Tech Shop", status: "Pending", ssl: false },
  { id: 3, domain: "food-market.com", owner: "Bob Johnson", site: "Food Market", status: "Failed", ssl: false },
];

export default function DomainsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Domains</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Domain
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Domain Management</CardTitle>
          <div className="flex items-center gap-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search domains..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Site</TableHead>
                <TableHead>SSL</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.map((domain) => (
                <TableRow key={domain.id}>
                  <TableCell className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {domain.domain}
                  </TableCell>
                  <TableCell>{domain.owner}</TableCell>
                  <TableCell>{domain.site}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      domain.ssl ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {domain.ssl ? "Enabled" : "Disabled"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      domain.status === "Active" ? "bg-green-100 text-green-800" :
                      domain.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {domain.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Verify</Button>
                    <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}