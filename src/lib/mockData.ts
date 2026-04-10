export type ChannelCategory =
  | "테크/IT"
  | "뷰티/패션"
  | "음식/요리"
  | "여행/라이프"
  | "교육/자기계발"
  | "게임"
  | "금융/경제"
  | "스포츠/피트니스"
  | "엔터테인먼트";

export type ChannelStatus = "ACTIVE" | "UPCOMING";

export interface SponsorshipPackage {
  name: string;
  price: number;
  description: string;
}

export interface Channel {
  id: string;
  name: string;
  handle: string;
  category: ChannelCategory;
  status: ChannelStatus;
  subscriberCount: number;
  avgViews: number;
  engagementRate: number;
  thumbnailUrl: string;
  portfolioImages: string[];
  description: string;
  packages: SponsorshipPackage[];
  tags: string[];
  launchDate?: string;
}

export const channels: Channel[] = [
  {
    id: "ch-001",
    name: "테크인사이드",
    handle: "@techinside_kr",
    category: "테크/IT",
    status: "ACTIVE",
    subscriberCount: 850000,
    avgViews: 120000,
    engagementRate: 4.2,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "국내 최고의 테크 리뷰 채널. 최신 스마트폰, 노트북, AI 기기를 심층 분석합니다. MZ세대 얼리어답터 구독자 비중 68%.",
    packages: [
      { name: "숏폼 통합 패키지", price: 3500000, description: "유튜브 쇼츠 + 커뮤니티 게시글 노출" },
      { name: "풀 스폰서십", price: 8000000, description: "15분 이상 영상 전체 광고 + 설명란 링크" },
      { name: "프리미엄 통합", price: 15000000, description: "풀 스폰서십 + SNS 크로스 포스팅 + 전담 매니저" },
    ],
    tags: ["테크", "IT", "리뷰", "얼리어답터"],
  },
  {
    id: "ch-002",
    name: "글로우업 스튜디오",
    handle: "@glowup_studio",
    category: "뷰티/패션",
    status: "ACTIVE",
    subscriberCount: 1200000,
    avgViews: 350000,
    engagementRate: 6.8,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "뷰티 & 라이프스타일 종합 채널. 20-35세 여성 구독자 79%. 뷰티 브랜드와의 협업 경험 다수.",
    packages: [
      { name: "제품 리뷰 패키지", price: 5000000, description: "5분 이상 제품 상세 리뷰 영상" },
      { name: "겟레디위드미 통합", price: 9000000, description: "GRWM 영상 + 인스타그램 릴스 연동" },
      { name: "브랜드 앰배서더", price: 25000000, description: "월간 전속 파트너십 (영상 3편 보장)" },
    ],
    tags: ["뷰티", "메이크업", "스킨케어", "패션"],
  },
  {
    id: "ch-003",
    name: "요리하는 남자",
    handle: "@cookingman_kr",
    category: "음식/요리",
    status: "ACTIVE",
    subscriberCount: 620000,
    avgViews: 95000,
    engagementRate: 5.1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "30-50대 주부/직장인 구독자. 실용적인 집밥 레시피와 식재료 리뷰. 식품/주방기기 협찬 적합.",
    packages: [
      { name: "식재료 협찬 리뷰", price: 2000000, description: "영상 내 식재료/제품 자연스러운 노출" },
      { name: "레시피 스폰서십", price: 4500000, description: "브랜드 전용 레시피 개발 + 영상화" },
      { name: "풀 스폰서십", price: 8000000, description: "오프닝 + 미드롤 + 설명란 풀패키지" },
    ],
    tags: ["요리", "레시피", "집밥", "식품"],
  },
  {
    id: "ch-004",
    name: "노마드 준",
    handle: "@nomad_jun",
    category: "여행/라이프",
    status: "ACTIVE",
    subscriberCount: 450000,
    avgViews: 75000,
    engagementRate: 7.3,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "디지털 노마드 라이프스타일 채널. 항공/숙박/여행 관련 브랜드 협찬 최적. 25-40세 직장인 비중 높음.",
    packages: [
      { name: "여행 브이로그 통합", price: 3000000, description: "여행지 내 브랜드 노출 + 링크" },
      { name: "단독 리뷰 영상", price: 6000000, description: "항공/호텔 등 단독 리뷰 영상 제작" },
    ],
    tags: ["여행", "노마드", "라이프스타일", "항공"],
  },
  {
    id: "ch-005",
    name: "핀테크 브레인",
    handle: "@fintechbrain",
    category: "금융/경제",
    status: "ACTIVE",
    subscriberCount: 380000,
    avgViews: 110000,
    engagementRate: 8.9,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "주식/ETF/부동산/암호화폐 분석. 30-45세 고소득 직장인 구독자 다수. 핀테크/증권/보험사 협찬 적합.",
    packages: [
      { name: "미드롤 광고", price: 4000000, description: "영상 중간 삽입 광고 (30초~1분)" },
      { name: "브랜디드 콘텐츠", price: 9000000, description: "금융 상품 분석 브랜디드 콘텐츠" },
      { name: "프리미엄 통합", price: 18000000, description: "시리즈 스폰서십 (월 4편 보장)" },
    ],
    tags: ["주식", "경제", "ETF", "부동산", "금융"],
  },
  {
    id: "ch-006",
    name: "런치박스 피트니스",
    handle: "@lunchbox_fit",
    category: "스포츠/피트니스",
    status: "ACTIVE",
    subscriberCount: 295000,
    avgViews: 58000,
    engagementRate: 9.2,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "직장인 점심시간 활용 홈트/운동 채널. 보충제/스포츠웨어/헬스케어 기기 협찬 활발. 높은 참여율.",
    packages: [
      { name: "제품 협찬 리뷰", price: 1800000, description: "운동 중 제품 자연스러운 노출 + 리뷰" },
      { name: "스폰서십 통합", price: 4000000, description: "오프닝 + 제품 리뷰 + 할인코드 제공" },
    ],
    tags: ["피트니스", "홈트", "다이어트", "헬스"],
  },
  {
    id: "ch-007",
    name: "AI 코딩스쿨",
    handle: "@aicodingschool",
    category: "교육/자기계발",
    status: "UPCOMING",
    subscriberCount: 0,
    avgViews: 0,
    engagementRate: 0,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "전직 네이버 AI 엔지니어 운영 예정 채널. Python, LLM, 개인 AI 프로젝트 실무 튜토리얼. 2025년 Q3 런칭 목표. IT 서비스/SaaS 브랜드 초기 선점 기회.",
    launchDate: "2025-09-01",
    packages: [
      { name: "론칭 파트너 패키지", price: 2500000, description: "채널 오픈 첫 5편 영상 스폰서십 (선점 할인)" },
      { name: "시드 스폰서십", price: 6000000, description: "채널 오픈 3개월간 독점 카테고리 스폰서" },
    ],
    tags: ["AI", "코딩", "파이썬", "개발", "오픈예정"],
  },
  {
    id: "ch-008",
    name: "씨네마틱 리뷰",
    handle: "@cinematic_review",
    category: "엔터테인먼트",
    status: "ACTIVE",
    subscriberCount: 720000,
    avgViews: 180000,
    engagementRate: 5.5,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    portfolioImages: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "영화/드라마/OTT 심층 리뷰. 20-45세 문화 소비층. OTT 플랫폼/팝콘/스낵 브랜드 협찬 다수 경험.",
    packages: [
      { name: "오프닝 스폰서", price: 2500000, description: "영상 오프닝 30초 브랜드 노출" },
      { name: "풀 스폰서십", price: 6500000, description: "오프닝 + 미드롤 + 썸네일 로고" },
    ],
    tags: ["영화", "드라마", "OTT", "리뷰", "엔터"],
  },
];

export const categories: ChannelCategory[] = [
  "테크/IT",
  "뷰티/패션",
  "음식/요리",
  "여행/라이프",
  "교육/자기계발",
  "게임",
  "금융/경제",
  "스포츠/피트니스",
  "엔터테인먼트",
];
