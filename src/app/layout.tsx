import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/pageComp/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Headers from "@/components/pageComp/Headers";
import { JoinUs } from "@/components/pageComp/JoinUs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        <div>
          <Headers />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <div>
          <JoinUs />
        </div>
      </body>
    </html>
  );
}
