"use client";

import { useState, useMemo } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { channels, categories, Channel, ChannelCategory } from "@/lib/mockData";
import { ChannelCard } from "./ChannelCard";
import { cn } from "@/lib/utils";

type SortKey = "subscribers" | "avgViews" | "engagement" | "price";

const SORT_LABELS: Record<SortKey, string> = {
  subscribers: "구독자 순",
  avgViews: "조회수 순",
  engagement: "참여율 순",
  price: "가격 낮은 순",
};

interface ChannelGridProps {
  onChannelClick: (channel: Channel) => void;
}

export const ChannelGrid = ({ onChannelClick }: ChannelGridProps) => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ChannelCategory | "ALL">("ALL");
  const [activeStatus, setActiveStatus] = useState<"ALL" | "ACTIVE" | "UPCOMING">("ALL");
  const [sortKey, setSortKey] = useState<SortKey>("subscribers");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...channels];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.handle.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category
    if (activeCategory !== "ALL") {
      list = list.filter((c) => c.category === activeCategory);
    }

    // Status
    if (activeStatus !== "ALL") {
      list = list.filter((c) => c.status === activeStatus);
    }

    // Sort
    list.sort((a, b) => {
      if (sortKey === "subscribers") return b.subscriberCount - a.subscriberCount;
      if (sortKey === "avgViews") return b.avgViews - a.avgViews;
      if (sortKey === "engagement") return b.engagementRate - a.engagementRate;
      if (sortKey === "price") {
        const minA = Math.min(...a.packages.map((p) => p.price));
        const minB = Math.min(...b.packages.map((p) => p.price));
        return minA - minB;
      }
      return 0;
    });

    return list;
  }, [query, activeCategory, activeStatus, sortKey]);

  return (
    <section className="w-full border-b border-black">
      {/* Section header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
              Channel Index
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-black font-serif">
              {filtered.length}{" "}
              <span className="font-normal text-gray-400">Channels</span>
            </h2>
          </div>

          {/* Search */}
          <div className="flex items-center border border-black overflow-hidden max-w-sm w-full">
            <Search size={16} className="ml-3 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="채널명, 태그, 카테고리 검색..."
              className="flex-1 px-3 py-3 text-sm font-medium bg-white outline-none placeholder:text-gray-400"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="px-3 py-3 border-l border-black hover:bg-black hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter bar - Category Row */}
      <div className="border-b border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop filter row */}
          <div className="hidden md:grid grid-cols-[80px_repeat(9,1fr)] overflow-x-auto">
            {/* ALL */}
            <button
              onClick={() => setActiveCategory("ALL")}
              className={cn(
                "px-5 py-3 text-xs font-black uppercase tracking-widest transition-colors border-r border-black text-center",
                activeCategory === "ALL"
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              )}
            >
              전체
            </button>
            {categories.map((cat, idx) => {
              const isLast = idx === categories.length - 1;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-3 text-xs font-black uppercase tracking-widest transition-colors text-center",
                    !isLast && "border-r border-black",
                    activeCategory === cat
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Mobile: toggle */}
          <div className="md:hidden flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              {activeCategory !== "ALL" && (
                <span className="text-xs font-bold border border-black px-3 py-1 rounded-full">
                  {activeCategory}
                </span>
              )}
              {activeStatus !== "ALL" && (
                <span className="text-xs font-bold border border-black px-3 py-1 rounded-full">
                  {activeStatus}
                </span>
              )}
            </div>
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              <SlidersHorizontal size={14} />
              필터
            </button>
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <div className="md:hidden border-t border-black pb-4">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold pt-4 pb-2">카테고리</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("ALL")}
                  className={cn(
                    "text-xs font-bold border border-black px-3 py-1 rounded-full transition-colors",
                    activeCategory === "ALL" ? "bg-black text-white" : ""
                  )}
                >
                  전체
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "text-xs font-bold border border-black px-3 py-1 rounded-full transition-colors",
                      activeCategory === cat ? "bg-black text-white" : ""
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sub-filter: Status + Sort */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="hidden md:grid grid-cols-[80px_repeat(9,1fr)] items-stretch">
            {/* Status tabs - cols 1-3 */}
            {(["ALL", "ACTIVE", "UPCOMING"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={cn(
                  "py-3 px-0 text-xs font-black uppercase tracking-widest transition-colors border-r border-black flex items-center justify-center",
                  activeStatus === s
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-100"
                )}
              >
                {s === "ALL" ? "전체" : s === "ACTIVE" ? "운영 중" : "오픈 예정"}
              </button>
            ))}

            {/* Empty spacers - cols 4-6 */}
            {[0, 1, 2].map((i) => (
              <div key={`spacer-${i}`} className={i === 2 ? "border-r border-black" : ""} />
            ))}

            {/* Sort buttons - cols 7-10 */}
            {(Object.keys(SORT_LABELS) as SortKey[]).map((key, idx) => {
              const isLast = idx === 3;
              return (
                <button
                  key={key}
                  onClick={() => setSortKey(key)}
                  className={cn(
                    "py-3 px-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center",
                    !isLast && "border-r border-black",
                    sortKey === key
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-black hover:bg-gray-100"
                  )}
                >
                  {SORT_LABELS[key]}
                </button>
              );
            })}
          </div>

          {/* Mobile sort select */}
          <div className="md:hidden flex items-center justify-between py-3">
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="px-4 py-3 text-xs font-bold uppercase bg-white border border-black outline-none"
            >
              {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                <option key={key} value={key}>
                  {SORT_LABELS[key]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filtered.length === 0 ? (
          <div className="border border-black py-20 flex flex-col items-center justify-center gap-4">
            <p className="text-4xl font-black text-gray-200 uppercase tracking-widest">
              NO RESULTS
            </p>
            <p className="text-sm text-gray-400 font-medium">
              검색 조건에 맞는 채널이 없습니다.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("ALL");
                setActiveStatus("ALL");
              }}
              className="text-xs font-black uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors mt-2"
            >
              필터 초기화
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border border-black divide-x divide-y divide-black">
            {filtered.map((channel, i) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                index={i}
                onClick={onChannelClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
