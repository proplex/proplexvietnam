"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail, CheckCircle2, Twitter, Github, Send } from "lucide-react"

export default function Cta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!email || !email.includes("@")) return
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setEmail("")
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit()
  }

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="relative">
        {/* Main CTA Section */}
        <section id="get-started" aria-labelledby="cta-title" className="w-full border-b border-border/20">
          <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-sm font-medium text-accent mb-6">
                  Early Access Available
                </div>
                <h2
                  id="cta-title"
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary-foreground"
                >
                  Ready to tokenize your first asset?
                </h2>
                <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                  Launch compliant Asset Tokens, automate yield distribution, and unlock global liquidity on the ARB
                  Network. Join leading institutions already building on Proplex.
                </p>
              </div>

              {/* Right - Email Signup */}
              <div className="relative">
                <div className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/15 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent-foreground" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Join Early Access</h3>
                      <p className="text-sm text-primary-foreground/80">Be first to launch on Proplex</p>
                    </div>
                  </div>

                  {!submitted ? (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/85 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 bg-card/90 border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={loading || !email}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-busy={loading}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-accent-foreground/40 border-t-accent-foreground rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Get Early Access
                            <Send className="w-4 h-4" aria-hidden />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-primary-foreground/75 text-center">
                        Join on the waitlist. No spam, ever.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-400" aria-hidden />
                      </div>
                      <h4 className="text-xl font-bold mb-2">You&apos;re on the list!</h4>
                      <p className="text-primary-foreground/85">
                        Check your inbox for next steps and exclusive early access details.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-lg">Proplex</span>
              <span>•</span>
              <span>© 2025 All rights reserved</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" aria-hidden />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" aria-hidden />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Contact">
                <Send className="w-5 h-5" aria-hidden />
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
