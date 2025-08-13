"use client";

import { NuqsAdapter } from "nuqs/adapters/next";
import { Toaster } from "./ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      {children}
      <Toaster richColors />
    </NuqsAdapter>
  );
}
