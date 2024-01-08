import Link from "next/link";
import { allNotes } from "contentlayer/generated";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {allNotes.map((note) => (
          <article key={note.slug}>
            <Link href={`/notes/${note.slug}`}>{note.title}</Link>
          </article>
        ))}
      </div>
    </>
  );
}
