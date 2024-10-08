import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section
      id="cta"
      className="bg-primary-black text-white py-16 my-16 w-full"
    >
      <div className="container flex flex-col gap-8 justify-between">
        <div className="lg:col-start-1">
          <h2 className="text-2xl lg:text-3xl font-normal ">
            Consolida tus
            <span className="font-bold"> Ideas y Conocimientos </span>
            en una Única Plataforma
          </h2>
          <p className="text-gray-300 font-light text-lg mt-4 mb-8 lg:mb-0">
            Accede a cursos en vivo sobre investigación científica, potenciados
            por IA. ¡Profundiza y expande tu aprendizaje!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <Button
            className="w-full text-md md:w-auto font-medium self-start transition-transform duration-300 ease-in-out transform hover:scale-105"
            asChild
          >
            <Link href="/register">Unirme a Investiga</Link>
          </Button>

          <Button
            className="text-primary bg-transparent hover:bg-transparent underline-offset-4 hover:underline"
            variant="expandIcon"
            Icon={ArrowRight}
            iconSize="16"
            iconPlacement="right"
            asChild
          >
            <Link
              href="/herramientas"
              className="flex justify-center items-center font-extralight text-white text-sm "
            >
              Explorar más
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
