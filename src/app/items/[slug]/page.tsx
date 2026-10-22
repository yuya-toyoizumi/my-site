import { allItems } from "contentlayer/generated";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getItemFromParams(params: Props["params"]) {
  const { slug } = await params;
  const item = allItems.find((item) => item.slug === slug);

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
      <div className="w-full">
        <Image
          className="border"
          src={item.image}
          width={16}
          height={9}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={item.title}
        />
      </div>
      <header>
        <h1 className="text-lg">{item.title}</h1>
      </header>
      <Mdx code={item.body.code} />
    </article>
  );
}
