import Image from "next/image";
import Link from "next/link";

const heroImage = {
  alt: "TapTempo web demo showing a locked BPM and Spotify recommendation directions",
  height: 1276,
  src: "/case-studies/taptempo/taptempo-demo-locked.png",
  width: 1952,
};

const processImages = [
  {
    alt: "TapTempo cardboard prototype with Arduino mounted inside",
    caption: "Physical prototype build",
    description:
      "The cardboard enclosure helped test how a tap-based interaction could feel as a physical object, not just a screen input.",
    height: 480,
    src: "/case-studies/taptempo/image-03-640x480.jpg",
    width: 640,
  },
  {
    alt: "TapTempo hand-drawn interaction prompt on cardboard",
    caption: "Interaction prompt sketch",
    description:
      "Early markings made the tap zone, input instruction, and user action more visible during testing.",
    height: 896,
    src: "/case-studies/taptempo/image-01-672x896.jpg",
    width: 672,
  },
  {
    alt: "Arduino breadboard wiring for TapTempo prototype",
    caption: "Circuit and signal testing",
    description:
      "Arduino and breadboard wiring were used to test whether repeated physical taps could be captured as timing data.",
    height: 640,
    src: "/case-studies/taptempo/image-07-854x640.jpg",
    width: 854,
  },
  {
    alt: "TapTempo prototype enclosure with physical materials and wiring",
    caption: "Enclosure iteration",
    description:
      "Foam and cardboard were adjusted to protect the electronics while keeping the interaction area reachable.",
    height: 672,
    src: "/case-studies/taptempo/image-10-896x672.jpg",
    width: 896,
  },
  {
    alt: "Close-up of TapTempo Arduino wiring",
    caption: "Input reliability",
    description:
      "Wiring checks helped refine the connection between physical tapping, signal detection, and digital BPM feedback.",
    height: 683,
    src: "/case-studies/taptempo/image-09-512x683.jpg",
    width: 512,
  },
  {
    alt: "TapTempo cardboard prototype closed form",
    caption: "Prototype form test",
    description:
      "The final physical form made the system easier to demo: tap the object, read the BPM, and review the recommendation output.",
    height: 384,
    src: "/case-studies/taptempo/image-13-512x384.jpg",
    width: 512,
  },
];

const processSteps = [
  [
    "1. Define the interaction loop",
    "I framed the experience around a simple loop: tap a rhythm, detect the timing, calculate BPM, then show music recommendation feedback.",
  ],
  [
    "2. Build the physical input",
    "The prototype used Arduino components and a rough enclosure to test whether a user could express tempo through a tangible tapping action.",
  ],
  [
    "3. Translate signal into feedback",
    "The system needed clear feedback after each tap, so the web interface made tap progress, BPM state, and recommendation logic visible.",
  ],
  [
    "4. Refine the demo experience",
    "I adjusted the physical form, visual hierarchy, and final web output so the project could be understood quickly in a portfolio or critique setting.",
  ],
];

const skills = [
  "Interaction design",
  "Physical computing",
  "Arduino prototyping",
  "BPM input logic",
  "Feedback design",
  "User testing",
];

const livePrototypeUrl = "https://comfy-starburst-07b90f.netlify.app";

export default function TapTempoCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F1A] text-[#E2E8F0]">
      <div className="ambient-grid pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.022)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="ambient-glow pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(139,92,246,0.13),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.08),transparent_28%),linear-gradient(180deg,rgba(15,15,26,0)_0%,#0F0F1A_82%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 lg:pt-32">
        <Link
          className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[14px] font-semibold text-[#94A3B8] transition hover:border-[#8B5CF6]/50 hover:text-[#E2E8F0]"
          href="/#work"
        >
          Back to selected work
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Physical Computing / Arduino / Music Interaction
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-[52px] font-semibold leading-[1.06] sm:text-[72px] lg:text-[80px]">
              TapTempo Recommender
            </h1>
            <p className="mt-7 max-w-2xl text-[19px] leading-9 text-[#94A3B8]">
              A physical-digital prototype that turns tap input into BPM
              estimation and music recommendation feedback.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#17172A]/78 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <Image
              alt={heroImage.alt}
              className="h-[360px] w-full rounded-lg object-cover"
              height={heroImage.height}
              priority
              src={heroImage.src}
              width={heroImage.width}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Role", "Interaction Designer, Physical Prototyper"],
            ["Tools", "Arduino, Figma, physical materials, web demo"],
            ["Focus", "Tap input, BPM feedback, recommendation flow"],
          ].map(([label, value]) => (
            <div
              className="rounded-lg border border-white/10 bg-[#17172A]/64 p-5"
              key={label}
            >
              <p className="text-[11px] font-bold uppercase text-[#94A3B8]">
                {label}
              </p>
              <p className="mt-3 text-[17px] font-semibold leading-7">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
            Overview
          </p>
          <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
            Designing a clear loop between human rhythm and system feedback.
          </h2>
        </div>
        <div className="space-y-6 text-[18px] leading-9 text-[#94A3B8]">
          <p>
            TapTempo explores how a simple physical action, tapping a beat, can
            become a readable interactive system. The prototype estimates tempo
            from repeated taps, translates that input into BPM feedback, and
            connects the result to a music recommendation experience.
          </p>
          <p>
            The design challenge was not only making the electronics work. It
            was making the interaction understandable: what to do, what the
            system heard, and what changed after each tap.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <div className="mb-4 flex items-center justify-between px-2">
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Live Prototype Preview
            </p>
            <a
              className="text-sm font-semibold text-[#94A3B8] transition hover:text-[#E2E8F0]"
              href={livePrototypeUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open in new tab
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#10101D]">
            <iframe
              className="h-[720px] w-full bg-[#10101D]"
              src={livePrototypeUrl}
              title="TapTempo live prototype preview"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Process
            </p>
            <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
              From rough physical input to a readable music recommendation demo.
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-[#94A3B8]">
              The project moved between hardware testing and interface design.
              The goal was to make every state understandable: where to tap,
              how many taps were needed, what BPM was detected, and why the
              recommendations appeared.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map(([title, body]) => (
              <div
                className="rounded-lg border border-white/10 bg-[#17172A]/72 p-5"
                key={title}
              >
                <h3 className="font-display text-[18px] font-semibold leading-[1.16] text-[#E2E8F0]">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#94A3B8]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:col-span-7">
            <Image
              alt={processImages[0].alt}
              className="h-[430px] w-full rounded-lg object-cover"
              height={processImages[0].height}
              src={processImages[0].src}
              width={processImages[0].width}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                {processImages[0].caption}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                {processImages[0].description}
              </p>
            </figcaption>
          </figure>

          <div className="grid gap-5 lg:col-span-5">
            {processImages.slice(1, 3).map((image) => (
              <figure
                className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4"
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="h-[210px] w-full rounded-lg object-cover"
                  height={image.height}
                  src={image.src}
                  width={image.width}
                />
                <figcaption className="px-1 pt-4">
                  <p className="text-[16px] font-semibold text-[#E2E8F0]">
                    {image.caption}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                    {image.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:col-span-12">
            {processImages.slice(3).map((image) => (
              <figure
                className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4"
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="h-56 w-full rounded-lg object-cover"
                  height={image.height}
                  src={image.src}
                  width={image.width}
                />
                <figcaption className="px-1 pt-4">
                  <p className="text-[16px] font-semibold text-[#E2E8F0]">
                    {image.caption}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                    {image.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-7 sm:p-8">
          <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
            Skills Used
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[14px] font-semibold text-[#E2E8F0]"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-7 sm:p-8">
          <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
            Result
          </p>
          <p className="mt-5 text-[17px] leading-8 text-[#94A3B8]">
            The final prototype demonstrates a complete interaction loop:
            physical tap input, tempo interpretation, visible feedback, and a
            music recommendation direction.
          </p>
          <a
            className="mt-7 inline-flex rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
            href={livePrototypeUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open live prototype
          </a>
        </div>
      </section>
    </main>
  );
}
