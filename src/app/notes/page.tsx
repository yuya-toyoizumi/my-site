import Link from "next/link";
import { allNotes } from "contentlayer/generated";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Notes</h2>
        <div>
          {allNotes.map((note) => (
            <article key={note.slug}>
              <Link href={`/notes/${note.slug}`}>{note.title}</Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
