"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-medium flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-6xl">Hello World!</h1>
        <Button onClick={() => alert("Deja el sexting")}>Cliqueame bro</Button>
    </div>
  );
}
