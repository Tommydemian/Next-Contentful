import React from "react";
import Link from "next/link";

type CTAProps = {
  text: string;
  href: string;
  inProd?: boolean;
};

export const CTA: React.FC<CTAProps> = ({ text, href, inProd }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={inProd ? "main-cta in-prod" : "main-cta"}>{text}</a>
    </Link>
  );
};
