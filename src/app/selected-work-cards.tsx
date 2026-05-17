"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { useHashTargetedReveal } from "./motion-reveal";

type ThumbnailType = "tap" | "audio" | "dashboard" | "puzzle";

type Project = {
  title: string;
  category: string;
  role: string;
  tools: string;
  summary: string;
  thumbnail: ThumbnailType;
};

type SelectedWorkCardsProps = {
  projects: Project[];
};

type ProjectCardProps = {
  index: number;
  isMobile: boolean;
  project: Project;
  reduced: boolean;
};

type ProjectMotionLayerProps = {
  accent: string;
  type: ThumbnailType;
};

const repeatViewport = {
  amount: 0.18,
  margin: "0px 0px -8% 0px",
  once: false,
} as const;

const projectVisuals: Record<
  ThumbnailType,
  {
    accent: string;
    alt: string;
    backdrop: string;
    image: string;
    imageClassName: string;
    label: string;
    prompt: string;
    result: string;
  }
> = {
  tap: {
    accent: "#8B5CF6",
    alt: "TapTempo interactive music recommender interface",
    backdrop:
      "bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(34,211,238,0.08)_48%,rgba(15,15,26,0.08))]",
    image: "/case-studies/taptempo/taptempo-demo.png",
    imageClassName: "object-cover object-center",
    label: "Physical input system",
    prompt: "How can tap rhythm become usable feedback?",
    result: "Arduino prototype, BPM lock, and recommendation feedback loop.",
  },
  audio: {
    accent: "#FB3D49",
    alt: "Lunchbox Beat Store hero and beat card interface",
    backdrop:
      "bg-[linear-gradient(135deg,rgba(251,61,73,0.2),rgba(139,92,246,0.14)_48%,rgba(15,15,26,0.08))]",
    image: "/case-studies/lunchbox/lunchbox-hero-and-card.png",
    imageClassName: "object-cover object-top",
    label: "Audio product UI",
    prompt: "How should producers preview and license beats quickly?",
    result: "A storefront flow with audio preview, license choice, and cart states.",
  },
  dashboard: {
    accent: "#0EA5E9",
    alt: "Campus Study Space Finder map-first dashboard interface",
    backdrop:
      "bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(226,232,240,0.16)_46%,rgba(15,15,26,0.08))]",
    image: "/case-studies/3ds/figma-site-hero.png",
    imageClassName: "object-cover object-top",
    label: "Decision dashboard",
    prompt: "How can students choose study spaces with less guessing?",
    result: "A Figma Make dashboard with filters, map pins, charts, and recommendations.",
  },
  puzzle: {
    accent: "#B2E07A",
    alt: "Beyond the Shadows archive board with narrative evidence",
    backdrop:
      "bg-[linear-gradient(135deg,rgba(178,224,122,0.18),rgba(34,211,238,0.08)_48%,rgba(15,15,26,0.08))]",
    image: "/case-studies/beyond/archive-board.png",
    imageClassName: "object-cover object-center",
    label: "Narrative system",
    prompt: "How can a campus mystery unfold across platforms?",
    result: "Poster entry, web clues, archive evidence, and an immersive reveal.",
  },
};

function useHydrated() {
  const subscribe = useCallback(() => () => undefined, []);
  const getSnapshot = useCallback(() => true, []);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
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

  return `#${title.toLowerCase().replaceAll(" ", "-")}`;
}

function ProjectMotionLayer({ accent, type }: ProjectMotionLayerProps) {
  if (type === "tap") {
    return (
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="selected-work-tap-target absolute left-[12%] top-[18%] h-20 w-20 rounded-full border border-white/18 bg-[#0F0F1A]/36 backdrop-blur-md">
          <span
            className="absolute inset-4 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span className="absolute inset-0 rounded-full border border-white/20" />
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/12 bg-[#0F0F1A]/62 p-3 backdrop-blur-md">
          <div className="flex items-end justify-between">
            <p className="font-mono text-[12px] font-semibold text-white/70">
              BPM lock
            </p>
            <p className="font-mono text-[20px] font-semibold text-white">
              118
            </p>
          </div>
          <div className="mt-3 flex gap-1.5">
            {Array.from({ length: 8 }).map((_, tick) => (
              <span
                className="selected-work-tap-step h-2 flex-1 rounded-full bg-white/22"
                key={tick}
                style={{
                  animationDelay: `${tick * 130}ms`,
                  backgroundColor: tick < 6 ? accent : undefined,
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
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-lg border border-white/12 bg-[#0F0F1A]/62 p-3 backdrop-blur-md">
          <div
            className="selected-work-play grid h-11 w-11 shrink-0 place-items-center rounded-full"
            style={{ backgroundColor: accent }}
          >
            <span className="ml-0.5 h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-white" />
          </div>
          <div className="flex h-14 flex-1 items-center gap-1.5">
            {[28, 62, 42, 84, 56, 74, 36, 68, 48, 78, 40, 58].map(
              (height, bar) => (
                <span
                  className="selected-work-wave w-full rounded-full"
                  key={`${height}-${bar}`}
                  style={{
                    animationDelay: `${bar * 75}ms`,
                    backgroundColor: accent,
                    height: `${height}%`,
                  }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-[28%] top-[40%] h-4 w-4 rounded-full border-2 border-white bg-[#0F0F1A]">
          <span
            className="selected-work-map-ping absolute inset-[-9px] rounded-full border"
            style={{ borderColor: accent }}
          />
        </div>
        <div className="absolute left-[50%] top-[52%] h-4 w-4 rounded-full border-2 border-white bg-[#0F0F1A]">
          <span
            className="selected-work-map-ping absolute inset-[-9px] rounded-full border"
            style={{ animationDelay: "450ms", borderColor: accent }}
          />
        </div>
        <div className="absolute bottom-5 right-5 w-[210px] rounded-lg border border-white/18 bg-white/88 p-3 text-[#0F172A] shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em]">
            Comfort score
          </p>
          <div className="mt-3 flex h-16 items-end gap-2 border-b border-[#0F172A]/15">
            {[38, 58, 46, 72, 64, 86].map((height, bar) => (
              <span
                className="selected-work-chart-bar w-full rounded-t-sm"
                key={`${height}-${bar}`}
                style={{
                  animationDelay: `${bar * 110}ms`,
                  backgroundColor: accent,
                  height: `${height}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/12 bg-[#0F0F1A]/68 p-3 font-mono text-[12px] leading-6 text-white/72 backdrop-blur-md">
        <p>&gt; scan archive_board</p>
        <p>&gt; unlock hidden_route</p>
        <p className="text-white">
          &gt; state: revealed
          <span className="selected-work-terminal-cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-white/85" />
        </p>
      </div>
      <div className="absolute right-6 top-6 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, node) => (
          <span
            className="selected-work-node h-4 w-4 rounded border border-white/16 bg-white/8"
            key={node}
            style={{
              animationDelay: `${node * 170}ms`,
              borderColor: node === 4 ? accent : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  index,
  isMobile,
  project,
  reduced,
}: ProjectCardProps) {
  const visual = projectVisuals[project.thumbnail];
  const { hashTargeted, ref: cardRef } = useHashTargetedReveal<HTMLElement>();
  const isInView = useInView(cardRef, repeatViewport);
  const cardControls = useAnimationControls();
  const imageControls = useAnimationControls();
  const contentControls = useAnimationControls();
  const isLeftColumn = index % 2 === 0;
  const hiddenState = useMemo(
    () =>
      reduced
        ? { filter: "blur(0px)", opacity: 0, x: 0, y: 0 }
        : isMobile
          ? { filter: "blur(8px)", opacity: 0, scale: 0.96, x: 0, y: 72 }
          : {
              filter: "blur(14px)",
              opacity: 0,
              rotateZ: isLeftColumn ? -3 : 3,
              scale: 0.9,
              x: isLeftColumn ? -260 : 260,
              y: 64,
            },
    [isLeftColumn, isMobile, reduced],
  );
  const visibleState = useMemo(
    () => ({
      filter: "blur(0px)",
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      x: 0,
      y: 0,
    }),
    [],
  );
  const imageHiddenState = useMemo(
    () => (reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }),
    [reduced],
  );
  const imageVisibleState = useMemo(
    () => (reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }),
    [reduced],
  );

  useEffect(() => {
    const shouldReveal = isInView || hashTargeted;
    const skipDelay = reduced || hashTargeted;

    if (!shouldReveal) {
      cardControls.set(hiddenState);
      imageControls.set(imageHiddenState);
      contentControls.set({ opacity: 0, y: reduced ? 0 : 14 });
      return;
    }

    cardControls.set(hiddenState);
    imageControls.set(imageHiddenState);
    contentControls.set({ opacity: 0, y: reduced ? 0 : 14 });

    const frame = window.requestAnimationFrame(() => {
      void cardControls.start({
        ...visibleState,
        transition: {
          delay: skipDelay ? 0 : index * 0.12,
          duration: reduced ? 0.15 : 1,
          ease: [0.08, 0.9, 0.16, 1],
        },
      });
      void imageControls.start({
        ...imageVisibleState,
        transition: {
          delay: skipDelay ? 0 : index * 0.12 + 0.16,
          duration: reduced ? 0.15 : 0.78,
          ease: [0.08, 0.9, 0.16, 1],
        },
      });
      void contentControls.start({
        opacity: 1,
        transition: {
          delay: skipDelay ? 0 : index * 0.12 + 0.28,
          duration: reduced ? 0.15 : 0.62,
          ease: [0.08, 0.9, 0.16, 1],
        },
        y: 0,
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [
    cardControls,
    contentControls,
    hashTargeted,
    hiddenState,
    imageControls,
    imageHiddenState,
    imageVisibleState,
    index,
    isInView,
    reduced,
    visibleState,
  ]);

  return (
    <motion.article
      animate={cardControls}
      className="group relative min-h-[590px] overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/78 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#1A1A2F] min-[390px]:min-h-[620px] md:min-h-[680px]"
      id={project.title.toLowerCase().replaceAll(" ", "-")}
      initial={hiddenState}
      ref={cardRef}
      style={{
        transformOrigin: "center center",
        willChange: "transform, opacity, filter",
      }}
    >
      <a
        aria-label={`View ${project.title} case study`}
        className="absolute inset-0 z-30"
        href={getProjectHref(project.title)}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_18%,transparent_72%,rgba(255,255,255,0.035))] opacity-80" />
      <div
        className="pointer-events-none absolute left-0 top-0 h-1 w-24"
        style={{ backgroundColor: visual.accent }}
      />

      <motion.div
        animate={imageControls}
        className={`relative h-[280px] overflow-hidden rounded-lg border border-white/10 min-[390px]:h-[320px] ${visual.backdrop} md:h-[380px]`}
        initial={imageHiddenState}
      >
        <Image
          alt={visual.alt}
          className={`transition duration-700 group-hover:scale-[1.045] ${visual.imageClassName}`}
          fill
          priority={index < 2}
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
          src={visual.image}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,26,0.04)_0%,rgba(15,15,26,0.06)_48%,rgba(15,15,26,0.62)_100%)]" />
        <ProjectMotionLayer accent={visual.accent} type={project.thumbnail} />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: visual.accent }}
          />
          <span className="rounded-full border border-white/15 bg-[#0F0F1A]/72 px-3 py-1 text-[12px] font-semibold text-[#E2E8F0] backdrop-blur-md">
            {visual.label}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 font-mono text-[13px] font-semibold text-white/80">
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      <motion.div
        animate={contentControls}
        className="relative z-10 flex min-h-[260px] flex-col px-2 pb-2 pt-5 md:min-h-[282px]"
        initial={{ opacity: 0, y: reduced ? 0 : 14 }}
      >
        <p className="text-[12px] font-bold uppercase leading-5 tracking-[0.12em] text-[#94A3B8]">
          {project.category}
        </p>
        <div className="mt-3 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
          <h3 className="font-display max-w-[520px] text-[26px] font-semibold leading-[1.05] text-[#E2E8F0] min-[390px]:text-[28px] md:text-[30px]">
            {project.title}
          </h3>
          <span
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/15 text-[13px] font-semibold text-[#E2E8F0] transition group-hover:border-white/35 group-hover:bg-white/10 lg:grid"
            aria-hidden="true"
          >
            -&gt;
          </span>
        </div>
        <p className="mt-4 text-[16px] leading-7 text-[#D7DDEA] md:text-[17px]">
          {visual.prompt}
        </p>
        <p className="mt-3 text-[15px] leading-7 text-[#94A3B8]">
          {visual.result}
        </p>

        <div className="mt-auto grid gap-3 border-t border-white/10 pt-4 text-[12px] leading-5 sm:grid-cols-2">
          <p>
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
              Role
            </span>
            <span className="mt-1 block text-[#E2E8F0]">{project.role}</span>
          </p>
          <p>
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
              Tools
            </span>
            <span className="mt-1 block text-[#E2E8F0]">{project.tools}</span>
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function SelectedWorkCards({ projects }: SelectedWorkCardsProps) {
  const hydrated = useHydrated();
  const prefersReducedMotion = useReducedMotion();
  const mobileQuery = useMediaQuery("(max-width: 767px)");
  const reduced = hydrated && Boolean(prefersReducedMotion);
  const isMobile = hydrated && mobileQuery;

  return (
    <div className="relative px-0 py-10 md:px-4 md:py-12 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            isMobile={isMobile}
            key={project.title}
            project={project}
            reduced={reduced}
          />
        ))}
      </div>
    </div>
  );
}
