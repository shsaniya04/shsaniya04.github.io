import Reveal from "./Reveal";

function SectionHeading({ number, label, children }) {
  return (
    <Reveal className="mb-16 flex items-start gap-5">
      <span className="pt-2 text-sm tracking-[0.25em] text-[#b89b68]">
        {number}
      </span>

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/40">
          {label}
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#f5f1e8] sm:text-5xl">
          {children}
        </h2>
      </div>
    </Reveal>
  );
}

export default SectionHeading;
