"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

// ============================================================================
// LOGO SPLASH ANIMATION - Shows for 2.5 seconds on page load
// ============================================================================
function LogoSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')
  
  useEffect(() => {
    // Enter animation
    const enterTimer = setTimeout(() => setPhase('hold'), 400)
    // Hold for a moment
    const holdTimer = setTimeout(() => setPhase('exit'), 2000)
    // Complete and unmount
    const exitTimer = setTimeout(onComplete, 2500)
    
    return () => {
      clearTimeout(enterTimer)
      clearTimeout(holdTimer)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated particle burst background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: '50%',
              top: '50%',
              animation: `splash-particle ${1.5 + Math.random() * 0.5}s ease-out forwards`,
              animationDelay: `${0.2 + Math.random() * 0.3}s`,
              '--angle': `${(360 / 20) * i}deg`,
              '--distance': `${150 + Math.random() * 200}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      {/* Logo container */}
      <div 
        className={`relative transition-all duration-700 ease-out ${
          phase === 'enter' ? 'scale-75 opacity-0' : 
          phase === 'hold' ? 'scale-100 opacity-100' : 
          'scale-110 opacity-0'
        }`}
      >
        {/* Animated ring */}
        <div 
          className={`absolute inset-0 -m-8 rounded-full border-2 border-primary/20 transition-all duration-1000 ${
            phase === 'hold' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        />
        <div 
          className={`absolute inset-0 -m-16 rounded-full border border-primary/10 transition-all duration-1000 delay-100 ${
            phase === 'hold' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        />
        
        {/* Animated logo SVG */}
        <svg viewBox="0 0 140 32" className="h-16 w-auto" fill="none">
          {/* Small dot - animates first */}
          <circle 
            cx="8" cy="16" r="4" 
            fill="currentColor" 
            className="text-primary"
            style={{
              animation: phase !== 'enter' ? 'logo-dot-pop 0.4s ease-out forwards' : 'none',
              opacity: phase === 'enter' ? 0 : 1,
            }}
          />
          
          {/* Connection line - draws in */}
          <line 
            x1="12" y1="16" x2="20" y2="16" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-primary"
            style={{
              strokeDasharray: 8,
              strokeDashoffset: phase === 'enter' ? 8 : 0,
              transition: 'stroke-dashoffset 0.3s ease-out 0.2s',
            }}
          />
          
          {/* Main circle - scales in */}
          <circle 
            cx="24" cy="16" r="6" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            className="text-primary"
            style={{
              strokeDasharray: 38,
              strokeDashoffset: phase === 'enter' ? 38 : 0,
              transition: 'stroke-dashoffset 0.5s ease-out 0.3s',
            }}
          />
          
          {/* Small circles on the right */}
          <circle 
            cx="34" cy="12" r="2" 
            fill="currentColor" 
            className="text-primary/60"
            style={{
              opacity: phase === 'enter' ? 0 : 1,
              transition: 'opacity 0.3s ease-out 0.6s',
            }}
          />
          <circle 
            cx="34" cy="20" r="2" 
            fill="currentColor" 
            className="text-primary/60"
            style={{
              opacity: phase === 'enter' ? 0 : 1,
              transition: 'opacity 0.3s ease-out 0.7s',
            }}
          />
          <line 
            x1="30" y1="14" x2="32" y2="12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-primary/40"
            style={{
              strokeDasharray: 4,
              strokeDashoffset: phase === 'enter' ? 4 : 0,
              transition: 'stroke-dashoffset 0.3s ease-out 0.5s',
            }}
          />
          <line 
            x1="30" y1="18" x2="32" y2="20" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-primary/40"
            style={{
              strokeDasharray: 4,
              strokeDashoffset: phase === 'enter' ? 4 : 0,
              transition: 'stroke-dashoffset 0.3s ease-out 0.55s',
            }}
          />
          
          {/* DRAYO text - fades in last */}
          <text 
            x="44" y="22" 
            fill="currentColor" 
            className="text-foreground" 
            style={{ 
              fontSize: '18px', 
              fontWeight: 600, 
              fontFamily: 'var(--font-sans)',
              opacity: phase === 'enter' ? 0 : 1,
              transition: 'opacity 0.4s ease-out 0.8s',
            }}
          >
            DRAYO
          </text>
        </svg>
        
        {/* Subtitle */}
        <div 
          className={`mt-4 text-center text-xs text-foreground/40 tracking-[0.3em] uppercase transition-all duration-500 delay-300 ${
            phase === 'hold' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          AI Operations
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// DRAYO LOGO - Connected nodes design with repositioned circles
// ============================================================================
function DrayoLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 32" className={className} fill="none">
      {/* Node network - circle connected to two smaller circles */}
      <circle cx="8" cy="16" r="4" fill="currentColor" className="text-primary" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
      {/* Small circles repositioned to the right of main circle */}
      <circle cx="34" cy="12" r="2" fill="currentColor" className="text-primary/60" />
      <circle cx="34" cy="20" r="2" fill="currentColor" className="text-primary/60" />
      <line x1="30" y1="14" x2="32" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
      <line x1="30" y1="18" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
      {/* DRAYO text */}
      <text x="44" y="22" fill="currentColor" className="text-foreground" style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
        DRAYO
      </text>
    </svg>
  )
}

// ============================================================================
// DRAYO ICON ONLY - For footer
// ============================================================================
function DrayoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={className} fill="none">
      <circle cx="8" cy="16" r="4" fill="currentColor" className="text-primary" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
      <circle cx="34" cy="12" r="2" fill="currentColor" className="text-primary/60" />
      <circle cx="34" cy="20" r="2" fill="currentColor" className="text-primary/60" />
      <line x1="30" y1="14" x2="32" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
      <line x1="30" y1="18" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
    </svg>
  )
}

// ============================================================================
// ANIMATED BACKGROUND WITH PARTICLES AND AURORA
// ============================================================================
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    const initParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      
      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45, 212, 191, ${p.opacity})`
        ctx.fill()
        
        // Update position
        p.x += p.vx
        p.y += p.vy
        
        // Wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      
      animationId = requestAnimationFrame(draw)
    }
    
    resize()
    initParticles()
    draw()
    
    window.addEventListener('resize', () => {
      resize()
      initParticles()
    })
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Aurora gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full animate-aurora-1"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(45, 212, 191, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute top-1/3 right-0 w-[600px] h-[800px] rounded-full animate-aurora-2"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[700px] h-[500px] rounded-full animate-aurora-3"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>
      
      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)]" />
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
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/drayo-demo' })
    }
  }

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  )
}

// ============================================================================
// NAVBAR
// ============================================================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/60 backdrop-blur-2xl border-b border-white/[0.04] py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <DrayoLogo className="h-7 w-auto" />
        </a>
        
        <div className="flex items-center gap-3">
          <a 
            href="/login" 
            className="px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hidden sm:block"
          >
            Login
          </a>
          <CalendlyButton 
            className="group relative px-6 py-2.5 text-sm font-medium overflow-hidden rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all"
          >
            <span className="relative z-10 text-primary">Request Demo</span>
          </CalendlyButton>
        </div>
      </div>
    </header>
  )
}

// ============================================================================
// SECTION NAV
// ============================================================================
function SectionNav({ activeSection }: { activeSection: string }) {
  const sections = [
    { id: "hero", label: "MEET DRAYO" },
    { id: "operations", label: "HOW IT WORKS" },
    { id: "features", label: "CAPABILITIES" },
    { id: "integrations", label: "INTEGRATIONS" },
  ]

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-0">
      {sections.map((section, i) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`group flex items-center gap-3 py-2.5 transition-all duration-300 ${
            activeSection === section.id ? "opacity-100" : "opacity-30 hover:opacity-60"
          }`}
        >
          <span className={`text-[10px] font-medium tracking-[0.2em] ${
            activeSection === section.id ? "text-primary" : "text-foreground/50"
          }`}>
            {String(i + 1).padStart(2, '0')} {section.label}
          </span>
        </a>
      ))}
    </div>
  )
}

// ============================================================================
// FLOATING CARDS - Transparent, connected by lines
// ============================================================================

function DriverCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[180px]">
      <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Driver Verification</div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary text-sm font-semibold border border-primary/20">
          JM
        </div>
        <div>
          <div className="text-foreground text-xs font-medium">James Morrison</div>
          <div className="text-foreground/30 text-[10px]">HGV Class 1</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[10px]">
        <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-full">Verified</span>
        <span className="text-foreground/40">CPC Valid</span>
      </div>
    </div>
  )
}

function CalendarCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[200px]">
      <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Delivery Schedule</div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={i} className="text-[8px] text-foreground/20 py-0.5">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {[...Array(21)].map((_, i) => {
          const day = i + 8
          const booked = [12, 13, 18, 19].includes(day)
          const today = day === 15
          return (
            <div 
              key={i} 
              className={`text-[9px] py-1 rounded-md transition-all ${
                today ? 'bg-primary text-background font-medium' : 
                booked ? 'bg-primary/15 text-primary' : 'text-foreground/20 hover:bg-foreground/5'
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function InvoiceCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[170px]">
      <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Auto Invoice</div>
      <div className="text-foreground/50 font-mono text-[10px] mb-3">INV-2024-0892</div>
      <div className="space-y-2 text-[10px]">
        <div className="flex justify-between">
          <span className="text-foreground/30">Haulage</span>
          <span className="text-foreground/70">£485.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/30">Port fees</span>
          <span className="text-foreground/70">£125.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/30">Customs</span>
          <span className="text-foreground/70">£95.00</span>
        </div>
        <div className="h-px bg-foreground/10 my-1" />
        <div className="flex justify-between font-medium">
          <span className="text-foreground/50">Total</span>
          <span className="text-primary">£705.00</span>
        </div>
      </div>
    </div>
  )
}

function WhatsAppCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[190px]">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-[8px] text-foreground/30 uppercase tracking-[0.2em]">WhatsApp</span>
      </div>
      <div className="space-y-2">
        <div className="bg-foreground/5 rounded-xl rounded-tl-sm px-3 py-2">
          <span className="text-[10px] text-foreground/50">Container ETA?</span>
        </div>
        <div className="bg-primary/10 rounded-xl rounded-tr-sm px-3 py-2 border border-primary/10">
          <span className="text-[10px] text-foreground/70">TCKU395XXX arrives tomorrow 9-11 AM, Felixstowe Gate 4.</span>
        </div>
      </div>
      <div className="mt-2 text-[8px] text-primary/60">Auto-reply sent</div>
    </div>
  )
}

function ShipmentCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[160px]">
      <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Live Tracking</div>
      <div className="text-foreground/50 font-mono text-[10px] mb-3">TCKU3954821</div>
      <div className="relative pl-3 space-y-2.5">
        <div className="absolute left-[3px] top-1 bottom-1 w-px bg-gradient-to-b from-primary via-primary/50 to-foreground/10" />
        {[
          { done: true, label: "Departed Rotterdam" },
          { done: true, label: "Customs Cleared" },
          { done: false, label: "In Transit", active: true },
          { done: false, label: "Delivered" },
        ].map((step, i) => (
          <div key={i} className="relative flex items-center gap-2">
            <div className={`absolute -left-[5px] w-2.5 h-2.5 rounded-full border-2 ${
              step.done ? "bg-primary border-primary" : step.active ? "bg-background border-accent" : "bg-background border-foreground/20"
            } ${step.active ? "animate-pulse" : ""}`} />
            <span className={`text-[9px] pl-2 ${step.done ? "text-foreground/50" : step.active ? "text-foreground" : "text-foreground/20"}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ComplianceCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[150px]">
      <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Compliance</div>
      <div className="space-y-2">
        {[
          { label: "HMRC", done: true },
          { label: "T1 Transit", done: true },
          { label: "Health Cert", done: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/40">{item.label}</span>
            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmailCard() {
  return (
    <div className="floating-card rounded-2xl p-4 w-[180px]">
      <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Email Sent</div>
      <div className="text-[9px] text-foreground/30 mb-2">To: dispatch@customer.com</div>
      <div className="text-[10px] text-foreground/50 leading-relaxed line-clamp-3">
        Your shipment TCKU395XXX has cleared customs and is scheduled for delivery tomorrow...
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-[8px] text-primary/70">Sent automatically</span>
      </div>
    </div>
  )
}

// ============================================================================
// CENTRAL DEVICE - Desktop monitor style
// ============================================================================
function CentralDevice() {
  const [bars, setBars] = useState<number[]>([])
  
  useEffect(() => {
    setBars(Array(28).fill(0).map(() => 15 + Math.random() * 70))
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => 15 + Math.random() * 70))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-10">
      {/* Monitor frame */}
      <div className="relative">
        <div className="device-frame rounded-[24px] p-4">
          <div className="device-screen rounded-[16px] overflow-hidden w-[260px] h-[180px] flex flex-col items-center justify-center p-6">
            {/* Status bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] text-primary font-medium">Connected</span>
              </div>
            </div>
            
            <DrayoLogo className="h-6 w-auto mb-2 text-foreground" />
            <div className="text-[9px] text-foreground/40 mb-4">AI Operations Agent</div>
            
            {/* Waveform */}
            <div className="flex items-center justify-center gap-[2px] h-14 w-full">
              {bars.map((height, i) => (
                <div 
                  key={i}
                  className="w-[3px] bg-gradient-to-t from-primary/40 to-primary rounded-full transition-all duration-75"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Stand */}
        <div className="mx-auto w-20 h-5 bg-gradient-to-b from-foreground/10 to-foreground/5 rounded-b-lg" />
        <div className="mx-auto w-28 h-1.5 bg-foreground/10 rounded-full" />
      </div>
      
      {/* Glow */}
      <div className="absolute inset-0 -z-10 blur-[80px] opacity-25">
        <div className="absolute inset-0 bg-primary rounded-full scale-150" />
      </div>
    </div>
  )
}

// ============================================================================
// CONNECTING LINES SVG - Lines from cards to center
// ============================================================================
function ConnectingLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(45, 212, 191, 0.4)" />
          <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
        </linearGradient>
        <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(45, 212, 191, 0.4)" />
          <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
        </linearGradient>
        <linearGradient id="line-grad-3" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="rgba(45, 212, 191, 0.3)" />
          <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
        </linearGradient>
        <linearGradient id="line-grad-4" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="rgba(45, 212, 191, 0.3)" />
          <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
        </linearGradient>
        <linearGradient id="line-grad-v" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(45, 212, 191, 0.3)" />
          <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
        </linearGradient>
      </defs>
      
      {/* Lines from cards to center - curved paths */}
      <path d="M 90 80 Q 200 150 350 250" stroke="url(#line-grad-1)" strokeWidth="1" fill="none" className="animate-line-draw" />
      <path d="M 710 80 Q 600 150 450 250" stroke="url(#line-grad-2)" strokeWidth="1" fill="none" className="animate-line-draw" style={{ animationDelay: '0.2s' }} />
      <path d="M 60 280 Q 180 280 320 280" stroke="url(#line-grad-3)" strokeWidth="1" fill="none" className="animate-line-draw" style={{ animationDelay: '0.4s' }} />
      <path d="M 740 300 Q 620 300 480 300" stroke="url(#line-grad-4)" strokeWidth="1" fill="none" className="animate-line-draw" style={{ animationDelay: '0.6s' }} />
      <path d="M 100 480 Q 200 400 340 340" stroke="url(#line-grad-1)" strokeWidth="1" fill="none" className="animate-line-draw" style={{ animationDelay: '0.8s' }} />
      <path d="M 700 480 Q 600 400 460 340" stroke="url(#line-grad-2)" strokeWidth="1" fill="none" className="animate-line-draw" style={{ animationDelay: '1s' }} />
      <path d="M 400 540 Q 400 450 400 360" stroke="url(#line-grad-v)" strokeWidth="1" fill="none" className="animate-line-draw" style={{ animationDelay: '1.2s' }} />
      
      {/* Small dots at card connection points */}
      <circle cx="90" cy="80" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
      <circle cx="710" cy="80" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
      <circle cx="60" cy="280" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
      <circle cx="740" cy="300" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
      <circle cx="100" cy="480" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
      <circle cx="700" cy="480" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
      <circle cx="400" cy="540" r="3" fill="rgba(45, 212, 191, 0.5)" className="animate-pulse-slow" />
    </svg>
  )
}

// ============================================================================
// HERO SECTION - Fixed layout: text at top, visual below
// ============================================================================
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header content - centered */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] text-foreground/40 uppercase tracking-[0.25em]">Meet Drayo</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            <span className="text-primary">Drayo</span>
            <span className="text-foreground"> operates your freight systems</span>
          </h1>
          
          <p className="text-foreground/40 text-lg max-w-xl mx-auto">
            Autonomous AI for logistics operations
          </p>
        </div>
        
        {/* Central visualization with floating cards */}
        <div className="relative h-[600px] lg:h-[580px] max-w-[800px] mx-auto">
          <ConnectingLines />
          
          {/* Floating cards positioned around center */}
          <div className="absolute top-0 left-0 animate-float-1">
            <DriverCard />
          </div>
          
          <div className="absolute top-0 right-0 animate-float-2">
            <CalendarCard />
          </div>
          
          <div className="absolute top-[30%] -left-4 lg:left-0 animate-float-3">
            <InvoiceCard />
          </div>
          
          <div className="absolute top-[32%] -right-4 lg:right-0 animate-float-4">
            <WhatsAppCard />
          </div>
          
          <div className="absolute bottom-[12%] left-0 animate-float-5">
            <ShipmentCard />
          </div>
          
          <div className="absolute bottom-[15%] right-0 animate-float-6">
            <ComplianceCard />
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float-7">
            <EmailCard />
          </div>
          
          {/* Central device */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CentralDevice />
          </div>
        </div>
        
        {/* Feature cards - horizontal row below */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
          {[
            { title: "Computer use agents", desc: "Vision-based AI operates your software" },
            { title: "Multimodal intelligence", desc: "Email, WhatsApp, voice unified" },
            { title: "Autonomous completion", desc: "End-to-end task execution" },
          ].map((feature, i) => (
            <div key={i} className="p-4 rounded-xl bg-card/20 border border-foreground/[0.04] backdrop-blur-sm text-center">
              <h3 className="text-foreground text-sm font-medium mb-1">{feature.title}</h3>
              <p className="text-foreground/40 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// OPERATIONS SECTION - Visual demo of capabilities
// ============================================================================
function OperationsSection() {
  const [activeOp, setActiveOp] = useState(0)
  
  const operations = [
    {
      title: "Document Processing",
      desc: "Instant extraction from BOLs, invoices, and customs forms",
      visual: (
        <div className="relative bg-card/30 rounded-2xl p-6 border border-foreground/[0.04] h-[300px] overflow-hidden backdrop-blur-sm">
          <div className="absolute top-4 right-4 text-[8px] text-primary bg-primary/10 px-2 py-1 rounded-full">Processing</div>
          <div className="space-y-3 font-mono text-xs mt-8">
            {[
              { label: "Container", value: "TCKU3954821", color: "primary" },
              { label: "Shipper", value: "Rotterdam Logistics BV", color: "foreground" },
              { label: "Weight", value: "18,450 KG", color: "foreground" },
              { label: "Destination", value: "Felixstowe", color: "foreground" },
            ].map((field, i) => (
              <div key={i} className="flex gap-4 items-center">
                <span className="text-foreground/30 w-24 text-[10px]">{field.label}</span>
                <span className={`text-${field.color} text-[11px]`}>{field.value}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/5">
            <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent animate-pulse" />
          </div>
        </div>
      )
    },
    {
      title: "TMS Auto-Fill",
      desc: "Populates your transport management system automatically",
      visual: (
        <div className="relative bg-card/30 rounded-2xl p-6 border border-foreground/[0.04] h-[300px] backdrop-blur-sm">
          <div className="absolute top-4 right-4 text-[8px] text-accent bg-accent/10 px-2 py-1 rounded-full flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Auto-filling
          </div>
          <div className="space-y-3 mt-8">
            {["Reference", "Customer", "Route", "Driver"].map((label, i) => (
              <div key={i}>
                <span className="text-[9px] text-foreground/30 block mb-1">{label}</span>
                <div className="bg-foreground/[0.03] rounded-lg px-3 py-2 text-[11px] text-foreground/70 border border-foreground/[0.04]">
                  <span className="inline-block w-1 h-3 bg-primary animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Schedule Organizing",
      desc: "Coordinates pickups, deliveries, and resource allocation",
      visual: (
        <div className="bg-card/30 rounded-2xl p-6 border border-foreground/[0.04] h-[300px] backdrop-blur-sm">
          <div className="space-y-2 mt-2">
            {[
              { name: "Felixstowe Pickup", time: "08:00", status: "Confirmed", highlight: true },
              { name: "London DC Delivery", time: "14:30", status: "Scheduled", highlight: false },
              { name: "Manchester Return", time: "18:00", status: "Pending", highlight: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                item.highlight ? 'bg-primary/5 border-primary/20' : 'border-foreground/[0.04]'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-mono ${
                    item.highlight ? 'bg-primary/10 text-primary' : 'bg-foreground/5 text-foreground/40'
                  }`}>
                    {item.time}
                  </div>
                  <span className="text-[11px] text-foreground/70">{item.name}</span>
                </div>
                <span className={`text-[9px] px-2 py-1 rounded-full ${
                  item.highlight ? 'bg-primary/10 text-primary' : 'bg-foreground/5 text-foreground/40'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Customs Filing",
      desc: "Automated declaration preparation and submission",
      visual: (
        <div className="bg-card/30 rounded-2xl p-6 border border-foreground/[0.04] h-[300px] backdrop-blur-sm">
          <div className="space-y-3 mt-2">
            {[
              { label: "Import Declaration", status: "done" },
              { label: "Commodity Codes", status: "done" },
              { label: "Duty Calculation", status: "done" },
              { label: "Authority Submission", status: "active" },
              { label: "Clearance", status: "pending" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  step.status === 'done' ? 'bg-primary/10' :
                  step.status === 'active' ? 'bg-accent/10' : 'bg-foreground/5'
                }`}>
                  {step.status === 'done' ? (
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : step.status === 'active' ? (
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-foreground/10" />
                  )}
                </div>
                <span className={`text-[11px] ${step.status === 'pending' ? 'text-foreground/30' : 'text-foreground/70'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOp(prev => (prev + 1) % operations.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [operations.length])

  return (
    <section id="operations" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] text-foreground/40 uppercase tracking-[0.25em]">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Autonomous workflow execution
          </h2>
        </div>
        
        <div className="xl:pl-40 grid lg:grid-cols-2 gap-8 items-start">
          {/* Tabs */}
          <div className="space-y-2">
            {operations.map((op, i) => (
              <button
                key={i}
                onClick={() => setActiveOp(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  activeOp === i 
                    ? 'bg-card/50 border-primary/20' 
                    : 'border-transparent hover:bg-card/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium ${
                    activeOp === i ? 'bg-primary/10 text-primary' : 'bg-foreground/5 text-foreground/30'
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <span className={`block text-sm font-medium ${activeOp === i ? 'text-foreground' : 'text-foreground/50'}`}>
                      {op.title}
                    </span>
                    <span className={`block text-xs mt-0.5 ${activeOp === i ? 'text-foreground/50' : 'text-foreground/30'}`}>
                      {op.desc}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Visual */}
          <div>{operations[activeOp].visual}</div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURES SECTION - More interesting design with icons
// ============================================================================
function FeaturesSection() {
  const features = [
    { 
      title: "Zero API Integration", 
      desc: "Works with any software your team uses, no matter how legacy or custom",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    { 
      title: "Around the Clock", 
      desc: "Continuous operations without breaks, holidays, or human error",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "Global Compliance", 
      desc: "Adapts to regulatory requirements across all jurisdictions",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "Unified Channels", 
      desc: "Email, WhatsApp, voice, and SMS in one intelligent system",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
  ]

  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] text-foreground/40 uppercase tracking-[0.25em]">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Purpose-built for logistics
          </h2>
        </div>
        
        <div className="xl:pl-40 grid sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-card/20 border border-foreground/[0.04] hover:border-primary/20 transition-all backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-foreground/40 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// INTEGRATION LOGOS - Greyscale themed
// ============================================================================
// Simple text-based logo components - all consistent styling

// ============================================================================
// INTEGRATIONS SECTION - Logo grid like Lance.ai
// ============================================================================
function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - text content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] text-foreground/40 uppercase tracking-[0.25em]">Integrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              <span className="text-foreground">Works across your </span>
              <span className="text-primary">entire tech stack</span>
            </h2>
            <p className="text-foreground/50 leading-relaxed mb-8">
              Drayo connects to your freight systems the way your staff does — by seeing the screen and using it. Computer use agents navigate TMS platforms, email clients, and back office tools visually.
            </p>
            
            <div className="mb-8">
              <div className="text-[10px] text-foreground/30 uppercase tracking-[0.25em] mb-4">Key Features</div>
              <div className="space-y-3">
                {[
                  "Connects to any freight software — TMS, WMS, customs platforms",
                  "Operates legacy systems other AI tools cannot access",
                  "No custom development or vendor coordination needed",
                  "Set up in under an hour",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground/60">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - logo grid like Lance.ai */}
          <div className="relative">
            {/* Gradient fade overlays */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            
            {/* 3x3 Logo grid */}
            <div className="grid grid-cols-3 gap-2 p-4">
              {/* Row 1 */}
              <LogoCard>
                <CargoWiseLogo />
              </LogoCard>
              <LogoCard>
                <WiseTechLogo />
              </LogoCard>
              <LogoCard>
                <SAPLogo />
              </LogoCard>
              
              {/* Row 2 - Drayo centered */}
              <LogoCard>
                <OracleLogo />
              </LogoCard>
              <LogoCard highlighted>
                <DrayoIcon className="h-8 w-auto" />
              </LogoCard>
              <LogoCard>
                <GmailLogo />
              </LogoCard>
              
              {/* Row 3 */}
              <LogoCard>
                <OutlookLogo />
              </LogoCard>
              <LogoCard>
                <WhatsAppLogo />
              </LogoCard>
              <LogoCard>
                <SlackLogo />
              </LogoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Logo card wrapper
function LogoCard({ children, highlighted = false }: { children: React.ReactNode, highlighted?: boolean }) {
  return (
    <div className={`flex items-center justify-center h-[72px] rounded-xl transition-all ${
      highlighted 
        ? "bg-card/60 border-2 border-primary/40" 
        : "bg-card/20 border border-foreground/[0.06] hover:bg-card/40 hover:border-foreground/10"
    }`}>
      {children}
    </div>
  )
}

// Actual brand logos as SVGs
function CargoWiseLogo() {
  return (
    <svg viewBox="0 0 120 24" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity">
      {/* CargoWise icon - horizontal bars */}
      <g fill="currentColor" className="text-foreground">
        <rect x="0" y="2" width="6" height="2.5" rx="0.3" />
        <rect x="0" y="6" width="6" height="2.5" rx="0.3" />
        <rect x="0" y="10" width="6" height="2.5" rx="0.3" />
        <rect x="0" y="14" width="3.5" height="2.5" rx="0.3" />
        <rect x="0" y="18" width="3.5" height="2.5" rx="0.3" />
        <rect x="8" y="2" width="3.5" height="2.5" rx="0.3" />
        <rect x="8" y="6" width="6" height="2.5" rx="0.3" />
        <rect x="8" y="10" width="6" height="2.5" rx="0.3" />
        <rect x="8" y="14" width="3.5" height="2.5" rx="0.3" />
      </g>
      <text x="20" y="16" fill="currentColor" className="text-foreground" style={{ fontSize: '11px', fontWeight: 500 }}>cargowise</text>
    </svg>
  )
}

function WiseTechLogo() {
  return (
    <svg viewBox="0 0 90 28" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity">
      <g fill="currentColor" className="text-foreground">
        {/* Vertical bars pattern */}
        <rect x="0" y="0" width="2.5" height="10" rx="0.3" />
        <rect x="4" y="3" width="2.5" height="14" rx="0.3" />
        <rect x="8" y="0" width="2.5" height="10" rx="0.3" />
        <rect x="0" y="14" width="2.5" height="6" rx="0.3" />
        <rect x="4" y="20" width="2.5" height="4" rx="0.3" />
        <rect x="8" y="14" width="2.5" height="6" rx="0.3" />
      </g>
      <text x="16" y="12" fill="currentColor" className="text-foreground" style={{ fontSize: '9px', fontWeight: 500 }}>wisetech</text>
      <text x="16" y="22" fill="currentColor" className="text-foreground" style={{ fontSize: '9px', fontWeight: 500 }}>global</text>
    </svg>
  )
}

function SAPLogo() {
  return (
    <svg viewBox="0 0 50 24" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity">
      <text x="0" y="18" fill="currentColor" className="text-foreground" style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' }}>SAP</text>
    </svg>
  )
}

function OracleLogo() {
  return (
    <svg viewBox="0 0 70 16" className="h-4 w-auto opacity-60 hover:opacity-100 transition-opacity">
      <text x="0" y="13" fill="currentColor" className="text-foreground" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em' }}>ORACLE</text>
    </svg>
  )
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 opacity-60 hover:opacity-100 transition-opacity">
      <path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  )
}

function OutlookLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 opacity-60 hover:opacity-100 transition-opacity">
      <path fill="currentColor" d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.152-.362.233-.612.233h-8.175v-6.726l1.238.961c.078.062.167.095.27.095a.47.47 0 0 0 .27-.095l6.987-5.424c.062-.046.112-.078.15-.095a.36.36 0 0 1 .11-.023v.02zM23.762 5.88a.319.319 0 0 1 .095.27.558.558 0 0 1-.095.294l-7.107 5.5a.913.913 0 0 1-.555.174.913.913 0 0 1-.555-.175L8.15 6.463V5.26c0-.227.076-.42.23-.575.152-.158.345-.237.58-.237h14.207c.104 0 .247.144.35.207a.345.345 0 0 1 .245.324z"/>
      <path fill="currentColor" d="M7.15 7.387v12.004l-5.53 2.318A1.056 1.056 0 0 1 0 20.837V7.387a1.07 1.07 0 0 1 1.07-1.07h5.01c.59 0 1.07.48 1.07 1.07z"/>
      <ellipse cx="3.6" cy="13" rx="2.4" ry="3.6" fill="currentColor"/>
    </svg>
  )
}

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 opacity-60 hover:opacity-100 transition-opacity">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 opacity-60 hover:opacity-100 transition-opacity">
      <path fill="currentColor" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
      <path fill="currentColor" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
      <path fill="currentColor" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
      <path fill="currentColor" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  )
}

// ============================================================================
// CTA
// ============================================================================
function CTASection() {
  return (
    <section id="cta" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to automate your freight operations?
          </h2>
          <p className="text-foreground/40 mb-8">
            See Drayo in action with a personalized demo.
          </p>
          <CalendlyButton 
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-background bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Request a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER - Lance.ai style
// ============================================================================
function Footer() {
  return (
    <footer className="relative py-16 border-t border-foreground/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40">
<div className="grid md:grid-cols-3 gap-12 mb-16">
  {/* Logo and tagline */}
  <div className="md:col-span-2">
  <div className="flex items-center gap-2 mb-4">
  <DrayoIcon className="h-8 w-auto" />
  <span className="text-foreground font-semibold text-lg">DRAYO</span>
  </div>
  <p className="text-foreground/40 text-sm max-w-xs">
  The future of freight is operated by Drayo.
  </p>
  </div>
  
  {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em]">Contact Us</span>
              </div>
              <ul className="space-y-3">
                {[
                  { name: "LinkedIn", icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )},
                  { name: "X", icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )},
                  { name: "Email", icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )},
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.name === "Email" ? "mailto:info@drayo.ai" : "#"} 
                      className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/[0.04]">
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Terms of Service</a>
            </div>
            <div className="text-xs text-foreground/30">
              © 2026 Drayo AI, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function DrayoLanding() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Logo Splash Animation */}
      {showSplash && <LogoSplash onComplete={() => setShowSplash(false)} />}
      
      {/* Calendly Script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      
      <main className={`relative min-h-screen bg-background transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <AnimatedBackground />
        <Navbar />
        <SectionNav activeSection={activeSection} />
        <HeroSection />
        <OperationsSection />
        <FeaturesSection />
        <IntegrationsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
