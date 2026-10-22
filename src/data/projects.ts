export type ProjectStatus = "Active" | "In Development" | "Experimental";

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "nexora-md",
    name: "NEXORA MD",
    description:
      "Web console concept for managing WhatsApp bot sessions, pairing, authentication, and Firebase integration. Designed for multi-session control and streamlined operator workflows.",
    tags: ["Next.js", "Firebase", "WhatsApp", "TypeScript"],
    status: "In Development",
    featured: true,
  },
  {
    id: "kx-ai",
    name: "KX AI",
    description:
      "AI web application integrating NVIDIA NIM. Explores practical interfaces for model inference, prompt workflows, and developer-facing AI tooling.",
    tags: ["Next.js", "NVIDIA NIM", "AI", "TypeScript"],
    status: "Experimental",
    featured: true,
  },
  {
    id: "kx-signal",
    name: "KX SIGNAL",
    description:
      "Anime metadata and subtitle discovery project. Focused on search, cataloging, and practical utilities for media enthusiasts.",
    tags: ["Web", "Metadata", "Subtitles"],
    status: "Experimental",
  },
  {
    id: "musickz",
    name: "Musickz",
    description:
      "Music player project exploring YouTube Music integration. Experiments with playback UX, library views, and lightweight media interfaces.",
    tags: ["JavaScript", "YouTube Music", "Player"],
    status: "Experimental",
  },
  {
    id: "eclipsce",
    name: "ECLIPSCE / Alight Free",
    description:
      "Alight Motion-related generator project. Built to explore creative tooling and asset generation workflows around motion design.",
    tags: ["Generator", "Alight Motion", "Tools"],
    status: "Experimental",
  },
  {
    id: "baileys-kagunex",
    name: "@kagunex/baileys",
    description:
      "Baileys-based library focused on WhatsApp pairing and connection management. Aimed at cleaner session handling and developer-friendly APIs.",
    tags: ["Baileys", "WhatsApp", "Node.js", "Library"],
    status: "In Development",
    featured: true,
  },
];
