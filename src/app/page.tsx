// import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./components/Hero/Hero";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ProductGrid } from "@/app/components/ProductGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <SectionHeading preTitle="Nuestro Menu" title="Watch our exciting menu" />
      <ProductGrid />
    </main>
  );
}
