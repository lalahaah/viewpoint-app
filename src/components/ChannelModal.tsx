"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Users,
  Eye,
  TrendingUp,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Channel } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface ChannelModalProps {
  channel: Channel | null;
  onClose: () => void;
}

const formatNumber = (n: number): string => {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}만`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}천`;
  return String(n);
};

const formatPrice = (price: number): string =>
  `₩${price.toLocaleString("ko-KR")}`;

export const ChannelModal = ({ channel, onClose }: ChannelModalProps) => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Reset gallery index when channel changes
  useEffect(() => {
    setGalleryIndex(0);
  }, [channel?.id]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (channel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [channel]);

  const images = channel?.portfolioImages ?? [];
  const isUpcoming = channel?.status === "UPCOMING";

  const prevImage = () =>
    setGalleryIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () =>
    setGalleryIndex((i) => (i + 1) % images.length);

  return (
    <AnimatePresence>
      {channel && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 28 }}
            className={cn(
              "fixed z-50 bg-white border border-black",
              "top-4 left-4 right-4 bottom-4",
              "md:top-8 md:left-1/2 md:-translate-x-1/2 md:right-auto md:bottom-auto",
              "md:w-full md:max-w-5xl md:max-h-[90vh]",
              "overflow-y-auto flex flex-col"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="border-b border-black flex items-stretch shrink-0">
              <div className="flex-1 px-6 py-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">
                  {channel.handle}
                </p>
                <h2 className="text-2xl font-black uppercase tracking-tight text-black leading-tight">
                  {channel.name}
                </h2>
              </div>
              {/* Status badge */}
              <div className="border-l border-black px-5 flex items-center">
                <span
                  className={cn(
                    "text-xs font-black uppercase tracking-widest px-3 py-1 border border-black",
                    channel.status === "UPCOMING"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  )}
                >
                  {channel.status === "UPCOMING" ? "OPEN SOON" : "ACTIVE"}
                </span>
              </div>
              {/* Close button */}
              <button
                onClick={onClose}
                className="border-l border-black px-5 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
                aria-label="닫기"
              >
                <X size={20} className="text-black group-hover:text-white" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row flex-1 min-h-0">
              {/* Left Column - Data & Content */}
              <div className="md:w-[55%] flex flex-col border-b md:border-b-0 md:border-r border-black overflow-y-auto">

                {/* Gallery Slider */}
                <div className="relative aspect-video bg-gray-100 border-b border-black overflow-hidden shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={galleryIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${images[galleryIndex]})` }}
                    />
                  </AnimatePresence>

                  {/* Prev / Next */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-0 top-0 bottom-0 px-3 flex items-center bg-black/0 hover:bg-black/30 transition-colors"
                        aria-label="이전 이미지"
                      >
                        <ChevronLeft size={24} className="text-white drop-shadow" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-0 top-0 bottom-0 px-3 flex items-center bg-black/0 hover:bg-black/30 transition-colors"
                        aria-label="다음 이미지"
                      >
                        <ChevronRight size={24} className="text-white drop-shadow" />
                      </button>
                    </>
                  )}

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setGalleryIndex(i)}
                        className={cn(
                          "w-1.5 h-1.5 border border-white transition-colors",
                          i === galleryIndex ? "bg-white" : "bg-white/30"
                        )}
                        aria-label={`이미지 ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="absolute top-3 right-3 bg-black text-white text-[10px] font-mono font-bold px-2 py-1 border border-white/30">
                    {galleryIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Description */}
                <div className="px-6 py-5 border-b border-black">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    채널 소개
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {channel.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {channel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest border border-black px-2 py-0.5 rounded-none text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4-Metric Grid or Pre-launch Box */}
                {isUpcoming ? (
                  <>
                    {/* Pre-launch: Launch Date Box */}
                    <div className="px-6 py-6 border-b border-black bg-gray-50">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                        론칭 예정일
                      </p>
                      <div className="border-t border-b border-black py-4">
                        <p className="text-2xl font-black text-black">
                          {channel.launchDate ?? "미정"}
                        </p>
                      </div>
                    </div>

                    {/* Pitch Deck Download */}
                    <div className="px-6 py-5 border-b border-black hover:bg-gray-50 transition-colors cursor-pointer">
                      <button className="w-full flex items-center gap-3 text-left">
                        <Download size={16} className="text-gray-500 shrink-0" />
                        <div>
                          <p className="text-sm font-black text-black">기획안(Pitch Deck) 다운로드</p>
                          <p className="text-xs text-gray-500 mt-1">PDF 형식의 채널 기획안</p>
                        </div>
                      </button>
                    </div>

                    {/* Creator Skills + Milestone Timeline */}
                    <div className="divide-x divide-black border-b border-black grid grid-cols-2">
                      {/* Left: Creator Skills */}
                      <div className="px-6 py-5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                          제작진 역량
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-black shrink-0 mt-0.5" />
                            <span className="text-xs text-black font-medium">YouTube 파트너십 경험</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-black shrink-0 mt-0.5" />
                            <span className="text-xs text-black font-medium">3년+ 콘텐츠 제작 경력</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-black shrink-0 mt-0.5" />
                            <span className="text-xs text-black font-medium">스튜디오 인프라 구축</span>
                          </li>
                        </ul>
                      </div>

                      {/* Right: Milestone Timeline */}
                      <div className="px-6 py-5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                          런칭 마일스톤
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Clock size={14} className="text-black shrink-0 mt-0.5" />
                            <span className="text-xs text-black font-medium">기획 완료: 2025년 Q2</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock size={14} className="text-black shrink-0 mt-0.5" />
                            <span className="text-xs text-black font-medium">촬영 및 편집: Q3</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Clock size={14} className="text-black shrink-0 mt-0.5" />
                            <span className="text-xs text-black font-medium">공식 런칭: 2025년 9월</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Active: 4-Metric Grid */
                  <div className="grid grid-cols-2 divide-x divide-y divide-black border-b border-black">
                    <div className="px-4 py-4 flex flex-col items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <span className="text-lg font-black text-black leading-none">
                        {formatNumber(channel.subscriberCount)}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        구독자
                      </span>
                    </div>
                    <div className="px-4 py-4 flex flex-col items-center gap-1">
                      <Eye size={14} className="text-gray-400" />
                      <span className="text-lg font-black text-black leading-none">
                        {formatNumber(channel.avgViews)}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        평균 조회수
                      </span>
                    </div>
                    <div className="px-4 py-4 flex flex-col items-center gap-1">
                      <TrendingUp size={14} className="text-gray-400" />
                      <span className="text-lg font-black text-black leading-none">
                        {channel.engagementRate}%
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        참여율
                      </span>
                    </div>
                    <div className="px-4 py-4 flex flex-col items-center gap-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-lg font-black text-black leading-none">
                        --
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        평균 시청 지속시간
                      </span>
                    </div>
                  </div>
                )}

                {/* Viewer Demographics */}
                {!isUpcoming && (
                  <div className="px-6 py-5 border-b border-black">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                      주요 시청자층
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">20-30세</span>
                        <div className="flex-1 ml-4 h-2 bg-gray-200 border border-black" style={{ width: "60%" }} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">30-40세</span>
                        <div className="flex-1 ml-4 h-2 bg-gray-200 border border-black" style={{ width: "25%" }} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">40세 이상</span>
                        <div className="flex-1 ml-4 h-2 bg-gray-200 border border-black" style={{ width: "15%" }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Recent References */}
                {!isUpcoming && (
                  <div className="px-6 py-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                      최근 협찬 레퍼런스
                    </p>
                    <div className="space-y-2">
                      <div className="border border-black px-3 py-2">
                        <p className="text-xs font-bold text-black">브랜드 A - 제품 리뷰 영상</p>
                        <p className="text-[10px] text-gray-500">2025년 3월</p>
                      </div>
                      <div className="border border-black px-3 py-2">
                        <p className="text-xs font-bold text-black">브랜드 B - 스폰서십</p>
                        <p className="text-[10px] text-gray-500">2025년 2월</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sales & CTA */}
              <div className="md:w-[45%] flex flex-col overflow-y-auto">
                {/* Section header */}
                <div className="px-6 py-4 border-b border-black bg-black text-white shrink-0">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
                    Sponsorship Packages
                  </p>
                  <h3 className="text-lg font-black uppercase tracking-tight leading-tight">
                    스폰서십 단가표
                  </h3>
                </div>

                {/* Package rows */}
                <div className="divide-y divide-black flex-1">
                  {channel.packages.map((pkg, i) => (
                    <div key={i} className="px-6 py-5 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                            Package {String(i + 1).padStart(2, "0")}
                          </p>
                          <p className="text-sm font-black text-black leading-tight">
                            {pkg.name}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-lg font-black text-black leading-none">
                            {formatPrice(pkg.price)}
                          </p>
                          <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                            (VAT 별도)
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200 pt-2">
                        {pkg.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Risk Guarantee (Pre-launch only) */}
                {isUpcoming && (
                  <div className="px-6 py-6 border-b border-black bg-black text-white">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                      광고주 안심 보장제
                    </p>
                    <div className="border border-white px-4 py-3">
                      <p className="text-xs font-bold text-white leading-relaxed">
                        채널 론칭 후 합의 조회수에 미달할 경우<br/>
                        광고료의 전액 또는 일부를 보상해 드립니다.
                      </p>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="border-t border-black p-6 shrink-0">
                  <p className="text-[10px] text-gray-500 leading-relaxed mb-4">
                    {isUpcoming
                      ? "선점 협찬 기회를 놓치지 마세요. 아래 버튼으로 담당 매니저에게 연락할 수 있습니다."
                      : "스폰서십 문의는 로그인 후 제안서를 작성하거나, 아래 버튼으로 담당 매니저에게 직접 연락할 수 있습니다."
                    }
                  </p>
                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-black text-white font-black uppercase tracking-widest text-sm py-3.5 border border-black hover:bg-white hover:text-black transition-colors">
                      스폰서십 제안하기 →
                    </button>
                    <button className="w-full bg-white text-black font-black uppercase tracking-widest text-sm py-3 border border-black hover:bg-gray-50 transition-colors">
                      {isUpcoming ? "문의 저장" : "관심 채널 담기"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
