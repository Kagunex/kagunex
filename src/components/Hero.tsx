"use client";

import Image from "next/image";
import { IconArrowRight, IconGithub, IconCircle } from "./Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted">
                <IconCircle className="h-2 w-2 fill-accent text-accent" aria-hidden />
                {profile.status}
              </span>
              <span className="text-xs text-muted/80 font-mono">
                {profile.role.split(" · ")[0]}
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {profile.tagline}
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-[1.05rem]">
              {profile.shortBio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-black transition hover:bg-accent-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore Projects
                <IconArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                <IconGithub className="h-4 w-4" aria-hidden />
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up [animation-delay:120ms]">
            <div className="relative group">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-border to-border opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
                <div className="relative aspect-[3/4] w-[220px] sm:w-[260px] lg:w-[280px]">
                  <Image
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-3xl pointer-events-none group-hover:bg-accent/30 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
