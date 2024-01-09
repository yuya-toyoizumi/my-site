import Link from "next/link";
import { allItems } from "contentlayer/generated";

export default function Uses() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Items</h2>
        <div className="flex flex-col gap-2">
          {allItems.length > 0
            ? allItems.map((item) => (
                <article key={item.slug}>
                  <Link href={`/items/${item.slug}`}>{item.title}</Link>
                </article>
              ))
            : "No items yet."}
        </div>
      </div>
    </>
  );
}
