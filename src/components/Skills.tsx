"use client";
import { useInView } from "@/hooks/useInView";

const categories = [
  {
    key: "LANGUAGES",
    items: ["Go", "Python", "C/C++", "TypeScript", "JavaScript", "Java", "SQL", "Bash", "VHDL", "RISC-V ASM", "MATLAB"],
  },
  {
    key: "TOOLS",
    items: ["Linux", "Git", "Docker", "Kubernetes", "AWS", "Nginx", "Systemd", "PostgreSQL", "Oracle SQL", "Supabase", "CI/CD"],
  },
  {
    key: "LIBRARIES",
    items: ["PyTorch", "scikit-learn", "TensorFlow", "OpenCV", "Pandas", "Matplotlib", "Seaborn", "Flask", "React", "ns-3", "htsim"],
  },
  {
    key: "PROTOCOLS",
    items: ["RoCEv2", "RDMA", "DCQCN", "ECMP", "REST", "JDBC"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <p className="text-xs text-[#333] mb-2">
          <span className="text-[#00ff9d] mr-2">›</span>
          env | grep -E &apos;LANGUAGES|TOOLS|LIBRARIES&apos;
        </p>
        <div className="h-px bg-[#161616]" />
      </div>

      <div
        ref={ref}
        className={`grid sm:grid-cols-2 gap-y-10 gap-x-16 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {categories.map((cat) => (
          <div key={cat.key}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[9px] text-[#00ff9d] tracking-[0.18em]">{cat.key}</span>
              <div className="flex-1 h-px bg-[#161616]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-2.5 py-1 border border-[#242424] text-[#606060] hover:border-[#00ff9d]/30 hover:text-[#00ff9d]/70 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education block */}
      <div className="mt-16 border border-[#161616] bg-[#0d0d0d] p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-[9px] text-[#2e2e2e] tracking-[0.15em] uppercase mb-2">EDUCATION</p>
            <h3 className="text-white text-sm font-medium mb-0.5">University of Waterloo</h3>
            <p className="text-[#787878] text-xs">BASc. Honors Computer Engineering, Co-op</p>
            <p className="text-[#555] text-[10px] mt-2">
              Data Structures · Systems Programming · Digital Circuits (VHDL) · Assembly · Numerical Methods
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#00ff9d] text-xs">Sep 2023 – Apr 2028</p>
            <p className="text-[#333] text-[10px] mt-1">Waterloo, ON</p>
          </div>
        </div>
      </div>
    </section>
  );
}
