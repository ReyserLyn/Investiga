"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Conocenos from "./Conocenos";

export default function NavbarOptions() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex ml-auto">
      <NavigationMenuList>
        <Link href="/" legacyBehavior passHref prefetch={false}>
          <NavigationMenuLink
            className={cn(
              buttonVariants({ variant: "linkHover2" }),
              navigationMenuTriggerStyle(),
              pathname === "/" ? "text-primary" : "",
              "hidden xl:flex"
            )}
          >
            Inicio
          </NavigationMenuLink>
        </Link>

        <Link href="/herramientas" legacyBehavior passHref prefetch={false}>
          <NavigationMenuLink
            className={cn(
              buttonVariants({ variant: "linkHover2" }),
              navigationMenuTriggerStyle(),
              pathname === "/herramientas" ? "text-primary" : ""
            )}
          >
            Herramientas IA
          </NavigationMenuLink>
        </Link>

        <Link href="/cursos" legacyBehavior passHref prefetch={false}>
          <NavigationMenuLink
            className={cn(
              buttonVariants({ variant: "linkHover2" }),
              navigationMenuTriggerStyle(),
              pathname === "/cursos" ? "text-primary" : ""
            )}
          >
            Cursos
          </NavigationMenuLink>
        </Link>

        {/* <Link href="/blog" legacyBehavior passHref prefetch={false}>
          <NavigationMenuLink
            className={cn(
              buttonVariants({ variant: "linkHover2" }),
              navigationMenuTriggerStyle(),
              pathname === "/blog" ? "text-primary" : "",
              "hidden lg:flex"
            )}
          >
            Blog
          </NavigationMenuLink>
        </Link> */}

        {/* <Link
          href="/herramientas/compartir-herramienta"
          legacyBehavior
          passHref
          prefetch={false}
        >
          <NavigationMenuLink
            className={cn(
              buttonVariants({ variant: "linkHover2" }),
              navigationMenuTriggerStyle(),
              pathname === "/herramientas/compartir-herramienta"
                ? "text-primary"
                : ""
            )}
          >
            Compartir una herramienta
          </NavigationMenuLink>
        </Link> */}

        <Link href="/planes" legacyBehavior passHref prefetch={false}>
          <NavigationMenuLink
            className={cn(
              buttonVariants({ variant: "linkHover2" }),
              navigationMenuTriggerStyle(),
              pathname === "/planes" ? "text-primary" : "",
              "hidden lg:flex"
            )}
          >
            Planes
          </NavigationMenuLink>
        </Link>

        <Conocenos />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
