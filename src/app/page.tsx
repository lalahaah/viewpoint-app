"use client";

import { useState } from "react";
import { ShuffleHero } from "@/components/ShuffleHero";
import { ChannelGrid } from "@/components/ChannelGrid";
import { ChannelModal } from "@/components/ChannelModal";
import { Channel } from "@/lib/mockData";

export default function HomePage() {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  return (
    <>
      <ShuffleHero />
      <ChannelGrid onChannelClick={(ch) => setSelectedChannel(ch)} />
      <ChannelModal channel={selectedChannel} onClose={() => setSelectedChannel(null)} />
    </>
  );
}
