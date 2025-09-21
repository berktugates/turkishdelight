import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface DockProps {
  className?: string
  items: {
    icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
    label: string
    href?: string
    onClick?: () => void
  }[]
}

interface DockIconButtonProps {
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  href?: string
  onClick?: () => void
  className?: string
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
}

const mobileFloatingAnimation = {
  initial: { y: 0 },
  animate: { y: 0 }
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, href, onClick, className }, ref) => {
    const handleClick = () => {
      if (href) {
        window.open(href, '_blank');
      } else if (onClick) {
        onClick();
      }
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={cn(
          "relative group p-3 rounded-lg",
          "hover:bg-secondary transition-colors duration-200",
          className
        )}
      >
        <Icon className="w-5 h-5 text-foreground" />
        <span className={cn(
          "absolute left-full top-1/2 -translate-y-1/2 ml-2",
          "px-2 py-1 rounded text-xs",
          "bg-popover text-popover-foreground",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-200 whitespace-nowrap",
          "pointer-events-none"
        )}>
          {label}
        </span>
      </motion.button>
    )
  }
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-center", className)}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          className={cn(
            "flex flex-col items-center gap-1 p-2 rounded-2xl",
            "backdrop-blur-lg shadow-lg",
            "bg-background/90",
            "border border-transparent bg-gradient-to-br from-border/40 via-border/20 to-border/40 bg-clip-border",
            "hover:shadow-xl transition-all duration-300",
            "hover:from-border/60 hover:via-border/30 hover:to-border/60",
            "max-w-xs w-fit"
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    )
  }
)
Dock.displayName = "Dock"

export { Dock }