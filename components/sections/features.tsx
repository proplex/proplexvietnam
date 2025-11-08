"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FEATURES = [
  {
    title: "Fractional Tokenization",
    body: "Divide RWAs into compliant Asset Tokens using ERC‑3643 (T‑REX) with regulated transfers.",
  },
  {
    title: "Arbitrum‑Only Settlements",
    body: "Transparent, fast, and low‑cost operations with ARB as the settlement currency.",
  },
  {
    title: "Automated Yield",
    body: "Smart contracts distribute rental income and profits in ARB directly to holders.",
  },
  {
    title: "Native Liquidity",
    body: "Trade Asset Tokens on the Proplex DEX or peer‑to‑peer with fee‑earning liquidity.",
  },
  {
    title: "DAO Governance",
    body: "Token holders propose and vote on listings, fees, and upgrades via on‑chain governance.",
  },
  {
    title: "Built‑in Compliance",
    body: "SPVs, ONCHAINID verification, and audited contracts for end‑to‑end regulatory alignment.",
  },
]

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Heading */}
        <div className="text-left">
          <h2 id="features-title" className="text-balance text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Everything you need to launch and scale tokenized RWAs
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
            From compliant token issuance to automated yield and secondary-market liquidity—all on the Arbitrum Network.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Card
              key={f.title}
              className="group h-full border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-accent/60"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">{f.body}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
