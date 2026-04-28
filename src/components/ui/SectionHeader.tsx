import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {label && (
        <span
          className={cn(
            "text-sm font-semibold tracking-widest uppercase",
            light ? "text-[#C9962C]/80" : "text-[#C9962C]"
          )}
          style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-semibold mt-2 mb-4",
          light ? "text-white" : "text-[#0B2545]"
        )}
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {title}
      </h2>
      <div className={cn("w-16 h-0.5 bg-[#C9962C]", centered ? "mx-auto" : "mx-0")} />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-[#6B7280]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
