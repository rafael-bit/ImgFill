import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import SideBar from "./components/Sidebar";
import MobileBar from "./components/MobileBar";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ImgFill",
  description: "Image Generator with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable}`}
        >
          <main className=" flex min-h-screen w-full antialiased">
            <div className="flex-1 overflow-auto lg:max-h-screen">
              <div className="lg:flex max-w-5xl w-full">
                <SideBar />
                <MobileBar />
                <div className="md:ml-80">
                  {children}
                  <Toaster />
                </div>
              </div>
            </div>
          </main> 
        </body>
      </html>
    </ClerkProvider>
  );
}
