"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-medium">
      <Button onClick={() => alert("Deja el sexting")}>Click me!</Button>
    </div>
  );
}
