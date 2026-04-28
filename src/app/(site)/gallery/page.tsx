"use client";
import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "@/data/gallery";

const categories = ["All", "Academics", "Sports", "Events", "Facilities"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <>
      <div className="bg-[#0B2545] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Visual Stories</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Gallery</h1>
          <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
        </div>
      </div>

      <section className="py-16 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-[#0B2545] text-white"
                    : "bg-white text-[#6B7280] border border-gray-200 hover:border-[#0B2545] hover:text-[#0B2545]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div key={item.id} className="group relative rounded-lg overflow-hidden aspect-[4/3] bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{item.title}</p>
                    <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
