import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items | Yuya Toyoizumi",
};

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
