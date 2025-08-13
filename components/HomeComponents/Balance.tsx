"use client";

import { Landmark } from "lucide-react";

export default function Balance() {
  return (
    <div className="flex items-center gap-2 justify-center text-green-400 bg-blue-900 p-2 border border-blue-600 rounded">
      <Landmark className="size-5" />
      <span className="font-medium text-sm">R$:12,000.00</span>
    </div>
  );
}
