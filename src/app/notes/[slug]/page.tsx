import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allNotes } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: {
    slug: string;
  };
};

async function getNoteFromParams(params: Props["params"]) {
  const slug = params.slug;
  const note = allNotes.find((note) => note.slug === slug);

  if (!note) {
    null;
  }

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
    <article className="prose dark:prose-invert">
      <header>
        <h1>{note.title}</h1>
        <p>{format(parseISO(note.date), "MMMM dd, yyyy")}</p>
      </header>
      <Mdx code={note.body.code} />
    </article>
  );
}
