"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Founded", value: 1998, suffix: "", prefix: "" },
  { label: "Students Enrolled", value: 1200, suffix: "+", prefix: "" },
  { label: "Teaching Staff", value: 85, suffix: "", prefix: "" },
  { label: "Awards Won", value: 47, suffix: "", prefix: "" },
];

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsBar() {
  return (
    <section className="bg-[#0B2545] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-[#C9962C]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {stat.prefix}
                <CountUp target={stat.value} />
                {stat.suffix}
              </div>
              <div
                className="text-xs font-semibold tracking-widest uppercase text-gray-400 mt-2"
                style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
