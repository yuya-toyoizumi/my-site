import { Image } from "@/components/Image";
import { getMDXComponent } from "next-contentlayer/hooks";

type Props = {
  code: string;
};

export function Mdx({ code }: Props) {
  const MDXContent = getMDXComponent(code);

  return <MDXContent components={{ Image }} />;
}
