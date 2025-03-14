"use client";

import { useState } from "react";

import { cn } from "~/lib/utils";
import { TitledWrapper } from "~/components/wrappers";
import { Input } from "~/components/ui/input";

export const Colors = () => {
  const colors = [
    // Basic Theme Colors
    { name: "primary", color: "bg-primary" },
    { name: "primary-foreground", color: "bg-primary-foreground" },
    { name: "background", color: "bg-background" },
    { name: "foreground", color: "bg-foreground" },
    { name: "card", color: "bg-card" },
    { name: "card-foreground", color: "bg-card-foreground" },
    { name: "secondary", color: "bg-secondary" },
    { name: "secondary-foreground", color: "bg-secondary-foreground" },
    { name: "muted", color: "bg-muted" },
    { name: "muted-foreground", color: "bg-muted-foreground" },
    { name: "accent", color: "bg-accent" },
    { name: "accent-foreground", color: "bg-accent-foreground" },
    { name: "destructive", color: "bg-destructive" },
    { name: "destructive-foreground", color: "bg-destructive-foreground" },
    { name: "popover", color: "bg-popover" },
    { name: "popover-foreground", color: "bg-popover-foreground" },
    { name: "border", color: "bg-border" },
    { name: "input", color: "bg-input" },
    { name: "ring", color: "bg-ring" },
    { name: "chart-1", color: "bg-chart-1" },
    { name: "chart-2", color: "bg-chart-2" },
    { name: "chart-3", color: "bg-chart-3" },
    { name: "chart-4", color: "bg-chart-4" },
    { name: "chart-5", color: "bg-chart-5" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <TitledWrapper
      title="Colors"
      className="py-content-sm"
      para="Explore various colors to enhance your design. Use the input field to search for specific colors."
    >
      <Input
        type="text"
        placeholder="Search colors..."
        className="mb-4 w-full rounded border p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {filteredColors.map((color) => (
          <div key={color.name} className="overflow-hidden rounded-2xl border">
            <div className={cn("h-24 w-full border-b", color.color)} />
            <div className="bg-card-background-gradient flex h-auto min-h-14 w-full text-center">
              <p className="px-4 py-1">{color.name}</p>
            </div>
          </div>
        ))}
      </div>
    </TitledWrapper>
  );
};
