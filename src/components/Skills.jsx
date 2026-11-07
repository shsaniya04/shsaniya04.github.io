import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    number: "01",
    title: "Programming & Tools",
    description: "Core tools for working with data and building applications.",
    skills: portfolio.skills.programming,
  },
  {
    number: "02",
    title: "Data Science & Analytics",
    description: "Cleaning, exploring, and understanding data.",
    skills: portfolio.skills.dataScience,
  },
  {
    number: "03",
    title: "Machine Learning",
    description: "Building, evaluating, and deploying predictive models.",
    skills: portfolio.skills.machineLearning,
  },
  {
    number: "04",
    title: "Deep Learning & Generative AI",
    description: "Neural networks, LLMs, and retrieval-based AI systems.",
    skills: portfolio.skills.ai,
  },
  {
    number: "05",
    title: "Business Intelligence",
    description: "Dashboards and reporting that support decisions.",
    skills: portfolio.skills.businessIntelligence,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-[#b89b68]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="02" label="Skills & Tech Stack">
          Tools I use to
          <span className="text-[#b89b68]"> build and learn.</span>
        </SectionHeading>

        {/* Skills */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {skillCategories.map((category) => (
            <Reveal
              key={category.number}
              className="group grid gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.015] md:grid-cols-[100px_260px_1fr] md:items-start md:gap-8"
            >
              {/* Number */}
              <span className="text-sm tracking-[0.2em] text-[#b89b68]/70">
                {category.number}
              </span>

              {/* Category */}
              <div>
                <h3 className="text-xl font-medium text-[#f5f1e8]">
                  {category.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/35">
                  {category.description}
                </p>
              </div>

              {/* Skill pills — staggered in */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={skill}
                    style={{ "--i": i }}
                    className="pill rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b89b68]/40 hover:bg-[#b89b68]/5 hover:text-[#f5f1e8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal className="mt-10 flex items-center gap-4 text-sm text-white/30">
          <span className="h-px w-10 bg-[#b89b68]/40" />
          <span>
            Continuously learning and expanding my technical toolkit.
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
