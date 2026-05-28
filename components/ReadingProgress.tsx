"use client";
import { useScroll, useSpring, motion } from "motion/react";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "#8B4513",
        transformOrigin: "left",
        scaleX,
        zIndex: 100,
      }}
    />
  );
}
