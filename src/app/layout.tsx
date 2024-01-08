import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuya Toyoizumi",
  description: "Personal website of Yuya Toyoizumi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={courierPrime.className}>
        <Header />
        <div className="container max-w-3xl mx-auto px-4 py-8 sm:py-12 min-h-screen-without-header-and-footer">
          {children}
        </div>
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-NX9DSX7" />
    </html>
  );
}
