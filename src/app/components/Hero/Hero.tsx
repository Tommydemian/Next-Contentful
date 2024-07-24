import React from "react";
import { getHeroContent } from "../../../../content/queries";
import styles from "./Hero.module.css";
import Image from "next/image";
import { HeroImage } from "./HeroImage";

type HeroProps = {
  preTitle?: string;
  title?: string;
  subTitle?: string;
  cta?: {
    text: string;
    href: string;
  };
};

export const Hero = async ({
  title: defaultTitle = "Luvianka Fiambres",
  subTitle: defaultSubTitle = "",
  preTitle: defaultPreTitle = "",
  cta: defaultCta = { text: "contactanos", href: "www.fiambres.com" },
}: HeroProps) => {
  const data = await getHeroContent();
  const content = data.heroCollection.items[0];

  // Use content from Contentful if available, otherwise use default props
  const preTitle = content?.preTitle || defaultPreTitle;
  const title = content?.title || defaultTitle;
  const subTitle = content?.subTitle || defaultSubTitle;
  const ctaFromContent = content?.callToActionCollection?.items[0];
  const cta = {
    text: ctaFromContent?.ctaText || defaultCta.text,
    href: ctaFromContent?.ctaRedirectionValue || defaultCta.href,
  };

  return (
    <section className={styles.heroSection}>
      <HeroImage className={styles.heroImg} />
      {preTitle && <h3 className="hero__pre-title">{preTitle}</h3>}
      <h1 className="hero__title">{title}</h1>
      {subTitle && <p className="hero__sub-title">{subTitle}</p>}
      <a href={cta.href} className="hero__cta-button">
        {cta.text}
      </a>
    </section>
  );
};
