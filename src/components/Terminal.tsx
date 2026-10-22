"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
  FormEvent,
} from "react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

type Line = {
  id: number;
  type: "input" | "output" | "error" | "system";
  content: string;
};

const COMMANDS = [
  "help",
  "about",
  "projects",
  "skills",
  "github",
  "contact",
  "clear",
  "whoami",
] as const;

const WELCOME = [
  "Welcome to Kagunex portfolio terminal.",
  'Type "help" to see available commands.',
];

function formatProjects(): string {
  return projects
    .map(
      (p, i) =>
        `  ${i + 1}. ${p.name}  [${p.status}]\n     ${p.description.slice(0, 80)}${p.description.length > 80 ? "…" : ""}`
    )
    .join("\n");
}

function formatSkills(): string {
  return skillGroups
    .map((g) => `  ${g.title}: ${g.items.join(", ")}`)
    .join("\n");
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(() =>
    WELCOME.map((content, i) => ({
      id: i,
      type: "system" as const,
      content,
    }))
  );
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [lineId, setLineId] = useState(WELCOME.length);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const addLines = useCallback(
    (newLines: Omit<Line, "id">[]) => {
      setLines((prev) => {
        const next = newLines.map((l, i) => ({
          ...l,
          id: lineId + i,
        }));
        setLineId((id) => id + newLines.length);
        return [...prev, ...next];
      });
    },
    [lineId]
  );

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      addLines([{ type: "input", content: `$ ${raw}` }]);

      switch (cmd) {
        case "help":
          addLines([
            {
              type: "output",
              content: [
                "Available commands:",
                ...COMMANDS.map((c) => `  ${c}`),
                "",
                "Use arrow keys ↑↓ for command history.",
              ].join("\n"),
            },
          ]);
          break;
        case "about":
          addLines([
            {
              type: "output",
              content: [
                profile.name,
                profile.role,
                "",
                profile.shortBio,
              ].join("\n"),
            },
          ]);
          break;
        case "projects":
          addLines([
            {
              type: "output",
              content: ["Projects:", formatProjects()].join("\n"),
            },
          ]);
          break;
        case "skills":
          addLines([
            {
              type: "output",
              content: ["Technology stack:", formatSkills()].join("\n"),
            },
          ]);
          break;
        case "github":
          addLines([
            {
              type: "output",
              content: `Opening ${profile.github} …`,
            },
          ]);
          if (typeof window !== "undefined") {
            window.open(profile.github, "_blank", "noopener,noreferrer");
          }
          break;
        case "contact":
          addLines([
            {
              type: "output",
              content: [
                "Public links:",
                `  GitHub: ${profile.contact.github}`,
                "",
                "More contact options can be added in profile config.",
              ].join("\n"),
            },
          ]);
          break;
        case "clear":
          setLines([]);
          break;
        case "whoami":
          addLines([{ type: "output", content: profile.name }]);
          break;
        default:
          addLines([
            {
              type: "error",
              content: `Command not found: ${cmd}. Type "help" for the list.`,
            },
          ]);
      }
    },
    [addLines]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = input;
    if (value.trim()) {
      setHistory((h) => [...h, value]);
      setHistIdx(-1);
    }
    setInput("");
    runCommand(value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(history[next] ?? "");
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="terminal" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Terminal
          </h2>
          <p className="mt-2 text-sm text-muted">
            Interactive console — type a command or click a suggestion.
          </p>
        </div>

        <div
          ref={panelRef}
          onClick={focusInput}
          className="overflow-hidden rounded-xl border border-border bg-terminal shadow-xl shadow-black/30"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-2 font-mono text-xs text-muted">
              kagunex@portfolio
            </span>
          </div>

          {/* Body */}
          <div className="h-[320px] sm:h-[380px] overflow-y-auto p-3 sm:p-4 font-mono text-[13px] sm:text-sm leading-relaxed">
            {lines.map((line) => (
              <div
                key={line.id}
                className={
                  line.type === "input"
                    ? "text-accent"
                    : line.type === "error"
                      ? "text-red-400"
                      : line.type === "system"
                        ? "text-muted"
                        : "text-foreground/90 whitespace-pre-wrap"
                }
              >
                {line.content}
              </div>
            ))}

            <form onSubmit={onSubmit} className="mt-1 flex items-center gap-2">
              <span className="text-accent shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-foreground caret-accent placeholder:text-muted/50"
                placeholder="type a command…"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
              <span
                className="inline-block w-2 h-4 bg-accent cursor-blink shrink-0"
                aria-hidden
              />
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-2.5">
            {COMMANDS.filter((c) => c !== "clear").map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => {
                  setInput(cmd);
                  runCommand(cmd);
                  setInput("");
                  inputRef.current?.focus();
                }}
                className="rounded border border-border bg-card/60 px-2 py-1 font-mono text-[11px] text-muted hover:border-accent/40 hover:text-accent transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
