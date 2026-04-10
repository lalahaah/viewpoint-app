const sections = [
  {
    number: "제 1 조",
    title: "목적",
    content: `이 약관은 주식회사 라운드미디어(이하 "회사")가 운영하는 ViewPoint 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.`,
  },
  {
    number: "제 2 조",
    title: "정의",
    content: `① "서비스"란 회사가 제공하는 유튜브 협찬 마켓플레이스 ViewPoint 및 이에 관련된 제반 서비스를 의미합니다.\n② "이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.\n③ "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 말합니다.\n④ "크리에이터"란 유튜브 채널을 보유하고 협찬 제안을 수락하는 역할의 회원을 말합니다.\n⑤ "광고주"란 크리에이터에게 협찬을 제안하고 광고를 집행하는 역할의 회원을 말합니다.`,
  },
  {
    number: "제 3 조",
    title: "약관의 효력 및 변경",
    content: `① 이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.\n② 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 공지합니다.`,
  },
  {
    number: "제 4 조",
    title: "서비스 이용 계약",
    content: `① 이용 계약은 이용자가 되고자 하는 자가 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.\n② 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용 계약을 해지할 수 있습니다.\n  1. 가입 신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우\n  2. 실명이 아니거나 타인의 명의를 이용한 경우\n  3. 허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않은 경우`,
  },
  {
    number: "제 5 조",
    title: "수수료 정책",
    content: `① 서비스 이용 자체는 무료입니다. 회사는 협찬 계약이 성사된 경우에 한해 거래 금액의 8%(VAT 별도)를 플랫폼 수수료로 부과합니다.\n② 수수료는 에스크로 금액에서 자동 공제되며, 크리에이터와 광고주 각각에게 거래 내역이 고지됩니다.\n③ 회사는 수수료율을 변경할 경우 변경 적용일 30일 전에 사전 공지합니다.`,
  },
  {
    number: "제 6 조",
    title: "에스크로 결제 및 정산",
    content: `① 협찬 계약 체결 후 광고주는 협찬비 전액을 회사의 에스크로 계좌에 입금합니다.\n② 크리에이터가 약정된 콘텐츠를 업로드하고 회사가 이행을 확인한 날로부터 영업일 7일 이내에 정산이 완료됩니다.\n③ 크리에이터가 약정 기한 내 콘텐츠를 업로드하지 않을 경우, 광고주는 환불을 요청할 수 있으며 회사는 영업일 5일 이내에 처리합니다.`,
  },
  {
    number: "제 7 조",
    title: "서비스 이용 제한",
    content: `① 이용자는 다음 각 호에 해당하는 행위를 해서는 안 됩니다.\n  1. 허위 정보 등록 또는 타인의 정보 도용\n  2. 플랫폼 외부 직거래를 통한 수수료 우회\n  3. 불법적인 제품 또는 서비스의 협찬 제안\n  4. 저작권, 상표권 등 타인의 지식재산권 침해\n② 회사는 전 항을 위반한 이용자의 서비스 이용을 제한하거나 계정을 영구 정지할 수 있습니다.`,
  },
  {
    number: "제 8 조",
    title: "책임 한계",
    content: `① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.\n② 회사는 이용자 간의 협찬 계약 내용에 대한 책임을 지지 않으며, 분쟁 발생 시 조정자 역할만을 수행합니다.`,
  },
  {
    number: "제 9 조",
    title: "준거법 및 재판관할",
    content: `이 약관의 해석 및 회사와 이용자 간의 분쟁에 대하여는 대한민국의 법률을 적용하며, 분쟁으로 인한 소송은 서울중앙지방법원을 전속 관할로 합니다.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black gap-0">
          <div className="pb-8 md:pb-0 md:pr-12">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Legal</p>
            <h1 className="text-5xl font-black uppercase text-black font-serif leading-none tracking-tight">
              이용약관
            </h1>
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 w-24">시행일</span>
              <span className="text-sm font-bold text-black font-mono">2025년 9월 1일</span>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 w-24">버전</span>
              <span className="text-sm font-bold text-black font-mono">v2.0</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 w-24">운영사</span>
              <span className="text-sm font-bold text-black">(주)라운드미디어</span>
            </div>
          </div>
        </div>
      </div>

      {/* TOC */}
      <div className="border-b border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Table of Contents</p>
          <div className="flex flex-wrap gap-x-0 gap-y-0 border border-black divide-x divide-y divide-black">
            {sections.map((s) => (
              <a
                key={s.number}
                href={`#${s.number}`}
                className="text-xs font-bold text-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
              >
                {s.number} {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto divide-y divide-black border-b border-black">
        {sections.map((section) => (
          <div
            key={section.number}
            id={section.number}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] divide-y md:divide-y-0 md:divide-x divide-black"
          >
            <div className="p-6 md:p-8 bg-gray-50">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{section.number}</p>
              <h2 className="text-base font-black uppercase text-black">{section.title}</h2>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-xs text-gray-400 leading-relaxed">
          본 약관은 2025년 9월 1일부터 시행됩니다. 이전 약관은{" "}
          <a href="mailto:help@viewpoint.kr" className="underline">help@viewpoint.kr</a>
          {" "}로 문의하시면 열람하실 수 있습니다.
        </p>
      </div>
    </div>
  );
}
