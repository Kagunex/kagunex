import { IconGithub, IconExternalLink } from "./Icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Public links only. Reach out via GitHub for collaboration, questions,
            or project discussions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              <IconGithub className="h-4 w-4" aria-hidden />
              github.com/{profile.githubUsername}
              <IconExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
