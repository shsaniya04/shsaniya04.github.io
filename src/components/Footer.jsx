import { portfolio } from "../data/portfolio";

function Footer() {
  const { personal } = portfolio;

  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>

        <p>
          Built with React & Tailwind CSS
        </p>

        <a
          href="#top"
          className="transition hover:text-[#f5f1e8]"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}

export default Footer;