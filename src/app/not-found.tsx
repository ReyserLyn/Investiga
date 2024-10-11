import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <Navbar />

      <section className="flex flex-grow items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform duration-300 ease-in-out transform hover:scale-110">
              404
            </h1>
            <p className="text-gray-500">
              Parece que has navegado hacia un rincón desconocido de la web.
            </p>
          </div>
          <Button
            asChild
            variant="expandIcon"
            Icon={ArrowRight}
            iconSize="16"
            iconPlacement="right"
          >
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
