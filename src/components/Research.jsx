import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Research() {
  const { interests, publications } = portfolio.research;

  return (
    <section
      id="research"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-[-10%] top-1/4 h-96 w-96 rounded-full bg-[#b89b68]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="05" label="Research">
          Questions I'm
          <span className="text-[#b89b68]"> curious about.</span>
        </SectionHeading>

        {/* Intro */}
        <div className="mb-14 max-w-2xl">
          <Reveal as="p" className="text-lg leading-9 text-white/60">
            My research interests focus on building AI systems that are
            private, reliable, and able to learn and retain knowledge over
            time.
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="mt-5 text-base leading-8 text-white/40"
          >
            Most of my current work centers on retrieval-augmented generation
            for local document intelligence, alongside continual learning and
            the problem of catastrophic forgetting.
          </Reveal>
        </div>

        {/* Research interests */}
        <div className="grid gap-5 md:grid-cols-3">
          {interests.map((interest, index) => (
            <Reveal
              as="article"
              key={interest.title}
              delay={index * 120}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#b89b68]/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-[0.2em] text-[#b89b68]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-lg text-[#b89b68]/50 transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </div>

              <h3 className="mt-14 text-xl font-medium text-[#f5f1e8]">
                {interest.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                {interest.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Publications */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Publications
              </p>

              <h3 className="mt-2 text-2xl font-medium text-[#f5f1e8]">
                Research work
              </h3>
            </div>

            <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
              {publications.length === 0
                ? "No publications added yet"
                : `${publications.length} ${
                    publications.length === 1 ? "manuscript" : "manuscripts"
                  }`}
            </span>
          </Reveal>

          <div className="mt-8 space-y-4">
            {publications.map((paper, index) => (
              <Reveal
                as="article"
                key={paper.title}
                delay={index * 120}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#b89b68]/30 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    {paper.type}
                  </span>
                  <span className="rounded-full border border-[#b89b68]/30 px-3 py-1 text-xs text-[#b89b68]">
                    {paper.status}
                  </span>
                </div>

                <h4 className="max-w-4xl text-lg font-medium leading-snug text-[#f5f1e8] sm:text-xl">
                  {paper.title}
                </h4>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
