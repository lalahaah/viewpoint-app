const sections = [
  {
    number: "제 1 조",
    title: "수집하는 개인정보 항목",
    content: `회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.\n\n[필수 항목]\n• 이메일 주소, 비밀번호 (계정 생성)\n• 이름 또는 닉네임\n• 역할 구분 (크리에이터 / 광고주)\n\n[크리에이터 추가 수집]\n• 유튜브 채널 URL 및 채널 정보\n• 정산용 계좌 정보 (계약 성사 시)\n• 사업자등록번호 (사업자인 경우)\n\n[광고주 추가 수집]\n• 브랜드명 및 회사명\n• 사업자등록번호\n• 담당자 연락처\n\n[자동 수집]\n• 서비스 이용 기록, IP 주소, 쿠키, 기기 정보`,
  },
  {
    number: "제 2 조",
    title: "개인정보 수집 방법",
    content: `회사는 다음과 같은 방법으로 개인정보를 수집합니다.\n• 회원가입 및 서비스 이용 과정에서 이용자가 직접 입력\n• 유튜브 OAuth 연동을 통한 채널 정보 수집 (크리에이터)\n• 서비스 이용 중 자동 수집 (쿠키, 로그 분석 도구)`,
  },
  {
    number: "제 3 조",
    title: "개인정보 수집 및 이용 목적",
    content: `① 회원 관리: 회원제 서비스 이용에 따른 본인 확인, 개인 식별, 불량 회원의 부정 이용 방지\n② 서비스 제공: 크리에이터-광고주 매칭 서비스, 에스크로 결제, 정산 처리\n③ 고객 지원: 문의 처리, 분쟁 조정, 고지사항 전달\n④ 서비스 개선: 접속 빈도 파악, 서비스 이용에 관한 통계 분석`,
  },
  {
    number: "제 4 조",
    title: "개인정보 보유 및 이용 기간",
    content: `회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 따라 다음 정보는 아래 기간 동안 보유합니다.\n\n• 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)\n• 대금결제 및 재화 등의 공급에 관한 기록: 5년\n• 소비자의 불만 또는 분쟁처리에 관한 기록: 3년\n• 로그인 기록: 3개월 (통신비밀보호법)`,
  },
  {
    number: "제 5 조",
    title: "개인정보의 제3자 제공",
    content: `회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.\n• 이용자가 사전에 동의한 경우\n• 협찬 계약 성사 시 계약 상대방(크리에이터 또는 광고주)에게 계약 이행에 필요한 최소한의 정보 제공\n• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우`,
  },
  {
    number: "제 6 조",
    title: "개인정보 처리 위탁",
    content: `회사는 서비스 향상을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.\n\n• 수탁업체: (주)토스페이먼츠 / 위탁 업무: 에스크로 결제 처리\n• 수탁업체: Amazon Web Services Inc. / 위탁 업무: 서버 인프라 운영 (데이터 저장)\n• 수탁업체: Google LLC / 위탁 업무: 서비스 분석 (Google Analytics)`,
  },
  {
    number: "제 7 조",
    title: "이용자의 권리와 행사 방법",
    content: `이용자는 언제든지 다음의 권리를 행사할 수 있습니다.\n• 개인정보 열람 요청\n• 오류 등이 있을 경우 정정 요청\n• 삭제 요청\n• 처리 정지 요청\n\n이용자는 개인정보 보호 담당자(privacy@viewpoint.kr)에게 이메일로 권리 행사를 요청할 수 있으며, 회사는 영업일 10일 이내에 처리합니다.`,
  },
  {
    number: "제 8 조",
    title: "개인정보 보호 책임자",
    content: `회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.\n\n• 성명: 홍길동\n• 직책: 개인정보 보호 책임자 (CPO)\n• 이메일: privacy@viewpoint.kr\n• 전화: 02-0000-0000`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black gap-0">
          <div className="pb-8 md:pb-0 md:pr-12">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Legal</p>
            <h1 className="text-5xl font-black uppercase text-black font-serif leading-none tracking-tight">
              개인정보<br />처리방침
            </h1>
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 w-28">시행일</span>
              <span className="text-sm font-bold text-black font-mono">2025년 9월 1일</span>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 w-28">버전</span>
              <span className="text-sm font-bold text-black font-mono">v2.0</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 w-28">운영사</span>
              <span className="text-sm font-bold text-black">(주)라운드미디어</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="border-b border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            주식회사 라운드미디어(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>
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
              <h2 className="text-base font-black uppercase text-black leading-tight">{section.title}</h2>
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
          개인정보 처리방침에 관한 문의는{" "}
          <a href="mailto:privacy@viewpoint.kr" className="underline">privacy@viewpoint.kr</a>
          {" "}로 연락주세요. 시행일: 2025년 9월 1일.
        </p>
      </div>
    </div>
  );
}
