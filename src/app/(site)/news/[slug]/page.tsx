import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);

  return (
    <>
      <div className="bg-[#0B2545] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={article.image} alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-[#C9962C] text-sm mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to News
          </Link>
          <span className="inline-block bg-[#C9962C] text-white text-xs px-3 py-1 rounded font-medium mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
            {article.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
            {article.title}
          </h1>
          <div className="text-white/60 text-sm" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
            {formatDate(article.date)} · By {article.author}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-[#1A1A2E]">
            {article.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6 text-[#6B7280] leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#F8F5EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-[#0B2545] mb-10" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <article key={rel.id} className="group flex gap-6">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] mb-1" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>{formatDate(rel.date)}</div>
                    <h3 className="text-xl font-semibold text-[#0B2545] group-hover:text-[#C9962C] transition-colors leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                      <Link href={`/news/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
