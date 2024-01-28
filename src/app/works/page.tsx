import Link from "next/link";
import { allWorks } from "contentlayer/generated";

export default function Works() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Works</h2>
        <div className="flex flex-col gap-2">
          {allWorks.length > 0
            ? allWorks.map((work) => (
                <article key={work.slug}>
                  <Link href={`/works/${work.slug}`}>{work.title}</Link>
                </article>
              ))
            : "No works yet."}
        </div>
      </div>
    </>
  );
}
