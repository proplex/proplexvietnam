"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Building2, Coins, TrendingUp, Repeat2, Vote } from "lucide-react"

const STEPS = [
  {
    title: "Asset Onboarding",
    body: "Issuers submit details, SPVs are formed, and legal/token structures are defined with due diligence.",
    icon: Building2,
    color: "from-[#003366] to-[#337AB7]",
  },
  {
    title: "Tokenization & Sale",
    body: "Assets are fractionalized into ERC‑3643 Asset Tokens; ONCHAINID verifies investors; primary sales settle in STORY Protocol (IP).",
    icon: Coins,
    color: "from-[#FF9900] to-[#FFb424]",
  },
  {
    title: "Investment & Yield",
    body: "Investors purchase tokens using STORY Protocol (IP); returns are distributed automatically on‑chain.",
    icon: TrendingUp,
    color: "from-[#337AB7] to-[#003366]",
  },
  {
    title: "Liquidity & Trading",
    body: "Trade tokens on the Proplex or P2P; LPs earn fees and can receive staking rewards.",
    icon: Repeat2,
    color: "from-[#A0D0E0] to-[#337AB7]",
  },
  {
    title: "Governance & Redemption",
    body: "Holders vote on proposals in the DAO; tokens can be redeemed based on oracle‑determined values.",
    icon: Vote,
    color: "from-[#003366] to-[#A0D0E0]",
  },
]

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsPlaying(false)
  }

  return (
    <section id="how-it-works" aria-labelledby="workflow-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center">
          <h2 id="workflow-title" className="text-balance text-3xl font-bold text-primary md:text-5xl">
            How Proplex Works
          </h2>
          <p className="mt-4 mx-auto max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
            Follow the journey from asset to token—visualized step by step
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
          {STEPS.map((step, i) => (
            <button
              key={step.title}
              onClick={() => handleStepClick(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeStep === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
              aria-current={activeStep === i}
              aria-label={`Go to step ${i + 1}: ${step.title}`}
            >
              <span className="hidden sm:inline">Step {i + 1}</span>
              <span className="sm:hidden">{i + 1}</span>
              {activeStep === i && <ChevronRight className="w-4 h-4" aria-hidden />}
            </button>
          ))}
        </div>

        {/* Main Animation Area */}
        <div className="mt-12 relative">
          {/* Step Cards */}
          <div className="relative grid grid-cols-1 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isActive = activeStep === i
              const isPast = i < activeStep

              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-300 ${
                    isActive ? "opacity-100" : isPast ? "opacity-70" : "opacity-60"
                  }`}
                >
                  <div
                    className={`rounded-2xl border-2 p-6 md:p-8 ${
                      isActive ? "border-accent bg-card shadow-md" : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                          isActive ? "bg-accent" : "bg-muted"
                        }`}
                        aria-hidden
                      >
                        <Icon className={`w-8 h-8 ${isActive ? "text-accent-foreground" : "text-primary"}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-sm font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}
                          >
                            Step {i + 1}
                          </span>
                          {isPast && (
                            <span className="text-xs text-primary font-medium bg-muted px-2 py-1 rounded-full">
                              ✓ Complete
                            </span>
                          )}
                        </div>
                        <h3
                          className={`mt-2 text-xl md:text-2xl font-bold ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>

                        {isActive && (
                          <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent"
                              style={{
                                width: isPlaying ? "100%" : "0%",
                                transition: isPlaying ? "width 4s linear" : "none",
                              }}
                              aria-hidden
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Play/Pause Control */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-colors shadow-sm"
            aria-pressed={isPlaying}
          >
            {isPlaying ? "Pause Animation" : "Resume Animation"}
          </button>
        </div>
      </div>
    </section>
  )
}
