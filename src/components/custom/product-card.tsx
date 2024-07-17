"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/aceternity/background-gradient";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    primaryImagePath?: string | null;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <BackgroundGradient className="rounded-md w-[500px] h-[500px] p-6">
        <div className="relative h-full w-full mx-auto rounded-md shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between bg-black">
          <Image
            src={product.primaryImagePath ?? 'https://via.placeholder.com/600'}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="absolute top-0 left-0 z-0 transition duration-300 group-hover/card:opacity-60"
          />
          <div className="relative z-10 p-6 flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-3xl header-gradient relative z-10 flex-grow">
              {product.name}
            </h1>
            <div className="flex-shrink-0 ml-auto pl-16">
              <h1 className="font-bold text-xl h2-gradient relative z-10 my-4">
                {product.description}
              </h1>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default ProductCard;
