import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen max-w-5xl mx-auto px-6 pt-24 pb-16 flex items-center">
      <div className="w-full grid md:grid-cols-[1fr_260px] gap-10 md:gap-16 items-center">

        {/* ── Left: text ── */}
        <div className="flex flex-col">
          <p className="text-xs text-[#333] mb-7 fade-up d1">
            <span className="text-[#00ff9d] mr-2">›</span>whoami
          </p>

          <div className="mb-5 fade-up d2">
            <h1
              className="font-bold leading-[0.88] tracking-tighter text-white"
              style={{ fontSize: "clamp(52px, 9vw, 108px)" }}
            >
              KAYAAN
              <br />
              THARANI
              <span
                className="inline-block bg-[#00ff9d] ml-3 align-middle blink"
                style={{ width: "clamp(6px, 0.9vw, 12px)", height: "0.82em" }}
              />
            </h1>
          </div>

          <p className="text-[#666] text-xs mb-2 fade-up d3 tracking-wide">
            Computer Engineering · University of Waterloo · Co-op
          </p>

          <p className="max-w-lg text-[#808080] text-sm leading-relaxed mb-10 fade-up d3">
            I build systems at the intersection of AI and infrastructure — from
            data center network research to LLM training pipelines and mobile AI
            inference engines.
          </p>

          <div className="fade-up d4 border-t border-b border-[#161616] py-5 mb-10 grid grid-cols-2 gap-y-5 gap-x-4">
            {[
              { label: "co-ops completed", value: "04" },
              { label: "primary stack",    value: "Python · C++ · Go" },
              { label: "location",         value: "Waterloo, ON" },
              { label: "next available",   value: "Jan 2027" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <span className="text-[9px] text-[#333] uppercase tracking-[0.15em]">{s.label}</span>
                <span className="text-[#00ff9d] text-xs font-medium">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 fade-up d5">
            <a
              href="#experience"
              className="px-5 py-2.5 bg-[#00ff9d] text-black text-xs font-semibold hover:bg-[#00d880] transition-colors"
            >
              view_work.sh ↓
            </a>
            <a
              href="https://drive.google.com/file/d/1b5Sw7BOtYcvLwrUUAD-60tTUQLa0nMag/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#1e1e1e] text-xs text-[#666] hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
            >
              resume.pdf ↗
            </a>
            <a
              href="https://github.com/kayaant"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#1e1e1e] text-xs text-[#666] hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
            >
              github ↗
            </a>
            <a
              href="https://linkedin.com/in/kayaan-tharani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#1e1e1e] text-xs text-[#666] hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
            >
              linkedin ↗
            </a>
          </div>
        </div>

        {/* ── Right: dossier card ── */}
        <div className="block fade-up d4 self-center md:self-center w-full md:w-auto">
          {/* terminal window chrome */}
          <div className="border border-[#1c1c1c] bg-[#0a0a0a] max-w-[280px] mx-auto md:max-w-none md:mx-0">
            {/* title bar */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-[#161616]">
              <span className="text-[9px] text-[#333] tracking-widest">cat profile.json</span>
            </div>

            {/* photo — square crop */}
            <div className="relative w-full aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
              <Image
                src="/photo.png"
                alt="Kayaan Tharani"
                fill
                className="object-cover object-[50%_22%]"
                priority
              />
              {/* scanline overlay on photo */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)"
                }}
              />
              {/* green corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#00ff9d]/70" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#00ff9d]/70" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#00ff9d]/70" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#00ff9d]/70" />
            </div>

            {/* metadata */}
            <div className="px-4 py-4 space-y-2">
              {[
                { key: "name",   val: "kayaan tharani" },
                { key: "school", val: "uwaterloo" },
                { key: "type",   val: "swe · systems · ai" },
                { key: "status", val: "open to work" },
              ].map((r) => (
                <div key={r.key} className="flex gap-2 text-[10px]">
                  <span className="text-[#333] w-14 shrink-0">{r.key}</span>
                  <span className="text-[#00ff9d]/70">:</span>
                  <span className={r.key === "status" ? "text-[#00ff9d]" : "text-[#606060]"}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
