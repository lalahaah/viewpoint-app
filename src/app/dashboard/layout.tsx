"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/authStore";
import { cn } from "@/lib/utils";
import { LayoutGrid, PlusSquare, BarChart2, MessageSquare, Settings } from "lucide-react";

const creatorNav = [
  { href: "/dashboard/creator", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/creator/channels", label: "내 채널", icon: PlusSquare },
  { href: "/dashboard/creator/proposals", label: "스폰서십 제안", icon: MessageSquare },
  { href: "/dashboard/creator/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/dashboard/creator/settings", label: "설정", icon: Settings },
];

const sponsorNav = [
  { href: "/dashboard/sponsor", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/sponsor/search", label: "채널 탐색", icon: PlusSquare },
  { href: "/dashboard/sponsor/proposals", label: "제안 현황", icon: MessageSquare },
  { href: "/dashboard/sponsor/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/dashboard/sponsor/settings", label: "설정", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);

  const navItems = user?.role === "CREATOR" ? creatorNav : sponsorNav;
  const roleLabel = user?.role === "CREATOR" ? "CREATOR" : "SPONSOR";

  return (
    <div className="flex min-h-[calc(100vh-113px)]">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-black flex flex-col bg-white sticky top-[113px] self-start h-[calc(100vh-113px)]">
        {/* User info */}
        <div className="border-b border-black px-5 py-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
            {roleLabel}
          </p>
          <p className="text-sm font-black text-black leading-tight truncate">
            {user?.name ?? "—"}
          </p>
          <p className="text-[10px] text-gray-400 font-mono truncate mt-0.5">
            {user?.handle ?? user?.email ?? "—"}
          </p>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col divide-y divide-black flex-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-5 py-3.5 text-xs font-black uppercase tracking-widest transition-colors",
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-50"
                )}
              >
                <Icon size={14} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Role badge at bottom */}
        <div className="border-t border-black px-5 py-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            ViewPoint Dashboard
          </span>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 bg-white">{children}</main>
    </div>
  );
}
