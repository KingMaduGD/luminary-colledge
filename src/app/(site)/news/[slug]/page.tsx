import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { newsPosts } from "@/data/news";
import Badge from "@/components/ui/Badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = newsPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? newsPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < newsPosts.length - 1 ? newsPosts[currentIndex + 1] : null;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-end">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/50 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="gold">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-gray-300">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9962C] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to News
          </Link>

          <p
            className="text-xl text-gray-600 italic leading-relaxed mb-8 border-l-4 border-[#C9962C] pl-6"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {post.excerpt}
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link
                href={`/news/${prevPost.slug}`}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8F5EF] transition-colors"
              >
                <ArrowLeft size={20} className="text-[#C9962C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Previous Article</p>
                  <p
                    className="font-semibold text-[#0B2545] group-hover:text-[#C9962C] transition-colors"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                href={`/news/${nextPost.slug}`}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8F5EF] transition-colors text-right md:justify-end"
              >
                <div>
                  <p className="text-xs text-gray-500 mb-1">Next Article</p>
                  <p
                    className="font-semibold text-[#0B2545] group-hover:text-[#C9962C] transition-colors"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {nextPost.title}
                  </p>
                </div>
                <ArrowRight size={20} className="text-[#C9962C] mt-1 flex-shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-16 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-semibold text-[#0B2545] mb-8 text-center"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            More Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-3">{related.category}</Badge>
                    <h3
                      className="font-semibold text-[#0B2545] group-hover:text-[#C9962C] transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
