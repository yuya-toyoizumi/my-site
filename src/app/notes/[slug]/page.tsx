import { allNotes } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getNoteFromParams(params: Props["params"]) {
  const { slug } = await params;
  const note = allNotes.find((note) => note.slug === slug);

  return note;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = await getNoteFromParams(params);

  if (!note) return {};

  return {
    title: note.title,
  };
}

export async function generateStaticParams() {
  return allNotes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function Note({ params }: Props) {
  const note = await getNoteFromParams(params);

  if (!note) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <header>
        <h1>{note.title}</h1>
        <p>{format(parseISO(note.date), "MMMM dd, yyyy")}</p>
      </header>
      <Mdx code={note.body.code} />
    </article>
  );
}
