"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/authStore";
import { channels } from "@/lib/mockData";
import { TrendingUp, Eye, Users, DollarSign, Bell, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const formatNumber = (n: number): string => {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}만`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}천`;
  return String(n);
};

const formatPrice = (price: number): string =>
  `₩${(price / 10000).toFixed(0)}만`;

// Mock data for the creator dashboard
const myChannelIds = ["ch-001", "ch-007"];
const myChannels = channels.filter((c) => myChannelIds.includes(c.id));

const recentProposals = [
  { id: "p-001", brand: "삼성전자 MX사업부", channel: "테크인사이드", package: "풀 스폰서십", amount: 8000000, status: "검토중", date: "2026-04-08" },
  { id: "p-002", brand: "LG 생활건강", channel: "테크인사이드", package: "숏폼 통합 패키지", amount: 3500000, status: "수락됨", date: "2026-04-06" },
  { id: "p-003", brand: "카카오엔터", channel: "AI 코딩스쿨", package: "론칭 파트너 패키지", amount: 2500000, status: "협의중", date: "2026-04-03" },
];

const statusStyle: Record<string, string> = {
  검토중: "border-black text-black bg-white",
  수락됨: "border-black text-white bg-black",
  협의중: "border-gray-400 text-gray-600 bg-gray-50",
  거절됨: "border-gray-300 text-gray-400 bg-white",
};

const kpiItems = [
  { label: "총 구독자", value: formatNumber(myChannels.reduce((a, c) => a + c.subscriberCount, 0)), icon: Users, sub: "+2.3% 이번 달" },
  { label: "평균 조회수", value: formatNumber(myChannels.filter(c => c.avgViews > 0).reduce((a, c) => a + c.avgViews, 0) / Math.max(myChannels.filter(c => c.avgViews > 0).length, 1)), icon: Eye, sub: "+5.1% 이번 달" },
  { label: "평균 참여율", value: `${(myChannels.filter(c => c.engagementRate > 0).reduce((a, c) => a + c.engagementRate, 0) / Math.max(myChannels.filter(c => c.engagementRate > 0).length, 1)).toFixed(1)}%`, icon: TrendingUp, sub: "업계 평균 3.5% 대비" },
  { label: "이번 달 수입", value: formatPrice(recentProposals.filter(p => p.status === "수락됨").reduce((a, p) => a + p.amount, 0)), icon: DollarSign, sub: "확정 기준" },
];

export default function CreatorDashboardPage() {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/login");
    else if (user.role !== "CREATOR") router.replace("/dashboard/sponsor");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="p-0">
      {/* Page header */}
      <div className="border-b border-black px-8 py-6 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
            Creator Dashboard
          </p>
          <h1 className="text-2xl font-black uppercase tracking-tight text-black">
            안녕하세요, {user.name}님
          </h1>
        </div>
        <div className="flex items-center gap-0 border border-black divide-x divide-black">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            <Bell size={12} />
            알림 3
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest bg-black text-white hover:bg-white hover:text-black transition-colors">
            + 채널 등록
          </button>
        </div>
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
        {/* Left: My Channels */}
        <div className="md:col-span-2 flex flex-col">
          <div className="border-b border-black px-6 py-3 flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-widest text-black">
              내 채널
            </p>
            <span className="text-[10px] text-gray-400 font-mono">{myChannels.length}개 등록</span>
          </div>
          <div className="flex flex-col divide-y divide-black flex-1">
            {myChannels.map((ch) => (
              <div key={ch.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group">
                <div
                  className="w-12 h-12 shrink-0 bg-gray-200 border border-black bg-cover bg-center"
                  style={{ backgroundImage: `url(${ch.thumbnailUrl})` }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-black text-black uppercase leading-tight truncate">
                    {ch.name}
                  </p>
                  <p className="text-[10px] font-mono text-gray-400 truncate">{ch.handle}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={cn(
                        "text-[10px] font-black uppercase tracking-widest border px-2 py-0.5",
                        ch.status === "UPCOMING"
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black"
                      )}
                    >
                      {ch.status === "UPCOMING" ? "OPEN SOON" : "ACTIVE"}
                    </span>
                    {ch.status === "ACTIVE" && (
                      <span className="text-[10px] text-gray-500 font-mono">
                        {formatNumber(ch.subscriberCount)} 구독자
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-black transition-colors shrink-0" />
              </div>
            ))}

            {/* Add channel CTA */}
            <button className="flex items-center justify-center gap-2 px-6 py-4 text-xs font-black uppercase tracking-widest text-gray-400 hover:bg-gray-50 hover:text-black transition-colors border-t border-dashed border-black">
              + 새 채널 추가
            </button>
          </div>
        </div>

        {/* Right: Recent proposals */}
        <div className="md:col-span-3 flex flex-col">
          <div className="border-b border-black px-6 py-3 flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-widest text-black">
              최근 스폰서십 제안
            </p>
            <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
              전체 보기 →
            </button>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-black bg-gray-50">
            {["브랜드", "패키지", "금액", "상태"].map((h) => (
              <div key={h} className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          <div className="flex flex-col divide-y divide-black flex-1">
            {recentProposals.map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="px-4 py-4">
                  <p className="text-xs font-black text-black leading-tight">{p.brand}</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">{p.date}</p>
                </div>
                <div className="px-4 py-4 flex items-center">
                  <p className="text-[11px] text-gray-700 leading-tight">{p.package}</p>
                </div>
                <div className="px-4 py-4 flex items-center">
                  <p className="text-xs font-black text-black">{formatPrice(p.amount)}</p>
                </div>
                <div className="px-4 py-4 flex items-center">
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-widest border px-2 py-1",
                      statusStyle[p.status]
                    )}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state padding */}
          <div className="border-t border-black px-6 py-4 bg-gray-50">
            <p className="text-[10px] text-gray-400 font-mono">
              * 제안 수락 시 이메일로 안내됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
