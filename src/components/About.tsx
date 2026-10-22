import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              About
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-muted leading-relaxed">
            <p>
              I am <span className="text-foreground font-medium">{profile.name}</span> —
              a developer focused on building practical digital products. My work
              spans web applications, AI-powered interfaces, automation systems,
              and developer utilities.
            </p>
            <p>
              I care about clean architecture, maintainable code, and interfaces
              that feel intentional rather than decorative. Whether it is a bot
              session console, an AI tooling surface, or a small library, the
              goal is the same: useful software that respects the people who
              use it.
            </p>
            <p>
              Currently exploring multi-session WhatsApp tooling, NVIDIA NIM
              integrations, and lightweight media utilities. Always open to
              collaboration on interesting problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
