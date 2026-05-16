"use client";
import { useInView } from "@/hooks/useInView";

const jobs = [
  {
    period: "Jan – Apr 2026",
    company: "Senpilot",
    role: "Software Engineering Intern",
    location: "Brooklyn, NY",
    bullets: [
      "Built Temporal + GCP Workers pipelines to ingest/chunk 10TB+ regulatory dockets for RAG",
      "Implemented 50+ scalable scrapers for utility filings with scheduled jobs and backfills",
      "Deployed Vercel browser agents to crawl and extract metadata using Anthropic SDK",
      "Shipped multi-agent orchestration fanning out async workers for cited, deterministic reports",
    ],
    tags: ["Python", "Temporal", "GCP", "RAG", "Anthropic SDK", "Multi-agent"],
  },
  {
    period: "May – Aug 2025",
    company: "Huawei Canada",
    role: "SWE Intern · Data Center Network Research",
    location: "Waterloo, ON",
    bullets: [
      "Simulated AI cluster traffic (ns-3/htsim, C++) on leaf-spine topologies for DeepSeek/MoE workloads",
      "Profiled congestion under high fan-in/out; traced queues, ECN marks, and flow completion",
      "Tuned RoCEv2/RDMA/DCQCN with adaptive ECMP routing — cut tail FCT by 15–45%",
      "Applied packet spraying + UET-style balancing; boosted fairness 12%, smoothed link utilization",
    ],
    tags: ["C++", "ns-3", "htsim", "RoCEv2", "RDMA", "DCQCN"],
  },
  {
    period: "Sep – Dec 2024",
    company: "IESO",
    role: "Software Developer",
    location: "Mississauga, ON",
    bullets: [
      "Built full-stack Appian app automating contract workflows; dynamic UIs cut manual entry 30%",
      "Designed and tuned Oracle SQL schema with indexing and normalization — query time down 65%",
      "Implemented JDBC/REST monitors with live alerts; dropped downtime incidents by 40%",
      "Shipped 3–5 user stories per sprint in a 15-person Agile team across sandbox and prod",
    ],
    tags: ["Appian", "Oracle SQL", "JDBC", "REST", "Agile"],
  },
  {
    period: "Jan – Apr 2024",
    company: "Toronto Transit Commission",
    role: "Software Analyst",
    location: "Toronto, ON",
    bullets: [
      "Automated enterprise app deployments via CAF/DSM across 10K+ endpoints",
      "Provisioned Windows systems with PXE imaging and Bash bootstraps for AD/GPO integration",
      "Developed remote scripts for patching, driver installs, and config updates via PowerShell/Bash",
    ],
    tags: ["PowerShell", "Bash", "PXE", "CAF/DSM", "Windows"],
  },
  {
    period: "Jun – Aug 2023",
    company: "RESA Power",
    role: "Engineering Intern",
    location: "Edmonton, AB",
    bullets: [
      "Developed Python scripts to parse and visualize SCADA time-series data for anomaly detection",
      "Automated generation of test and maintenance reports across field devices",
      "Integrated PLC/SCADA telemetry into dashboards for real-time system status tracking",
    ],
    tags: ["Python", "SCADA", "PLC", "Matplotlib", "Pandas"],
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
      {/* Left: period — stacks above on mobile, sits left on sm+ */}
      <div className="sm:pt-0.5 flex sm:flex-col gap-2 sm:gap-0">
        <p className="text-[10px] text-[#555] leading-relaxed">{job.period}</p>
        <p className="text-[10px] text-[#404040] sm:mt-1">{job.location}</p>
      </div>

      {/* Right: content */}
      <div>
        <div className="flex items-baseline gap-3 mb-1 flex-wrap">
          <h3 className="text-[#00ff9d] text-sm font-medium">{job.company}</h3>
          <span className="text-[#333] text-[10px]">/</span>
          <span className="text-[#787878] text-xs">{job.role}</span>
        </div>
        <ul className="space-y-1.5 mb-3 mt-2">
          {job.bullets.map((b, i) => (
            <li key={i} className="text-xs text-[#787878] flex gap-2 leading-relaxed">
              <span className="text-[#404040] shrink-0 mt-px">↳</span>
              {b}
            </li>
          ))}
        </ul>
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
      {/* Section header */}
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
            {i < jobs.length - 1 && (
              <div className="mt-10 h-px bg-[#111]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
