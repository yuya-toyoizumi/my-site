import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
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
    <html lang="en">
      <body className={courierPrime.className}>
        <Header />
        <div className='container max-w-3xl mx-auto px-4'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
