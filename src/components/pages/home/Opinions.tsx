"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { UserRound } from "lucide-react";

type Opinion = {
  text: string;
  user: string;
  label: string;
};

const opinions: Opinion[] = [
  {
    text: "“La integración de herramientas de IA en mi investigación ha sido un cambio total. Ahora puedo encontrar y organizar información de manera mucho más eficiente.”",
    user: "María Fernández",
    label: "Estudiante de Sistemas, Universidad Nacional de San Agustín",
  },
  {
    text: "“Los cursos ofrecidos me han ayudado a mejorar significativamente mis habilidades en redacción científica. La plataforma es una excelente adición a mi toolkit.”",
    user: "Carlos Mendoza",
    label: "Estudiante de Economía, Universidad Nacional de San Agustín",
  },
  {
    text: "“Gracias a las herramientas de búsqueda y comparación, he acelerado mis procesos de investigación y mejorado la calidad de mis publicaciones.”",
    user: "Sofía Vargas",
    label: "Estudiante de Psicología, Universidad Nacional de San Agustín",
  },
];

export default function Opinions() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-24 sm:py-32 px-6">
      <Image
        src="/logo.svg"
        alt="Logo de Investiga"
        width={160}
        height={40}
        className="w-full max-w-40"
      />

      <div className="mx-auto container">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {opinions.map(({ text, user, label }) => (
              <CarouselItem
                key={text}
                className="container basis-full flex flex-col gap-10"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl sm:px-14 text-center w-full font-light italic">
                  {text}
                </h3>

                <div className="flex flex-col items-center gap-3">
                  <UserRound className="w-16 h-16" />
                  <span className="font-semibold">{user}</span>
                  <span className="text-sm text-center text-muted-foreground">
                    {label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
