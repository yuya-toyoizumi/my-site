import Link from "next/link";
import { allNotes } from "contentlayer/generated";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Notes</h2>
        <div className="flex flex-col gap-2">
          {allNotes.length > 0
            ? allNotes.map((note) => (
                <article key={note.slug}>
                  <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                </article>
              ))
            : "No notes yet."}
        </div>
      </div>
    </>
  );
}
