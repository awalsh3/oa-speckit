import React from "react";
import Image from "next/image";

interface HashtagImageProps {
  hashtag: string;
  alt?: string;
}

// Simple mapping for demo; in real app, use a CDN or backend
const hashtagImages: Record<string, string> = {
  "#ClimateAction": "/images/climate.png",
  "#SocialJustice": "/images/blm.png",
  "#Vote2025": "/images/lgbtq.png",
};

export default function HashtagImage({ hashtag, alt }: HashtagImageProps) {
  const src = hashtagImages[hashtag] || "/images/trending.png";
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden">
      <Image
        src={src}
        alt={alt || hashtag}
        width={600}
        height={300}
        className="w-full h-auto rounded-lg object-contain bg-white"
        style={{ maxHeight: "350px", objectFit: "contain" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
        priority
      />
    </div>
  );
}
