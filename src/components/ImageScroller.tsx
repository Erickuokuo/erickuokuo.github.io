// components/ImageScroller.tsx
"use client";
import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

interface Image {
  src: string;
  alt: string;
}

interface ImageScrollerProps {
  images: Image[];
}

export function ImageScroller({ images }: ImageScrollerProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-64 h-40 sm:w-80 sm:h-52 rounded-2xl overflow-hidden shadow-md bg-muted"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
