"use client";
import { motion } from "framer-motion";




interface AnimatedMenuButtonProps {
  onClick: () => void;
  menuOpen: boolean;
}

  export function AnimatedMenuButton({ onClick, menuOpen }: AnimatedMenuButtonProps) {

      return (
    <button
      className="relative w-8 h-8 md:hidden text-gray-800 focus:outline-none"
      onClick={onClick}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        className="absolute left-0 w-8 h-0.5  bg-current transform transition-transform duration-300 ease-in-out"
        animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 10 : 0 }} transition={{duration: 0.2}}
      />
      <motion.span
        className="absolute left-0 top-0.5 w-8 h-0.5 bg-current transform transition-opacity duration-300 ease-in-out"
        animate={{ opacity: menuOpen ? 0 : 1 }} transition={{duration: 0.2}}
      />
      <motion.span
        className="absolute left-0 w-8 h-0.5 bg-current transform transition-transform duration-300 ease-in-out"
        animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 16 }} transition={{duration: 0.2}}
      />
    </button>
  );
}
