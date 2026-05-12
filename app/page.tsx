"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

// ============================================================================
// DRAYO LOGO ICON - Clean black on white
// ============================================================================
function DrayoLogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="96" height="96" rx="16" fill="#0D0D0D"/>
      <path 
        d="M20 70 L20 50 L30 50 L30 40 L40 40 L40 30 L50 30 L50 40 L60 40 L60 30 L70 30 L70 40 L80 40 L80 70 L70 70 L70 50 L60 50 L60 60 L50 60 L50 50 L40 50 L40 60 L30 60 L30 70 Z" 
        fill="white"
      />
    </svg>
  )
}

// ============================================================================
// DRAYO LOGO - Logo icon with text
// ============================================================================
function DrayoLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <DrayoLogoIcon size={36} />
      <span className="text-foreground font-bold text-xl tracking-tight">DRAYO</span>
    </div>
  )
}

// ============================================================================
// CALENDLY POPUP
// ============================================================================
function CalendlyButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const openCalendly = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/nureni-drayo/30min' })
    }
  }

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  )
}

// ============================================================================
// NAVBAR - Clean, minimal
// ============================================================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <DrayoLogo />
          </a>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Product
            </a>
            <CalendlyButton 
              className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Demo
            </CalendlyButton>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
              </a>
              <CalendlyButton 
                className="w-full px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request Demo
              </CalendlyButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Drayo operates your{" "}
            <span className="text-primary">freight back office</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Autonomous AI for logistics operations — document processing, compliance screening, 
            TMS integration and client communications. All automated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CalendlyButton 
              className="px-8 py-3.5 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Demo
            </CalendlyButton>
            <a 
              href="#how-it-works"
              className="px-8 py-3.5 text-base font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors text-center"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 bg-white rounded-xl border border-border shadow-lg overflow-hidden">
          <div className="border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs text-muted-foreground">Drayo Dashboard</span>
          </div>
          <div className="p-6 bg-secondary/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Documents Today</div>
                <div className="text-3xl font-bold text-foreground">47</div>
                <div className="text-sm text-primary mt-1">100% processed</div>
              </div>
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Avg Processing Time</div>
                <div className="text-3xl font-bold text-foreground">42s</div>
                <div className="text-sm text-muted-foreground mt-1">Per document</div>
              </div>
              <div className="bg-white rounded-lg border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Compliance Checks</div>
                <div className="text-3xl font-bold text-foreground">156</div>
                <div className="text-sm text-green-600 mt-1">All passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SOCIAL PROOF BAR
// ============================================================================
function SocialProofBar() {
  return (
    <section className="py-12 border-y border-border bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by freight forwarders across the UK
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
          {["BIFA", "WCA", "FIATA"].map((logo) => (
            <div key={logo} className="text-2xl font-bold text-muted-foreground/60">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROBLEM SECTION
// ============================================================================
function ProblemSection() {
  const problems = [
    {
      stat: "10–15 minutes",
      title: "per document",
      description: "Manual data entry from shipping documents into your TMS.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      stat: "90%",
      title: "processed manually",
      description: "Most freight operations still rely on human data entry.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      stat: "£86,550",
      title: "per year in staff costs",
      description: "The hidden cost of manual document processing.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Freight forwarding still runs on manual labour
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Every document, every field, every check — done by hand. Until now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6 shadow-sm">
              <div className="text-muted-foreground mb-4">{problem.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-1">{problem.stat}</div>
              <div className="text-lg font-medium text-foreground mb-2">{problem.title}</div>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// HOW IT WORKS SECTION
// ============================================================================
function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Document arrives by email or WhatsApp", desc: "Any format — PDF, image, or message." },
    { num: "02", title: "AI extracts every field in under 60 seconds", desc: "Shipper, consignee, weights, dates, container numbers — all captured." },
    { num: "03", title: "Compliance screened against live sanctions lists", desc: "Automatic checks against OFSI, EU, and US databases." },
    { num: "04", title: "TMS updated automatically", desc: "Fields mapped and populated without human input." },
    { num: "05", title: "Client notified instantly", desc: "Confirmation emails and WhatsApp messages sent automatically." },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
              How it works
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-3xl font-bold text-primary">{step.num}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard screenshot mockup */}
          <div className="bg-white rounded-xl border border-border shadow-lg overflow-hidden sticky top-24">
            <div className="border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="p-6 bg-secondary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Bill of Lading — TCKU3954821</div>
                      <div className="text-xs text-muted-foreground">20 fields extracted</div>
                    </div>
                  </div>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Processed</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Commercial Invoice — INV-2026-0847</div>
                      <div className="text-xs text-muted-foreground">15 fields extracted</div>
                    </div>
                  </div>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Processed</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center animate-pulse">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Packing List — PL-2026-0392</div>
                      <div className="text-xs text-muted-foreground">Processing...</div>
                    </div>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MODULES SECTION
// ============================================================================
function ModulesSection() {
  const modules = [
    {
      title: "Document Processing",
      description: "Extracts data from shipping documents in under 60 seconds with 95%+ accuracy."
    },
    {
      title: "Compliance Engine",
      description: "Real-time screening against OFSI, EU, and US sanctions lists."
    },
    {
      title: "TMS Integration",
      description: "Automatically populates your transport management system."
    },
    {
      title: "Communications Hub",
      description: "Sends confirmations to clients and carriers via email and WhatsApp."
    }
  ]

  return (
    <section id="product" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Four modules. One AI workforce.
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Each module works autonomously, but together they transform your operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6 shadow-sm">
              <div className="h-1 w-12 bg-primary rounded-full mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{module.title}</h3>
              <p className="text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// TESTIMONIAL SECTION
// ============================================================================
function TestimonialSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl font-medium text-foreground leading-relaxed mb-8">
          {`"Drayo has transformed how we handle documentation. What used to take our team hours now happens in minutes, with better accuracy than we ever achieved manually."`}
        </p>
        <div className="text-muted-foreground">
          <span className="font-medium text-foreground">Operations Director</span>
          <span className="mx-2">·</span>
          <span>UK Freight Forwarder</span>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to automate your freight operations?
        </h2>
        <p className="text-lg text-white/80 mb-10">
          {`Request a demo and we'll show you Drayo working on your own documents.`}
        </p>
        <CalendlyButton 
          className="px-8 py-4 text-base font-medium text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
        >
          Request Demo
        </CalendlyButton>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <DrayoLogo />
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Autonomous AI for freight forwarding operations.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a></li>
                <li><a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                <li><CalendlyButton className="text-sm text-muted-foreground hover:text-foreground transition-colors">Request Demo</CalendlyButton></li>
                <li><a href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://linkedin.com/company/drayo-ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/drayo_ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    X
                  </a>
                </li>
                <li>
                  <a href="mailto:info@drayo.ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@drayo.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Drayo AI Ltd · drayo.ai
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function Home() {
  return (
    <>
      {/* Calendly widget */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <SocialProofBar />
          <ProblemSection />
          <HowItWorksSection />
          <ModulesSection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
