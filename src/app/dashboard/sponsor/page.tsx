"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/authStore";
import { channels } from "@/lib/mockData";
import { Search, TrendingUp, Eye, Users, DollarSign, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const formatNumber = (n: number): string => {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}만`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}천`;
  return String(n);
};

const formatPrice = (price: number): string =>
  `₩${(price / 10000).toFixed(0)}만`;

const myProposals = [
  { id: "p-101", channel: "테크인사이드", package: "풀 스폰서십", amount: 8000000, status: "검토중", date: "2026-04-09" },
  { id: "p-102", channel: "글로우업 스튜디오", package: "브랜드 앰배서더", amount: 25000000, status: "협의중", date: "2026-04-07" },
  { id: "p-103", channel: "핀테크 브레인", package: "브랜디드 콘텐츠", amount: 9000000, status: "수락됨", date: "2026-04-02" },
];

const statusStyle: Record<string, string> = {
  검토중: "border-black text-black bg-white",
  수락됨: "border-black text-white bg-black",
  협의중: "border-gray-400 text-gray-600 bg-gray-50",
  거절됨: "border-gray-300 text-gray-400 bg-white",
};

const totalBudget = myProposals.reduce((a, p) => a + p.amount, 0);
const confirmedBudget = myProposals.filter(p => p.status === "수락됨").reduce((a, p) => a + p.amount, 0);

const kpiItems = [
  { label: "진행 중 제안", value: String(myProposals.length), icon: DollarSign, sub: "총 제안 건수" },
  { label: "집행 예산", value: formatPrice(totalBudget), icon: DollarSign, sub: "이번 달 기준" },
  { label: "확정 집행액", value: formatPrice(confirmedBudget), icon: TrendingUp, sub: "수락 확정 기준" },
  { label: "탐색 채널 수", value: String(channels.length), icon: Users, sub: "전체 마켓플레이스" },
];

export default function SponsorDashboardPage() {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!user) router.replace("/login");
    else if (user.role !== "SPONSOR") router.replace("/dashboard/creator");
  }, [user, router]);

  if (!user) return null;

  const filteredChannels = channels
    .filter((c) =>
      searchQuery === "" ||
      c.name.includes(searchQuery) ||
      c.category.includes(searchQuery) ||
      c.tags.some((t) => t.includes(searchQuery))
    )
    .slice(0, 5);

  return (
    <div className="p-0">
      {/* Page header */}
      <div className="border-b border-black px-8 py-6 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
            Sponsor Dashboard
          </p>
          <h1 className="text-2xl font-black uppercase tracking-tight text-black">
            안녕하세요, {user.name}님
          </h1>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest bg-black text-white border border-black hover:bg-white hover:text-black transition-colors">
          + 새 제안 작성
        </button>
      </div>

      {/* KPI Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-black border-b border-black"
      >
        {kpiItems.map(({ label, value, icon: Icon, sub }) => (
          <motion.div
            key={label}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="px-6 py-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon size={12} className="text-gray-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                {label}
              </span>
            </div>
            <p className="text-2xl font-black text-black leading-none mb-1">{value}</p>
            <p className="text-[10px] text-gray-500 font-mono">{sub}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-black">

        {/* Left: Channel Search */}
        <div className="md:col-span-3 flex flex-col">
          <div className="border-b border-black px-6 py-3 flex items-center justify-between gap-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-black shrink-0">
              채널 탐색
            </p>
            {/* Search */}
            <div className="flex-1 flex items-center border border-black">
              <Search size={12} className="text-gray-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="채널명, 카테고리, 태그 검색..."
                className="flex-1 px-3 py-1.5 text-xs font-medium text-black placeholder-gray-300 bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-5 border-b border-black bg-gray-50">
            {["채널", "카테고리", "구독자", "조회수", "최저가"].map((h) => (
              <div key={h} className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
                {h}
              </div>
            ))}
          </div>

          {/* Channel rows */}
          <div className="flex flex-col divide-y divide-black flex-1">
            {filteredChannels.map((ch) => (
              <div
                key={ch.id}
                className="grid grid-cols-5 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="px-3 py-3 flex items-center gap-2 col-span-1">
                  <div
                    className="w-8 h-8 shrink-0 border border-black bg-cover bg-center bg-gray-100"
                    style={{ backgroundImage: `url(${ch.thumbnailUrl})` }}
                  />
                  <div className="min-w-0">
                    <p className="text-[11px] font-black text-black leading-tight truncate">{ch.name}</p>
                    <p className="text-[9px] font-mono text-gray-400 truncate">{ch.handle}</p>
                  </div>
                </div>
                <div className="px-3 py-3 flex items-center">
                  <span className="text-[10px] font-bold border border-black px-1.5 py-0.5 rounded-full text-black">
                    {ch.category}
                  </span>
                </div>
                <div className="px-3 py-3 flex items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <Users size={10} className="text-gray-400" />
                      <span className="text-[11px] font-black text-black">
                        {ch.status === "UPCOMING" ? "—" : formatNumber(ch.subscriberCount)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-3 flex items-center">
                  <div className="flex items-center gap-1">
                    <Eye size={10} className="text-gray-400" />
                    <span className="text-[11px] font-black text-black">
                      {ch.status === "UPCOMING" ? "—" : formatNumber(ch.avgViews)}
                    </span>
                  </div>
                </div>
                <div className="px-3 py-3 flex items-center justify-between">
                  <span className="text-[11px] font-black text-black">
                    {formatPrice(Math.min(...ch.packages.map((p) => p.price)))}~
                  </span>
                  <ChevronRight size={12} className="text-gray-300 group-hover:text-black transition-colors mr-2" />
                </div>
              </div>
            ))}

            {filteredChannels.length === 0 && (
              <div className="flex items-center justify-center px-6 py-12 text-xs text-gray-400 font-bold uppercase tracking-widest">
                검색 결과 없음
              </div>
            )}
          </div>

          <div className="border-t border-black px-6 py-3">
            <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
              전체 채널 보기 →
            </button>
          </div>
        </div>

        {/* Right: My proposals */}
        <div className="md:col-span-2 flex flex-col">
          <div className="border-b border-black px-6 py-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-black">
              제안 현황
            </p>
          </div>

          <div className="flex flex-col divide-y divide-black flex-1">
            {myProposals.map((p) => (
              <div key={p.id} className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-xs font-black text-black">{p.channel}</p>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">{p.date}</p>
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-widest border px-2 py-1 shrink-0",
                      statusStyle[p.status]
                    )}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 mb-1">{p.package}</p>
                <p className="text-sm font-black text-black">{formatPrice(p.amount)}</p>
              </div>
            ))}
          </div>

          {/* Budget summary */}
          <div className="border-t border-black">
            <div className="grid grid-cols-2 divide-x divide-black border-b border-black">
              <div className="px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">총 예산</p>
                <p className="text-lg font-black text-black">{formatPrice(totalBudget)}</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">확정</p>
                <p className="text-lg font-black text-black">{formatPrice(confirmedBudget)}</p>
              </div>
            </div>
            <div className="px-5 py-4">
              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-100 border border-black">
                  <div
                    className="h-full bg-black transition-all"
                    style={{ width: `${Math.round((confirmedBudget / Math.max(totalBudget, 1)) * 100)}%` }}
                  />
                </div>
                <span className="text-[10px] font-black text-black font-mono shrink-0">
                  {Math.round((confirmedBudget / Math.max(totalBudget, 1)) * 100)}%
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono mt-1">예산 집행률</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
