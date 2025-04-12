"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

const themes = [
  {
    id: "light",
    name: "Light Theme",
    description: "Clean and bright interface",
    preview: "https://placehold.co/600x400/ffffff/333333?text=Light+Theme",
  },
  {
    id: "dark",
    name: "Dark Theme",
    description: "Modern dark interface",
    preview: "https://placehold.co/600x400/333333/ffffff?text=Dark+Theme",
  },
  {
    id: "modern",
    name: "Modern Theme",
    description: "Contemporary design with accent colors",
    preview: "https://placehold.co/600x400/f0f0f0/333333?text=Modern+Theme",
  },
];

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Store Settings</CardTitle>
            <CardDescription>Manage your store's basic information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name</Label>
              <Input id="storeName" placeholder="Enter store name" />
            </div>
            
            <div className="space-y-4">
              <Label>Store Theme</Label>
              <RadioGroup defaultValue="light" className="grid grid-cols-3 gap-4">
                {themes.map((theme) => (
                  <Label
                    key={theme.id}
                    className="cursor-pointer space-y-2 [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-primary rounded-lg p-4"
                  >
                    <div className="space-y-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg border">
                        <Image
                          src={theme.preview}
                          alt={theme.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={theme.id} id={theme.id} />
                        <div>
                          <p className="font-medium leading-none">{theme.name}</p>
                          <p className="text-sm text-muted-foreground">{theme.description}</p>
                        </div>
                      </div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customDomain">Custom Domain</Label>
              <Input id="customDomain" placeholder="yourdomain.com" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics Settings</CardTitle>
            <CardDescription>Configure your analytics tracking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="analyticsKey">Analytics API Key</Label>
              <Input id="analyticsKey" type="password" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Update your account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Notifications</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select notification preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All notifications</SelectItem>
                  <SelectItem value="important">Important only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}