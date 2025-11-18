
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedGlowButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
}

const AnimatedGlowButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedGlowButtonProps
>(({ text = "Glow", className, ...props }, ref) => {
  return (
    <button {...props} ref={ref} className={cn("animate-glow rounded-md border border-primary bg-primary/20", className)}>
      {text}
    </button>
  );
});

AnimatedGlowButton.displayName = "AnimatedGlowButton";

export default AnimatedGlowButton;
