import { cn } from "@/lib/utils";
import React from "react";

interface ShineButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const ShineButton = React.forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ text = "Shine", variant, size, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "animate-shine rounded-md border border-primary bg-[linear-gradient(110deg,transparent,45%,#1e293b,55%,transparent)] bg-[length:200%_100%]",
          className,
        )}
      >
        {text}
      </button>
    );
  },
);

ShineButton.displayName = "ShineButton";

export default ShineButton;
