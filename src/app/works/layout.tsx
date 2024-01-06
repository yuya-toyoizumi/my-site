import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Yuya Toyoizumi",
  description:
    "Explore this curated showcase of my products, each demonstrating my skills and curiosity.",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
