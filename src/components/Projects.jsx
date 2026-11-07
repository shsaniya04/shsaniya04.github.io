import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-96 w-96 rounded-full bg-[#b89b68]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="04" label="Featured Projects">
          Things I've
          <span className="text-[#b89b68]"> built and explored.</span>
        </SectionHeading>

        {/* Project List */}
        <div className="space-y-6">
          {portfolio.projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#b89b68]/30 hover:bg-white/[0.04] sm:p-8 lg:p-10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#b89b68]/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
                {/* Project information */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-sm tracking-[0.2em] text-[#b89b68]/70">
                    {project.number}
                  </span>

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#b89b68]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#f5f1e8] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/65"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/65 transition-all duration-300 hover:border-[#b89b68]/40 hover:text-[#f5f1e8]"
                      >
                        GitHub
                        <span className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-full bg-[#f5f1e8] px-4 py-2.5 text-sm font-medium text-[#0b0b0c] transition-all duration-300 hover:bg-[#d6b77c]"
                      >
                        Live Demo
                        <span className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshot */}
                {project.image && (
                  <div
                    className={`overflow-hidden rounded-2xl border border-white/10 bg-black/30 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal className="mt-10 flex items-center gap-4 text-sm text-white/30">
          <span className="h-px w-10 bg-[#b89b68]/40" />
          <span>More projects will be added as I build and learn.</span>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
