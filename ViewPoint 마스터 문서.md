# ViewPoint (뷰포인트) - 전체 기획 및 구현 마스터 문서

> 

**[개요]**
본 문서는 유튜브 협찬 마켓플레이스 'ViewPoint'의 전체 기획안입니다.
1단계(아키텍처), 2단계(디자인 시스템 및 컴포넌트 코드), 3단계(개발 마스터 플랜)가 모두 포함되어 있습니다. **Claude Code**를 통한 자율 개발(Autonomous Coding) 시 이 문서를 최우선 진실의 원천(Source of Truth)으로 삼아 주십시오.

## 🟢 [1단계] 아키텍처 및 시스템 리서치

### 1. 비즈니스 도메인 분석

- **서비스 정의**: 유튜브 크리에이터(대리인)가 채널(운영 중 & 오픈 예정)을 등록하고, 광고주가 조건에 맞는 채널을 검색하여 사전 스폰서십(광고)을 제안/성사시키는 B2B 플랫폼.
- **핵심 타겟**:

- **크리에이터**: 채널 홍보, 신규 론칭 예정 채널의 초기 광고비/제작 지원금 확보.
- **광고주/스폰서**: 타겟 고객층에 맞는 유튜버 검색 및 효율적인 광고 집행. 신규 채널 선점.

### 2. 기술 스택 (대규모 트래픽 대응 SaaS)

- **Frontend**: Next.js (App Router), Tailwind CSS, Framer Motion, Zustand
- **Backend**: Next.js API Routes (Serverless)
- **Database**: PostgreSQL (Supabase/Neon) + Prisma ORM
- **Authentication**: NextAuth.js (Role-based: CREATOR / SPONSOR)

## 🔵 [2단계] 디자인 시스템 및 핵심 UI 컴포넌트 🔥 (NEW: 에디토리얼 매거진 스타일)

### 1. ViewPoint 디자인 시스템 (Tailwind CSS 기준)

플랫폼의 디자인은 철저한 그리드 기반의 **'아트 매거진 / 에디토리얼(Editorial) / 브루탈리즘(Brutalism)' 스타일**을 지향합니다. 그림자나 둥근 모서리를 배제하고, 선(Border)과 타이포그래피, 흑백의 대비를 강조합니다.

- **절대 규칙 (Strict Rules)**

1. **No Shadows**: `shadow`, `shadow-md` 등 그림자 효과 절대 사용 금지.
1. **Sharp Corners**: `rounded-lg`, `rounded-xl` 사용 금지. 버튼, 카드, 이미지 등 모든 요소는 `rounded-none` (직각)을 기본으로 하며, 태그(Tag)에 한해 얇은 알약 모양(`rounded-full`)만 허용.
1. **Strict Grid Lines**: 요소와 요소를 구분할 때 1px의 얇은 실선(`border border-black` 또는 `border border-gray-300`)을 적극 사용. `divide-y`, `divide-x`를 활용하여 엑셀이나 잡지 그리드처럼 디자인할 것.
- **Color Palette (색상)**

- **배경**: `bg-white`를 95% 이상 사용. 여백(Margin/Padding)을 넓게 줄 것.
- **텍스트**: `text-black` (또는 `text-gray-900`).
- **포인트 컬러**: 특정 뱃지나 태그 선에만 포인트 컬러(예: 얇은 파란 실선)를 최소한으로 사용. 버튼은 대부분 플랫한 `bg-black text-white` 조합 사용.

### 2. 핵심 UI 컴포넌트 코드 (Reference Code)

Claude Code는 메인 랜딩 페이지와 안내 페이지를 구현할 때 반드시 아래 제공된 에디토리얼 스타일의 React 코드를 `components/` 디렉토리에 생성하여 사용하십시오.

#### 2.1. 메인 랜딩 히어로 섹션 (`ShuffleHero.tsx`) - 에디토리얼(직각/선 강조) 스타일

```
"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { channels } from "@/lib/mockData"; 

export const ShuffleHero = () => {
  return (
    <section className="w-full border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto divide-y md:divide-y-0 md:divide-x divide-black">
        {/* Left: Typography Focus */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
          <span className="block mb-4 text-xs font-bold tracking-widest uppercase border border-black px-3 py-1 w-fit rounded-full">
            ViewPoint Marketplace
          </span>
          <h3 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tight uppercase font-serif">
            Sponsorship<br />Magazine
          </h3>
          <p className="text-base md:text-lg text-gray-700 my-8 font-medium">
            수백만 구독자의 탑 크리에이터부터 기발한 기획의 오픈 예정 채널까지. 
            정교한 그리드와 데이터 위에서 당신의 브랜드를 완성할 파트너를 찾아보세요.
          </p>
          <button className={cn(
            "bg-black text-white font-bold py-4 px-8 uppercase tracking-widest text-sm",
            "border border-black transition-all hover:bg-white hover:text-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          )}>
            Explore Channels
          </button>
        </div>
        {/* Right: Grid Images */}
        <div className="p-8 md:p-16 bg-gray-50 flex items-center justify-center">
            <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const generateSquares = () => {
  const creatorImages = channels?.flatMap(c => c.portfolioImages || []) || [];
  const fallbackImages = [
    "[https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1740&q=80](https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1740&q=80)",
    "[https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=687&q=80](https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=687&q=80)",
    "[https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?auto=format&fit=crop&w=687&q=80](https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?auto=format&fit=crop&w=687&q=80)",
    "[https://images.unsplash.com/photo-1580238053495-b9720401fd45?auto=format&fit=crop&w=687&q=80](https://images.unsplash.com/photo-1580238053495-b9720401fd45?auto=format&fit=crop&w=687&q=80)",
  ];
  const combinedImages = creatorImages.length >= 16 ? creatorImages : [...creatorImages, ...fallbackImages, ...fallbackImages, ...fallbackImages, ...fallbackImages];
  const squareData = combinedImages.slice(0, 16).map((src, id) => ({ id, src }));

  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-gray-200 border border-black" 
      // 💡 둥근 모서리(rounded) 제거, 검은 실선 테두리 적용
      style={{ backgroundImage: `url(${sq.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full aspect-square max-w-[450px] gap-0 border border-black">
        {/* 💡 gap을 0으로 하고 테두리를 주어 잡지 레이아웃 구현 */}
      {squares.map((sq) => sq)}
    </div>
  );
};

```

#### 2.2. 크리에이터/광고주 안내 페이지 컴포넌트 (`BentoGridShowcase.tsx`) - 에디토리얼 스타일

```
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

interface BentoGridShowcaseProps {
  integration: React.ReactNode;
  trackers: React.ReactNode;
  statistic: React.ReactNode;
  focus: React.ReactNode;
  productivity: React.ReactNode;
  shortcuts: React.ReactNode;
  className?: string;
}

export const BentoGridShowcase = ({
  integration, trackers, statistic, focus, productivity, shortcuts, className,
}: BentoGridShowcaseProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        // 💡 갭(gap)을 실선(divide) 디자인으로 교체하기 위해 gap-0과 border 속성 사용
        "grid w-full grid-cols-1 md:grid-cols-3 md:grid-rows-3 auto-rows-[minmax(180px,auto)] border border-black",
        className
      )}
    >
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3 border-b md:border-b-0 md:border-r border-black p-6">{integration}</motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 border-b md:border-r border-black p-6">{trackers}</motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 border-b border-black p-6">{statistic}</motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 border-b md:border-r border-black p-6">{focus}</motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 border-b border-black p-6">{productivity}</motion.div>
      <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 border-t-0 md:border-t border-black p-6 bg-black text-white">{shortcuts}</motion.div>
    </motion.section>
  );
};

```

## 🟣 [3단계] 마스터 구현 플랜 (Claude Code 프롬프트용)

> 

**[Claude를 위한 시스템 프롬프트 지시사항]**
너는 지금부터 대규모 트래픽을 감당하는 SaaS 플랫폼 'ViewPoint'를 구축하는 시니어 풀스택 개발자다.
Next.js (App Router), Tailwind CSS, Framer Motion, Zustand를 사용하여 개발하며, 이 문서에 명시된 **에디토리얼/매거진 디자인 시스템(1px border, 직각, 그림자 배제)**과 **폴더 구조**, **라우팅 명세**를 절대적으로 준수하여 코드를 작성하라.

*(...데이터 스키마 및 폴더 구조는 이전과 동일하여 생략 - Claude Code 실행 시 원본 스키마 유지...)*

### 3. 고객지원 및 약관 상세 텍스트 (Copywriting)

*(...고객지원 상세 텍스트 이전과 동일...)*

### 4. 단계별 구현 명령 가이드 (Claude Code Execution Steps)

> 

**[사용법]** Claude Code (CLI) 환경에서 프로젝트 폴더에 접속한 뒤, 아래 Step 단위로 명령을 입력하여 자율적으로 코드를 작성하게 하십시오.

- **Step 1 명령**:

> 

"Read `ViewPoint_Master_Document.md`. Execute Step 1: Next.js App Router 프로젝트를 초기화하고 필요한 패키지(Tailwind, Framer Motion, Zustand, lucide-react)를 설치해. 문서의 2단계 디자인 시스템(에디토리얼 매거진 스타일: 그림자 없음, 라운드 없음, 1px black border 강조)을 명심해. `src/lib/mockData.ts`에 가짜 데이터를 생성하고, 2단계 코드를 복사하여 직각 형태의 `ShuffleHero.tsx`와 `BentoGridShowcase.tsx`를 생성해. 마지막으로 `Navigation`과, (주)라운드미디어 정보가 포함된 `Footer`를 매거진 스타일로 작성해 기본 `Layout`을 구축해."
- **Step 2 명령**:

> 

"Execute Step 2: `/` 메인 랜딩 페이지를 구현해. 상단에 `ShuffleHero`를 배치하고, 그 아래 `ChannelGrid`와 `ChannelCard`를 구현해. **주의:** 모든 카드는 잡지 레이아웃처럼 그림자(`shadow`)가 없고 직각(`rounded-none`)이며, `border border-black`으로 둘러싸야 해. 카테고리 태그도 얇은 실선의 알약 형태로만 만들어. 필터링 및 검색 로직도 작동하게 해."
- **Step 3 명령**:

> 

"Execute Step 3: `/guide/creator`, `/guide/sponsor` 페이지와 고객지원 4개 페이지(`/notice`, `/faq`, `/terms`, `/privacy`)를 구축해. 모든 페이지는 1px 실선 그리드가 돋보이는 모노톤 기반의 브루탈리즘(Brutalism) 잡지 레이아웃으로 디자인해."
- **Step 4 명령**:

> 

"Execute Step 4: 메인 페이지의 `ChannelModal`을 Framer Motion으로 구현해. 둥근 팝업이 아닌 각진 창으로 뜨게 하고, 모달 내부의 단가표, 갤러리 슬라이더 등도 실선 그리드(`divide-y`, `divide-x`, `border-black`)로 구역을 정확히 나누어 디자인해."
- **Step 5 명령**:

> 

"Execute Step 5: 회원가입(`/signup`)과 로그인(`/login`) 페이지를 모노톤 기반 에디토리얼 폼(Form)으로 만들고 Zustand(`authStore`)로 연결해."
- **Step 6 명령**:

> 

"Execute Step 6: 로그인 후 접속하는 `/dashboard/creator` 및 `/dashboard/sponsor` 대시보드를 구축해. 대시보드 역시 일반적인 둥근 UI가 아니라, 선으로 딱딱 나뉜 스프레드시트/잡지 목차와 같은 딱 떨어지는 직각 UI(`rounded-none`, `border-black`)로 모든 메뉴를 구현해."