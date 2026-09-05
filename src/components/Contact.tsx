const links = [
  {
    label: "kayaan.tharani@uwaterloo.ca",
    href: "mailto:kayaan.tharani@uwaterloo.ca",
    prefix: "email",
  },
  {
    label: "github.com/kayaant",
    href: "https://github.com/kayaant",
    prefix: "github",
  },
  {
    label: "linkedin.com/in/kayaan-tharani",
    href: "https://linkedin.com/in/kayaan-tharani",
    prefix: "linkedin",
  },
  {
    label: "resume.pdf",
    href: "https://drive.google.com/file/d/1tlTPqgjmHqQgj9IfO9PeCOt7Qtg49zs4/view?usp=sharing",
    prefix: "resume",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <p className="text-xs text-[#333] mb-2">
          <span className="text-[#00ff9d] mr-2">›</span>
          ping kayaan --open-to "new opportunities"
        </p>
        <div className="h-px bg-[#161616]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-white text-2xl font-semibold tracking-tight mb-3">
            Let&apos;s build something.
          </h2>
          <p className="text-[#787878] text-sm leading-relaxed">
            Open to internship opportunities, research collaborations, and interesting side projects. Reach out — I reply fast.
          </p>
        </div>

        <div className="space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-3 border-b border-[#111] hover:border-[#00ff9d]/20 transition-colors"
            >
              <span className="text-[9px] text-[#404040] w-14 shrink-0 uppercase tracking-widest group-hover:text-[#00ff9d]/50 transition-colors">
                {l.prefix}
              </span>
              <span className="text-[#606060] text-xs group-hover:text-[#00ff9d] transition-colors">
                {l.label}
              </span>
              <span className="ml-auto text-[#222] group-hover:text-[#00ff9d] transition-colors text-xs">↗</span>
            </a>
          ))}
        </div>
      </div>

      <p className="mt-20 text-[10px] text-[#1e1e1e]">
        kayaan tharani · {new Date().getFullYear()} · built with next.js
      </p>
    </section>
  );
}
