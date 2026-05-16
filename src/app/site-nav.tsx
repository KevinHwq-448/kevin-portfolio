"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function SiteNav() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const scrollingDown = current > previous;

    if (current < 40) {
      setCompact(false);
      return;
    }

    setCompact(scrollingDown);
  });

  return (
    <motion.nav
      animate={{
        backgroundColor: compact
          ? "rgba(15, 15, 26, 0.62)"
          : "rgba(15, 15, 26, 0.86)",
        borderColor: compact
          ? "rgba(255, 255, 255, 0.07)"
          : "rgba(255, 255, 255, 0.10)",
        y: compact ? 10 : 0,
      }}
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{
          maxWidth: compact ? 940 : 1280,
          paddingBottom: compact ? 10 : 16,
          paddingTop: compact ? 10 : 16,
        }}
        className="mx-auto flex items-center justify-between px-5 sm:px-8"
        initial={{ maxWidth: 1280 }}
        style={{ width: "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#top" className="flex items-center gap-3">
          <motion.span
            animate={{ scale: compact ? 0.88 : 1 }}
            className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]"
          />
          <span className="text-[15px] font-semibold text-[#E2E8F0]">
            Kevin Huang
          </span>
          <motion.span
            animate={{
              opacity: compact ? 0 : 1,
              width: compact ? 0 : "auto",
            }}
            className="hidden overflow-hidden whitespace-nowrap text-[15px] text-[#94A3B8] sm:inline"
          >
            Interaction Lab
          </motion.span>
        </a>

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="hidden items-center gap-6 text-[15px] font-medium text-[#94A3B8] md:flex"
          style={{ pointerEvents: "auto" }}
          transition={{ duration: 0.25 }}
        >
          <a className="transition hover:text-[#E2E8F0]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#E2E8F0]" href="#process">
            Process
          </a>
          <a className="transition hover:text-[#E2E8F0]" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-[#E2E8F0]" href="#about">
            About
          </a>
        </motion.div>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-[15px] font-semibold text-[#E2E8F0] transition hover:border-[#8B5CF6]/70 hover:bg-[#8B5CF6]/10"
        >
          Contact
        </a>
      </motion.div>
    </motion.nav>
  );
}
