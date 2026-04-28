import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            "bg-[#C9962C] text-white hover:bg-[#b8851f] focus:ring-[#C9962C]": variant === "primary",
            "border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white focus:ring-[#0B2545]": variant === "secondary",
            "text-[#0B2545] hover:text-[#C9962C] underline-offset-4 hover:underline focus:ring-[#0B2545]": variant === "ghost",
            "px-4 py-2 text-sm rounded": size === "sm",
            "px-6 py-3 text-base rounded-md": size === "md",
            "px-8 py-4 text-lg rounded-md": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
