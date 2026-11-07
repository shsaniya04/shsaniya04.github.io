import profileImage from "../assets/profile.webp";
import { portfolio } from "../data/portfolio";

const delay = (ms) => ({ "--d": `${ms}ms` });

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-soft absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-[#b89b68]/5 blur-3xl" />

        <div className="animate-pulse-soft absolute right-[5%] top-[20%] h-96 w-96 rounded-full bg-[#8f7650]/10 blur-3xl [animation-delay:2s]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* Main Hero */}
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 pb-16 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-4">

          {/* LEFT — Introduction */}
          <div className="relative z-10 max-w-2xl">

            {/* Small label */}
            <div
              className="intro mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#b89b68]"
              style={delay(100)}
            >
              <span className="h-px w-10 bg-[#b89b68]" />
              Data Science Student
            </div>

            {/* Name — each line rises out of a mask */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#f5f1e8] sm:text-6xl lg:text-7xl">
              <span className="intro-line">
                <span style={delay(250)}>Saniya</span>
              </span>
              <span className="intro-line text-[#b89b68]">
                <span style={delay(400)}>Shaikh.</span>
              </span>
            </h1>

            {/* Role */}
            <h2
              className="intro mt-7 text-xl font-medium text-white/80 sm:text-2xl"
              style={delay(650)}
            >
              Aspiring AI/ML Engineer
            </h2>

            {/* Bio */}
            <p
              className="intro mt-5 max-w-xl text-base leading-8 text-white/55 sm:text-lg"
              style={delay(800)}
            >
              {portfolio.personal.shortBio}
            </p>

            {/* CTA Buttons */}
            <div
              className="intro mt-9 flex flex-col gap-3 sm:flex-row"
              style={delay(950)}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f5f1e8] px-6 py-3.5 text-sm font-medium text-[#0b0b0c] transition-all duration-300 hover:bg-[#d6b77c]"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/resume.pdf"
                download="Saniya_Shaikh_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-[#b89b68]/60 hover:bg-[#b89b68]/10 hover:text-[#f5f1e8]"
              >
                Download Resume
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className="intro mt-16 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30 sm:flex"
              style={delay(1200)}
            >
              <span className="scroll-cue" />
              Scroll to explore
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div className="relative flex min-h-[500px] items-end justify-center lg:min-h-[650px]">

            {/* Warm glow */}
            <div className="absolute bottom-[8%] left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-[#b89b68]/10 blur-[100px]" />

            {/* Decorative arc */}
            <div className="animate-float absolute right-[5%] top-[8%] h-[80%] w-[65%] rotate-[12deg] rounded-[50%] border border-[#b89b68]/20" />

            {/* Portrait container — revealed from the bottom up */}
            <div className="portrait-in relative z-10 h-[540px] w-full max-w-[500px] overflow-hidden sm:h-[600px]">
              <img
                src={profileImage}
                alt="Saniya Shaikh"
                className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
              />

              {/* Bottom blending */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/50 to-transparent" />

              {/* Side blending */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0b0c]/40 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b0c]/40 to-transparent" />
            </div>

            {/* Small decorative mark */}
            <div
              className="intro absolute bottom-[12%] left-[3%] z-20"
              style={delay(1300)}
            >
              <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border border-[#b89b68]/30 text-[#b89b68]">
                ✦
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
