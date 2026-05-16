import Image from "next/image";
import Link from "next/link";

const liveSiteUrl = "https://kite-viola-46916045.figma.site";

const projectFacts = [
  ["Role", "Dashboard UX Designer, Data Visualization Designer"],
  ["Tools", "Figma Make, React, Recharts, Tailwind CSS, AI-assisted iteration"],
  ["Focus", "Campus map, study-space filters, comparison and recommendation flow"],
];

const productFeatures = [
  {
    title: "Study mode filters",
    body: "Users can filter locations by Quiet, Group, Long Stay, or Quick Stop so the map immediately supports different study needs.",
  },
  {
    title: "Interactive campus map",
    body: "Numbered map markers make the campus easier to scan, while each location can open a detail panel with metrics and context.",
  },
  {
    title: "Space analytics",
    body: "Bar charts and scatter plots help students compare comfort, noise, crowd level, outlets, and satisfaction at a glance.",
  },
  {
    title: "Recommendation and compare",
    body: "Personalized recommendation cards and side-by-side comparison help users move from browsing to choosing a space.",
  },
];

const processSteps = [
  [
    "1. Define the product problem",
    "I framed the dashboard around a practical campus issue: students often know they need a place to study, but they cannot quickly compare noise, comfort, crowding, outlets, and fit.",
  ],
  [
    "2. Map the decision flow",
    "The user flow lets students start from the map, filter by study mode, inspect a location, compare up to three options, or ask for a recommendation.",
  ],
  [
    "3. Make the map readable",
    "The campus map was redrawn and simplified so it could work as an interface, not just a reference image. Numbered pins make locations easier to identify.",
  ],
  [
    "4. Build charts and feedback states",
    "The final prototype uses chart components, metric toggles, detail panels, and recommendation cards to keep the decision process visible.",
  ],
];

const interfaceImages = [
  {
    alt: "Campus Study Space Finder interactive campus map with numbered study space markers",
    caption: "Map-first browsing",
    description:
      "The main screen starts with a visual campus map so students can orient themselves before moving into detailed metrics.",
    height: 1000,
    src: "/case-studies/3ds/figma-site-hero.png",
    width: 1600,
  },
  {
    alt: "Campus Study Space Finder analytics dashboard with metric comparison and scatter plot",
    caption: "Analytics dashboard",
    description:
      "Metric controls switch the bar chart focus, while the scatter plot helps compare spaces through noise level, comfort, and satisfaction.",
    height: 2800,
    src: "/case-studies/3ds/figma-site-long.png",
    width: 1600,
  },
  {
    alt: "Process slide showing the Campus Study Space Finder user flow chart",
    caption: "User flow logic",
    description:
      "The flow is non-linear: users can filter, inspect a pin, compare spaces, review analytics, or return to the map at any point.",
    height: 1620,
    src: "/case-studies/3ds/pdf-page-08.png",
    width: 2880,
  },
  {
    alt: "Process slide showing map refinement from original campus map to simplified interface map",
    caption: "Map refinement",
    description:
      "The map was simplified from the original campus reference so the interface could support quick orientation and cleaner markers.",
    height: 1620,
    src: "/case-studies/3ds/pdf-page-11.png",
    width: 2880,
  },
  {
    alt: "Process slide describing AI-assisted development and design iteration",
    caption: "AI-assisted build process",
    description:
      "AI was used as a coding partner for component building, troubleshooting, and iteration while design judgment stayed with the designer.",
    height: 1620,
    src: "/case-studies/3ds/pdf-page-16.png",
    width: 2880,
  },
];

const skills = [
  "Dashboard UX",
  "Data visualization",
  "Information architecture",
  "Interactive filtering",
  "Map-based UI",
  "Recharts",
  "Figma Make",
  "AI-assisted prototyping",
];

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#17172A]/64 p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
        {label}
      </p>
      <p className="mt-3 text-[17px] font-semibold leading-7">{value}</p>
    </div>
  );
}

export default function PricingDashboardCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F1A] text-[#E2E8F0]">
      <div className="ambient-grid pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="ambient-glow pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(139,92,246,0.13),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.08),transparent_26%),radial-gradient(circle_at_72%_52%,rgba(0,55,103,0.12),transparent_32%),linear-gradient(180deg,rgba(15,15,26,0)_0%,#0F0F1A_82%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:pt-32">
        <Link
          className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[14px] font-semibold text-[#94A3B8] transition hover:border-[#8B5CF6]/50 hover:text-[#E2E8F0]"
          href="/#work"
        >
          Back to selected work
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Data Visualization / Dashboard Design / Figma Make
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-[52px] font-semibold leading-[1.02] sm:text-[72px] lg:text-[82px]">
              Campus Study Space Finder
            </h1>
            <p className="mt-7 max-w-2xl text-[19px] leading-9 text-[#94A3B8]">
              An interactive data visualization product that helps Sheridan
              students compare campus study spaces by noise, comfort, crowd
              level, amenities, and learning mode.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex justify-center rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
                href={liveSiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open live prototype
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
              alt="Campus Study Space Finder prototype showing filters and interactive campus map"
              className="h-[440px] w-full rounded-lg object-cover object-top"
              height={1000}
              priority
              src="/case-studies/3ds/figma-site-hero.png"
              style={{ height: 440, objectFit: "cover", objectPosition: "top" }}
              width={1600}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projectFacts.map(([label, value]) => (
            <FactCard key={label} label={label} value={value} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
            Overview
          </p>
          <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
            Helping students choose a study space with less guessing.
          </h2>
        </div>
        <div className="space-y-6 text-[18px] leading-9 text-[#94A3B8]">
          <p>
            Students often waste time moving between campus spaces because the
            information they need is scattered or invisible: how quiet a space
            is, how crowded it feels, whether outlets are available, and whether
            the room supports solo or group work.
          </p>
          <p>
            This dashboard turns those questions into a visual decision tool.
            Users can start from a campus map, filter by study mode, inspect
            location details, compare spaces side by side, and review
            recommendation cards for different study needs.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <div className="mb-4 flex items-center justify-between px-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Live Prototype Preview
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
              className="h-[720px] w-full bg-[#10101D]"
              src={liveSiteUrl}
              style={{ height: 720 }}
              title="Campus Study Space Finder live prototype preview"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Product System
            </p>
            <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.1] sm:text-[46px]">
              A map, analytics dashboard, and recommendation flow working
              together.
            </h2>
          </div>
          <p className="max-w-2xl text-[17px] leading-8 text-[#94A3B8] lg:justify-self-end">
            The interface is designed around a student decision loop: locate a
            space, understand the tradeoffs, compare options, and choose a
            place that fits the current task.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
          <figure className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] xl:row-span-2">
            <Image
              alt={interfaceImages[0].alt}
              className="h-auto w-full rounded-lg bg-[#f8fafc] object-contain"
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

          <div className="grid gap-4 min-[560px]:grid-cols-2 xl:grid-cols-1">
            {productFeatures.map((feature, index) => (
              <div
                className="min-h-[142px] rounded-lg border border-white/10 bg-[#17172A]/72 p-5"
                key={feature.title}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[13px] font-semibold text-[#8B5CF6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[20px] font-semibold leading-[1.15]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#94A3B8]">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <figure className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.18)] xl:col-span-2">
            <Image
              alt={interfaceImages[1].alt}
              className="h-[560px] w-full rounded-lg bg-[#10101D] object-contain object-top sm:h-[680px]"
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

          <figure className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.18)] xl:col-span-2 xl:mx-auto xl:w-[82%]">
            <Image
              alt="Process slide showing smart recommendation cards for different study needs"
              className="h-auto w-full rounded-lg bg-[#c8d9ef] object-contain"
              height={1620}
              src="/case-studies/3ds/pdf-page-13.png"
              width={2880}
            />
            <figcaption className="px-1 pt-4">
              <p className="text-[16px] font-semibold text-[#E2E8F0]">
                Recommendation cards
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#94A3B8]">
                The recommendation layer translates raw metrics into easier
                choices like quiet study, group work, long sessions, and hidden
                gems.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8"
        id="process"
      >
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Process
            </p>
            <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
              From product requirements to a working Figma Make prototype.
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-[#94A3B8]">
              The process moved through problem framing, user flow mapping, map
              readability, chart selection, and AI-assisted front-end iteration.
              Each step made the dashboard easier to scan and easier to use.
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

        <div className="mt-10 space-y-6">
          {interfaceImages.slice(2).map((image, index) => (
            <article
              className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4"
              key={image.src}
            >
              <div className="max-w-3xl">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
                  Process 0{index + 1}
                </p>
                <h3 className="font-display mt-3 text-[28px] font-semibold leading-[1.14]">
                  {image.caption}
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-[#94A3B8]">
                  {image.description}
                </p>
              </div>
              <Image
                alt={image.alt}
                className="mt-5 h-auto w-full rounded-lg border border-white/10 bg-[#c8d9ef] object-contain"
                height={image.height}
                src={image.src}
                width={image.width}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-7 sm:p-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
            Design Decisions
          </p>
          <h2 className="font-display mt-4 text-[32px] font-semibold leading-[1.12]">
            Prioritizing quick comparison over decorative data visuals.
          </h2>
          <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#94A3B8]">
            <p>
              The chart system uses simple visual forms because the user goal is
              fast comparison, not data exploration for its own sake. Bar charts
              work for metric ranking, scatter plots show relationships, and
              radar charts support side-by-side space profiles.
            </p>
            <p>
              The interface also avoids a single linear path. Students can
              browse visually, use filters, inspect details, compare, or jump to
              recommendations depending on how much they already know about the
              campus.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4">
          <Image
            alt="Process slide showing chart design choices for the dashboard"
            className="h-auto w-full rounded-lg bg-[#c8d9ef] object-contain"
            height={1620}
            src="/case-studies/3ds/pdf-page-05.png"
            width={2880}
          />
          <p className="mt-4 px-1 text-[15px] leading-7 text-[#94A3B8]">
            Chart choices were selected for readability, comparison, labels,
            spacing, and clear interaction states.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-7 sm:p-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
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
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
            Result
          </p>
          <p className="mt-5 text-[17px] leading-8 text-[#94A3B8]">
            The final prototype presents a complete decision system: filter the
            campus map, inspect study spaces, compare chart-based metrics, and
            receive recommendations that translate data into a clear next step.
          </p>
          <a
            className="mt-7 inline-flex rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
            href={liveSiteUrl}
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
