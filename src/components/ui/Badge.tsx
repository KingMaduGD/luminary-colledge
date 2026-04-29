import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "navy" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-full",
        {
          "bg-gray-100 text-gray-800": variant === "default",
          "bg-[#C9962C] text-white": variant === "gold",
          "bg-[#0B2545] text-white": variant === "navy",
          "border border-[#C9962C] text-[#C9962C]": variant === "outline",
        },
        className
      )}
      style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
    >
      {children}
    </span>
  );
}
