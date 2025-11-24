import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  images: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  type: "work" | "education" | "certification";
}

export interface Skill {
  category: string;
  items: string[];
}

export const portfolioData = {
  hero: {
    name: "Djibril DIONE",
    roles: ["Développeur Full-Stack", "Data Analyst", "Entrepreneur Digital"],
    tagline: "Étudiant en Économie Numérique et expert technique. Je transforme des problèmes complexes en solutions digitales simples et élégantes.",
    image: "/profile-photo.jpg",
    availability: "Open to Work",
    contact: {
      email: "dionedjibril33@gmail.com",
      phone: "+221 76 579 79 12",
      location: "Dakar, Ouakam, Sénégal",
      linkedin: "https://linkedin.com/in/djibril-dione",
      github: "https://github.com/djibril-dione",
    },
  },

  projects: [
    {
      id: "mairie-ouakam",
      title: "Système de Gestion des Courriers - Mairie de Ouakam",
      description: "Digitalisation complète du traitement des courriers entrants et sortants pour la Mairie de Ouakam. Création d'une base de données Access avec formulaires dynamiques, filtres avancés et réseau local de partage.",
      role: "Développeur Full-Stack & IT Support",
      duration: "Février 2025",
      technologies: [
        "Microsoft Access",
        "VBA",
        "SQL",
        "Réseau Local",
        "Maintenance IT",
      ],
      images: [
        "/mairie-menu.png",
        "/mairie-consultation.png",
        "/mairie-recherche.png",
        "/mairie-ajout.png",
      ],
      highlights: [
        "Digitalisation complète du processus manuel",
        "Création d'une base de données structurée (Numéro décharge, Date, Expéditeur, Destinataire, Statut)",
        "Formulaire d'accueil avec filtres dynamiques et tri automatique",
        "Mise en place d'un réseau local pour le partage de fichiers",
        "Maintenance système : mise à jour OS, installation Office & antivirus, réparation hardware",
        "Présentation officielle du projet au Maire",
      ],
    },
    {
      id: "confort-immo",
      title: "Confort Immo Archi - Logiciel de Gestion Immobilière",
      description: "Application web complète de gestion immobilière avec gestion multi-entités, système de rôles avancé, calcul automatique des commissions et génération de rapports PDF/Excel.",
      role: "Développeur Full-Stack",
      duration: "Janvier - Mars 2025",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "jsPDF",
        "XLSX",
      ],
      images: [
        "/confort-connexion.png",
        "/confort-dashboard.png",
        "/confort-bailleurs.png",
        "/confort-contrats.png",
        "/confort-locataires.png",
        "/confort-paiements.png",
        "/confort-produits.png",
        "/confort-loyers-impays.png",
        "/confort-filtres.png",
        "/confort-rapport-comptabilite.png",
        "/confort-rapport-immeuble.png",
        "/confort-rapport-bailleurs.png",
        "/confort-rapport-agence.png",
      ],
      highlights: [
        "Gestion complète de 6 entités : Bailleurs, Immeubles, Unités, Locataires, Contrats, Paiements",
        "Système de rôles avec RLS : Admin, Agent, Comptable, Bailleur",
        "Calcul automatique des commissions et parts",
        "Génération de rapports PDF et exports Excel",
        "Dashboard avec statistiques en temps réel",
        "Filtres avancés multicritères",
        "Détection automatique des loyers impayés",
      ],
      github: "https://github.com/djibril-dione/confort-immo-archi",
    },
  ],

  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Python",
    "Microsoft Access",
    "VBA",
    "SQL",
    "WordPress",
    "Notion",
    "Trello",
    "Figma",
    "Git & GitHub",
  ],

  skills: [
    {
      category: "Langages & Frameworks",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3", "React", "Vite", "Tailwind CSS"],
    },
    {
      category: "Backend & Database",
      items: ["Supabase", "PostgreSQL", "Microsoft Access", "Firebase", "Row Level Security"],
    },
    {
      category: "Outils & Productivité",
      items: ["Git & GitHub", "Notion", "Trello", "Figma", "WordPress", "Suite Microsoft Office"],
    },
    {
      category: "Compétences Métier",
      items: ["Gestion de projet", "Maintenance IT", "Architecture réseau", "Data Analysis", "UI/UX Design"],
    },
  ],

  timeline: [
    {
      id: "ucad-2024",
      title: "Licence 2 Économie Numérique",
      company: "UCAD / IPP (Institut des Politiques Publiques)",
      location: "Dakar, Sénégal",
      period: "2024 - 2025",
      description: "Développement technologique et digitale des affaires",
      achievements: [
        "Formation en économie numérique et transformation digitale",
        "Projets d'analyse de données et modélisation économique",
        "Études sur l'impact du digital dans les affaires",
      ],
      type: "education" as const,
    },
    {
      id: "mairie-2025",
      title: "Stagiaire - Digitalisation des Processus",
      company: "Mairie de Ouakam",
      location: "Ouakam, Dakar",
      period: "Février 2025",
      description: "Digitalisation complète du traitement des courriers et maintenance informatique",
      achievements: [
        "Création d'une base de données Access pour la gestion des courriers",
        "Mise en place d'un réseau local de partage de fichiers",
        "Maintenance complète du parc informatique",
        "Présentation officielle du projet au Maire",
      ],
      type: "work" as const,
    },
    {
      id: "confort-immo-2025",
      title: "Développeur Full-Stack",
      company: "Confort Immo Archi (Projet Client)",
      location: "Dakar, Sénégal",
      period: "Janvier - Mars 2025",
      description: "Développement d'un logiciel complet de gestion immobilière",
      achievements: [
        "Architecture complète avec React + TypeScript + Supabase",
        "Système de gestion multi-entités avec RLS",
        "Génération automatique de rapports PDF et Excel",
        "Dashboard avec analytics en temps réel",
      ],
      type: "work" as const,
    },
    {
      id: "bac-2023",
      title: "Baccalauréat Série S2",
      company: "Cours Anne Marie Javouhey",
      location: "Dakar, Sénégal",
      period: "2023 - 2024",
      description: "Mention Assez Bien",
      achievements: [
        "Baccalauréat scientifique avec mention",
        "Spécialisation en mathématiques et sciences",
      ],
      type: "education" as const,
    },
    {
      id: "python-cert",
      title: "Certification Python",
      company: "Coursera",
      location: "En ligne",
      period: "2020 - 2024",
      description: "Formation autodidacte en programmation et développement web",
      achievements: [
        "Certification Python sur Coursera",
        "Formation en développement web et IA",
        "Apprentissage autonome et pratique régulière",
      ],
      type: "certification" as const,
    },
  ],
};
