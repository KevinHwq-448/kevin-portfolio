"use client";

import {
  motion,
  type PanInfo,
  type Transition,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type ThumbnailType = "tap" | "audio" | "dashboard" | "puzzle";

const projects: {
  title: string;
  description: string;
  tags: string[];
  thumbnail: ThumbnailType;
}[] = [
  {
    title: "TapTempo Recommender",
    description:
      "A physical-digital prototype that turns tap input into BPM estimation and music recommendation feedback.",
    tags: ["BPM", "Arduino", "Music"],
    thumbnail: "tap",
  },
  {
    title: "Lunchbox Beat Store",
    description:
      "A music web product for producers to preview, organize, and present beats through an audio-first interface.",
    tags: ["Audio UI", "Web", "Product"],
    thumbnail: "audio",
  },
  {
    title: "Campus Study Space Finder",
    description:
      "A data dashboard that helps students compare campus study spaces through a map, filters, charts, and recommendations.",
    tags: ["Data Viz", "Map UI", "Figma Make"],
    thumbnail: "dashboard",
  },
  {
    title: "Beyond the Shadows",
    description:
      "A multi-platform narrative prototype using posters, web puzzles, and a VR server room concept to explore hidden systems.",
    tags: ["Narrative", "Puzzle", "VR"],
    thumbnail: "puzzle",
  },
];

const waveformBars = [38, 68, 46, 82, 56, 74, 42, 62, 52, 78, 44, 66];
const chartBars = [32, 46, 38, 60, 54, 76, 66];
const tapBars = [36, 60, 44, 78, 50, 68, 42];

const carouselTransition: Transition = {
  type: "spring",
  stiffness: 135,
  damping: 22,
  mass: 0.82,
};

const introCarouselTransition: Transition = {
  type: "spring",
  stiffness: 210,
  damping: 24,
  mass: 0.68,
};

const introStartDelay = 1200;
const introSpinDelays: number[] = [];

function slugify(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

function getProjectHref(title: string) {
  if (title === "TapTempo Recommender") {
    return "/work/taptempo-recommender";
  }

  if (title === "Lunchbox Beat Store") {
    return "/work/lunchbox-beat-store";
  }

  if (title === "Campus Study Space Finder" || title === "3DS Pricing Dashboard") {
    return "/work/3ds-pricing-dashboard";
  }

  if (title === "Beyond the Shadows") {
    return "/work/beyond-the-shadows";
  }

  return `#${slugify(title)}`;
}

function getOffset(index: number, activeIndex: number) {
  const total = projects.length;
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", callback);

      return () => mediaQuery.removeEventListener("change", callback);
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  }, [query]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function useHydrated() {
  const subscribe = useCallback(() => () => undefined, []);
  const getSnapshot = useCallback(() => true, []);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function FlowThumbnail({ type, isActive }: { type: ThumbnailType; isActive: boolean }) {
  if (type === "tap") {
    return (
      <div className="h-36 rounded-lg border border-white/10 bg-[#10101D] p-4">
        <div className="flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Tap input</span>
          <span>118 BPM</span>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <motion.div
            animate={isActive ? { scale: [1, 1.04, 1] } : { scale: 1 }}
            className="grid h-14 w-14 place-items-center rounded-full border border-[#8B5CF6]/45 bg-[#8B5CF6]/10 text-xs font-semibold"
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            Tap
          </motion.div>
          <div className="flex flex-1 items-end gap-1.5">
            {tapBars.map((height, index) => (
              <motion.span
                animate={
                  isActive
                    ? { scaleY: [0.78, 1, 0.84], opacity: [0.58, 0.92, 0.66] }
                    : { scaleY: 0.78, opacity: 0.42 }
                }
                className="w-full origin-bottom rounded-full bg-[#8B5CF6]/75"
                key={`${height}-${index}`}
                style={{ height }}
                transition={{
                  delay: index * 0.06,
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "audio") {
    return (
      <div className="h-36 rounded-lg border border-white/10 bg-[#10101D] p-4">
        <div className="flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Audio preview</span>
          <span>00:31</span>
        </div>
        <div className="mt-7 flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="grid h-12 w-12 place-items-center rounded-full bg-[#8B5CF6]"
          >
            <span className="ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-white" />
          </motion.div>
          <div className="flex h-20 flex-1 items-center gap-1">
            {waveformBars.map((height, index) => (
              <motion.span
                animate={
                  isActive
                    ? { scaleY: [0.7, 1, 0.76], opacity: [0.5, 0.88, 0.62] }
                    : { scaleY: 0.7, opacity: 0.4 }
                }
                className="w-full origin-center rounded-full bg-[#22D3EE]/62"
                key={`${height}-${index}`}
                style={{ height: `${height}%` }}
                transition={{
                  delay: index * 0.045,
                  duration: 1.7,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="h-36 rounded-lg border border-white/10 bg-[#10101D] p-4">
        <div className="flex gap-2">
          {["Region", "Price", "Grade"].map((filter) => (
            <span
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-[#94A3B8]"
              key={filter}
            >
              {filter}
            </span>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-[0.7fr_1.3fr] gap-4">
          <div className="space-y-2.5">
            <div className="h-2.5 rounded-full bg-white/[0.12]" />
            <div className="h-2.5 w-4/5 rounded-full bg-white/[0.12]" />
            <div className="h-2.5 w-2/3 rounded-full bg-white/[0.12]" />
          </div>
          <div className="flex h-20 items-end gap-1.5 border-b border-l border-white/10 pl-3">
            {chartBars.map((height, index) => (
              <motion.span
                animate={isActive ? { height: `${height}%` } : { height: `${height * 0.78}%` }}
                className="w-full rounded-t-sm bg-[#8B5CF6]/70"
                initial={false}
                key={`${height}-${index}`}
                transition={{ ...carouselTransition, delay: index * 0.03 }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-36 overflow-hidden rounded-lg border border-white/10 bg-[#10101D] p-4 font-mono">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#8B5CF6]/70" />
        <span className="h-2 w-2 rounded-full bg-[#22D3EE]/55" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="space-y-2 text-xs text-[#94A3B8]">
        <p>&gt; clue index loaded</p>
        <p>&gt; server room route</p>
        <p className="text-[#E2E8F0]">&gt; puzzle state active</p>
      </div>
      <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1.5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((node) => (
          <motion.span
            animate={
              isActive && node === 4
                ? { opacity: [0.58, 1, 0.7] }
                : { opacity: node === 4 ? 0.74 : 0.42 }
            }
            className={`h-5 w-5 rounded border ${
              node === 4
                ? "border-[#8B5CF6] bg-[#8B5CF6]/25"
                : "border-white/10 bg-white/[0.04]"
            }`}
            key={node}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

function getCardAnimation(offset: number, isMobile: boolean, prefersReducedMotion: boolean) {
  const isActive = offset === 0;
  const isSide = Math.abs(offset) === 1;
  const isVisible = isActive || isSide;

  if (isMobile) {
    return {
      x: 0,
      y: isActive ? 0 : 10,
      scale: isActive ? 1 : 0.94,
      rotateY: 0,
      opacity: isActive ? 1 : 0,
      zIndex: isActive ? 30 : 1,
      filter: isActive ? "blur(0px)" : "blur(0.8px)",
      boxShadow: isActive
        ? "0 22px 52px rgba(0,0,0,0.30), 0 8px 20px rgba(0,0,0,0.18)"
        : "0 12px 28px rgba(0,0,0,0.12)",
    };
  }

  if (prefersReducedMotion) {
    return {
      x: offset * 132,
      y: isActive ? 0 : 18,
      scale: isActive ? 1 : 0.86,
      rotateY: 0,
      opacity: isActive ? 1 : isSide ? 0.44 : 0,
      zIndex: isActive ? 30 : isSide ? 12 : 1,
      filter: isActive ? "blur(0px)" : "blur(0.4px)",
      boxShadow: isActive
        ? "0 30px 70px rgba(0,0,0,0.28), 0 10px 28px rgba(0,0,0,0.16)"
        : "0 14px 34px rgba(0,0,0,0.14)",
    };
  }

  return {
    x: offset * 232,
    y: isActive ? 0 : 34,
    scale: isActive ? 1.03 : 0.76,
    rotateY: isActive ? 0 : offset < 0 ? 18 : -18,
    opacity: isActive ? 1 : isVisible ? 0.38 : 0,
    zIndex: isActive ? 30 : isSide ? 14 : 1,
    filter: isActive ? "blur(0px)" : "blur(1.1px)",
    boxShadow: isActive
      ? "0 38px 92px rgba(0,0,0,0.34), 0 16px 34px rgba(0,0,0,0.20)"
      : "0 14px 34px rgba(0,0,0,0.16)",
  };
}

export default function ProjectFlowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isIntroSpinning, setIsIntroSpinning] = useState(false);
  const introPlayedRef = useRef(false);
  const hydrated = useHydrated();
  const mobileQuery = useMediaQuery("(max-width: 640px)");
  const reducedMotionQuery = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = hydrated && mobileQuery;
  const prefersReducedMotion = hydrated && reducedMotionQuery;
  const isPaused = isHovering || isDragging || isIntroSpinning;
  const activeTransition = isIntroSpinning
    ? introCarouselTransition
    : carouselTransition;

  useEffect(() => {
    if (!hydrated || introPlayedRef.current || introSpinDelays.length === 0) {
      return;
    }

    introPlayedRef.current = true;
    setIsIntroSpinning(true);

    let elapsed = introStartDelay;
    const timeouts = introSpinDelays.map((delay, index) => {
      elapsed += delay;

      return window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % projects.length);

        if (index === introSpinDelays.length - 1) {
          window.setTimeout(() => {
            setIsIntroSpinning(false);
          }, 520);
        }
      }, elapsed);
    });

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      setIsIntroSpinning(false);
    };
  }, [hydrated]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const projectedMovement = info.offset.x + info.velocity.x * 0.12;

    if (Math.abs(projectedMovement) > 58) {
      if (projectedMovement > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    setIsDragging(false);
  };

  return (
    <motion.section
      aria-label="Selected Work Flow"
      className="relative min-h-[540px] select-none sm:min-h-[520px]"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 18 }}
      onBlur={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      onHoverStart={() => setIsHovering(true)}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="sr-only">Selected Work Flow project showcase</h2>

      <motion.div
        className={`flow-stage relative mx-auto h-[520px] max-w-[640px] overflow-hidden rounded-lg sm:h-[500px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.13}
        onDragEnd={handleDragEnd}
        onDragStart={() => setIsDragging(true)}
        style={{ touchAction: "pan-y" }}
        whileDrag={{ scale: 0.995 }}
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-[86%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),rgba(34,211,238,0.045)_42%,transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute bottom-12 left-1/2 h-24 w-4/5 -translate-x-1/2 rounded-full bg-black/24 blur-2xl" />

        {projects.map((project, index) => {
          const offset = getOffset(index, activeIndex);
          const absoluteOffset = Math.abs(offset);
          const isActive = offset === 0;
          const isVisible = isActive || absoluteOffset === 1;
          const animation = getCardAnimation(
            offset,
            isMobile,
            prefersReducedMotion,
          );

          return (
            <motion.article
              animate={animation}
              aria-hidden={!isVisible && !isActive}
              className="absolute left-1/2 top-10 w-[360px] max-w-[72vw] -translate-x-1/2 rounded-lg border border-white/[0.08] bg-[#17172A]/96 p-4 backdrop-blur"
              data-active={isActive}
              initial={false}
              key={project.title}
              style={{
                pointerEvents: isActive ? "auto" : "none",
                transformStyle: "preserve-3d",
              }}
              transition={activeTransition}
              whileHover={isActive ? { y: -4 } : undefined}
            >
              <motion.div
                animate={
                  isActive && !prefersReducedMotion
                    ? { rotateZ: [0, -0.35, 0.25, 0], y: [0, -7, 0] }
                    : { rotateZ: 0, y: 0 }
                }
                transition={{
                  duration: 3.4,
                  ease: "easeInOut",
                  repeat: isActive && !prefersReducedMotion ? Infinity : 0,
                }}
              >
                <FlowThumbnail isActive={isActive} type={project.thumbnail} />
                <div className="mt-5">
                  <h3 className="font-display text-[25px] font-semibold leading-[1.16] text-[#E2E8F0]">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-[78px] text-[14px] leading-6 text-[#94A3B8]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-[#E2E8F0]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    className="mt-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-[14px] font-semibold text-[#E2E8F0] transition hover:border-[#8B5CF6]/70 hover:bg-[#8B5CF6]/10"
                    href={getProjectHref(project.title)}
                  >
                    View Case Study
                  </a>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 opacity-35">
        {projects.map((project, index) => (
          <motion.span
            animate={{
              backgroundColor:
                activeIndex === index
                  ? "rgba(226, 232, 240, 0.72)"
                  : "rgba(226, 232, 240, 0.22)",
              width: activeIndex === index ? 18 : 4,
            }}
            className="h-1 rounded-full"
            key={project.title}
            transition={{ duration: 0.25 }}
          />
        ))}
      </div>
    </motion.section>
  );
}
