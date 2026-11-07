import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Experience() {
  const { experience } = portfolio;

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-[#b89b68]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="03" label="Experience">
          Where I've worked with
          <span className="text-[#b89b68]"> real data.</span>
        </SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="draw absolute bottom-0 left-[7px] top-2 w-px bg-white/10" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Reveal
                key={job.company}
                delay={index * 150}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-[#b89b68] bg-[#0b0b0c]" />

                <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-[#b89b68]/30 hover:bg-white/[0.04]">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#b89b68]">
                      {job.duration}
                    </p>

                    <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                      Internship
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-[#f5f1e8]">
                    {job.role}
                  </h3>

                  <p className="mt-2 text-lg text-white/60">{job.company}</p>

                  <ul className="mt-5 max-w-3xl space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-white/50 sm:text-base"
                      >
                        <span className="mt-3 h-px w-4 shrink-0 bg-[#b89b68]/60 transition-all duration-300 group-hover:w-6" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
