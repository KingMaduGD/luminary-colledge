import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news and events from Luminary College.",
};

export default function NewsPage() {
  return (
    <>
      <div className="bg-[#0B2545] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Latest Updates</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>News & Events</h1>
          <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsArticles.map((article) => (
              <article key={article.id} className="group">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9962C] text-white text-xs px-3 py-1 rounded font-medium" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-[#6B7280] mb-2" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
                  {formatDate(article.date)} · {article.author}
                </div>
                <h2 className="text-2xl font-semibold text-[#0B2545] mb-3 group-hover:text-[#C9962C] transition-colors leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <Link href={`/news/${article.slug}`} className="text-[#C9962C] text-sm font-medium hover:underline">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
