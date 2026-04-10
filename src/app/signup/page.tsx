"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore, UserRole } from "@/lib/authStore";
import { cn } from "@/lib/utils";

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = useAuthStore((s) => s.login);

  const defaultRole: UserRole =
    searchParams.get("role") === "creator" ? "CREATOR" : "SPONSOR";

  const [role, setRole] = useState<UserRole>(defaultRole);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }
    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }
    if (!agree) {
      setError("이용약관 및 개인정보처리방침에 동의해주세요.");
      return;
    }

    setLoading(true);
    await new Promise((res) => setTimeout(res, 700));

    login({
      id: `user-${Date.now()}`,
      email,
      name,
      role,
      handle: handle || (role === "CREATOR" ? "@my_channel" : name),
    });

    router.push(role === "CREATOR" ? "/dashboard/creator" : "/dashboard/sponsor");
  };

  return (
    <div className="min-h-[80vh] flex">
      {/* Left: role selector + brand */}
      <div className="hidden md:flex md:w-2/5 bg-black text-white flex-col p-12 border-r border-black">
        <div className="flex items-center gap-0 mb-12">
          <span className="text-2xl font-black uppercase tracking-tighter leading-none font-serif">
            VIEW
          </span>
          <span className="text-2xl font-black uppercase tracking-tighter bg-white text-black px-1 leading-none font-serif">
            POINT
          </span>
        </div>

        <div className="flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">
            회원 유형 선택
          </p>
          <div className="flex flex-col gap-0 border border-gray-700">
            {(["CREATOR", "SPONSOR"] as UserRole[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={cn(
                  "text-left px-6 py-5 border-b border-gray-700 last:border-b-0 transition-colors",
                  role === r ? "bg-white text-black" : "hover:bg-gray-900 text-white"
                )}
              >
                <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">
                  {r === "CREATOR" ? "Creator" : "Sponsor"}
                </p>
                <p className="text-base font-black uppercase leading-tight">
                  {r === "CREATOR" ? "크리에이터" : "광고주 / 브랜드"}
                </p>
                <p className={cn("text-xs mt-2 leading-relaxed", role === r ? "text-gray-600" : "text-gray-500")}>
                  {r === "CREATOR"
                    ? "채널을 등록하고 스폰서십 제안을 받아보세요."
                    : "타겟에 맞는 크리에이터를 찾고 광고를 집행하세요."}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="text-white font-black underline underline-offset-2">
              로그인
            </Link>
          </p>
        </div>
      </div>

      {/* Right: form */}
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
              Create Account — {role === "CREATOR" ? "크리에이터" : "광고주"}
            </p>
            <h1 className="text-3xl font-black uppercase tracking-tight text-black">
              회원가입
            </h1>
          </div>

          {/* Mobile role toggle */}
          <div className="md:hidden flex divide-x divide-black border border-black mb-6">
            {(["CREATOR", "SPONSOR"] as UserRole[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={cn(
                  "flex-1 py-3 text-xs font-black uppercase tracking-widest transition-colors",
                  role === r ? "bg-black text-white" : "bg-white text-black hover:bg-gray-50"
                )}
              >
                {r === "CREATOR" ? "크리에이터" : "광고주"}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-0 border border-black">
            {/* Name */}
            <div className="border-b border-black">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 px-4 pt-3 pb-1">
                {role === "CREATOR" ? "활동명 / 실명" : "담당자명"}
                <span className="text-black ml-1">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={role === "CREATOR" ? "홍길동 / 크리에이터닉" : "홍길동"}
                className="w-full px-4 pb-3 text-sm font-medium text-black bg-white placeholder-gray-300 focus:outline-none focus:bg-gray-50"
              />
            </div>

            {/* Handle / Company */}
            <div className="border-b border-black">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 px-4 pt-3 pb-1">
                {role === "CREATOR" ? "채널 핸들 (@)" : "회사명"}
              </label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder={role === "CREATOR" ? "@my_channel" : "주식회사 뷰포인트"}
                className="w-full px-4 pb-3 text-sm font-medium text-black bg-white placeholder-gray-300 focus:outline-none focus:bg-gray-50"
              />
            </div>

            {/* Email */}
            <div className="border-b border-black">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 px-4 pt-3 pb-1">
                이메일 <span className="text-black">*</span>
              </label>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 pb-3 text-sm font-medium text-black bg-white placeholder-gray-300 focus:outline-none focus:bg-gray-50"
              />
            </div>

            {/* Password */}
            <div className="border-b border-black">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 px-4 pt-3 pb-1">
                비밀번호 <span className="text-black">*</span>
              </label>
              <input
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="최소 6자"
                className="w-full px-4 pb-3 text-sm font-medium text-black bg-white placeholder-gray-300 focus:outline-none focus:bg-gray-50"
              />
            </div>

            {/* Agreement */}
            <div className="border-b border-black px-4 py-3 flex items-start gap-3 bg-gray-50">
              <button
                type="button"
                onClick={() => setAgree((v) => !v)}
                className={cn(
                  "shrink-0 w-4 h-4 mt-0.5 border border-black transition-colors",
                  agree ? "bg-black" : "bg-white"
                )}
                aria-checked={agree}
                role="checkbox"
              />
              <p className="text-xs text-gray-600 leading-relaxed">
                <Link href="/terms" className="font-black text-black underline underline-offset-1">이용약관</Link>
                {" "}및{" "}
                <Link href="/privacy" className="font-black text-black underline underline-offset-1">개인정보처리방침</Link>
                에 동의합니다. <span className="text-black font-black">(필수)</span>
              </p>
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
              {loading ? "가입 처리 중..." : "가입하기 →"}
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-400 text-center">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="font-black text-black underline underline-offset-2">
              로그인
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
