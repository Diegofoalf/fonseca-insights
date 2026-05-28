"use client";
import { motion, useInView } from "motion/react";
import { useRef, Children } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function AnimateIn({
  children,
  delay = 0,
  y = 22,
  style,
  className,
  stagger = false,
  staggerDelay = 0.12,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (stagger) {
    const items = Children.toArray(children);
    return (
      <div ref={ref} style={style} className={className}>
        {items.map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{ duration: 0.65, delay: delay + i * staggerDelay, ease }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={style}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
