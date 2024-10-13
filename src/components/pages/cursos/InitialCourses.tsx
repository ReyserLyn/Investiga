"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CoursesResponse } from "@/types/pocketbase-types";
import Link from "next/link";
import CourseCard from "./CourseCard";

const courseTags: string[] = [
  "Ética en el uso de la IA",
  "Gestión de Referencias",
  "Análisis de Documentos",
];

interface InitialCoursesProps {
  courses: CoursesResponse[];
}

export default function InitialCourses({ courses }: InitialCoursesProps) {
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 my-10 gap-3">
        <span className="text-lg font-semibold">
          ¡Empieza tu viaje con nuestros primeros cursos y crece con nosotros!
        </span>

        {courses.length > 0 && ( // Renderiza solo si hay cursos
          <div className="hidden sm:flex sm:flex-row gap-2">
            {courseTags.map((aiType: string) => (
              <div key={aiType}>
                <Link href="/herramientas">
                  <Badge className="bg-primary-black hover:bg-[#0D1522] py-1 px-4 hover:cursor-pointer">
                    {aiType}
                  </Badge>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center h-full p-5">
        {courses.length === 0 ? (
          <div className="text-center py-24">
            <span className="text-lg text-muted-foreground">
              No hay cursos disponibles por el momento.
            </span>
          </div>
        ) : (
          <div
            className={cn(
              "container grid gap-4 px-5 max-w-7xl",
              courses.length === 1
                ? "grid-cols-1"
                : courses.length === 2
                ? "grid-cols-2"
                : courses.length === 3
                ? "grid-cols-3"
                : "grid-cols-4"
            )}
          >
            {courses.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
