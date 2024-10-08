import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookCheck,
  ChartBarStacked,
  ChevronRight,
  SearchCode,
} from "lucide-react";
import Link from "next/link";

const puntosFuertes = [
  {
    title: "Búsqueda Eficiente",
    description:
      "Encuentra fuentes científicas relevantes en segundos con IA avanzada.",
    label: "Compruebalo",
    color: "DCA005",
    icon: SearchCode,
  },
  {
    title: "Comparación Precisa",
    description:
      "Analiza artículos y datos rápidamente para tomar decisiones informadas.",
    label: "Descubre cómo",
    color: "4883FF",
    icon: ChartBarStacked,
  },
  {
    title: "Aprendizaje Profundo",
    description:
      "Domina las técnicas de investigación más efectivas con nuestros cursos especializados.",
    label: "Aprende más",
    color: "C11574",
    icon: BookCheck,
  },
];

export default function PuntosFuertes() {
  return (
    <section
      id="puntosFuertes"
      className="relative py-16 lg:py-24 xl:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-20 lg:px-8 text-center">
        <h2 className="md:w-3/4 mx-auto text-3xl md:text-4xl font-semibold">
          Ventajas{" "}
          <span className="bg-gradient-to-b from-primary/40 to-primary text-transparent bg-clip-text font-bold">
            Únicas
          </span>
        </h2>

        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Impulsa tu investigación al siguiente nivel con herramientas diseñadas
          para el éxito.
        </p>

        <div className="grid lg:grid-cols-3 gap-12 mt-12 lg:mt-0 text-left">
          {puntosFuertes.map(
            ({ icon: Icon, title, description, label, color }) => (
              <Card
                key={title}
                className="bg-white shadow-md border-white flex flex-col"
              >
                <CardHeader className="flex-none pb-4">
                  <CardTitle className="flex flex-row items-center text-lg md:text-xl">
                    <Icon className="mr-3" color={`#${color}`} />
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pl-7 text-base pb-2 place-content-center">
                  {description}
                </CardContent>

                <CardFooter className="flex-0">
                  <Button
                    variant="ghost"
                    className="hover:bg-white hover:text-secondary/70"
                    asChild
                  >
                    <Link href="/cursos" className="text-secondary">
                      {label}
                      <ChevronRight size="18px" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
