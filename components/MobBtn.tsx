"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedMenuButtonProps {
  onClick: () => void;
}

export function AnimatedMenuButton({ onClick }: AnimatedMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button
      className="relative w-8 h-8 md:hidden text-gray-800 focus:outline-none"
      onClick={handleClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.span
        className="absolute inset-0 w-8 h-0.5 bg-current transform transition-transform duration-300 ease-in-out"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
      />
      <motion.span
        className="absolute inset-0 w-8 h-0.5 bg-current transform transition-opacity duration-300 ease-in-out"
        animate={{ opacity: isOpen ? 0 : 1 }}
      />
      <motion.span
        className="absolute inset-0 w-8 h-0.5 bg-current transform transition-transform duration-300 ease-in-out"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
      />
    </button>
  );
}
