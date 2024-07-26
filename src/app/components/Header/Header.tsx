import React from "react";
import Image from "next/image";
import { getNavLinks } from "../../../../content/queries";
import { CTA } from "../CTA";

type HeaderProps = {
  navLinks: { ctaText: string; ctaRedirectionValue: string }[];
};

export const Header = async ({ navLinks }: HeaderProps) => {
  const data = await getNavLinks();
  // fallback to navigation links from data
  const links =
    data?.navigationCollection.items[0].linksCollection.items || navLinks;

  return (
    <header>
      <Image
        className="header-logo"
        src="https://ik.imagekit.io/2ziqnactl/luviankaLogo.png"
        alt="logo de la marca"
        width={895}
        height={458}
      />
      <nav className="header-nav">
        <ul className="header-navlist">
          {links?.map((item) => (
            <li key={item.ctaRedirectionValue}>
              <a href={item.ctaRedirectionValue}>{item.ctaText}</a>
            </li>
          ))}
        </ul>
      </nav>
      <CTA text="Contactanos" href="/contactanos" />
    </header>
  );
};
