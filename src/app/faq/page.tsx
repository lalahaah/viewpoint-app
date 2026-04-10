"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqSections = [
  {
    section: "서비스 일반",
    items: [
      {
        q: "ViewPoint는 어떤 서비스인가요?",
        a: "ViewPoint는 유튜브 크리에이터와 브랜드(광고주)를 직접 연결하는 협찬 마켓플레이스입니다. 크리에이터는 채널을 등록해 광고 제안을 받고, 광고주는 데이터 기반으로 최적의 크리에이터를 탐색해 직접 협찬을 제안할 수 있습니다.",
      },
      {
        q: "이용 요금이 있나요?",
        a: "채널 등록과 광고주 브랜드 등록은 완전 무료입니다. 협찬이 실제로 성사(계약 체결)되었을 때만 거래 금액의 8% 수수료가 발생합니다.",
      },
      {
        q: "어떤 유형의 채널이 등록 가능한가요?",
        a: "현재 운영 중인 채널 외에도, 오픈 예정 채널(론칭 전 채널)도 등록이 가능합니다. 구독자 수 제한은 없으며, 소형 채널부터 100만+ 구독자 채널까지 모두 환영합니다.",
      },
    ],
  },
  {
    section: "크리에이터",
    items: [
      {
        q: "채널 등록은 어떻게 하나요?",
        a: "회원가입 후 크리에이터 역할을 선택하고, 채널 URL을 입력하면 자동으로 기본 정보가 불러와집니다. 이후 협찬 패키지 및 단가를 설정하면 마켓플레이스에 즉시 노출됩니다.",
      },
      {
        q: "협찬 제안을 수락하면 어떻게 되나요?",
        a: "제안 수락 시 플랫폼 내 표준 협찬 계약서가 생성되며, 전자서명으로 계약이 완료됩니다. 광고주는 협찬비를 에스크로 계좌에 입금하고, 영상 업로드 확인 후 영업일 7일 이내에 크리에이터에게 지급됩니다.",
      },
      {
        q: "영상 업로드 후 정산이 되지 않으면 어떻게 하나요?",
        a: "영상 업로드 확인 후 자동으로 정산이 진행됩니다. 만약 15영업일 이내에 정산이 되지 않을 경우 고객지원(help@viewpoint.kr)으로 문의해 주세요. 에스크로에 묶인 금액은 안전하게 보호됩니다.",
      },
      {
        q: "오픈 예정 채널은 어떻게 협찬을 받나요?",
        a: "론칭 예정일과 채널 기획안을 등록하면, 광고주가 선점 협찬을 제안할 수 있습니다. 론칭 전 초기 제작비를 확보하는 데 활용하세요. 론칭 후 구독자 수가 설정 기준에 도달하지 못할 경우의 환불 정책은 계약 시 개별 협의합니다.",
      },
    ],
  },
  {
    section: "광고주 / 스폰서",
    items: [
      {
        q: "광고주 등록에 조건이 있나요?",
        a: "사업자등록증 또는 법인 정보가 필요합니다. 개인 사업자도 등록 가능합니다. 제품/서비스의 적법성 심사를 통과해야 하며, 불법 제품이나 허위 광고 관련 브랜드는 등록이 불가합니다.",
      },
      {
        q: "원하는 크리에이터를 어떻게 찾나요?",
        a: "카테고리, 구독자 수 범위, 평균 조회수, 참여율, 예산 범위, 채널 상태(운영중/오픈예정) 등 다양한 필터로 정밀하게 탐색할 수 있습니다. 채널 상세 페이지에서 포트폴리오, 과거 협찬 이력, 시청자 데모그래픽을 확인하세요.",
      },
      {
        q: "협찬 제안 후 크리에이터가 거절하면 어떻게 되나요?",
        a: "크리에이터가 제안을 거절하거나 7일 내 응답하지 않으면 제안이 자동 만료됩니다. 에스크로 입금은 계약 체결 후에만 요청되므로, 제안 단계에서는 비용이 발생하지 않습니다.",
      },
      {
        q: "성과 리포트는 어떻게 확인하나요?",
        a: "영상 업로드 후 대시보드 > 캠페인 관리에서 실시간 조회수, 노출수, 링크 클릭률 데이터를 확인할 수 있습니다. 캠페인 종료 후 최종 리포트 PDF를 다운로드할 수 있습니다.",
      },
    ],
  },
  {
    section: "결제 & 정산",
    items: [
      {
        q: "어떤 결제 수단을 지원하나요?",
        a: "신용카드, 계좌이체, 세금계산서 발행이 가능합니다. 법인 고객의 경우 월 정산 후 인보이스 방식도 지원합니다.",
      },
      {
        q: "세금계산서를 받을 수 있나요?",
        a: "네, 사업자 등록 광고주에게는 협찬 성사 후 자동으로 세금계산서가 발행됩니다. 계산서 수신 이메일은 대시보드 > 설정에서 관리할 수 있습니다.",
      },
      {
        q: "환불 정책은 어떻게 되나요?",
        a: "영상 업로드 전 취소 시 전액 환불됩니다. 업로드 후에는 콘텐츠 가이드라인 위반이 확인된 경우에 한해 분쟁 조정 절차를 통해 환불이 가능합니다.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-bold text-black leading-relaxed">{q}</span>
        <span className="shrink-0 mt-0.5">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-gray-200 pt-4 bg-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Support</p>
          <h1 className="text-5xl font-black uppercase text-black font-serif leading-none tracking-tight">
            자주 묻는 질문
          </h1>
        </div>
      </div>

      {/* FAQ content */}
      <div className="max-w-7xl mx-auto">
        {faqSections.map((section) => (
          <div key={section.section} className="border-b border-black">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] divide-y md:divide-y-0 md:divide-x divide-black">
              {/* Section label */}
              <div className="p-6 md:p-8 md:sticky md:top-[105px] self-start">
                <p className={cn(
                  "text-xs font-black uppercase tracking-widest text-gray-400 mb-2",
                )}>Section</p>
                <h2 className="text-xl font-black text-black uppercase leading-tight font-serif">
                  {section.section}
                </h2>
                <p className="text-xs text-gray-400 mt-2 font-mono">{section.items.length}개 항목</p>
              </div>
              {/* Items */}
              <div className="divide-y divide-black">
                {section.items.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black gap-0">
          <div className="pb-6 md:pb-0 md:pr-10">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">더 궁금한 점이 있다면</p>
            <p className="text-base font-bold text-black mb-4">이메일로 직접 문의하세요. 영업일 기준 24시간 이내에 답변드립니다.</p>
            <a
              href="mailto:help@viewpoint.kr"
              className="inline-block text-xs font-black uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
            >
              help@viewpoint.kr →
            </a>
          </div>
          <div className="pt-6 md:pt-0 md:pl-10 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3">
              <Link href="/guide/creator" className="text-xs font-black uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                크리에이터 가이드
              </Link>
              <Link href="/guide/sponsor" className="text-xs font-black uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                광고주 가이드
              </Link>
              <Link href="/notice" className="text-xs font-black uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                공지사항
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
