"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    alt: "Manhattan Commercial Tower",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    alt: "Beverly Hills Luxury Estate",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    alt: "Miami Beachfront Resort",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const currentImage = slides[currentSlide]

  return (
    <header className="relative overflow-hidden bg-background">
      {/* Add Proplex text logo at very top-left of hero */}
      <nav aria-label="Top navigation" className="pointer-events-none">
        <a
          href="/"
          className="pointer-events-auto absolute left-4 top-4 z-20 font-bold text-lg md:text-xl text-foreground"
          aria-label="Proplex home"
        >
          Proplex
        </a>
      </nav>
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 text-left">
            <Badge variant="outline" className="bg-accent/10 border-accent/30 text-foreground">
              <div className="flex items-center gap-2">
                <span className="sr-only">System status:</span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Built on STORY Protocol • Sub-second finality
              </div>
            </Badge>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
              Tokenize Real‑World Assets with <span className="text-accent">Enterprise-Level</span> Compliance
            </h1>

            <p className="text-pretty max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
              Proplex enables fractional ownership of premium RWAs like real estate, private equity, and infrastructure
              via ERC-3643, featuring STORY Protocol only settlements, automated yield sharing, and DAO-based governance.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent" aria-label="Get Started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                aria-label="Watch Demo"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Visual Section - Carousel */}
          <div className="relative lg:h-[600px]">
            <Card className="relative z-10 border-2 border-border shadow-lg overflow-hidden">
              <CardHeader className="relative p-0">
                <div
                  className="relative h-96 overflow-hidden bg-card"
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="Featured properties"
                >
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden={index !== currentSlide}
                    >
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevSlide}
                      className="bg-card/70 hover:bg-card text-foreground rounded-full"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6" aria-hidden />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextSlide}
                      className="bg-card/70 hover:bg-card text-foreground rounded-full"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-6 w-6" aria-hidden />
                    </Button>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentSlide(index)
                          setIsAutoPlaying(false)
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "w-8 bg-accent" : "w-2 bg-muted"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Trust Indicators Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6">In Association with</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-nowrap">
            <img
              src="/images/storyy.png"
              alt="HackQuest"
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              loading="lazy"
            />
            {/* <img
              src="/images/arb.png"
              alt="Arbitrum"
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              loading="lazy"
            /> */}
            {/* <img
              src="/images/namaste-arbitrum.jpg"
              alt="Namaste Arbitrum"
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              loading="lazy"
            /> */}
            <img
              src="/images/web3compass.jpg"
              alt="Web3Compass"
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
