import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, Github, Linkedin, Code2, Database, Globe, Wrench, Award, Users, Sparkles } from "lucide-react";
import portrait from "@/assets/nethra-portrait.jpg";
import projHealthcare from "@/assets/proj-healthcare.jpg";
import projFortiScan from "@/assets/proj-cybersec.jpg";
import projPrice from "@/assets/proj-price.jpg";
import { Nav } from "@/components/portfolio/Nav";
import { SectionLabel } from "@/components/portfolio/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nethra Krishnan" },
      {
        name: "description",
        content:
          "Portfolio of Nethra Krishnan - Data Science & ML Engineer building predictive, deep learning, and analytics-driven products.",
      },
      { property: "og:title", content: "Nethra Krishnan - Data Scientist & ML Engineer" },
      {
        property: "og:description",
        content:
          "Architecting intelligence at the intersection of data, design, and deep learning.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Vitaverse - Healthcare Digital Twin",
    img: projHealthcare,
    desc: "AI-powered Healthcare Digital Twin for disease progression prediction, risk assessment, intervention simulation, and explainable clinical decision support.",
    tags: ["Python", "XGBoost", "Streamlit", "SHAP", "LSTM"],
    github: "https://github.com/nethra0906/VitaVerse.git",
  },
  {
    title: "FortiScan",
    img: projFortiScan,
    desc: "AI-based system that analyses insecure code and automatically suggests secure corrected implementations.",
    tags: ["Cybersecurity", "AI", "LLMs"],
    github: "https://github.com/nethra0906/FortiScan.git",
  },
  {
    title: "PriceIQ - Dynamic Pricing Engine",
    img: projPrice,
    desc: "An end-to-end Dynamic Pricing Engine using XGBoost demand forecasting and grid search optimization, achieving R² of 0.85+ across 4 product categories with 2 years of synthetic retail sales data",
    tags: ["Scikit-Learn", "Prophet", "Streamlit"],
    github: "https://github.com/nethra0906/PriceIQ.git",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    icon: Database,
    title: "DS & ML",
    items: ["Scikit-Learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    icon: Globe,
    title: "Web & Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Bootstrap"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Power BI", "Git / GitHub", "Docker", "AWS", "MySQL", "Figma"],
  },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <SectionLabel index="01" label="Introduction" />
            <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Hi, I am <br />
              <span className="text-gradient-accent whitespace-nowrap">
                Nethra Krishnan.
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Data Scientist & ML Engineer specializing in Machine Learning and Data Analysis.
              Building the next generation of data-driven solutions at the intersection of
              technology and impact.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-smooth hover:bg-primary hover:shadow-glow"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="reveal relative" style={{ animationDelay: "0.2s" }}>
            <div className="group relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-border bg-gradient-card p-2 shadow-elevated transition-smooth hover:border-primary/50">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={portrait}
                  alt="Portrait of Nethra Krishnan"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-accent opacity-30 blur-2xl transition-opacity duration-700 group-hover:opacity-60" />
            </div>
            <div className="absolute -right-2 -top-2 hidden animate-float md:block">
              <div className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                CGPA 9.49
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel index="02" label="About" />
            <h2 className="font-display text-4xl md:text-5xl">The Journey</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently pursuing a B.Tech in Computer Science with a specialization in Data Science
              at <span className="text-foreground">VIT Vellore</span>. My approach combines
              rigorous mathematical foundations with cutting-edge engineering to solve complex
              real-world problems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoCard
                title="Education"
                lines={["VIT University, Vellore", "B.Tech CS (Data Science)"]}
              />
              <InfoCard
                title="Focus Areas"
                lines={["Machine Learning, Algorithms, Data Analytics"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel index="03" label="Works" />
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl">Selected Projects</h2>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              {projects.length} / featured
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="hover-lift group relative overflow-hidden rounded-2xl border border-border bg-gradient-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
             <SectionLabel index="04" label="Skills" />
            <h2 className="font-display text-4xl md:text-5xl">Technical Proficiency</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-display text-lg">{g.title}</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & ACHIEVEMENTS */}
      <section id="experience" className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel index="05" label="Experience" />
            <h2 className="mb-10 font-display text-4xl md:text-5xl">Professional Experience</h2>
            <div className="relative border-l border-border pl-6 space-y-12">

              {/* Experience 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-glow animate-pulse-glow" />

                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Summer 2025
                </p>

                <h3 className="mt-2 font-display text-xl">
                  Analytics & AI Intern
                </h3>

                <p className="text-sm text-primary">
                  Adani Enterprises
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Authored a white paper on the Vessel AI architecture; integrated 6.6K+
                  records across PDT, SAP, and CSI sources; built Power BI dashboards
                  converting metrics into leadership-ready KPIs.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-glow animate-pulse-glow" />

                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  April 2025 - July 2025
                </p>

                <h3 className="mt-2 font-display text-xl">
                  UI/UX Intern
                </h3>

                <p className="text-sm text-primary">
                  Astute 
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Contributed to projects that focused on enhancing user experiences and creating impactful visual designs.
                </p>
              </div>

            </div>
          </div>

          <div>
            <SectionLabel index="06" label="Other Works" />
            <h2 className="mb-10 font-display text-4xl md:text-5xl">Patents & Leadership</h2>
            <div className="space-y-4">
              <AchieveCard
                icon={Award}
                title="Indian Patent Filed"
                desc="Real-time security analysis platform for AI-generated code using static analysis and ML, with adaptive remediation."
              />
              <AchieveCard
                icon={Users}
                title="Core Member at VIT Clubs"
                desc="Mozilla Firefox Club & IEEE-CS Chapter in Design & Management. "
              />
              <AchieveCard
                icon={Sparkles}
                title="Purchase Coordinator at Gravitas'25"
                desc="Handled the procurement of materials for 150+ events at Gravitas'25."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-32 text-center md:px-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-4xl">
          <SectionLabel index="07" label="Contact Me" />
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Let's build something <br />
            <span className="text-gradient-accent">extraordinary.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <ContactPill
              href="mailto:nethra.krish0906@gmail.com"
              icon={Mail}
              label="Email Me"
            />
            <span className="text-muted-foreground">·</span>
            <ContactPill
              href="https://www.linkedin.com/in/nethrakrishnan/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <span className="text-muted-foreground">·</span>
            <ContactPill
              href="https://github.com/nethra0906"
              icon={Github}
              label="GitHub"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p className="font-display text-sm text-foreground">Nethra Krishnan</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/nethrakrishnan" className="hover:text-primary">
              LinkedIn
            </a>
            <a href="https://github.com/nethra0906" className="hover:text-primary">
              GitHub
            </a>
            <a href="mailto:nethra.krish0906@gmail.com" className="hover:text-primary">
              Mail
            </a>
          </div>
          <p>© 2026 Nethra Krishnan. Built with precision.</p>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="group rounded-2xl border border-border bg-gradient-card p-5 transition-smooth hover:-translate-y-1 hover:border-primary/40">
      <p className="font-display text-sm text-foreground">{title}</p>
      <div className="mt-2 space-y-0.5 text-sm text-muted-foreground">
        {lines.map((l, i) => (
          <p key={i} className={i === 1 ? "text-primary" : ""}>
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

function AchieveCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Award;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-border bg-gradient-card p-5 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-display text-base">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function ContactPill({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium transition-smooth hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-glow"
    >
      <Icon className="h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
      {label}
    </a>
  );
}
