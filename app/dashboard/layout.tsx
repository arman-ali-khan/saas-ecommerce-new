"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  FileText, 
  Settings,
  Menu,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Users", href: "/dashboard/users" },
  { icon: ShoppingBag, label: "Products", href: "/dashboard/products" },
  { icon: FileText, label: "Orders", href: "/dashboard/orders" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

// This would typically come from your database
const mockSites = [
  { id: "site1", name: "My First Store" },
  { id: "site2", name: "Second Store" },
  { id: "site3", name: "Fashion Store" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSite = searchParams.get("site") || "site1";

  const currentSiteData = mockSites.find(site => site.id === currentSite) || mockSites[0];

  const handleSiteChange = (siteId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("site", siteId);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-gray-50/50">
        <div className="p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Store Admin</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                {currentSiteData.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Site</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {mockSites.map((site) => (
                <DropdownMenuItem
                  key={site.id}
                  onClick={() => handleSiteChange(site.id)}
                >
                  {site.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/sites/new" className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Site
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <nav className="flex-1 p-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const href = item.href + "?site=" + currentSite;
            return (
              <Link key={item.href} href={href}>
                <span className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                  pathname === item.href ? "bg-gray-100 text-gray-900" : ""
                )}>
                  <Icon className="h-4 w-4" />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden p-6">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Store Admin</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {currentSiteData.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Site</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {mockSites.map((site) => (
                  <DropdownMenuItem
                    key={site.id}
                    onClick={() => handleSiteChange(site.id)}
                  >
                    {site.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/sites/new" className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Site
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <nav className="flex-1 p-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const href = item.href + "?site=" + currentSite;
              return (
                <Link key={item.href} href={href}>
                  <span className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                    pathname === item.href ? "bg-gray-100 text-gray-900" : ""
                  )}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}