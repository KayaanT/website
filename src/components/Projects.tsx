"use client";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: "epoch",
    name: "EPOCH",
    badge: "PERSONAL PROJECT",
    tagline: '"Vercel for model training"',
    description:
      "CLI platform for end-to-end LLM fine-tuning. Train with LoRA/QLoRA, evaluate against standard benchmarks, and deploy to HuggingFace Hub — with a live web dashboard synced to the CLI.",
    tags: ["Python", "PyTorch", "HuggingFace", "RunPod", "LoRA", "QLoRA"],
    github: "https://github.com/KayaanT/epoch",
  },
  {
    id: "cactus",
    name: "CACTUS",
    badge: "OPEN SOURCE · CORE CONTRIBUTOR",
    tagline: "AI inference engine for mobile & edge",
    description:
      "Contributed kernel-level optimizations and inference pipeline improvements to Cactus, an open-source AI inference engine targeting mobile devices.",
    tags: ["C++", "Kernels", "Edge Inference", "Mobile", "Apple AMX"],
    github: "https://github.com/cactus-compute/cactus",
    external: "https://cactuscompute.com",
  },
  {
    id: "homelab",
    name: "HOMELAB",
    badge: "AI INFRA · IN PROGRESS",
    tagline: "Single-node private cloud for AI workloads",
    description:
      "Kubernetes (kubeadm, Cilium eBPF) and OpenStack on one 16GB box, deployed by GitOps. Rook-Ceph for storage, ArgoCD for reconciliation, Tailscale for zero-trust access — fitting CNI, distributed storage, observability, and model serving into a tight RAM budget.",
    tags: ["Kubernetes", "Cilium", "Rook-Ceph", "ArgoCD", "GitOps", "OpenStack"],
    github: "https://github.com/KayaanT/homelab",
  },
  {
    id: "loadbalancer",
    name: "LOAD BALANCER",
    badge: "PROJECT",
    tagline: "Custom reverse proxy + real-time dashboard",
    description:
      "Go reverse proxy with least-connections and per-backend health checks on AWS EC2. Nginx HTTP termination, systemd supervision, Chart.js dashboard for live traffic visualization.",
    tags: ["Go", "AWS EC2", "Nginx", "Systemd", "Chart.js"],
    github: "https://github.com/KayaanT/load-balancer",
  },
  {
    id: "wildfire",
    name: "FLAME FORECASTER",
    badge: "PROJECT · ERNST & YOUNG",
    tagline: "Alberta wildfire severity prediction",
    description:
      "ML pipeline forecasting wildfire intensity and burned area across Alberta FSA zones. XGBoost + Random Forest with regional vulnerability assessment and feature importance analysis.",
    tags: ["Python", "XGBoost", "Random Forest", "scikit-learn", "Pandas"],
    github: "https://github.com/pandya-aditya/Flame_Forecaster",
  },
];

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full p-6 border border-[#161616] bg-[#0d0d0d] hover:border-[#00ff9d]/20 hover:bg-[#0f0f0f] transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-[9px] text-[#2c2c2c] tracking-[0.15em] uppercase block mb-2">
              {p.badge}
            </span>
            <h3 className="text-white text-sm font-semibold tracking-tight group-hover:text-[#00ff9d] transition-colors">
              {p.name}
            </h3>
          </div>
          <svg
            className="w-4 h-4 text-[#222] group-hover:text-[#00ff9d] transition-colors shrink-0 mt-0.5"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>

        {/* Tagline */}
        <p className="text-[11px] text-[#666] mb-3">{p.tagline}</p>

        {/* Description */}
        <p className="text-[11px] text-[#787878] leading-relaxed mb-5 flex-1">{p.description}</p>

        {/* Footer */}
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="text-[9px] px-2 py-0.5 border border-[#242424] text-[#606060] hover:border-[#00ff9d]/30 hover:text-[#00ff9d]/70 transition-colors">
                {t}
              </span>
            ))}
          </div>
          {"external" in p && p.external && (
            <span
              onClick={(e) => { e.preventDefault(); window.open(p.external as string, "_blank"); }}
              className="text-[10px] text-[#555] hover:text-[#00ff9d] transition-colors cursor-pointer"
            >
              {(p.external as string).replace("https://", "")} ↗
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <p className="text-xs text-[#333] mb-2">
          <span className="text-[#00ff9d] mr-2">›</span>
          cat ./projects/*.json
        </p>
        <div className="h-px bg-[#161616]" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} delay={i * 70} />
        ))}
      </div>
    </section>
  );
}
