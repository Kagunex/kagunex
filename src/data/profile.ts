export const profile = {
  name: "Kagunex",
  role: "Web Developer · Software Developer · Bot & Automation Developer",
  tagline: "Building digital experiences.",
  shortBio:
    "I build web applications, AI-powered tools, automation systems, and developer utilities. Focused on clean architecture, practical automation, and thoughtful interfaces.",
  github: "https://github.com/Kagunex",
  githubUsername: "Kagunex",
  profileImage: "/images/profile.jpg",
  status: "Available for collaboration",
  contact: {
    github: "https://github.com/Kagunex",
  },
} as const;

export type Profile = typeof profile;
