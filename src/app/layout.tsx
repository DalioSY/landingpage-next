import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "./_components/theme.provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: "Landingpage-Next.js",
  description: "",
  keywords: ["Next.js", "Typescript", "Javascript", "React.js", "Tailwind_css", "Full-stack"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
