import { BentoGridShowcase } from "@/components/BentoGridShowcase";
import { Video, DollarSign, BarChart2, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "채널 등록",
    desc: "유튜브 채널 URL과 기본 정보를 입력하고, 협찬 패키지 및 단가를 설정합니다. 운영 중 채널과 오픈 예정 채널 모두 등록 가능합니다.",
  },
  {
    number: "02",
    title: "제안 수신",
    desc: "광고주가 채널을 발견하면 협찬 제안서가 도착합니다. 대시보드에서 조건, 예산, 브랜드 정보를 확인하세요.",
  },
  {
    number: "03",
    title: "협의 & 수락",
    desc: "제안 내용을 검토하고 수락 또는 역제안을 보냅니다. 모든 소통은 플랫폼 내 메시지로 이루어집니다.",
  },
  {
    number: "04",
    title: "콘텐츠 제작 & 정산",
    desc: "영상을 업로드하면 ViewPoint가 계약 이행을 확인 후 협찬비를 정산합니다. 안전한 에스크로 방식입니다.",
  },
];

const benefits = [
  { icon: DollarSign, title: "선제적 수익 확보", desc: "영상 제작 전 협찬비를 확정하고 안정적인 제작 환경을 구축하세요." },
  { icon: Users, title: "검증된 광고주", desc: "사전 심사를 통과한 브랜드만 플랫폼에 등록됩니다. 스팸 제안 없음." },
  { icon: BarChart2, title: "채널 데이터 대시보드", desc: "구독자 성장, 조회수 추이, 협찬 수익 현황을 한눈에 확인합니다." },
  { icon: Zap, title: "신규 채널 선점 기회", desc: "오픈 예정 채널도 등록 가능. 론칭 전부터 초기 제작비를 확보하세요." },
];

export default function CreatorGuidePage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black gap-0">
          <div className="pb-8 md:pb-0 md:pr-12">
            <span className="text-xs font-black uppercase tracking-widest border border-black px-3 py-1 rounded-full inline-block mb-6">
              For Creators
            </span>
            <h1 className="text-5xl md:text-6xl font-black uppercase text-black font-serif leading-none tracking-tight mb-6">
              크리에이터<br />가이드
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              ViewPoint는 유튜브 크리에이터가 브랜드와 직접 연결되는 협찬 마켓플레이스입니다.
              채널을 등록하고 조건에 맞는 광고주를 만나보세요.
            </p>
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex flex-col justify-center">
            <div className="grid grid-cols-2 divide-x divide-y divide-black border border-black">
              {[
                { label: "등록 채널", value: "2,400+" },
                { label: "누적 협찬 성사", value: "₩18억+" },
                { label: "평균 정산일", value: "7일" },
                { label: "광고주 수", value: "850+" },
              ].map((stat) => (
                <div key={stat.label} className="p-6">
                  <p className="text-3xl font-black text-black leading-none">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Process</p>
          <h2 className="text-3xl font-black uppercase text-black font-serif mb-8">진행 방식</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black border border-black">
            {steps.map((step) => (
              <div key={step.number} className="p-6 md:p-8">
                <p className="text-5xl font-black text-gray-100 leading-none mb-4 font-serif">{step.number}</p>
                <h3 className="text-base font-black uppercase tracking-tight text-black mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits — Bento */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Benefits</p>
          <h2 className="text-3xl font-black uppercase text-black font-serif mb-8">크리에이터 혜택</h2>
          <BentoGridShowcase
            integration={
              <div className="h-full flex flex-col justify-between">
                <Video size={32} className="text-black mb-4" />
                <div>
                  <h3 className="text-xl font-black uppercase text-black mb-2">채널 등록 무료</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    채널 등록과 프로필 운영은 완전 무료입니다. 협찬이 성사될 때만 플랫폼 수수료(8%)가 발생합니다.
                  </p>
                </div>
                <span className="text-xs font-black uppercase tracking-widest border border-black px-3 py-1.5 inline-block w-fit mt-4 hover:bg-black hover:text-white transition-colors cursor-pointer">
                  지금 등록하기 →
                </span>
              </div>
            }
            trackers={
              <div>
                <DollarSign size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">안전한 에스크로 정산</h3>
                <p className="text-xs text-gray-500 leading-relaxed">광고주가 선입금, ViewPoint가 보관, 이행 확인 후 지급.</p>
              </div>
            }
            statistic={
              <div>
                <BarChart2 size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">실시간 채널 분석</h3>
                <p className="text-xs text-gray-500 leading-relaxed">구독자 증감, 조회수, 협찬 수익 통합 대시보드 제공.</p>
              </div>
            }
            focus={
              <div>
                <Users size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">검증된 브랜드만</h3>
                <p className="text-xs text-gray-500 leading-relaxed">사전 심사 완료된 광고주와만 연결. 스팸·사기 제안 차단.</p>
              </div>
            }
            productivity={
              <div>
                <Zap size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">오픈 예정 채널 등록</h3>
                <p className="text-xs text-gray-500 leading-relaxed">론칭 전 채널도 등록 가능. 초기 제작비를 미리 확보.</p>
              </div>
            }
            shortcuts={
              <div className="flex items-center justify-between h-full">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 text-gray-400">지금 시작하기</p>
                  <p className="text-lg font-black uppercase text-white">무료로 채널 등록</p>
                </div>
                <Link
                  href="/signup?role=creator"
                  className="border border-white px-6 py-3 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  시작하기 →
                </Link>
              </div>
            }
          />
        </div>
      </div>

      {/* FAQ teaser */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="border border-black divide-y divide-black">
          {[
            { q: "등록 수수료가 있나요?", a: "채널 등록과 프로필 운영은 완전 무료입니다. 협찬 성사 시에만 8% 수수료가 발생합니다." },
            { q: "구독자 수 제한이 있나요?", a: "없습니다. 소형 채널부터 100만+ 채널까지 모두 등록 가능합니다. 오픈 예정 채널도 허용됩니다." },
            { q: "정산은 얼마나 걸리나요?", a: "영상 업로드 확인 후 영업일 기준 7일 이내 정산됩니다." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
              <div className="p-6 md:col-span-1">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Q.{String(i + 1).padStart(2, "0")}</p>
                <p className="text-sm font-black text-black">{item.q}</p>
              </div>
              <div className="p-6 md:col-span-2">
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Link
            href="/faq"
            className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline"
          >
            전체 FAQ 보기 <ArrowRight size={14} />
          </Link>
          <Link
            href="/signup?role=creator"
            className="text-xs font-black uppercase tracking-widest border border-black px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-colors"
          >
            채널 등록 시작 →
          </Link>
        </div>
      </div>
    </div>
  );
}
