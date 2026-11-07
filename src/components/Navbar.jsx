import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const closeMenu = () => setIsOpen(false);

  // Highlight the link for the section currently in view
  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href.slice(1)), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
        <div className="rounded-full border border-white/10 bg-[#0b0b0c]/75 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="text-lg font-semibold tracking-tight text-[#f5f1e8]"
            >
              Saniya<span className="text-[#b89b68]">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative py-1 text-sm transition-colors duration-300 hover:text-[#d6b77c] ${
                      isActive ? "text-[#d6b77c]" : "text-white/60"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-[#b89b68] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}

              <a
                href="#contact"
                className="rounded-full border border-[#b89b68]/40 px-4 py-2 text-sm text-[#f5f1e8] transition-all duration-300 hover:border-[#b89b68] hover:bg-[#b89b68]/10"
              >
                Let's Connect
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-[#b89b68]/50 lg:hidden"
            >
              <span className="text-lg">{isOpen ? "×" : "☰"}</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="menu-in mt-4 border-t border-white/10 pt-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-[#d6b77c]"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 rounded-lg border border-[#b89b68]/30 px-3 py-3 text-sm text-[#f5f1e8]"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
