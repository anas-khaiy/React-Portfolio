export type Education = {
  school: string; degree: string; field?: string;
  location?: string; start: string; end?: string | null;
  gpa?: string; courses?: string[]; highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Ecole Normale Superieure Marrakech",
    degree: "2ème années de Master",
    field: "technologie emergentes",
    start: "2024-09",
    end: null,
    location: "Marrakech, MR",
    gpa: "3.8/4.0",
    courses: [],
    highlights: ["Programmation Avancées et DevOps", "Bases de Données avancée","Business Intelligence","Développement Web et multiplateforme","Intelligence Artificielle avancée",
      "Réalité Augmentée et Virtuelle", "Sécurité et Administration des Réseaux"
    ],
  },
  {
    school: "Ecole Supérieure de Technologie Sidi Bennour ",
    degree: "Licence",
    field: "Ingénierie Des Systèmes Informatiques et Technologies Web",
    start: "-",
    end: "2023-06",
    location: "Sidi Bennour, MR",
    gpa: "3.5/4.0",
    highlights: ["FrontEnd - Angular", "Backend - Laravel","Java/Kotlin Mobile", "Business Intelligence","Sécurité et Administration des Réseaux","génie logiciel"],
    courses: [],
  },
];
