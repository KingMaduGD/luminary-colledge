import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/data/news";
import { formatDate } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export default function NewsPreview() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Latest"
            title="News & Events"
            subtitle="Stay up to date with life at Luminary College."
          />
          <Link
            href="/news"
            className="flex items-center gap-2 text-[#C9962C] font-medium text-sm hover:gap-3 transition-all"
          >
            View All News <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((article) => (
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
                {formatDate(article.date)}
              </div>
              <h3 className="text-xl font-semibold text-[#0B2545] mb-3 group-hover:text-[#C9962C] transition-colors leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                <Link href={`/news/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <Link href={`/news/${article.slug}`} className="text-[#C9962C] text-sm font-medium hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
