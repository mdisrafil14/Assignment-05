import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const links = [
  ["Home", "#home"],
  ["Technologies", "#technologies"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex h-16 w-[92%] max-w-7xl items-center justify-between">
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          <img src={hamburger} alt="Menu" className="h-5 w-5" />
        </button>

        <a href="#home">
          <img src={logo} alt="Dev Stack" className="w-28" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([name, href], i) => (
            <a
              key={name}
              href={href}
              className={i === 0 ? "text-pink-500" : "text-slate-500"}
            >
              {name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="#contact" className="text-slate-500">
            Sign In
          </a>

          <a
            href="#contact"
            className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white"
          >
            Sign Up
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="#contact" className="text-xs text-slate-500">
            Sign In
          </a>

          <a
            href="#contact"
            className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t px-5 py-4 lg:hidden">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-600"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;