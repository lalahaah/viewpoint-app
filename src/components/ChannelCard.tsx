"use client";

import { motion } from "framer-motion";
import { Eye, Users, TrendingUp, Calendar } from "lucide-react";
import { Channel } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface ChannelCardProps {
  channel: Channel;
  index: number;
  onClick: (channel: Channel) => void;
}

const formatNumber = (n: number): string => {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}만`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}천`;
  return String(n);
};

const formatPrice = (price: number): string =>
  `₩${(price / 10000).toFixed(0)}만`;

export const ChannelCard = ({ channel, index, onClick }: ChannelCardProps) => {
  const isUpcoming = channel.status === "UPCOMING";
  const lowestPrice = Math.min(...channel.packages.map((p) => p.price));

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={() => onClick(channel)}
      className={cn(
        "border border-black bg-white cursor-pointer group",
        "transition-colors hover:bg-gray-50"
      )}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video border-b border-black overflow-hidden bg-gray-100">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${channel.thumbnailUrl})` }}
        />
        {/* Badges (stacked on top-right) */}
        <div className="absolute top-0 right-0 flex flex-col">
          {/* Status badge */}
          <div>
            {isUpcoming ? (
              <span className="bg-black text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-l border-b border-black">
                OPEN SOON
              </span>
            ) : (
              <span className="bg-white text-black text-xs font-black uppercase tracking-widest px-3 py-1 border-l border-b border-black">
                ACTIVE
              </span>
            )}
          </div>
          {/* Category badge */}
          <div>
            <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-3 py-1 border-l border-b border-black">
              {channel.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Handle */}
        <p className="text-xs text-gray-400 font-mono mb-1 tracking-wide">
          {channel.handle}
        </p>
        {/* Name */}
        <h2 className="text-lg font-black text-black leading-tight mb-3 uppercase tracking-tight">
          {channel.name}
        </h2>
        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {channel.description}
        </p>

        {/* Stats row */}
        {isUpcoming ? (
          <div className="border border-black px-4 py-3 flex items-center gap-2 bg-gray-50">
            <Calendar size={14} className="text-gray-500 shrink-0" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
              론칭 예정: {channel.launchDate ?? "미정"}
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-3 divide-x divide-black border border-black">
            <div className="px-3 py-2 flex flex-col items-center">
              <Users size={12} className="text-gray-400 mb-1" />
              <span className="text-sm font-black text-black leading-none">
                {formatNumber(channel.subscriberCount)}
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                구독자
              </span>
            </div>
            <div className="px-3 py-2 flex flex-col items-center">
              <Eye size={12} className="text-gray-400 mb-1" />
              <span className="text-sm font-black text-black leading-none">
                {formatNumber(channel.avgViews)}
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                평균 조회
              </span>
            </div>
            <div className="px-3 py-2 flex flex-col items-center">
              <TrendingUp size={12} className="text-gray-400 mb-1" />
              <span className="text-sm font-black text-black leading-none">
                {channel.engagementRate}%
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                참여율
              </span>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {channel.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-widest border border-black px-2 py-0.5 rounded-full text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: price CTA */}
      <div className="border-t border-black px-5 py-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            최저 패키지
          </span>
          <p className="text-base font-black text-black leading-none mt-0.5">
            {formatPrice(lowestPrice)}~
          </p>
        </div>
        <span className="text-xs font-black uppercase tracking-widest border border-black px-4 py-2 group-hover:bg-black group-hover:text-white transition-colors">
          상세 보기 →
        </span>
      </div>
    </motion.article>
  );
};
