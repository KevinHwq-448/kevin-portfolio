import {
  FadeIn,
  ScaleIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "./motion-reveal";
import ProjectFlowShowcase from "./selected-work-flow";
import SelectedWorkCards from "./selected-work-cards";
import SiteNav from "./site-nav";

type ThumbnailType = "tap" | "audio" | "dashboard" | "puzzle";

const projects: {
  title: string;
  category: string;
  role: string;
  tools: string;
  summary: string;
  thumbnail: ThumbnailType;
}[] = [
  {
    title: "TapTempo Recommender",
    category: "Physical Computing / Arduino / Music Interaction",
    role: "Interaction Design, Prototyping",
    tools: "Arduino, Figma, JavaScript",
    summary:
      "A physical-digital prototype that turns tap input into BPM estimation and music recommendation feedback.",
    thumbnail: "tap",
  },
  {
    title: "Lunchbox Beat Store",
    category: "Web Product / Audio UI / Front-End",
    role: "Product UI, Front-End",
    tools: "Next.js, Figma, Audio UI",
    summary:
      "A music web product for producers to preview, organize, and present beats through an audio-first interface.",
    thumbnail: "audio",
  },
  {
    title: "Campus Study Space Finder",
    category: "Data Visualization / Dashboard Design",
    role: "Dashboard UX, Data Visualization",
    tools: "Figma Make, Recharts, AI",
    summary:
      "An interactive campus dashboard that helps students compare study spaces through maps, filters, charts, and recommendations.",
    thumbnail: "dashboard",
  },
  {
    title: "Beyond the Shadows",
    category: "Interactive Narrative / Web Puzzle / VR Concept",
    role: "Interaction Design, Story Systems",
    tools: "Web Prototype, Puzzle Logic, VR Concept",
    summary:
      "A multi-platform narrative prototype using posters, web puzzles, and a VR server room concept to explore hidden systems.",
    thumbnail: "puzzle",
  },
];

const workSteps = [
  {
    title: "Map the interaction loop",
    description:
      "I define who acts, what they need, what the system returns, and where the experience can become unclear.",
  },
  {
    title: "Prototype with real signals",
    description:
      "I test decisions through quick screen, data, audio, or physical-input prototypes instead of relying only on static screens.",
  },
  {
    title: "Make feedback visible",
    description:
      "I design states, transitions, labels, and feedback so people understand what changed and what action comes next.",
  },
  {
    title: "Refine through testing",
    description:
      "I use critique and usability testing to reduce friction, clarify hierarchy, and prepare the design for handoff.",
  },
];

const skillGroups = [
  {
    title: "Design",
    skills: [
      "UX flows",
      "Product design",
      "Interaction systems",
      "Design systems",
    ],
  },
  {
    title: "Research",
    skills: ["User interviews", "Usability testing", "Journey mapping"],
  },
  {
    title: "Technical",
    skills: [
      "React / Next.js",
      "Data visualization",
      "Arduino prototyping",
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      "Figma",
      "Figma Make",
      "AI-assisted prototyping",
      "Adobe Creative Cloud",
    ],
  },
];

const processCardOffsets = ["lg:mt-0", "lg:mt-14", "lg:-mt-4", "lg:mt-24"];
const skillCardOffsets = ["lg:mt-0", "lg:mt-12", "lg:mt-4", "lg:mt-20"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F1A] text-[#E2E8F0]">
      <div className="ambient-grid pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="ambient-glow pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(139,92,246,0.11),transparent_30%),radial-gradient(circle_at_78%_8%,rgba(34,211,238,0.055),transparent_26%),linear-gradient(180deg,rgba(15,15,26,0)_0%,#0F0F1A_88%)]" />

      <SiteNav />

      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pb-32"
      >
        <FadeIn className="max-w-[720px] lg:pb-10" distance={18}>
          <p className="text-[13px] font-semibold uppercase text-[#94A3B8]">
            Kevin Huang — Interaction Lab
          </p>
          <p className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[13px] font-semibold text-[#E2E8F0] shadow-[0_12px_32px_rgba(0,0,0,0.12)] sm:text-sm">
            Interaction Design · Product Interfaces · Creative Technology
          </p>
          <h1 className="font-display mt-8 max-w-[760px] pb-4 text-[#E2E8F0]">
            <span className="block text-[52px] font-semibold leading-[1.03] sm:text-[76px] lg:text-[84px]">
              Designing
            </span>
            <span className="mt-1 block text-[34px] font-semibold leading-[1.12] text-[#D7DDEA] sm:ml-12 sm:text-[50px] lg:text-[56px]">
              digital products
            </span>
            <span className="mt-1 block text-[34px] font-semibold leading-[1.12] text-[#AEB9CC] sm:text-[48px] lg:text-[54px]">
              data interfaces
            </span>
            <span className="relative mt-2 block pb-3 sm:pl-16">
              <span className="absolute bottom-1 left-0 h-5 w-[82%] rounded-full bg-[#8B5CF6]/16 blur-md sm:left-16" />
              <span className="relative block bg-gradient-to-r from-[#E2E8F0] via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-[38px] font-semibold leading-[1.16] text-transparent sm:text-[56px] lg:text-[62px]">
                <span className="block sm:inline">interactive</span>{" "}
                <span className="block sm:inline">prototypes.</span>
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-[620px] text-[16px] leading-8 text-[#94A3B8] sm:text-[18px]">
            I’m an Interaction Design student exploring how interfaces, data,
            music, and physical inputs can become clear, testable user
            experiences.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="rounded-full bg-[#E2E8F0] px-6 py-3 text-center text-[15px] font-semibold text-[#0F0F1A] shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-center text-[15px] font-semibold text-[#E2E8F0] transition hover:-translate-y-0.5 hover:border-[#8B5CF6]/60 hover:bg-[#8B5CF6]/8"
            >
              Contact
            </a>
          </div>
        </FadeIn>

        <FadeIn className="lg:pt-14" delay={0.12} distance={16}>
          <ProjectFlowShowcase />
        </FadeIn>
      </section>

      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28"
      >
        <FadeIn className="mb-8 max-w-[980px] lg:ml-[8%]">
          <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
            Selected Work
          </p>
          <h2 className="font-display mt-4 text-[30px] font-semibold leading-[1.16] sm:text-[40px] lg:text-[46px]">
            Selected projects across physical computing, music interfaces, web
            products, and data visualization.
          </h2>
        </FadeIn>

        <SelectedWorkCards projects={projects} />
      </section>

      <section
        id="process"
        className="relative z-10 border-y border-white/10 bg-[#17172A]/28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-28">
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              How I Work
            </p>
            <h2 className="font-display mt-4 text-[32px] font-semibold leading-[1.12] sm:text-[44px]">
              A practical process for designing and validating interactions.
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {workSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div
                  className={`rounded-lg border border-white/10 bg-[#17172A]/82 p-6 transition hover:-translate-y-1 hover:border-[#8B5CF6]/40 ${processCardOffsets[index]}`}
                >
                  <p className="font-mono text-[13px] text-[#8B5CF6]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-4 text-[22px] font-semibold leading-[1.16]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#94A3B8]">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28"
      >
        <FadeIn className="mb-10 max-w-3xl lg:ml-auto lg:mr-[10%]">
          <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
            Skills
          </p>
          <h2 className="font-display mt-4 text-[32px] font-semibold leading-[1.12] sm:text-[44px]">
            Core skills for interaction design internship work.
          </h2>
        </FadeIn>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <StaggerItem key={group.title}>
              <div
                className={`rounded-lg border border-white/10 bg-[#17172A]/72 p-6 ${skillCardOffsets[index]}`}
              >
                <h3 className="font-display text-[21px] font-semibold">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-[15px] leading-6 text-[#94A3B8]">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section
        id="about"
        className="relative z-10 border-y border-white/10 bg-[#17172A]/28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-28">
          <SlideIn className="lg:pb-12" direction="left">
            <div className="rounded-lg border border-white/10 bg-[#17172A]/78 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.16)]">
              <p className="text-[13px] font-semibold uppercase text-[#94A3B8]">
                Kevin Huang
              </p>
              <div className="mt-8 space-y-5">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-[14px] text-[#94A3B8]">Focus</p>
                  <p className="font-display mt-1 text-[23px] font-semibold leading-[1.16]">
                    Interaction Design
                  </p>
                </div>
                <div className="border-b border-white/10 pb-5">
                  <p className="text-[14px] text-[#94A3B8]">
                    Currently seeking
                  </p>
                  <p className="font-display mt-1 text-[23px] font-semibold leading-[1.16]">
                    Design internships
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#94A3B8]">Interests</p>
                  <p className="font-display mt-1 text-[23px] font-semibold leading-[1.16]">
                    Product systems, data, technology, prototyping
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
          <SlideIn className="lg:pt-16" direction="right" delay={0.08}>
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              About
            </p>
            <h2 className="font-display mt-4 text-[32px] font-semibold leading-[1.12] sm:text-[44px]">
              I’m an Interaction Design student interested in making technology
              easier to understand and use.
            </h2>
            <p className="mt-6 text-[18px] leading-9 text-[#94A3B8]">
              My work often starts with understanding a problem, mapping the
              user flow, and turning early ideas into testable prototypes. I
              enjoy refining small interaction details so the experience feels
              clearer, smoother, and easier to use.
            </p>
            <p className="mt-5 text-[18px] leading-9 text-[#94A3B8]">
              I’m currently looking for internship opportunities where I can
              contribute to UX, product design, and interactive prototyping
              while continuing to learn from real design teams.
            </p>
          </SlideIn>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28"
      >
        <ScaleIn>
          <div className="ml-auto max-w-6xl rounded-lg border border-white/10 bg-[#17172A]/78 p-7 shadow-[0_18px_44px_rgba(0,0,0,0.16)] sm:p-10 lg:mr-[4%]">
            <p className="text-[13px] font-bold uppercase text-[#8B5CF6]">
              Contact
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display max-w-2xl text-[36px] font-semibold leading-[1.1] sm:text-[48px]">
                  Let&apos;s connect.
                </h2>
                <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#94A3B8]">
                  Reach out for portfolio reviews, internship opportunities, or
                  design collaborations.
                </p>
                <p className="mt-4 font-mono text-[14px] text-[#E2E8F0]">
                  kevin_hwq@qq.com
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:kevin_hwq@qq.com"
                  className="rounded-full bg-[#E2E8F0] px-5 py-3 text-center text-[15px] font-semibold text-[#0F0F1A] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Email
                </a>
                <a
                  href="/resume.pdf"
                  className="rounded-full border border-white/15 px-5 py-3 text-center text-[15px] font-semibold text-[#E2E8F0] transition hover:-translate-y-0.5 hover:border-[#8B5CF6]/70 hover:bg-[#8B5CF6]/10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </ScaleIn>
      </section>
    </main>
  );
}
