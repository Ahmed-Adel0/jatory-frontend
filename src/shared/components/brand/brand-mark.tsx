import { cn } from "@/lib/utils";

export function BrandMark({
  variant = "icon",
  className,
}: {
  variant?: "icon" | "logo";
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      <svg
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "h-auto w-auto",
          variant === "icon" ? "size-10" : "h-12 w-auto"
        )}
      >
        <path
          d="M10 8 C10 8 10 4 20 4 C30 4 30 12 30 12 L30 26 C30 26 30 32 24 32 L10 32"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M18 32 L18 42"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="22" cy="44" r="5" fill="hsl(var(--primary))" />
      </svg>
    </span>
  );
}

