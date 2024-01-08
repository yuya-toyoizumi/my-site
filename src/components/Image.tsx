import NextImage from "next/image";
import { ImageProps } from "next/image";

export const Image = (props: ImageProps) => {
  return <NextImage {...props} />;
};
