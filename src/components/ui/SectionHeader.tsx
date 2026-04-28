import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center")}>
      {eyebrow && (
        <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-3" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-4xl md:text-5xl font-semibold leading-tight", light ? "text-white" : "text-[#0B2545]")} style={{ fontFamily: "var(--font-cormorant, serif)" }}>
        {title}
      </h2>
      <div className={cn("mt-4 h-0.5 w-16 bg-[#C9962C]", center && "mx-auto")} />
      {subtitle && (
        <p className={cn("mt-4 text-lg max-w-2xl leading-relaxed", light ? "text-white/70" : "text-[#6B7280]", center && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
