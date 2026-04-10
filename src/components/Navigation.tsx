"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/lib/authStore";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guide/creator", label: "크리에이터" },
  { href: "/guide/sponsor", label: "광고주" },
  { href: "/faq", label: "FAQ" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="w-full border-b border-black bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          <p className="text-xs text-gray-500 tracking-widest uppercase font-medium">
            Korea&apos;s #1 YouTube Sponsorship Platform
          </p>
          {user ? (
            <div className="flex items-center divide-x divide-black">
              <Link
                href={user.role === "CREATOR" ? "/dashboard/creator" : "/dashboard/sponsor"}
                className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
              >
                {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-1 text-xs font-bold uppercase tracking-widest bg-black text-white hover:bg-white hover:text-black transition-colors border-l border-black"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="flex items-center divide-x divide-black">
              <Link
                href="/login"
                className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="px-4 py-1 text-xs font-bold uppercase tracking-widest bg-black text-white hover:bg-white hover:text-black transition-colors border-l border-black"
              >
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <span className="text-2xl font-black uppercase tracking-tighter text-black font-serif leading-none">
              VIEW
            </span>
            <span className="text-2xl font-black uppercase tracking-tighter text-white bg-black px-1 leading-none font-serif">
              POINT
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center divide-x divide-black border-l border-r border-black">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-0">
            <Link
              href="/signup?role=creator"
              className={cn(
                "px-5 py-2 text-xs font-bold uppercase tracking-widest",
                "border border-black text-black hover:bg-black hover:text-white transition-colors"
              )}
            >
              채널 등록
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 border border-black"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black bg-white">
          <nav className="flex flex-col divide-y divide-black">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup?role=creator"
              className="px-6 py-4 text-sm font-bold uppercase tracking-widest bg-black text-white"
              onClick={() => setMobileOpen(false)}
            >
              채널 등록
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
