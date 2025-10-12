"use client"

import { useState } from "react"
import { Network, FileCode, Shield, Lock, ChevronRight } from "lucide-react"

const STACK = [
  {
    title: "U2U Network",
    body: "DAG‑based architecture with Helios consensus for sub‑second finality, high throughput, and low fees.",
    icon: Network,
    color: "from-[#003366] to-[#337AB7]",
    benefits: ["Sub-second finality", "High throughput", "Low transaction fees"],
    layer: "Foundation Layer",
  },
  {
    title: "Smart Contracts",
    body: "ERC‑3643 (T‑REX) compatible, audited contracts for compliance, yield, and escrow logic.",
    icon: FileCode,
    color: "from-[#FF9900] to-[#FFb424]",
    benefits: ["ERC-3643 compliant", "Fully audited", "Automated yield distribution"],
    layer: "Protocol Layer",
  },
  {
    title: "Data & Compliance",
    body: "Chainlink Oracles for valuations and ONCHAINID for decentralized KYC/AML; SPVs ensure enforceable rights.",
    icon: Shield,
    color: "from-[#337AB7] to-[#003366]",
    benefits: ["Real-time valuations", "Decentralized identity", "Legal enforceability"],
    layer: "Compliance Layer",
  },
  {
    title: "Security Infrastructure",
    body: "Gnosis Safe for treasury multisig, Nexus Mutual for contract insurance, and IPFS‑hosted React frontend.",
    icon: Lock,
    color: "from-[#A0D0E0] to-[#337AB7]",
    benefits: ["Multi-signature security", "Smart-contract insurance", "Decentralized hosting"],
    layer: "Security Layer",
  },
]

export default function Tech() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section
      id="technology"
      aria-labelledby="tech-title"
      className="border-t border-border bg-background relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 id="tech-title" className="text-balance text-3xl font-bold text-primary md:text-5xl">
            Technology & Security You Can Trust
          </h2>
          <p className="mt-4 mx-auto max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
            A performant, compliant, and decentralized stack purpose‑built for tokenized asset management
          </p>
        </div>

        {/* Continue with the main grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK.map((item, index) => {
            const Icon = item.icon
            const isActive = activeCard === index

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-card rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  isActive ? "border-accent shadow-md" : "border-border hover:border-accent/60 shadow-sm"
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        isActive ? "bg-accent" : "bg-muted"
                      }`}
                    >
                      <Icon className={`w-7 h-7 ${isActive ? "text-accent-foreground" : "text-primary"}`} aria-hidden />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {item.layer}
                      </div>
                      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{item.body}</p>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Key Features
                    </div>
                    {item.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-accent" : "bg-primary"}`} />
                        <span className={isActive ? "text-primary font-medium" : "text-muted-foreground"}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-medium ${
                      isActive ? "text-primary" : "text-accent"
                    }`}
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4" aria-hidden />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Audited Contracts", value: "100%" },
            { label: "Uptime", value: "99.9%" },
            { label: "Transaction Speed", value: "<1s" },
            { label: "Security Score", value: "A+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl border border-border shadow-sm">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
