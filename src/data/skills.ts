export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "Services",
    items: ["Firebase", "Firestore"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Termux"],
  },
];
