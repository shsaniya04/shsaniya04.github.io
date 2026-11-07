import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    number: "01",
    title: "Data Science",
    text: "Exploring data, finding patterns, and building meaningful insights from real-world datasets.",
  },
  {
    number: "02",
    title: "Machine Learning",
    text: "Learning how models work, evaluating them correctly, and applying them to practical problems.",
  },
  {
    number: "03",
    title: "AI Engineering",
    text: "Building useful AI systems, from retrieval-augmented generation to deployed prediction APIs.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#b89b68]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="01" label="About Me">
          Turning data into
          <span className="text-[#b89b68]"> intelligent solutions.</span>
        </SectionHeading>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* About text */}
          <div>
            <Reveal as="p" className="text-lg leading-9 text-white/65">
              I am a final-year Data Science student with a strong interest in
              Machine Learning, Deep Learning, and AI Engineering. I have
              worked as a Data Analyst intern and an ML intern, and I enjoy
              understanding problems from the fundamentals.
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="mt-6 text-base leading-8 text-white/45"
            >
              My goal is to build reliable AI-powered systems that solve
              real-world problems: cleaning and analyzing data, training and
              evaluating models, and turning them into applications people can
              actually use.
            </Reveal>

            <Reveal
              as="p"
              delay={240}
              className="mt-6 text-base leading-8 text-white/45"
            >
              Lately I have been working on retrieval-augmented generation.
              DocMind AI answers questions about your documents entirely on a
              local machine, and it has grown into two research manuscripts on
              hybrid retrieval.
            </Reveal>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 120}
                className={`group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#b89b68]/30 hover:bg-white/[0.04] ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#b89b68]/30 text-[#b89b68] transition-colors duration-300 group-hover:bg-[#b89b68]/10">
                  {item.number}
                </div>

                <h3 className="text-lg font-medium text-[#f5f1e8]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <Reveal className="mt-20 flex items-center gap-4 text-sm text-white/30">
          <span className="h-px w-12 bg-[#b89b68]/40" />
          <span>Currently learning, building & experimenting.</span>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
