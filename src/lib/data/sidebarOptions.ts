import {
  House,
  LucideIcon,
  Mail,
  Share2,
  SquareChartGantt,
  TvMinimal,
  User,
  Wallet,
  Wrench,
} from "lucide-react";

type SidebarItem = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Section = {
  groupLabel: string;
  menus: SidebarItem[];
};

export function getSidebarOptions(pathname: string): Section[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Inicio",
          active: pathname === "/",
          icon: House,
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/cursos",
          label: "Cursos",
          active: pathname.includes("/cursos"),
          icon: TvMinimal,
        },
        {
          href: "/herramientas",
          label: "Herramientas",
          active: pathname === "/herramientas",
          icon: SquareChartGantt,
        },
        {
          href: "/planes",
          label: "Planes",
          active: pathname.includes("/planes"),
          icon: Wallet,
        },
        {
          href: "/herramientas/compartir-herramienta",
          label: "Compartir una herarmienta",
          active: pathname === "/herramientas/compartir-herramienta",
          icon: Share2,
        },
      ],
    },
    // {
    //   groupLabel: "Noticias",
    //   menus: [
    //     {
    //       href: "/blog",
    //       label: "Blog",
    //       active: pathname === "/",
    //       icon: Newspaper,
    //     },
    //   ],
    // },
    {
      groupLabel: "Conócenos",
      menus: [
        {
          href: "/soporte",
          label: "Soporte",
          active: pathname.includes("/soporte"),
          icon: Wrench,
        },
        {
          href: "/contacto",
          label: "Contacto",
          active: pathname.includes("/contacto"),
          icon: Mail,
        },
      ],
    },
    {
      groupLabel: "Configuración",
      menus: [
        {
          href: "/user",
          label: "Mi perfil",
          active: pathname.includes("/user"),
          icon: User,
        },
        // {
        //   href: '/cuenta',
        //   label: 'Mi cuenta',
        //   active: pathname.includes('/account'),
        //   icon: Settings,
        // },
      ],
    },
  ];
}
