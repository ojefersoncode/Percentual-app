"use client";

import { Card } from "../ui/card";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-transparent py-5">
      <Card className="bg-transparent rounded-md border-none p-4">
        <div className="flex items-center w-full justify-center gap-4">
          <h1 className="text-white text-2xl max-md:text-lg font-black">
            Ganhe dinheiro abrindo caixas supresas
          </h1>
          <Image
            className="max-md:size-6"
            src="/Boxes/Banner.png"
            width={40}
            height={40}
            alt="Banner"
          />
        </div>
      </Card>
    </div>
  );
}
