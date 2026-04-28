"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { newsPosts } from "@/data/news";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NewsPreview() {
  const latestPosts = newsPosts.slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <SectionHeader
            label="Latest News"
            title="News & Events"
            centered={false}
            className="mb-0"
          />
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9962C] hover:gap-4 transition-all mt-4 sm:mt-0"
          >
            View All News <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
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
                <h3
                  className="text-xl font-semibold text-[#0B2545] mb-2 line-clamp-2 group-hover:text-[#C9962C] transition-colors"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9962C] hover:gap-3 transition-all tracking-wide"
                >
                  Read More <ArrowRight size={12} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
