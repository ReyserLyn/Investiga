"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getHerramientasIA, getTiposIA } from "@/lib/data/herramientasIA";
import Autoplay from "embla-carousel-autoplay";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ToolsIA() {
  const aiTools = getHerramientasIA();
  const aiTypes = getTiposIA();

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 flex flex-col gap-3"
    >
      <h2 className="text-3xl text-center lg:text-4xl font-semibold md:text-center">
        Las herramientas más{" "}
        <span className="bg-gradient-to-r from-[#ffbf5e] to-[#fc9d4c] text-transparent bg-clip-text font-bold">
          avanzadas de IA
        </span>
      </h2>
      <p className=" text-center md:w-3/4 mx-auto text-lg text-muted-foreground">
        Aprovecha al máximo cada herramienta de IA para transformar tu
        investigación científica.{" "}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 my-3 ">
        {aiTypes.map((aiType: string) => (
          <div key={aiType}>
            <Link href="/herramientas">
              <Badge className="bg-primary-black hover:bg-[#0D1522] py-1 px-4 hover:cursor-pointer">
                {aiType}
              </Badge>
            </Link>
          </div>
        ))}
      </div>

      <div className="mx-auto container px-3 ">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2250,
            }),
          ]}
        >
          <CarouselContent>
            {aiTools.map(({ title, description, image }) => (
              <CarouselItem
                key={title}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col items-center px-4 py-5 sm:p-6 gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-gray-900 text-center">
                      {title}
                    </p>
                    <p className="text-sm text-gray-600 px-2 ">{description}</p>
                  </div>
                  <div className="flex items-center justify-center h-56 my-auto">
                    <Image
                      className="rounded-xl "
                      height={200}
                      width={200}
                      alt={title}
                      src={image}
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center my-3">
        <Button
          variant="ghost"
          className="shadow-md transition-transform duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:font-medium hover:scale-105 hover:shadow-lg"
          asChild
        >
          <Link href="/herramientas">
            <GalleryVerticalEnd size={18} className="mr-2" />
            Explorar todos
          </Link>
        </Button>
      </div>
    </section>
  );
}
