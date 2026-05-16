import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kayaan Tharani",
  description: "Computer Engineering @ University of Waterloo. Building systems at the intersection of AI and infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="bg-[#070707] text-[#c4c4c4] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
