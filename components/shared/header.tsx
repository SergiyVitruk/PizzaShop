import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4 cursor-pointer">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">PizzaShop</h1>
            <p className="text-sm text-gray-400 leading-3">
              there is nowhere tastier
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            className="flex items-center gap-3 cursor-pointer"
          >
            <User size={16} />
            Enter
          </Button>

          <div>
            <Button className="group relative cursor-pointer">
              <b>10$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
