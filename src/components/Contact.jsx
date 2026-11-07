import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Contact() {
  const { personal } = portfolio;

  const links = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      label: "LinkedIn",
      value: personal.linkedin.replace("https://www.", ""),
      href: personal.linkedin,
    },
    {
      label: "GitHub",
      value: personal.github.replace("https://", ""),
      href: personal.github,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b89b68]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading number="08" label="Contact">
          Let's build something
          <span className="text-[#b89b68]"> useful together.</span>
        </SectionHeading>

        <Reveal
          as="p"
          className="mb-12 max-w-2xl text-lg leading-9 text-white/55"
        >
          I'm looking for opportunities in data science and AI/ML engineering,
          and I'm open to relocation. The best way to reach me is by email.
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={index * 100}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between gap-6 py-7 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <div className="min-w-0">
                  <p className="text-sm text-white/35">{link.label}</p>
                  <p className="mt-1 truncate text-xl font-medium text-[#f5f1e8] transition-colors duration-300 group-hover:text-[#d6b77c] sm:text-2xl">
                    {link.value}
                  </p>
                </div>

                <span className="text-2xl text-[#b89b68]/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b77c]">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
