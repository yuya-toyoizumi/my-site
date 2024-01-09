import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allItems } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: {
    slug: string;
  };
};

async function getItemFromParams(params: Props["params"]) {
  console.log(params)
  const slug = params.slug;
  const item = allItems.find((item) => item.slug === slug);

  if (!item) {
    null;
  }

  return item;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getItemFromParams(params);

  if (!item) return {};

  return {
    title: item.title,
  };
}

export async function generateStaticParams() {
  return allItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Item({ params }: Props) {
  const item = await getItemFromParams(params);

  if (!item) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <Mdx code={item.body.code} />
    </article>
  );
}
