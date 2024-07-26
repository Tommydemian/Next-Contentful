import React from "react";
import Image from "next/image";
import { getHeroImg } from "../../../../content/queries";

type HeroImageProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export const HeroImage = async ({
  width: defaultWidth = 1000,
  height: defaultHeight = 2000,
  alt: defaultAlt = "",
  src: defaultSrc = "",
  className = "",
}: HeroImageProps) => {
  const data = await getHeroImg();
  const content = data.assetCollection.items[0];

  const width = content.width || defaultWidth;
  const height = content.height || defaultHeight;
  const alt = content.title || defaultAlt;
  // const src = content.url || defaultSrc;
  const src = defaultSrc;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
