export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;        // "YYYY-MM-DD"
  expiryDate?: string;      // "YYYY-MM-DD"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;           // "/certs/aws-saa.webp"
  imageAlt?: string;        // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu Plateforme de Certification Professionnelle",
    issueDate: "2025-10-20",
    tags: ["Java", "Hibernate", "JPA"],
    skills: ["VPC", "EC2", "S3", "Security"],
    image: "/certs/certificat12.png",
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu Plateforme de Certification Professionnelle",
    issueDate: "2025-10-7",
    tags: ["Java"],
    skills: ["Deployment", "Networking", "Storage"],
    image: "/certs/certificat1.png",
  },
];
