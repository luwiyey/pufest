
import type { Metadata } from "next";
import { Inter, Bebas_Neue, Fira_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/common/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-bebas-neue" 
});
const firaMono = Fira_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-fira-mono"
});


export const metadata: Metadata = {
  title: "Panpacific Festival Website",
  description: "Your one-stop portal for the Panpacific Festival extravaganza!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { [key: string]: string | string[] | undefined };
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased page-background",
          inter.variable, bebasNeue.variable, firaMono.variable
        )}
      >
        <Header />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
