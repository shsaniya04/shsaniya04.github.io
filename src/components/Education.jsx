import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Education() {
  const { education } = portfolio;

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="06" label="Education">
          Building my foundation in
          <span className="text-[#b89b68]"> data and AI.</span>
        </SectionHeading>

        {/* Timeline */}
        <Reveal className="relative">
          {/* Timeline line */}
          <div className="draw absolute left-[7px] top-2 h-full w-px bg-white/10" />

          <div className="relative pl-10">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-[#b89b68] bg-[#0b0b0c]" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition duration-300 hover:border-[#b89b68]/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-[#b89b68]">
                  {education.duration}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    Undergraduate
                  </span>
                  {education.cgpa && (
                    <span className="w-fit rounded-full border border-[#b89b68]/30 px-3 py-1 text-xs text-[#b89b68]">
                      {education.cgpa}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-medium text-[#f5f1e8]">
                {education.degree}
              </h3>

              <p className="mt-2 text-lg text-white/60">
                {education.institution}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-white/50">
                {education.details}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
