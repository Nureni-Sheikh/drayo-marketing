"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

// ============================================================================
// DRAYO LOGO - Black square icon + DRAYO text
// ============================================================================
function DrayoLogoIcon({ size = 28, light = false }: { size?: number; light?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="12" fill={light ? "#FFFFFF" : "#0D1117"}/>
      <path 
        d="M20 70 L20 50 L30 50 L30 40 L40 40 L40 30 L50 30 L50 40 L60 40 L60 30 L70 30 L70 40 L80 40 L80 70 L70 70 L70 50 L60 50 L60 60 L50 60 L50 50 L40 50 L40 60 L30 60 L30 70 Z" 
        fill={light ? "#0D1117" : "#FFFFFF"}
      />
    </svg>
  )
}

function DrayoLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <DrayoLogoIcon size={28} light={light} />
      <span className={`font-bold text-sm tracking-tight ${light ? "text-white" : "text-[#0D1117]"}`}>DRAYO</span>
    </div>
  )
}

// ============================================================================
// CALENDLY POPUP
// ============================================================================
function CalendlyButton({ children, className }: { children: React.ReactNode; className?: string }) {
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
// NAVBAR - 60px height, sticky, white bg, 1px bottom border
// ============================================================================
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E5EA] h-[60px]">
      <div className="max-w-[1200px] mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left: Logo */}
          <a href="/" className="flex items-center">
            <DrayoLogo />
          </a>
          
          {/* Centre: Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-[#0D1117] hover:text-[#006B5E] transition-colors">
              How it works
            </a>
            <a href="#platform" className="text-sm font-medium text-[#0D1117] hover:text-[#006B5E] transition-colors">
              Platform
            </a>
            <a href="#security" className="text-sm font-medium text-[#0D1117] hover:text-[#006B5E] transition-colors">
              Security
            </a>
          </nav>

          {/* Right: Login + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-[#0D1117] hover:text-[#006B5E] transition-colors">
              Log in
            </a>
            <CalendlyButton 
              className="px-[18px] py-[9px] text-sm font-semibold text-white bg-[#0D1117] rounded-[5px] hover:bg-[#1a1f26] transition-colors"
            >
              Request Demo
            </CalendlyButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0D1117]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white border-b border-[#E2E5EA] py-4 px-6">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm font-medium text-[#0D1117]">How it works</a>
              <a href="#platform" className="text-sm font-medium text-[#0D1117]">Platform</a>
              <a href="#security" className="text-sm font-medium text-[#0D1117]">Security</a>
              <a href="/login" className="text-sm font-medium text-[#0D1117]">Log in</a>
              <CalendlyButton className="w-full px-[18px] py-[9px] text-sm font-semibold text-white bg-[#0D1117] rounded-[5px]">
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
// HERO SECTION - Left-aligned, 55/45 split
// ============================================================================
function HeroSection() {
  return (
    <section className="pt-[100px] pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Section label */}
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5C6370] mb-6">
              Freight Forwarding Automation
            </p>
            
            {/* Headline */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-0.03em] leading-[1.08] text-[#0D1117] mb-6">
              Drayo operates<br />
              your freight<br />
              <span className="text-[#006B5E]">back office.</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg font-normal leading-[1.65] text-[#5C6370] mb-10 max-w-[480px]">
              Document processing, sanctions screening, TMS integration and client communications — automated end to end.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton 
                className="px-6 py-3 text-sm font-semibold text-white bg-[#0D1117] rounded-[5px] hover:bg-[#1a1f26] transition-colors"
              >
                Request Demo
              </CalendlyButton>
              <a 
                href="#how-it-works"
                className="px-6 py-3 text-sm font-semibold text-[#0D1117] bg-transparent border border-[#E2E5EA] rounded-[5px] hover:border-[#0D1117] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column - Product UI screenshot */}
          <div className="bg-white rounded-[8px] border border-[#E2E5EA] shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="border-b border-[#E2E5EA] px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E2E5EA]" />
              <div className="w-3 h-3 rounded-full bg-[#E2E5EA]" />
              <div className="w-3 h-3 rounded-full bg-[#E2E5EA]" />
              <span className="ml-3 text-xs text-[#5C6370]">Bill of Lading Extraction</span>
            </div>
            <div className="p-5 bg-[#F7F8FA]">
              <div className="bg-white rounded-[5px] border border-[#E2E5EA] p-4 mb-4">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5C6370] mb-3">Extracted Fields</div>
                <div className="space-y-2.5">
                  {[
                    { label: "Shipper", value: "Maersk Line Ltd" },
                    { label: "Consignee", value: "Global Freight Partners" },
                    { label: "Container No.", value: "TCKU3954821" },
                    { label: "Port of Loading", value: "Shanghai, CN" },
                    { label: "Port of Discharge", value: "Felixstowe, UK" },
                  ].map((field) => (
                    <div key={field.label} className="flex justify-between items-center py-1.5 border-b border-[#E2E5EA] last:border-0">
                      <span className="text-xs text-[#5C6370]">{field.label}</span>
                      <span className="text-xs font-medium text-[#0D1117]">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#5C6370]">25 fields extracted</span>
                <span className="text-xs font-medium text-[#006B5E]">Processed in 42s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROBLEM SECTION - White background, 3 stat cards
// ============================================================================
function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5C6370] mb-4">
          The Problem
        </p>
        
        {/* Headline */}
        <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.12] text-[#0D1117] mb-4">
          Freight forwarding still runs on manual labour
        </h2>
        
        {/* Sub-copy */}
        <p className="text-base leading-[1.65] text-[#5C6370] mb-16 max-w-[560px]">
          Every shipping document processed by hand. Every TMS update typed manually. Every client notification sent by email. Your team spends their day doing work that AI can do in seconds.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-[8px] border border-[#E2E5EA] p-8">
            <div className="text-[48px] sm:text-[56px] font-extrabold tracking-[-0.03em] text-[#0D1117] leading-none">10–15</div>
            <div className="text-lg font-medium text-[#0D1117] mt-1">min</div>
            <p className="text-sm text-[#5C6370] mt-3">per shipping document, processed manually</p>
          </div>
          <div className="bg-white rounded-[8px] border border-[#E2E5EA] p-8">
            <div className="text-[48px] sm:text-[56px] font-extrabold tracking-[-0.03em] text-[#0D1117] leading-none">90%</div>
            <p className="text-sm text-[#5C6370] mt-4">of logistics documents still handled by hand</p>
          </div>
          <div className="bg-white rounded-[8px] border border-[#E2E5EA] p-8">
            <div className="text-[48px] sm:text-[56px] font-extrabold tracking-[-0.03em] text-[#006B5E] leading-none">£86k</div>
            <p className="text-sm text-[#5C6370] mt-4">annual cost of three freight coordinators doing automatable work</p>
          </div>
        </div>
        
        {/* Reddit quote */}
        <p className="text-[13px] italic text-[#5C6370] text-right">
          {`"Three Excel sheets in a trench coat."`} — r/freightforwarding
        </p>
      </div>
    </section>
  )
}

// ============================================================================
// HOW IT WORKS SECTION - Dark background, timeline
// ============================================================================
function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Document arrives by email or WhatsApp", desc: "PDF, image, or message — any format accepted." },
    { num: "02", title: "AI extracts 25+ structured fields instantly", desc: "Shipper, consignee, weights, dates, container numbers." },
    { num: "03", title: "Parties screened against global sanctions lists", desc: "OFAC, UN, EU and HMT checked in real time." },
    { num: "04", title: "TMS updated automatically", desc: "CargoWise, Descartes or any system via API." },
    { num: "05", title: "Client notified at every milestone", desc: "Automatic emails and WhatsApp updates." },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/35 mb-4">
          How It Works
        </p>
        
        {/* Headline */}
        <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.12] text-white mb-16">
          From email to TMS update in 60 seconds
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[6px] top-2 bottom-2 w-px bg-white/10" />
            
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-white/20 mt-1.5 flex-shrink-0 relative z-10" />
                  <div>
                    <span className="text-xs font-semibold text-white/30 block mb-1">{step.num}</span>
                    <h3 className="text-[15px] font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/55">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product screenshot */}
          <div className="bg-white rounded-[8px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="border-b border-[#E2E5EA] px-4 py-3 flex items-center gap-2 bg-white">
              <div className="w-3 h-3 rounded-full bg-[#E2E5EA]" />
              <div className="w-3 h-3 rounded-full bg-[#E2E5EA]" />
              <div className="w-3 h-3 rounded-full bg-[#E2E5EA]" />
            </div>
            <div className="p-5 bg-[#F7F8FA]">
              <div className="space-y-3">
                {[
                  { name: "Bill of Lading — TCKU3954821", fields: "25 fields", status: "Processed", time: "42s" },
                  { name: "Commercial Invoice — INV-0847", fields: "18 fields", status: "Processed", time: "38s" },
                  { name: "Packing List — PL-0392", fields: "12 fields", status: "Processing", time: "..." },
                ].map((doc, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 bg-white rounded-[5px] border ${doc.status === "Processing" ? "border-[#006B5E]/40" : "border-[#E2E5EA]"}`}>
                    <div>
                      <div className="text-sm font-medium text-[#0D1117]">{doc.name}</div>
                      <div className="text-xs text-[#5C6370]">{doc.fields}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-medium ${doc.status === "Processing" ? "text-[#006B5E]" : "text-[#006B5E]"}`}>{doc.status}</div>
                      <div className="text-xs text-[#5C6370]">{doc.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PLATFORM SECTION - 2x2 grid with colored top borders
// ============================================================================
function PlatformSection() {
  const modules = [
    {
      title: "Document Processing",
      description: "Reads Bills of Lading, airway bills, invoices and customs declarations. Extracts 25+ fields in under 60 seconds.",
      borderColor: "#006B5E"
    },
    {
      title: "Compliance Engine",
      description: "Screens every party against OFAC, UN, EU and HMT sanctions lists in real time. Flags risks before cargo moves.",
      borderColor: "#B45309"
    },
    {
      title: "TMS Integration",
      description: "Pushes data into your TMS via API or computer use agent. Works with CargoWise, Descartes, Magaya and any system.",
      borderColor: "#006B5E"
    },
    {
      title: "Communications Hub",
      description: "Sends automatic shipment updates via email, SMS or WhatsApp at every milestone. Clients stop chasing.",
      borderColor: "#006B5E"
    }
  ]

  return (
    <section id="platform" className="py-24 px-6 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5C6370] mb-4">
          The Platform
        </p>
        
        {/* Headline */}
        <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.12] text-[#0D1117] mb-16">
          Four specialised agents. One unified platform.
        </h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[8px] border border-[#E2E5EA] p-9 relative overflow-hidden"
            >
              {/* Top border accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px]" 
                style={{ backgroundColor: module.borderColor }}
              />
              <h3 className="text-xl font-semibold text-[#0D1117] mb-3">{module.title}</h3>
              <p className="text-base leading-[1.65] text-[#5C6370]">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA SECTION - Deep teal background
// ============================================================================
function CTASection() {
  return (
    <section className="py-24 px-6 bg-[#006B5E]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.12] text-white mb-4">
          Ready to automate your freight operations?
        </h2>
        <p className="text-lg text-white/75 mb-10">
          {`Request a demo. We'll show Drayo processing your own documents live.`}
        </p>
        <CalendlyButton 
          className="px-7 py-3 text-sm font-semibold text-[#006B5E] bg-white rounded-[5px] hover:bg-gray-100 transition-colors"
        >
          Request Demo
        </CalendlyButton>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER - Dark background
// ============================================================================
function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0D1117]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left */}
          <div>
            <DrayoLogo light />
            <p className="text-[13px] text-white/40 mt-3">
              Autonomous AI for freight forwarding operations
            </p>
          </div>
          
          {/* Right */}
          <nav className="flex flex-wrap gap-6">
            <a href="#platform" className="text-[13px] text-white/55 hover:text-white transition-colors">Platform</a>
            <a href="#how-it-works" className="text-[13px] text-white/55 hover:text-white transition-colors">How it works</a>
            <a href="#security" className="text-[13px] text-white/55 hover:text-white transition-colors">Security</a>
            <CalendlyButton className="text-[13px] text-white/55 hover:text-white transition-colors">
              Request Demo
            </CalendlyButton>
          </nav>
        </div>
        
        {/* Bottom row */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2026 Drayo AI Ltd
          </p>
          <div className="flex gap-4">
            <a href="https://drayo.ai" className="text-xs text-white/30 hover:text-white/50 transition-colors">drayo.ai</a>
            <a href="mailto:nureni@drayo.ai" className="text-xs text-white/30 hover:text-white/50 transition-colors">nureni@drayo.ai</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function HomePage() {
  return (
    <>
      {/* Calendly script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet"
      />

      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <PlatformSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
