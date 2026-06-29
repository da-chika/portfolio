import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const categoryColors: Record<string, string> = {
  "モバイルアプリ": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Webアプリ": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "業務システム": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "認証基盤": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const tagColors: Record<string, string> = {
  Flutter: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "React Native": "bg-sky-500/10 text-sky-300 border-sky-500/20",
  React: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Next.js": "bg-slate-500/10 text-slate-300 border-slate-500/20",
  TypeScript: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Laravel: "bg-red-500/10 text-red-300 border-red-500/20",
  Express: "bg-green-500/10 text-green-300 border-green-500/20",
  Hono: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  Python: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  AWS: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  GCP: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Vercel: "bg-slate-500/10 text-slate-300 border-slate-500/20",
};

interface ProjectCardProps {
  project: Project;
  activeTags: string[];
  onTagClick: (tag: string) => void;
}

export function ProjectCard({ project, activeTags, onTagClick }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/6 hover:shadow-xl hover:shadow-black/20">
      {/* ヘッダー */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
            categoryColors[project.category] ?? "bg-slate-500/10 text-slate-300 border-slate-500/20"
          )}
        >
          {project.category}
        </span>
        <span className="text-xs text-white/40">{project.period}</span>
      </div>

      {/* タイトル */}
      <h3 className="mb-2 text-base font-semibold leading-snug text-white/90">
        {project.title}
      </h3>

      {/* 説明 */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-white/50">
        {project.description}
      </p>

      {/* 担当範囲 */}
      <div className="mb-4 rounded-lg bg-white/4 px-3 py-2 text-xs text-white/40">
        <span className="text-white/25">担当 / </span>
        {project.role}
      </div>

      {/* タグ */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={cn(
              "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium transition-all duration-200 cursor-pointer hover:scale-105",
              tagColors[tag] ?? "bg-white/5 text-white/50 border-white/10",
              activeTags.includes(tag) && "ring-1 ring-white/30 brightness-125"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
