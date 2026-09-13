import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex h-16 w-[92%] max-w-7xl items-center justify-between">

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <img src={hamburger} alt="Menu" className="h-5 w-5" />
        </button>

        {/* Logo */}
        <img src={logo} alt="Dev Stack" className="w-28 lg:w-27" />

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={i === 0 ? "text-pink-500" : "text-slate-500"}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-slate-500">Sign In</button>
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button className="text-xs text-slate-500">Sign In</button>
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="flex flex-col gap-4 border-t px-5 py-4 lg:hidden">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm text-slate-600">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;