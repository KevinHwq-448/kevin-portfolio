import Image from "next/image";
import Link from "next/link";

const liveSiteUrl = "https://resplendent-alfajores-f77fc7.netlify.app/";

const projectFacts = [
  ["Role", "Interaction Designer, Narrative System Designer"],
  ["Tools", "Figma, web prototype, AI-assisted visuals, AR/VR concepting"],
  ["Focus", "Multi-platform story flow, puzzle logic, audience progression"],
];

const platformStages = [
  {
    title: "Platform 1: Poster Entry",
    body: "A normal-looking Campus Discovery Week poster acts as the first clue. The QR code turns a familiar campus announcement into an entry point for the hidden narrative.",
    image: "/case-studies/beyond/platform-1-poster.png",
    alt: "Campus Discovery Week poster with QR code",
    width: 719,
    height: 1011,
  },
  {
    title: "Platform 2: Web Discovery",
    body: "The web layer starts from a believable event page, then shifts into system traces, archive evidence, encrypted records, and terminal-style feedback.",
    image: "/case-studies/beyond/archive-board.png",
    alt: "Archive board with subject cards and system evidence",
    width: 461,
    height: 308,
  },
  {
    title: "Platform 3: Immersive Reveal",
    body: "The final stage turns the hidden system into a spatial experience where the player moves from observing evidence to feeling personally implicated in the system.",
    image: "/case-studies/beyond/platform-3-game.png",
    alt: "Dark immersive game scene with terminal interface",
    width: 698,
    height: 411,
  },
];

const processPhases = [
  {
    kicker: "PJ1",
    title: "Define the story world",
    body: "The first phase translated Plato's Allegory of the Cave into a contemporary campus setting. The core idea became clear: the campus should feel safe and familiar, while small anomalies suggest a deeper system shaping what students see.",
    image: "/case-studies/beyond/pj1-story-structure.png",
    alt: "Project 1 story structure slide",
  },
  {
    kicker: "PJ2",
    title: "Map the interaction sequence",
    body: "The second phase organized the experience as a staged journey: ordinary entry, first anomaly, active investigation, spatial reveal, and personal implication. Each stage needed a different interaction form.",
    image: "/case-studies/beyond/pj2-journey-map.png",
    alt: "Project 2 journey map slide",
  },
  {
    kicker: "PJ3",
    title: "Build and test the platforms",
    body: "The final phase focused on making the project understandable across poster, web, and immersive/game layers. Usability testing checked whether users understood the entry point, followed the clues, and recognized the final reveal.",
    image: "/case-studies/beyond/pj3-usability-testing.png",
    alt: "Project 3 usability testing slide",
  },
];

const skills = [
  "Interaction design",
  "Narrative systems",
  "User journey mapping",
  "Puzzle flow",
  "Web prototyping",
  "AR/VR concepting",
  "Usability testing",
  "AI-assisted iteration",
];

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#17172A]/64 p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
        {label}
      </p>
      <p className="mt-3 text-[17px] font-semibold leading-7">{value}</p>
    </div>
  );
}

export default function BeyondTheShadowsCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F1A] text-[#E2E8F0]">
      <div className="ambient-grid pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="ambient-glow pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(139,92,246,0.14),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.08),transparent_26%),radial-gradient(circle_at_72%_52%,rgba(178,224,122,0.08),transparent_30%),linear-gradient(180deg,rgba(15,15,26,0)_0%,#0F0F1A_82%)]" />

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
              Interactive Narrative / Web Puzzle / VR Concept
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-[52px] font-semibold leading-[1.02] sm:text-[74px] lg:text-[84px]">
              Beyond the Shadows
            </h1>
            <p className="mt-7 max-w-2xl text-[19px] leading-9 text-[#94A3B8]">
              A three-platform interactive narrative that turns a familiar
              campus into a hidden system of clues, records, and immersive
              discovery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex justify-center rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
                href={liveSiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open process website
              </a>
              <a
                className="inline-flex justify-center rounded-full border border-white/15 px-5 py-3 text-[15px] font-semibold text-[#E2E8F0] transition hover:-translate-y-0.5 hover:border-[#8B5CF6]/70 hover:bg-[#8B5CF6]/10"
                href="#process"
              >
                View project flow
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
              <video
                aria-label="Beyond the Shadows interactive narrative video preview"
                autoPlay
                className="h-[420px] w-full rounded-lg object-cover object-top"
                loop
                muted
                playsInline
                poster="/case-studies/beyond/platform-1-poster.png"
                preload="metadata"
                style={{
                  height: 420,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              >
                <source
                  src="/case-studies/beyond/beyond-hero-preview.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projectFacts.map(([label, value]) => (
            <MetricCard key={label} label={label} value={value} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
            Overview
          </p>
          <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
            Designing a story that moves from public clue to personal
            implication.
          </h2>
        </div>
        <div className="space-y-6 text-[18px] leading-9 text-[#94A3B8]">
          <p>
            Beyond the Shadows reimagines Plato&apos;s Allegory of the Cave as
            a campus mystery. The participant begins as a student noticing small
            anomalies in an ordinary environment, then follows evidence that
            reveals a system shaping movement, information, and perception.
          </p>
          <p>
            The design challenge was to make a complex narrative understandable
            through interaction. Each platform has a clear job: create trust,
            introduce doubt, support investigation, and finally make the user
            feel connected to the system they are uncovering.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <div className="mb-4 flex items-center justify-between px-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Live Process Website
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
              title="Beyond the Shadows live process website preview"
            />
          </div>
        </div>
      </section>

      <section
        className="relative z-10 mx-auto max-w-7xl px-5 py-18 sm:px-8"
        id="process"
      >
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Experience Architecture
            </p>
            <h2 className="font-display mt-4 text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
              Three connected platforms, one continuous narrative loop.
            </h2>
          </div>
          <p className="text-[17px] leading-8 text-[#94A3B8]">
            The project is structured as a gradual shift in user role: visitor,
            investigator, then implicated participant. This keeps the mystery
            readable while still letting the audience discover the system
            through action.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {platformStages.map((stage, index) => (
            <article
              className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_20px_56px_rgba(0,0,0,0.18)]"
              key={stage.title}
            >
              <Image
                alt={stage.alt}
                className={`h-[280px] w-full rounded-lg object-contain object-center ${
                  index === 0
                    ? "bg-[#f7e8c9]"
                    : index === 1
                      ? "bg-[#dfe8d8]"
                      : "bg-[#05070A]"
                }`}
                height={stage.height}
                src={stage.image}
                width={stage.width}
              />
              <h3 className="font-display mt-5 text-[22px] font-semibold leading-[1.14]">
                {stage.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#94A3B8]">
                {stage.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
            Project Development
          </p>
          <h2 className="font-display mt-4 max-w-4xl text-[34px] font-semibold leading-[1.12] sm:text-[46px]">
            The project grew from concept writing into a mapped, tested,
            multi-platform experience.
          </h2>
        </div>

        <div className="space-y-6">
          {processPhases.map((phase, index) => (
            <article
              className="grid gap-5 rounded-lg border border-white/10 bg-[#17172A]/72 p-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-center"
              key={phase.title}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
                  {phase.kicker}
                </p>
                <h3 className="font-display mt-3 text-[28px] font-semibold leading-[1.14]">
                  {phase.title}
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-[#94A3B8]">
                  {phase.body}
                </p>
              </div>
              <Image
                alt={phase.alt}
                className="h-[320px] w-full rounded-lg border border-white/10 object-cover object-top"
                height={1377}
                src={phase.image}
                style={{
                  height: 320,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                width={2448}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Testing & Refinement
            </p>
            <h2 className="font-display mt-4 text-[32px] font-semibold leading-[1.12] sm:text-[42px]">
              Checking whether users could follow the story without losing the
              mystery.
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-8 text-[#94A3B8]">
            <p>
              The cognitive walkthrough focused on clarity, navigation, and
              narrative progression across the three platforms. Users moved
              through the poster entry point, digital exploration phase, and
              final immersive/game experience in sequence.
            </p>
            <p>
              The main design questions were practical: Is the entry point
              clear enough? Do the digital cues feel understandable? Does the
              final environment communicate that the system is responding to
              the player?
            </p>
          </div>
        </div>

        <figure className="rounded-lg border border-white/10 bg-[#17172A]/72 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
          <Image
            alt="Cognitive walkthrough usability testing slide"
            className="h-auto w-full rounded-lg bg-[#9CC7A9] object-contain"
            height={1377}
            src="/case-studies/beyond/pj3-usability-testing.png"
            width={2448}
          />
          <figcaption className="mt-4 px-1 text-[15px] leading-7 text-[#94A3B8]">
            The testing phase helped shift the project from a strong concept
            into a clearer user journey with stronger transitions between
            platforms.
          </figcaption>
        </figure>
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
            The final case study presents Beyond the Shadows as a connected
            interaction system: a believable public entry, a web-based discovery
            path, and an immersive reveal that makes the user part of the story.
          </p>
          <a
            className="mt-7 inline-flex rounded-full bg-[#E2E8F0] px-5 py-3 text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
            href={liveSiteUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open process website
          </a>
        </div>
      </section>
    </main>
  );
}
