import React from "react";
import { getHeroContent } from "../../../../content/queries";
import styles from "./Hero.module.css";
import { CTA } from "../CTA";

type HeroProps = {
  preTitle?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
};

export const Hero = async ({
  title: defaultTitle = "The best meat in the market",
  subTitle:
    defaultSubTitle = "Watch out our flavorful meat and order yours today to get up to 35% discount on all new offers",
  preTitle: defaultPreTitle = "",
  cta: defaultCta = { text: "contactanos", href: "www.fiambres.com" },
}: HeroProps) => {
  const data = await getHeroContent();
  const content = data.heroCollection.items[0];

  // Use content from Contentful if available, otherwise use default props
  // const preTitle = content?.preTitle || defaultPreTitle;
  // const title = content?.title || defaultTitle;
  const title = defaultTitle;
  // const subTitle = content?.subTitle || defaultSubTitle;
  const subTitle = defaultSubTitle;
  // const description = content?.subTitle || defaultSubTitle;
  const ctaFromContent = content?.callToActionCollection?.items[0];
  const cta = {
    text: ctaFromContent?.ctaText || defaultCta.text,
    href: ctaFromContent?.ctaRedirectionValue || defaultCta.href,
  };

  return (
    <section className={styles.heroSection}>
      {/* {preTitle && <h3 className="hero__pre-title">{preTitle}</h3>} */}
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroDesc}>{subTitle}</p>
      <CTA text="contactanos" href="/contacto" />
    </section>
  );
};
