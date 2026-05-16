"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "experience", href: "#experience" },
  { label: "projects",   href: "#projects" },
  { label: "skills",     href: "#skills" },
  { label: "contact",    href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on link click
  const close = () => setOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-[#070707]/95 backdrop-blur border-b border-[#161616]" : ""
      }`}>
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xs flex items-center gap-0.5">
            <span className="text-[#00ff9d]">kayaan</span>
            <span className="text-[#333]">@waterloo</span>
            <span className="text-[#333]">:~$</span>
            <span className="inline-block w-[7px] h-[13px] bg-[#00ff9d] ml-1 align-middle blink" />
          </a>

          {/* Desktop links */}
          <ul className="hidden sm:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[11px] text-[#555] hover:text-[#00ff9d] transition-colors">
                  ./{l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-[#555] hover:text-[#00ff9d] transition-colors p-1"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="sm:hidden border-t border-[#161616] bg-[#070707]">
            <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="text-xs text-[#555] hover:text-[#00ff9d] transition-colors block"
                  >
                    ./{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
