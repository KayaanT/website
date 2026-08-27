"use client";
import { useInView } from "@/hooks/useInView";

const jobs = [
  {
    period: "Ongoing",
    company: "Cactus (YC W25)",
    role: "Core Contributor",
    location: "",
    description: "Open-source on-device AI inference engine. Contributed kernel-level optimizations (ARM NEON, Apple AMX) and inference pipeline improvements for mobile and edge devices.",
    tags: ["C++", "ARM NEON", "AMX", "On-Device AI"],
  },
  {
    period: "Jan – Apr 2026",
    company: "Senpilot",
    role: "Software Engineering Intern",
    location: "Brooklyn, NY",
    description: "Built AI data pipelines and multi-agent systems to automate regulatory compliance analysis at scale.",
    tags: ["Python", "Temporal", "GCP", "LiteLLM", "Vertex AI", "Redis", "Docker"],
  },
  {
    period: "May – Aug 2025",
    company: "Huawei Canada",
    role: "SWE Intern · Data Center Network Research",
    location: "Waterloo, ON",
    description: "Simulated and optimized AI cluster network traffic on leaf-spine topologies for data center network research.",
    tags: ["C++", "ns-3", "htsim", "RoCEv2", "RDMA", "DCQCN"],
  },
  {
    period: "Sep – Dec 2024",
    company: "IESO",
    role: "Software Developer",
    location: "Mississauga, ON",
    description: "Built full-stack internal tooling to automate contract management workflows.",
    tags: ["REST", "Oracle SQL", "JDBC", "Agile"],
  },
  {
    period: "Jan – Apr 2024",
    company: "Toronto Transit Commission",
    role: "Software Analyst",
    location: "Toronto, ON",
    description: "Scripted enterprise app deployments and Windows provisioning across a large endpoint fleet.",
    tags: ["PowerShell", "Bash", "PXE", "CAF/DSM"],
  },
  {
    period: "Jun – Aug 2023",
    company: "RESA Power",
    role: "Engineering Intern",
    location: "Edmonton, AB",
    description: "Developed Python scripts to parse and visualize SCADA time-series data for anomaly detection.",
    tags: ["Python", "SCADA", "PLC", "Matplotlib"],
  },
];

function JobEntry({ job, delay }: { job: typeof jobs[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-8 transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Left: period */}
      <div className="sm:pt-0.5 flex sm:flex-col gap-2 sm:gap-0">
        <p className="text-[10px] text-[#555] leading-relaxed">{job.period}</p>
        {job.location && <p className="text-[10px] text-[#404040] sm:mt-1">{job.location}</p>}
      </div>

      {/* Right: content */}
      <div>
        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
          <h3 className="text-[#00ff9d] text-sm font-medium">{job.company}</h3>
          {job.role && (
            <>
              <span className="text-[#333] text-[10px]">/</span>
              <span className="text-[#787878] text-xs">{job.role}</span>
            </>
          )}
        </div>
        <p className="text-xs text-[#787878] leading-relaxed mb-3">{job.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((t) => (
            <span
              key={t}
              className="text-[9px] px-2 py-0.5 border border-[#242424] text-[#606060] hover:border-[#00ff9d]/30 hover:text-[#00ff9d]/70 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <p className="text-xs text-[#333] mb-2">
          <span className="text-[#00ff9d] mr-2">›</span>
          ls -t ./experience
        </p>
        <div className="h-px bg-[#161616]" />
      </div>

      <div className="space-y-10">
        {jobs.map((job, i) => (
          <div key={job.company}>
            <JobEntry job={job} delay={i * 60} />
            {i < jobs.length - 1 && <div className="mt-10 h-px bg-[#111]" />}
          </div>
        ))}
      </div>
    </section>
  );
}
