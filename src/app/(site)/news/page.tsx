"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsPosts } from "@/data/news";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = ["All", "Achievements", "School News", "Events"];

export default function NewsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? newsPosts
      : newsPosts.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20 text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-[#C9962C] mb-2"
          style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
        >
          Stay Informed
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          News & Events
        </h1>
      </section>

      <section className="py-16 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Latest Updates"
            title="School News"
            subtitle="Achievements, events, and updates from the Luminary community."
          />

          {/* Filter */}
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

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-semibold text-[#0B2545] mb-3 line-clamp-2 group-hover:text-[#C9962C] transition-colors"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-5">{post.excerpt}</p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9962C] hover:gap-3 transition-all tracking-wide"
                  >
                    Read Full Story <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No posts found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
