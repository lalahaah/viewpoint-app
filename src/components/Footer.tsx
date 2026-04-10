import Link from "next/link";

const footerLinks = {
  서비스: [
    { href: "/guide/creator", label: "크리에이터 안내" },
    { href: "/guide/sponsor", label: "광고주 안내" },
    { href: "/faq", label: "자주 묻는 질문" },
    { href: "/notice", label: "공지사항" },
  ],
  약관: [
    { href: "/terms", label: "이용약관" },
    { href: "/privacy", label: "개인정보처리방침" },
  ],
  고객지원: [
    { href: "mailto:help@viewpoint.kr", label: "help@viewpoint.kr" },
    { href: "/faq", label: "문의하기" },
  ],
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-black bg-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black">
          {/* Brand column */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-0 mb-4">
                <span className="text-xl font-black uppercase tracking-tighter text-black font-serif leading-none">
                  VIEW
                </span>
                <span className="text-xl font-black uppercase tracking-tighter text-white bg-black px-1 leading-none font-serif">
                  POINT
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                크리에이터와 브랜드를 잇는<br />
                대한민국 대표 유튜브 협찬 마켓플레이스
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest font-medium">
              © 2025 ViewPoint
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="p-8 md:p-10">
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-6 border-b border-black pb-3">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black hover:underline transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom legal bar */}
        <div className="border-t border-black px-8 md:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <address className="not-italic text-xs text-gray-500 leading-relaxed">
            <span className="font-bold text-black">(주)라운드미디어</span>
            &nbsp;|&nbsp;대표이사: 홍길동&nbsp;|&nbsp;사업자등록번호: 000-00-00000
            <br className="md:hidden" />
            &nbsp;|&nbsp;통신판매업신고: 제2025-서울강남-00000호&nbsp;|&nbsp;주소: 서울특별시 강남구 테헤란로 123, 5층
          </address>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            ViewPoint is a service of Round Media Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
