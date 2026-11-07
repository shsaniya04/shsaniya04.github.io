import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Resume() {
  const { resume } = portfolio;

  return (
    <section
      id="resume"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="07" label="Resume">
          A snapshot of my
          <span className="text-[#b89b68]"> journey so far.</span>
        </SectionHeading>

        {/* Resume Card */}
        <Reveal className="mb-8 rounded-2xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#b89b68]/30">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-medium text-[#f5f1e8]">
                My Resume
              </h3>

              <p className="mt-2 max-w-xl text-white/50">
                A concise overview of my education, skills, projects, and
                experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resume.resumeFile}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#b89b68]/40 px-6 py-3 text-sm text-[#f5f1e8] transition hover:bg-[#b89b68] hover:text-[#0b0b0c]"
              >
                View Resume ↗
              </a>

              <a
                href={resume.resumeFile}
                download="Saniya_Shaikh_Resume.pdf"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-[#b89b68]/50 hover:text-[#f5f1e8]"
              >
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>

        {/* Achievements + Certifications */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Achievements */}
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-[#b89b68]">
              Achievements
            </p>

            <h3 className="mt-3 text-2xl font-medium text-[#f5f1e8]">
              Highlights
            </h3>

            <div className="mt-6 space-y-5">
              {resume.achievements.map((item) => (
                <div
                  key={item.title}
                  className="border-l border-[#b89b68]/40 pl-4 transition-colors duration-300 hover:border-[#b89b68]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-medium text-[#f5f1e8]">
                      {item.title}
                    </h4>

                    {item.year && (
                      <span className="text-xs text-white/40">{item.year}</span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={120} className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-[#b89b68]">
              Certifications
            </p>

            <h3 className="mt-3 text-2xl font-medium text-[#f5f1e8]">
              Learning
            </h3>

            <div className="mt-6 space-y-6">
              {resume.certifications.map((group) => (
                <div
                  key={group.issuer}
                  className="border-l border-[#b89b68]/40 pl-4 transition-colors duration-300 hover:border-[#b89b68]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-medium text-[#f5f1e8]">
                      {group.issuer}
                    </h4>

                    {group.note && (
                      <span className="text-xs text-white/40">
                        {group.note}
                      </span>
                    )}
                  </div>

                  <ul className="mt-2 space-y-1 text-sm leading-6 text-white/50">
                    {group.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Resume;
