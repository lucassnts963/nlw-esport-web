import React from "react";

export interface GameBannerProps {
  id?: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface Props {
  data: GameBannerProps;
}

export function GameBanner({ data }: Props) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={data.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{data.title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {data._count.ads} anúncio(s)
        </span>
      </div>
    </a>
  );
}

export default GameBanner;
