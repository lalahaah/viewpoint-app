import { BentoGridShowcase } from "@/components/BentoGridShowcase";
import { Target, Search, ShieldCheck, TrendingUp, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "브랜드 등록",
    desc: "브랜드 정보와 타겟 오디언스, 예산 범위를 입력합니다. 간단한 심사 후 마켓플레이스 접근 권한이 부여됩니다.",
  },
  {
    number: "02",
    title: "채널 탐색",
    desc: "카테고리, 구독자 수, 참여율, 예산으로 필터링해 최적의 크리에이터를 찾습니다. 상세 포트폴리오를 확인하세요.",
  },
  {
    number: "03",
    title: "제안서 발송",
    desc: "마음에 드는 채널에 협찬 제안서를 보냅니다. 예산, 콘텐츠 방향, 일정을 구체적으로 명시할 수 있습니다.",
  },
  {
    number: "04",
    title: "집행 & 리포트",
    desc: "영상이 업로드되면 실시간 성과 리포트를 받아보세요. 조회수, 노출, 링크 클릭률을 대시보드에서 확인합니다.",
  },
];

export default function SponsorGuidePage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black gap-0">
          <div className="pb-8 md:pb-0 md:pr-12">
            <span className="text-xs font-black uppercase tracking-widest border border-black px-3 py-1 rounded-full inline-block mb-6">
              For Sponsors
            </span>
            <h1 className="text-5xl md:text-6xl font-black uppercase text-black font-serif leading-none tracking-tight mb-6">
              광고주<br />가이드
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              데이터 기반으로 최적의 유튜브 크리에이터를 탐색하고, 직접 협찬을 제안하세요.
              탑 채널부터 신규 채널까지 — 예산에 맞는 파트너를 찾습니다.
            </p>
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex flex-col justify-center">
            <div className="grid grid-cols-2 divide-x divide-y divide-black border border-black">
              {[
                { label: "등록 크리에이터", value: "2,400+" },
                { label: "누적 협찬 집행액", value: "₩18억+" },
                { label: "평균 참여율", value: "6.2%" },
                { label: "카테고리", value: "10+" },
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

      {/* Process */}
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
          <h2 className="text-3xl font-black uppercase text-black font-serif mb-8">광고주 혜택</h2>
          <BentoGridShowcase
            integration={
              <div className="h-full flex flex-col justify-between">
                <Target size={32} className="text-black mb-4" />
                <div>
                  <h3 className="text-xl font-black uppercase text-black mb-2">정밀 타겟팅</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    카테고리, 구독자 규모, 시청자 연령대, 참여율, 예산까지 — 다중 필터로 브랜드에 완벽히 맞는 채널만 추려냅니다.
                  </p>
                </div>
                <span className="text-xs font-black uppercase tracking-widest border border-black px-3 py-1.5 inline-block w-fit mt-4 hover:bg-black hover:text-white transition-colors cursor-pointer">
                  채널 탐색 →
                </span>
              </div>
            }
            trackers={
              <div>
                <Search size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">신규 채널 선점</h3>
                <p className="text-xs text-gray-500 leading-relaxed">오픈 예정 채널에 먼저 접근. 낮은 단가로 높은 초기 노출 확보.</p>
              </div>
            }
            statistic={
              <div>
                <TrendingUp size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">실시간 성과 리포트</h3>
                <p className="text-xs text-gray-500 leading-relaxed">조회수, CTR, 노출 데이터를 대시보드에서 실시간 확인.</p>
              </div>
            }
            focus={
              <div>
                <ShieldCheck size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">에스크로 안전 결제</h3>
                <p className="text-xs text-gray-500 leading-relaxed">콘텐츠 이행 확인 후 정산. 집행 미이행 시 전액 환불 보장.</p>
              </div>
            }
            productivity={
              <div>
                <Layers size={20} className="text-black mb-2" />
                <h3 className="text-sm font-black uppercase text-black mb-1">멀티 캠페인 관리</h3>
                <p className="text-xs text-gray-500 leading-relaxed">여러 캠페인을 하나의 대시보드에서 동시 운영 및 비교.</p>
              </div>
            }
            shortcuts={
              <div className="flex items-center justify-between h-full">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 text-gray-400">지금 시작하기</p>
                  <p className="text-lg font-black uppercase text-white">크리에이터 탐색</p>
                </div>
                <Link
                  href="/signup?role=sponsor"
                  className="border border-white px-6 py-3 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  무료 가입 →
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
            { q: "최소 예산이 있나요?", a: "최소 예산 제한은 없습니다. 소형 채널과의 협찬은 100만원대부터 가능합니다." },
            { q: "계약서는 어떻게 처리되나요?", a: "ViewPoint 플랫폼 내 표준 협찬 계약서가 자동 생성됩니다. 전자서명으로 간편하게 처리됩니다." },
            { q: "콘텐츠 방향을 직접 지정할 수 있나요?", a: "제안서에 콘텐츠 가이드라인, 필수 포함 내용, 금지 사항을 명시할 수 있습니다. 최종 콘텐츠는 업로드 전 검토 요청이 가능합니다." },
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
          <Link href="/faq" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
            전체 FAQ 보기 <ArrowRight size={14} />
          </Link>
          <Link
            href="/signup?role=sponsor"
            className="text-xs font-black uppercase tracking-widest border border-black px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-colors"
          >
            광고주 등록 →
          </Link>
        </div>
      </div>
    </div>
  );
}
