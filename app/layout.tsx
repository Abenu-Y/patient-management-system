import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans }   from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const Font = Plus_Jakarta_Sans({subsets:["latin"], weight:['400','500', '600', '700'], variable:"--font-sans"})

export const metadata: Metadata = {
  title: "careplus",
  description: "a healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ cn('antialiased min-h-screen font-sans bg-dark-300', Font.variable)}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
