"use client";

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
          <h1 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tight uppercase font-serif">
            Sponsorship<br />Magazine
          </h1>
          <p className="text-base md:text-lg text-gray-700 my-8 font-medium">
            수백만 구독자의 탑 크리에이터부터 기발한 기획의 오픈 예정 채널까지.
            정교한 그리드와 데이터 위에서 당신의 브랜드를 완성할 파트너를 찾아보세요.
          </p>
          <button
            className={cn(
              "bg-black text-white font-bold py-4 px-8 uppercase tracking-widest text-sm",
              "border border-black transition-all hover:bg-white hover:text-black",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            )}
          >
            Explore Channels
          </button>
        </div>
        {/* Right: Grid Images */}
        <div className="p-8 md:p-16 bg-white flex items-center justify-center">
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};

const shuffle = (array: { id: number; src: string }[]) => {
  const arr = [...array];
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
};

const generateSquareData = (shouldShuffle = false) => {
  const creatorImages = channels?.flatMap((c) => c.portfolioImages || []) || [];
  const fallbackImages = [
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1580238053495-b9720401fd45?auto=format&fit=crop&w=400&q=80",
  ];
  const combined =
    creatorImages.length >= 16
      ? creatorImages
      : [...creatorImages, ...fallbackImages, ...fallbackImages, ...fallbackImages, ...fallbackImages];

  const squareData = combined.slice(0, 16).map((src, id) => ({ id, src }));
  const data = shouldShuffle ? shuffle(squareData) : squareData;

  return data.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-gray-200 border border-black"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Initialize without shuffling for server/client hydration match
  const [squares, setSquares] = useState(() => generateSquareData(false));

  useEffect(() => {
    // Shuffle after mount (client-side only)
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquareData(true));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full aspect-square max-w-[450px] gap-0 border border-black">
      {squares.map((sq) => sq)}
    </div>
  );
};
