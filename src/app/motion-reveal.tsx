"use client";

import {
  motion,
  type Transition,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  amount?: number;
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  once?: boolean;
};

type WorkCardRevealProps = {
  children: ReactNode;
  className?: string;
  index: number;
};

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

function getOffset(direction: Direction, distance: number) {
  if (direction === "left") {
    return { x: -distance, y: 0 };
  }

  if (direction === "right") {
    return { x: distance, y: 0 };
  }

  if (direction === "down") {
    return { x: 0, y: -distance };
  }

  return { x: 0, y: distance };
}

function getTransition(duration: number, delay: number, reduced: boolean): Transition {
  return {
    delay: reduced ? 0 : delay,
    duration: reduced ? 0.01 : duration,
    ease,
  };
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

function getCurrentHashId() {
  if (typeof window === "undefined") {
    return "";
  }

  const hash = window.location.hash;

  if (!hash || hash.length <= 1) {
    return "";
  }

  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
}

export function useHashTargetedReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const hydrated = useHydrated();
  const [hashTargeted, setHashTargeted] = useState(false);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const update = () => {
      const node = ref.current;
      const hashId = getCurrentHashId();

      if (!node || !hashId) {
        setHashTargeted(false);
        return;
      }

      const target = document.getElementById(hashId);

      setHashTargeted(
        Boolean(
          target &&
            (target === node || target.contains(node) || node.contains(target)),
        ),
      );
    };

    update();

    const frame = window.requestAnimationFrame(update);

    window.addEventListener("hashchange", update);
    window.addEventListener("pageshow", update);
    window.addEventListener("popstate", update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", update);
      window.removeEventListener("pageshow", update);
      window.removeEventListener("popstate", update);
    };
  }, [hydrated]);

  return { hashTargeted, ref };
}

function usePrefersReducedMotion() {
  const hydrated = useHydrated();
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  return hydrated && reduced;
}

export function FadeIn({
  amount = 0.25,
  children,
  className,
  delay = 0,
  distance = 20,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const { hashTargeted, ref } = useHashTargetedReveal<HTMLDivElement>();
  const hidden = { opacity: 0, y: reduced ? 0 : distance };
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      animate={hashTargeted ? visible : undefined}
      initial={hidden}
      ref={ref}
      transition={getTransition(duration, delay, reduced)}
      viewport={{ amount, once }}
      whileInView={visible}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  amount = 0.25,
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 32,
  duration = 0.75,
  once = true,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const { hashTargeted, ref } = useHashTargetedReveal<HTMLDivElement>();
  const offset = reduced ? { x: 0, y: 0 } : getOffset(direction, distance);
  const hidden = { opacity: 0, ...offset };
  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      animate={hashTargeted ? visible : undefined}
      initial={hidden}
      ref={ref}
      transition={getTransition(duration, delay, reduced)}
      viewport={{ amount, once }}
      whileInView={visible}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  amount = 0.25,
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const { hashTargeted, ref } = useHashTargetedReveal<HTMLDivElement>();
  const hidden = { opacity: 0, scale: reduced ? 1 : 0.98 };
  const visible = { opacity: 1, scale: 1 };

  return (
    <motion.div
      className={className}
      animate={hashTargeted ? visible : undefined}
      initial={hidden}
      ref={ref}
      transition={getTransition(duration, delay, reduced)}
      viewport={{ amount, once }}
      whileInView={visible}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  amount = 0.2,
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const { hashTargeted, ref } = useHashTargetedReveal<HTMLDivElement>();

  return (
    <motion.div
      animate={hashTargeted ? "visible" : undefined}
      className={className}
      initial="hidden"
      ref={ref}
      transition={getTransition(duration, delay, reduced)}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: reduced ? 0 : delay,
            staggerChildren: reduced ? 0 : 0.1,
          },
        },
      }}
      viewport={{ amount, once }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 24,
  duration = 0.65,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const offset = reduced ? { x: 0, y: 0 } : getOffset(direction, distance);

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          transition: getTransition(duration, 0, reduced),
          x: 0,
          y: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function WorkCardReveal({
  children,
  className,
  index,
}: WorkCardRevealProps) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const mobileQuery = useMediaQuery("(max-width: 767px)");
  const isMobile = hydrated && mobileQuery;
  const { hashTargeted, ref } = useHashTargetedReveal<HTMLDivElement>();

  const initial = reduced
    ? { opacity: 0, x: 0, y: 0 }
    : isMobile
      ? { opacity: 0, x: 0, y: 32 }
      : { opacity: 0, x: 48, y: 12 };

  return (
    <motion.div
      animate={hashTargeted ? { opacity: 1, x: 0, y: 0 } : undefined}
      className={className}
      initial={initial}
      ref={ref}
      transition={{
        delay: reduced ? 0 : index * 0.12,
        duration: reduced ? 0.01 : 0.85,
        ease,
      }}
      viewport={{ amount: 0.25, once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
