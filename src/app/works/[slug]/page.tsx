import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allWorks } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";

type Props = {
  params: {
    slug: string;
  };
};

async function getWorkFromParams(params: Props["params"]) {
  const slug = params.slug;
  const work = allWorks.find((work) => work.slug === slug);

  if (!work) {
    null;
  }

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
          layout="responsive"
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
