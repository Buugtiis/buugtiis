import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUUGTIIS — Your Digital Library",
  description: "BUUGTIIS waa maktabad dijitaal ah oo lagu akhriyo laguna dhageysto buugaag."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="so"><body>{children}</body></html>;
}