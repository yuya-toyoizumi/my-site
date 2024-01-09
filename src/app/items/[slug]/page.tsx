import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allItems } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: {
    slug: string;
  };
};

async function getItemFromParams(params: Props["params"]) {
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
      <div className="w-full">
        <Image
          className="border"
          src="/items/hhkb-professional-hybrid-type-s.png"
          width={16}
          height={9}
          layout="responsive"
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
