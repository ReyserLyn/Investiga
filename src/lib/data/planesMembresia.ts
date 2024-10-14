enum PopularPlanType {
  NO = 0,
  YES = 1,
}

type PlanesMembresiasProps = {
  title: string;
  popular: PopularPlanType;
  price: string;
  href: string;
  description: string;
  buttonText: string;
  benefitList: string[];
};

export function getPlanesMembresias(): PlanesMembresiasProps[] {
  return [
    {
      title: "Plan Gratuito",
      popular: 0,
      price: "Gratis",
      href: "/login",
      description:
        "Empieza tu camino en la investigación científica con nuestros cursos básicos y recursos clave, sin ningún costo.",
      buttonText: "Accede Gratis",
      benefitList: [
        "Acceso a cursos introductorios",
        "Aprende sobre ética e integridad en la IA aplicada a la investigación científica",
        "Actualizaciones de contenido frecuentemente",
        "Explora y compara herramientas de IA esenciales",
        "Acceso a seminarios y talleres cortos en línea",
      ],
    },
    {
      title: "Plan Premium",
      popular: 1,
      price: "35",
      href: "/login",
      description:
        "Obtén acceso completo a todos los cursos avanzados y una guía personalizado para elevar tu investigación al siguiente nivel.",
      buttonText: "Únete al Plan Premium",
      benefitList: [
        "Acceso ilimitado a todos los cursos en vivo y grabados",
        "Participa en talleres y seminarios en línea exclusivos",
        "Asesoramiento integral en herramientas avanzadas de IA",
        "Soporte prioritario con asistencia personalizada",
        "Acceso a contenido exclusivo y actualizaciones avanzadas",
      ],
    },
  ];
}
