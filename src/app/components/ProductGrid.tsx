import React from "react";
import Image from "next/image";
import { CTA } from "./CTA";
import { prodImages } from "../../../data";

export const ProductGrid = () => {
  return (
    <div className="landing-product-grid">
      {prodImages.map((item) => {
        return (
          <div key={item}>
            <Image src={item} alt="prod-img" width={2000} height={1000} />
            <CTA text="ver producto" href="/product" inProd />
          </div>
        );
      })}
    </div>
  );
};
