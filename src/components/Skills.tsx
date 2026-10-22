import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-sm text-muted">
            Editable profile data — tools and stacks I work with regularly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-sm font-medium text-accent tracking-wide">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
