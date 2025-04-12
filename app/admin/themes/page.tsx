"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";

const themes = [
  {
    id: 1,
    name: "Modern Store",
    description: "A modern and clean store theme",
    preview: "https://placehold.co/600x400",
    active: true,
  },
  {
    id: 2,
    name: "Classic Shop",
    description: "Traditional shop layout",
    preview: "https://placehold.co/600x400",
    active: false,
  },
  // Add more themes...
];

export default function ThemesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Themes</h1>
        <Button>Add New Theme</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{theme.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {theme.description}
                  </p>
                </div>
                <Switch checked={theme.active} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={theme.preview}
                  alt={theme.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}