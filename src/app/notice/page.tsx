import Link from "next/link";
import { ArrowRight } from "lucide-react";

const notices = [
  {
    id: "N-2025-012",
    category: "서비스 업데이트",
    title: "ViewPoint 1.2.0 업데이트 — 채널 분석 대시보드 개선",
    date: "2025-08-15",
    pinned: true,
  },
  {
    id: "N-2025-011",
    category: "정책 변경",
    title: "협찬 수수료 정책 개정 안내 (2025년 9월 1일 시행)",
    date: "2025-08-01",
    pinned: true,
  },
  {
    id: "N-2025-010",
    category: "점검",
    title: "[완료] 서버 정기 점검 안내 — 8월 10일 02:00~04:00",
    date: "2025-08-08",
    pinned: false,
  },
  {
    id: "N-2025-009",
    category: "서비스 업데이트",
    title: "오픈 예정 채널 등록 기능 정식 출시",
    date: "2025-07-20",
    pinned: false,
  },
  {
    id: "N-2025-008",
    category: "이벤트",
    title: "론칭 기념 광고주 수수료 면제 이벤트 종료 안내",
    date: "2025-07-01",
    pinned: false,
  },
  {
    id: "N-2025-007",
    category: "서비스 업데이트",
    title: "전자 계약서 서명 기능 추가 안내",
    date: "2025-06-15",
    pinned: false,
  },
  {
    id: "N-2025-006",
    category: "정책 변경",
    title: "개인정보처리방침 개정 안내 (2025년 7월 1일 시행)",
    date: "2025-06-01",
    pinned: false,
  },
  {
    id: "N-2025-005",
    category: "서비스 업데이트",
    title: "에스크로 결제 시스템 고도화 완료",
    date: "2025-05-20",
    pinned: false,
  },
];

const categoryColors: Record<string, string> = {
  "서비스 업데이트": "border-black text-black",
  "정책 변경": "border-gray-600 text-gray-600",
  "점검": "border-gray-400 text-gray-500",
  "이벤트": "border-black text-black",
};

export default function NoticePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Support</p>
            <h1 className="text-5xl font-black uppercase text-black font-serif leading-none tracking-tight">
              공지사항
            </h1>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            총 {notices.length}건의 공지사항
          </p>
        </div>
      </div>

      {/* Pinned */}
      {notices.filter((n) => n.pinned).length > 0 && (
        <div className="border-b border-black bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">PINNED</p>
          </div>
          <div className="max-w-7xl mx-auto divide-y divide-black border-t border-black">
            {notices.filter((n) => n.pinned).map((notice) => (
              <div
                key={notice.id}
                className="px-6 py-5 grid grid-cols-1 md:grid-cols-[120px_1fr_160px] gap-3 md:gap-0 md:divide-x md:divide-black items-center group cursor-pointer hover:bg-white transition-colors"
              >
                <div className="md:pr-6">
                  <span className={`text-[10px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${categoryColors[notice.category] ?? "border-black text-black"}`}>
                    {notice.category}
                  </span>
                </div>
                <div className="md:px-6">
                  <p className="text-sm font-bold text-black group-hover:underline">
                    {notice.title}
                  </p>
                </div>
                <div className="md:pl-6 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-mono">{notice.date}</span>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-black transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All notices */}
      <div className="max-w-7xl mx-auto border-b border-black divide-y divide-black">
        {notices.filter((n) => !n.pinned).map((notice) => (
          <div
            key={notice.id}
            className="px-6 py-5 grid grid-cols-1 md:grid-cols-[120px_1fr_160px] gap-3 md:gap-0 md:divide-x md:divide-black items-center group cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="md:pr-6">
              <span className={`text-[10px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${categoryColors[notice.category] ?? "border-black text-black"}`}>
                {notice.category}
              </span>
            </div>
            <div className="md:px-6">
              <p className="text-sm font-medium text-black group-hover:underline">
                {notice.title}
              </p>
            </div>
            <div className="md:pl-6 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">{notice.date}</span>
              <ArrowRight size={14} className="text-gray-300 group-hover:text-black transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Support link */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-6">
        <Link href="/faq" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
          FAQ 바로가기 <ArrowRight size={14} />
        </Link>
        <a href="mailto:help@viewpoint.kr" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline text-gray-500">
          help@viewpoint.kr
        </a>
      </div>
    </div>
  );
}
