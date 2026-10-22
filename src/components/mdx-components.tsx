import { getMDXComponent } from "next-contentlayer2/hooks";
import { Image } from "@/components/Image";

type Props = {
  code: string;
};

export function Mdx({ code }: Props) {
  const MDXContent = getMDXComponent(code);

  return <MDXContent components={{ Image }} />;
}
