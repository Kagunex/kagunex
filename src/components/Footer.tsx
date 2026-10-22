import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted">
          © {year} {profile.name}
        </p>
        <p className="text-xs text-muted/70 font-mono">
          Built with Next.js · Tailwind · TypeScript
        </p>
      </div>
    </footer>
  );
}
