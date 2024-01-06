import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses | Yuya Toyoizumi",
};

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
