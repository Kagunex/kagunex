import { IconExternalLink, IconGithub } from "./Icons";
import type { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  Active: "border-accent/40 text-accent bg-accent/10",
  "In Development": "border-amber-500/40 text-amber-400 bg-amber-500/10",
  Experimental: "border-zinc-500/40 text-zinc-400 bg-zinc-500/10",
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border bg-background/50 px-2 py-0.5 text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
            >
              <IconGithub className="h-3.5 w-3.5" aria-hidden />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
            >
              <IconExternalLink className="h-3.5 w-3.5" aria-hidden />
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
