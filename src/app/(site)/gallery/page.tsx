"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import SectionHeader from "@/components/ui/SectionHeader";
import type { GalleryItem } from "@/types";

const categories = ["All", "Academics", "Sports", "Events", "Facilities"] as const;
type FilterCategory = (typeof categories)[number];

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterCategory>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20 text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-[#C9962C] mb-2"
          style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
        >
          Campus Life
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Gallery
        </h1>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Photo Gallery"
            title="Life at Luminary"
            subtitle="Moments from our classrooms, sports fields, events, and beautiful campus."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === cat
                    ? "bg-[#0B2545] text-white"
                    : "bg-white text-[#0B2545] hover:bg-[#0B2545] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightbox(item)}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#0B2545]/0 group-hover:bg-[#0B2545]/60 transition-all duration-300 flex items-end p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p
                        className="text-xs font-semibold text-[#C9962C] tracking-wide"
                        style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                      >
                        {item.category}
                      </p>
                      <p
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#C9962C] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="mt-4 text-center">
              <p
                className="text-xs font-semibold text-[#C9962C] tracking-wide mb-1"
                style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
              >
                {lightbox.category}
              </p>
              <p
                className="text-white text-xl font-semibold"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {lightbox.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
