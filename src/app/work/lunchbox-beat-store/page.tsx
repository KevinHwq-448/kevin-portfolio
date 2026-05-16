import Image from "next/image";
import Link from "next/link";

const liveSiteUrl = "https://lunch-box-lilac-kappa.vercel.app/";

const projectFacts = [
  ["Role", "Product UI Designer, Front-End Builder"],
  ["Tools", "Next.js, React, Figma, audio interface patterns"],
  ["Focus", "Beat preview, catalog browsing, producer-facing presentation"],
];

const productFeatures = [
  {
    title: "Beat discovery",
    body: "A storefront structure helps producers present tracks through cover art, tags, price cues, and clear browsing states.",
  },
  {
    title: "Audio-first preview",
    body: "The interface prioritizes play controls, waveform rhythm, and fast preview behavior so users can evaluate beats quickly.",
  },
  {
    title: "Organized catalog",
    body: "Cards, filters, and repeated metadata make the beat library easier to scan without overloading the page.",
  },
  {
    title: "Responsive product UI",
    body: "The layout adapts from a polished desktop storefront to a compact mobile buying and listening flow.",
  },
];

const processSteps = [
  [
    "1. Map the buying flow",
    "I treated the site like a small music product: browse beats, preview audio, compare options, then move toward a purchase or contact action.",
  ],
  [
    "2. Design the beat card system",
    "Each card needed to communicate track identity, genre/mood, audio state, and action hierarchy without becoming visually noisy.",
  ],
  [
    "3. Prototype the audio UI",
    "The core interaction was previewing beats. I focused on making play controls, waveform visuals, and active states feel immediate and readable.",
  ],
  [
    "4. Build and refine the front end",
    "The final site was shaped through responsive layout, spacing passes, button hierarchy, and visual polish for a more product-ready presentation.",
  ],
];

const skills = [
  "Product UI",
  "Front-end development",
  "Audio interaction design",
  "Responsive layout",
  "Card system design",
  "Visual hierarchy",
  "Prototype refinement",
  "AI-assisted iteration",
];

const interfaceImages = [
  {
    alt: "Lunchbox Beat Store navigation with logo, primary links, search, user, and cart actions",
    caption: "Navigation system",
    description:
      "A compact top bar keeps Home, Kits, Mixing, About, search, account, and cart actions visible without competing with the beat catalog.",
    height: 120,
    src: "/case-studies/lunchbox/lunchbox-nav.png",
    width: 700,
  },
  {
    alt: "Lunchbox audio player showing playback progress, beat title, time, volume, like, and buy controls",
    caption: "Persistent audio player",
    description:
      "Once a beat is previewed, playback controls stay available so the user can keep listening while comparing license options.",
    height: 200,
    src: "/case-studies/lunchbox/lunchbox-player.png",
    width: 1600,
  },
  {
    alt: "Lunchbox beat card for HPN Complexity with tags, metadata, license chips, price, and license button",
    caption: "Beat card anatomy",
    description:
      "Each card combines genre tags, artwork, play state, BPM/key metadata, license chips, price, and a clear purchase path.",
    height: 390,
    src: "/case-studies/lunchbox/lunchbox-beat-card.png",
    width: 1060,
  },
  {
    alt: "Lunchbox license modal showing MP3, WAV, tracked out, and unlimited lease pricing",
    caption: "License selection",
    description:
      "The license modal separates pricing into four clear tiers so producers can compare file access and usage level quickly.",
    height: 1000,
    src: "/case-studies/lunchbox/lunchbox-license-modal-full.png",
    width: 1600,
  },
  {
    alt: "Lunchbox cart modal showing a selected tracked out lease, total price, clear action, and checkout with Stripe button",
    caption: "Cart confirmation",
    description:
      "After a license is selected, the cart confirms the beat, lease type, total price, and checkout action before the user moves to payment.",
    height: 900,
    src: "/case-studies/lunchbox/lunchbox-cart-modal-with-item.png",
    width: 1600,
  },
];

function WireframeMockup() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-5">
      <div className="grid gap-4 md:grid-cols-[0.74fr_1.26fr]">
        <div className="space-y-3">
          <div className="h-4 w-24 rounded-full bg-[#8B5CF6]/45" />
          <div className="h-7 w-4/5 rounded-full bg-white/14" />
          <div className="h-7 w-3/5 rounded-full bg-white/10" />
          <div className="mt-5 h-10 w-36 rounded-full bg-white/12" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[0, 1, 2, 3].map((item) => (
            <div
              className="rounded-lg border border-white/10 bg-[#10101D] p-3"
              key={item}
            >
              <div className="h-20 rounded bg-[linear-gradient(135deg,rgba(139,92,246,0.32),rgba(34,211,238,0.12))]" />
              <div className="mt-3 h-3 w-4/5 rounded-full bg-white/14" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LunchboxCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F1A] text-[#E2E8F0]">
      <div className="ambient-grid pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.022)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="ambient-glow pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(139,92,246,0.12),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.1),transparent_28%),linear-gradient(180deg,rgba(15,15,26,0)_0%,#0F0F1A_82%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:pt-32">
        <Link
          className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[14px] font-semibold text-[#94A3B8] transition hover:border-[#8B5CF6]/50 hover:text-[#E2E8F0]"
          href="/#work"
        >
          Back to selected work
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Web Product / Audio UI / Front-End
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-[52px] font-semibold leading-[1.06] sm:text-[72px] lg:text-[80px]">
              Lunchbox Beat Store
            </h1>
            <p className="mt-7 max-w-2xl text-[19px] leading-9 text-[#94A3B8]">
              A music web product for producers to preview, organize, and
              present beats through an audio-first interface.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex justify-center rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
                href={liveSiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open live website
              </a>
              <a
                className="inline-flex justify-center rounded-full border border-white/15 px-5 py-3 text-[15px] font-semibold text-[#E2E8F0] transition hover:-translate-y-0.5 hover:border-[#8B5CF6]/70 hover:bg-[#8B5CF6]/10"
                href="#process"
              >
                View process
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#17172A]/78 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
            <Image
              alt="Lunchbox Beat Store homepage showing hero message and first beat card"
              className="h-[440px] w-full rounded-lg object-cover object-top"
              height={875}
              priority
              src="/case-studies/lunchbox/lunchbox-hero-and-card.png"
              width={1120}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projectFacts.map(([label, value]) => (
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

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
            Overview
          </p>
          <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
            Turning a beat catalog into a clearer listening and buying
            experience.
          </h2>
        </div>
        <div className="space-y-6 text-[18px] leading-9 text-[#94A3B8]">
          <p>
            Lunchbox Beat Store is designed around a simple user goal: hear a
            beat quickly, understand what it is, and decide whether it fits a
            project. The interface treats audio preview as the primary action
            instead of hiding it behind a generic product card.
          </p>
          <p>
            The project combines product UI, audio controls, card-based
            browsing, and responsive front-end implementation. The result is a
            small storefront experience that feels direct, organized, and ready
            for a music producer audience.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <div className="mb-4 flex items-center justify-between px-2">
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Live Site Preview
            </p>
            <a
              className="text-sm font-semibold text-[#94A3B8] transition hover:text-[#E2E8F0]"
              href={liveSiteUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open in new tab
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#10101D]">
            <iframe
              className="h-[680px] w-full bg-[#10101D]"
              src={liveSiteUrl}
              title="Lunchbox Beat Store live website preview"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Interface Details
            </p>
            <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
              Designing around the moments where users listen, compare, and
              choose.
            </h2>
          </div>
          <p className="text-[17px] leading-8 text-[#94A3B8]">
            The interface is built from repeated product patterns: a clear
            navigation bar, beat cards with audio metadata, a persistent player,
            and a license selector that supports the purchase decision.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4">
            <Image
              alt={interfaceImages[0].alt}
              className="h-[120px] w-full rounded-lg object-cover object-left"
              height={interfaceImages[0].height}
              src={interfaceImages[0].src}
              width={interfaceImages[0].width}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                {interfaceImages[0].caption}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                {interfaceImages[0].description}
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4">
            <Image
              alt={interfaceImages[1].alt}
              className="h-[120px] w-full rounded-lg object-cover"
              height={interfaceImages[1].height}
              src={interfaceImages[1].src}
              width={interfaceImages[1].width}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                {interfaceImages[1].caption}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                {interfaceImages[1].description}
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4 md:col-span-2 lg:mx-auto lg:w-[82%]">
            <Image
              alt={interfaceImages[2].alt}
              className="h-auto w-full rounded-lg bg-[#10101D] object-contain"
              height={interfaceImages[2].height}
              src={interfaceImages[2].src}
              width={interfaceImages[2].width}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                {interfaceImages[2].caption}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                {interfaceImages[2].description}
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4">
            <Image
              alt={interfaceImages[3].alt}
              className="h-auto w-full rounded-lg bg-[#10101D] object-contain"
              height={interfaceImages[3].height}
              src={interfaceImages[3].src}
              width={interfaceImages[3].width}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                {interfaceImages[3].caption}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                {interfaceImages[3].description}
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#17172A]/72 p-4 md:col-span-2 lg:mx-auto lg:w-[82%]">
            <Image
              alt={interfaceImages[4].alt}
              className="h-auto w-full rounded-lg bg-[#10101D] object-contain"
              height={interfaceImages[4].height}
              src={interfaceImages[4].src}
              width={interfaceImages[4].width}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                {interfaceImages[4].caption}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                {interfaceImages[4].description}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="relative z-10 mx-auto max-w-7xl px-5 py-18 sm:px-8"
        id="process"
      >
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Process
            </p>
            <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
              Building the store around preview speed, hierarchy, and trust.
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-[#94A3B8]">
              I approached the site as a product design problem, not just a
              visual page. The key question was how to make a beat feel easy to
              evaluate: what does it sound like, what category is it in, and
              what action should happen next?
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
          <div className="lg:col-span-7">
            <WireframeMockup />
            <p className="mt-4 text-[15px] leading-7 text-[#94A3B8]">
              Early structure focused on the relationship between storefront
              messaging, beat cards, and repeatable preview actions.
            </p>
          </div>

          <div className="grid gap-5 lg:col-span-5">
            {productFeatures.map((feature) => (
              <div
                className="rounded-lg border border-white/10 bg-[#17172A]/72 p-5"
                key={feature.title}
              >
                <h3 className="font-display text-[20px] font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#94A3B8]">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
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
            The final product presents beat browsing as a focused interaction:
            choose a track, preview it quickly, understand the metadata, and
            move toward the next action without losing context.
          </p>
          <a
            className="mt-7 inline-flex rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
            href={liveSiteUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open live website
          </a>
        </div>
      </section>
    </main>
  );
}
