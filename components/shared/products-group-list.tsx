"use client";

import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

import { Title } from "./title";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface ProductItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  items: { price: number }[];
}

interface Props {
  title: string;
  items: ProductItem[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = ({
  title,
  items,
  className,
  categoryId,
  listClassName,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    }
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
