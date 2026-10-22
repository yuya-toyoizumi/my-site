import { allWorks } from "contentlayer/generated";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getWorkFromParams(params: Props["params"]) {
  const { slug } = await params;
  const work = allWorks.find((work) => work.slug === slug);

  return work;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = await getWorkFromParams(params);

  if (!work) return {};

  return {
    title: work.title,
  };
}

export async function generateStaticParams() {
  return allWorks.map((work) => ({
    slug: work.slug,
  }));
}

export default async function Work({ params }: Props) {
  const work = await getWorkFromParams(params);

  if (!work) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="w-full">
        <Image
          className="border"
          src={work.image}
          width={16}
          height={9}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={work.title}
        />
      </div>
      <header>
        <h1 className="text-lg">{work.title}</h1>
      </header>
      <Mdx code={work.body.code} />
    </article>
  );
}
