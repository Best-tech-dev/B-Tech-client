"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  suffix: string;
  className?: string; // Accepts className as a prop
}

const Counter: React.FC<CounterProps> = ({ value, suffix, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation time in ms
    const stepTime = Math.abs(Math.floor(duration / value));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === value) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`font-bold ${className}`} // Now applies dynamic className
    >
      {count}
      {suffix}
    </motion.span>
  );
};

export default Counter;
