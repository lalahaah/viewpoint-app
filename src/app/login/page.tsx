"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/authStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    // Mock login — determine role by email prefix
    await new Promise((res) => setTimeout(res, 600));

    const isCreator = email.startsWith("creator") || email.includes("@creator");
    login({
      id: `user-${Date.now()}`,
      email,
      name: isCreator ? "크리에이터 회원" : "광고주 회원",
      role: isCreator ? "CREATOR" : "SPONSOR",
      handle: isCreator ? "@my_channel" : "My Brand Inc.",
    });

    router.push(isCreator ? "/dashboard/creator" : "/dashboard/sponsor");
  };

  return (
    <div className="min-h-[80vh] flex">
      {/* Left: brand panel */}
      <div className="hidden md:flex md:w-2/5 bg-black text-white flex-col justify-between p-12 border-r border-black">
        <div>
          <div className="flex items-center gap-0 mb-12">
            <span className="text-2xl font-black uppercase tracking-tighter leading-none font-serif">
              VIEW
            </span>
            <span className="text-2xl font-black uppercase tracking-tighter bg-white text-black px-1 leading-none font-serif">
              POINT
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none tracking-tight font-serif mb-6">
            Korea&apos;s #1<br />Sponsorship<br />Marketplace
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            크리에이터와 브랜드를 잇는 데이터 기반 협찬 플랫폼.
            지금 바로 로그인하여 파트너십을 시작하세요.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="grid grid-cols-2 divide-x divide-gray-800">
            <div className="pr-6">
              <p className="text-2xl font-black text-white">8+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">등록 채널</p>
            </div>
            <div className="pl-6">
              <p className="text-2xl font-black text-white">₩1B+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">누적 협찬액</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="border-b border-black pb-6 mb-8">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
              Account Access
            </p>
            <h1 className="text-3xl font-black uppercase tracking-tight text-black">
              로그인
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-0 border border-black">
            {/* Email field */}
            <div className="border-b border-black">
              <label
                htmlFor="email"
                className="block text-[10px] font-black uppercase tracking-widest text-gray-500 px-4 pt-3 pb-1"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 pb-3 text-sm font-medium text-black bg-white placeholder-gray-300 focus:outline-none focus:bg-gray-50"
              />
            </div>

            {/* Password field */}
            <div className="border-b border-black">
              <label
                htmlFor="password"
                className="block text-[10px] font-black uppercase tracking-widest text-gray-500 px-4 pt-3 pb-1"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 pb-3 text-sm font-medium text-black bg-white placeholder-gray-300 focus:outline-none focus:bg-gray-50"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="border-b border-black px-4 py-3 bg-black text-white text-xs font-bold">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-black uppercase tracking-widest text-sm py-4 hover:bg-gray-900 transition-colors disabled:opacity-50"
            >
              {loading ? "로그인 중..." : "로그인 →"}
            </button>
          </form>

          {/* Helper text */}
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span>
              계정이 없으신가요?{" "}
              <Link
                href="/signup"
                className="font-black text-black underline underline-offset-2"
              >
                회원가입
              </Link>
            </span>
            <span className="text-[10px] text-gray-400">
              비밀번호 찾기
            </span>
          </div>

          {/* Demo hint */}
          <div className="mt-8 border border-black p-4 bg-gray-50">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
              Demo Hint
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="font-black text-black">크리에이터</span> 로그인:{" "}
              <code className="font-mono bg-white border border-black px-1">creator@test.com</code>
              <br />
              <span className="font-black text-black">광고주</span> 로그인:{" "}
              <code className="font-mono bg-white border border-black px-1">sponsor@test.com</code>
              <br />
              (비밀번호 아무거나 입력)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
