"use client";

import { ThemeProvider } from "./ThemeProvider";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
