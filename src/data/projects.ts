export type Project = {
  title: string; period?: string; tags: string[];
  summary: string; link?: string; repo?: string; image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion Congé ",
    summary: "Ce mini-projet permet de gérer les demandes de congé au sein d’une organisation. Il offre aux employés la possibilité de soumettre leurs demandes en ligne, tandis que les administrateurs peuvent consulter, valider ou refuser les congés via une interface simple et intuitive.",
    tags: ["Thymeleaf", "Springboot", "Bootstrap","Mysql"],
    link: "https://www.youtube.com/watch?v=I2vzgu6-Cqs&t=2s",
    repo: "https://github.com/anas-khaiy/JakartaEE-TP-2-Mini-projet-Thymeleaf", 
  },
  {
    title: "Movies Review",
    summary: "Cette application permet aux utilisateurs de consulter une liste de films, d’afficher leurs détails et de laisser des avis ou des notes. Chaque utilisateur peut partager son opinion, lire les critiques des autres et suivre les évaluations des films. Le projet propose une interface claire et facile à utiliser, avec une gestion simple des films, des utilisateurs et de leurs reviews.",
    tags: ["Angular", "Firebase"],
    link: "https://fir-angular2-a9f52.web.app/login",
    repo: "https://github.com/anas-khaiy/movies-app",
  },
  {
    title: "Business Card App",
    summary: "Cette application permet aux utilisateurs de créer leur propre carte de visite digitale avec leurs informations personnelles et professionnelles. Les autres utilisateurs peuvent ensuite scanner cette carte directement via la caméra de l’application pour récupérer automatiquement toutes les informations.",
    tags: ["Kotlin", "Firebase"],
    link: "#",
    repo: "https://github.com/anas-khaiy/projet-business-card",
  },
  {
    title: "Gestion des Réclamations",
    summary: "Cette application permet aux clients de soumettre facilement leurs réclamations en fournissant toutes les informations nécessaires (type de problème, description, pièces jointes, etc.). Les équipes IT reçoivent ces demandes, peuvent les analyser et y répondre directement depuis la plateforme. Le système intègre également un suivi automatique par email, permettant aux clients d’être informés en temps réel de l’avancement de leur réclamation (réception, en cours de traitement, résolue). L’objectif du projet est d’assurer une communication efficace entre les clients et le support IT tout en améliorant la qualité et la rapidité du service.",
    tags: ["Kotlin", "PHP","Mysql"],
    link: "#",
    repo: "https://github.com/anas-khaiy/Gestion-R-clamations",
  },
  //  {
  //   title: "Mini football 3D",
  //   summary: "Ce mini-projet a pour objectif de créer une petite simulation de football en 3D dans Unity. L’idée principale est de permettre à un joueur de se déplacer sur le terrain, d’interagir avec un ballon, et de marquer un but. Pour cela, plusieurs étapes ont été réalisées depuis la recherche des assets jusqu’à la programmation du comportement des objets dans la scène.",
  //   tags: ["C#", "Unity"],
  //   link: "https://www.youtube.com/watch?v=owp9VlpPAF4",
  //   repo: "https://github.com/anas-khaiy/Unity-TP1",
  // },
  // {
  //   title: "Jeu de Tri des Déchets 3D",
  //   summary: "Le projet consiste à créer un mini-jeu éducatif sur le tri des déchets. L’objectif est de sensibiliser les joueurs aux bonnes pratiques de recyclage en leur faisant trier différents types de déchets dans les poubelles correspondantes : nourriture, métaux et plastiques.",
  //   tags: ["C#", "Unity"],
  //   link: "https://www.youtube.com/watch?v=wk8JR5bdmG0",
  //   repo: "https://github.com/anas-khaiy/Unity-TP2",
  // },
  // {
  //   title: "Anatomy App AR",
  //   summary: "Cette application a été réalisée en utilisant Unity et le SDK Vuforia. Elle permet d’afficher en réalité augmentée (AR) quatre organes du corps humain : le cœur, l’estomac, l’œil et le cerveau. Lorsque l’utilisateur pointe la caméra vers une image spécifique, l’application reconnaît cette image (Image Target) et affiche automatiquement le modèle 3D correspondant. Le but de cette application est d’offrir une expérience interactive, éducative et immersive pour mieux comprendre l’anatomie humaine.",
  //   tags: ["C#", "Unity","Vuforia"],
  //   link: "https://www.youtube.com/shorts/92ueZvqAXa8",
  //   repo: "https://github.com/anas-khaiy/Unity-TP3",
  // },
];
