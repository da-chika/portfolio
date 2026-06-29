import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, CATEGORIES, ALL_TAGS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import type { Category } from "@/data/projects";

const categoryColors: Record<string, string> = {
  "モバイルアプリ": "data-[active=true]:bg-violet-500 data-[active=true]:border-violet-500 data-[active=true]:text-white",
  "Webアプリ": "data-[active=true]:bg-blue-500 data-[active=true]:border-blue-500 data-[active=true]:text-white",
  "業務システム": "data-[active=true]:bg-emerald-500 data-[active=true]:border-emerald-500 data-[active=true]:text-white",
  "認証基盤": "data-[active=true]:bg-orange-500 data-[active=true]:border-orange-500 data-[active=true]:text-white",
};

export function PortfolioFilter() {
  const [categories, setCategories] = useQueryState(
    "category",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [tags, setTags] = useQueryState(
    "tag",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const toggleCategory = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAll = () => {
    setCategories([]);
    setTags([]);
  };

  const hasFilter = categories.length > 0 || tags.length > 0;

  const filtered = projects.filter((p) => {
    const catMatch = categories.length === 0 || categories.includes(p.category);
    const tagMatch = tags.length === 0 || tags.every((t) => p.tags.includes(t));
    return catMatch && tagMatch;
  });

  return (
    <div className="space-y-8">
      {/* フィルターパネル */}
      <div className="rounded-xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm space-y-5">
        {/* カテゴリ */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
            カテゴリ
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-active={categories.includes(cat)}
                onClick={() => toggleCategory(cat)}
                className={cn(
                  "rounded-full border border-white/10 px-3 py-1 text-sm text-white/50 transition-all duration-200 hover:border-white/25 hover:text-white/80",
                  categoryColors[cat]
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* タグ */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
            技術タグ
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                data-active={tags.includes(tag)}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "rounded-full border border-white/10 px-3 py-1 text-sm text-white/50 transition-all duration-200 hover:border-white/25 hover:text-white/80",
                  "data-[active=true]:bg-white/10 data-[active=true]:border-white/30 data-[active=true]:text-white"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* クリアボタン */}
        {hasFilter && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-white/60"
          >
            <X size={12} />
            フィルターをクリア
          </button>
        )}
      </div>

      {/* 件数表示 */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/40">
          <span className="text-white/80 font-medium">{filtered.length}</span>
          <span> / {projects.length} 件</span>
        </p>
        {hasFilter && (
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <span key={c} className="flex items-center gap-1 rounded-full bg-white/8 px-2 py-0.5 text-xs text-white/60">
                {c}
                <button onClick={() => toggleCategory(c)} className="hover:text-white"><X size={10} /></button>
              </span>
            ))}
            {tags.map((t) => (
              <span key={t} className="flex items-center gap-1 rounded-full bg-white/8 px-2 py-0.5 text-xs text-white/60">
                {t}
                <button onClick={() => toggleTag(t)} className="hover:text-white"><X size={10} /></button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* プロジェクトグリッド */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              activeTags={tags}
              onTagClick={toggleTag}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-white/8 py-16 text-center text-sm text-white/30">
          該当する案件がありません
        </div>
      )}
    </div>
  );
}
