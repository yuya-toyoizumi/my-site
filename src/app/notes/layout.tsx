import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Yuya Toyoizumi",
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
