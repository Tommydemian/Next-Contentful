import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

type HeaderProps = {
  navLinks: { text: string; href: string }[];
};

export const Header = ({ navLinks }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="https://ik.imagekit.io/2ziqnactl/luviankaLogo.png"
        alt="logo de la marca"
        width={895}
        height={458}
      />
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {navLinks?.map((navLink) => (
            <li key={navLink.text}>
              <a href={navLink.href}>{navLink.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
