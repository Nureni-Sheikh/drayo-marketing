"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

// ============================================================================
// LOGO SPLASH ANIMATION - Shows for 2.5 seconds on page load
// ============================================================================
// Deterministic particle data to avoid hydration mismatch
const PARTICLE_DATA = [
  { duration: 1.72, delay: 0.28, distance: 180 },
  { duration: 1.85, delay: 0.35, distance: 220 },
  { duration: 1.63, delay: 0.42, distance: 195 },
  { duration: 1.91, delay: 0.25, distance: 250 },
  { duration: 1.78, delay: 0.38, distance: 175 },
  { duration: 1.55, delay: 0.31, distance: 230 },
  { duration: 1.88, delay: 0.44, distance: 200 },
  { duration: 1.67, delay: 0.22, distance: 265 },
  { duration: 1.74, delay: 0.36, distance: 185 },
  { duration: 1.82, delay: 0.29, distance: 240 },
  { duration: 1.59, delay: 0.41, distance: 210 },
  { duration: 1.95, delay: 0.33, distance: 170 },
  { duration: 1.71, delay: 0.27, distance: 255 },
  { duration: 1.64, delay: 0.45, distance: 190 },
  { duration: 1.86, delay: 0.24, distance: 225 },
  { duration: 1.79, delay: 0.39, distance: 205 },
  { duration: 1.58, delay: 0.32, distance: 260 },
  { duration: 1.93, delay: 0.26, distance: 180 },
  { duration: 1.68, delay: 0.43, distance: 235 },
  { duration: 1.76, delay: 0.30, distance: 215 },
]

function LogoSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')
  
  useEffect(() => {
    // Enter animation
    const enterTimer = setTimeout(() => setPhase('hold'), 400)
    // Hold for a moment
    const holdTimer = setTimeout(() => setPhase('exit'), 2200)
    // Complete and unmount
    const exitTimer = setTimeout(onComplete, 2700)
    
    return () => {
      clearTimeout(enterTimer)
      clearTimeout(holdTimer)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo container */}
      <div 
        className={`relative transition-all duration-700 ease-out ${
          phase === 'enter' ? 'scale-75 opacity-0' : 
          phase === 'hold' ? 'scale-100 opacity-100' : 
          'scale-110 opacity-0'
        }`}
      >
        {/* Animated logo SVG with color transition */}
        <svg viewBox="-42 -28 70 56" className="h-32 w-auto splash-logo-color" fill="none">
          {/* Small left circle */}
          <circle 
            cx="-33" cy="0" r="5" 
            fill="currentColor"
            style={{
              animation: phase !== 'enter' ? 'logo-dot-pop 0.4s ease-out forwards' : 'none',
              opacity: phase === 'enter' ? 0 : 1,
            }}
          />
          
          {/* Connection line to center */}
          <line 
            x1="-28" y1="0" x2="-13" y2="0" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            style={{
              strokeDasharray: 15,
              strokeDashoffset: phase === 'enter' ? 15 : 0,
              transition: 'stroke-dashoffset 0.3s ease-out 0.2s',
            }}
          />
          
          {/* Main center circle (hollow) */}
          <circle 
            cx="0" cy="0" r="12" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            fill="none"
            style={{
              strokeDasharray: 76,
              strokeDashoffset: phase === 'enter' ? 76 : 0,
              transition: 'stroke-dashoffset 0.5s ease-out 0.3s',
            }}
          />
          
          {/* Upper right connection line */}
          <line 
            x1="8" y1="-9" x2="16" y2="-15" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            style={{
              strokeDasharray: 14,
              strokeDashoffset: phase === 'enter' ? 14 : 0,
              transition: 'stroke-dashoffset 0.3s ease-out 0.5s',
            }}
          />
          
          {/* Upper right circle */}
          <circle 
            cx="20" cy="-18" r="5" 
            fill="currentColor"
            style={{
              opacity: phase === 'enter' ? 0 : 1,
              transform: phase === 'enter' ? 'scale(0)' : 'scale(1)',
              transformOrigin: '20px -18px',
              transition: 'opacity 0.3s ease-out 0.6s, transform 0.3s ease-out 0.6s',
            }}
          />
          
          {/* Lower right connection line */}
          <line 
            x1="8" y1="9" x2="16" y2="15" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            style={{
              strokeDasharray: 14,
              strokeDashoffset: phase === 'enter' ? 14 : 0,
              transition: 'stroke-dashoffset 0.3s ease-out 0.55s',
            }}
          />
          
          {/* Lower right circle */}
          <circle 
            cx="20" cy="18" r="5" 
            fill="currentColor"
            style={{
              opacity: phase === 'enter' ? 0 : 1,
              transform: phase === 'enter' ? 'scale(0)' : 'scale(1)',
              transformOrigin: '20px 18px',
              transition: 'opacity 0.3s ease-out 0.7s, transform 0.3s ease-out 0.7s',
            }}
          />
        </svg>
      </div>
      
      {/* DRAYO text - appears after logo */}
      <div 
        className={`mt-6 transition-all duration-500 ${
          phase === 'enter' ? 'opacity-0 translate-y-2' : 
          phase === 'hold' ? 'opacity-100 translate-y-0' : 
          'opacity-0 translate-y-2'
        }`}
        style={{ transitionDelay: phase === 'hold' ? '0.8s' : '0s' }}
      >
        <span className="text-lg font-semibold tracking-[0.25em] text-foreground/80">DRAYO</span>
      </div>
    </div>
  )
}

// ============================================================================
// DRAYO LOGO - New connected nodes design from user SVG
// ============================================================================
function DrayoLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 50" className={className} fill="none">
      {/* Small left circle */}
      <circle cx="8" cy="25" r="6" fill="currentColor" className="text-primary" />
      {/* Connection line to center */}
      <line x1="14" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-primary" />
      {/* Main center circle (hollow) */}
      <circle cx="42" cy="25" r="13" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-primary" />
      {/* Upper right connection and circle */}
      <line x1="51" y1="15" x2="60" y2="8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-primary" />
      <circle cx="64" cy="5" r="5" fill="currentColor" className="text-primary" />
      {/* Lower right connection and circle */}
      <line x1="51" y1="35" x2="60" y2="42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-primary" />
      <circle cx="64" cy="45" r="5" fill="currentColor" className="text-primary" />
      {/* DRAYO text - bolder and larger */}
      <text x="80" y="33" fill="currentColor" className="text-foreground" style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-sans)', letterSpacing: '0.02em' }}>
        DRAYO
      </text>
    </svg>
  )
}

// ============================================================================
// DRAYO ICON ONLY - For footer and other uses
// ============================================================================
function DrayoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-40 -28 70 56" className={className} fill="none">
      {/* Small left circle */}
      <circle cx="-33" cy="0" r="5" fill="currentColor" className="text-primary" />
      {/* Connection line to center */}
      <line x1="-28" y1="0" x2="-13" y2="0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
      {/* Main center circle (hollow) */}
      <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
      {/* Upper right connection and circle */}
      <line x1="8" y1="-9" x2="16" y2="-15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
      <circle cx="20" cy="-18" r="5" fill="currentColor" className="text-primary" />
      {/* Lower right connection and circle */}
      <line x1="8" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
      <circle cx="20" cy="18" r="5" fill="currentColor" className="text-primary" />
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
          <DrayoLogo className="h-10 w-auto" />
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
  <div className="floating-card rounded-2xl p-4 h-full">
  <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Driver Verification</div>
  <div className="flex items-center gap-3 mb-3">
  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-foreground/50 font-medium text-[11px]">JM</div>
  <div>
  <div className="text-foreground/80 font-medium text-[11px]">James Morrison</div>
  <div className="text-primary/60 text-[9px]">CDL Class A</div>
  </div>
  </div>
  <div className="flex gap-1.5">
  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] rounded">Verified</span>
  <span className="px-2 py-0.5 bg-foreground/5 text-foreground/40 text-[8px] rounded">CPC Valid</span>
  </div>
  </div>
  )
  }

function CalendarCard() {
  return (
  <div className="floating-card rounded-2xl p-4 h-full">
  <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Delivery Schedule</div>
  <div className="grid grid-cols-7 gap-1 text-[8px] text-center">
  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
  <div key={i} className="text-foreground/20">{d}</div>
  ))}
  {Array(7).fill(0).map((_, i) => {
  const day = 8 + i
  const hasDelivery = [12, 13, 15, 18, 19].includes(day)
  const isToday = day === 15
  return (
  <div 
  key={i} 
  className={`py-1 rounded ${
  isToday ? "bg-primary text-background" : hasDelivery ? "bg-primary/20 text-primary" : "text-foreground/30"
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
  <div className="floating-card rounded-2xl p-4 h-full">
  <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Auto Invoice</div>
  <div className="font-mono text-[10px] text-foreground/50 mb-3">INV-2024-0892</div>
  <div className="space-y-1.5 mb-3">
  {[
  { label: "Haulage", amount: "£485.00" },
  { label: "Port fees", amount: "$125.00" },
  { label: "Customs", amount: "€95.00" },
  ].map((line, i) => (
  <div key={i} className="flex justify-between text-[9px]">
  <span className="text-foreground/30">{line.label}</span>
  <span className="text-foreground/60">{line.amount}</span>
  </div>
  ))}
  </div>
  <div className="pt-2 border-t border-foreground/5 flex justify-between text-[10px]">
  <span className="text-foreground/40">Total</span>
  <span className="text-primary font-medium">£705.00</span>
  </div>
  </div>
  )
  }

function WhatsAppCard() {
  return (
  <div className="floating-card rounded-2xl p-4 h-full">
  <div className="flex items-center gap-2 mb-3">
  <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  <span className="text-[8px] text-foreground/30 uppercase tracking-[0.2em]">WhatsApp</span>
  </div>
  <div className="space-y-2">
  <div className="bg-foreground/5 rounded-lg p-2">
  <div className="text-[9px] text-foreground/30 mb-1">Customer inquiry</div>
  <div className="text-[10px] text-foreground/60">Container ETA?</div>
  </div>
  <div className="bg-primary/5 rounded-lg p-2 border-l-2 border-primary/30">
  <div className="text-[10px] text-foreground/70">TCKU3954821 arrives tomorrow 9-11 AM, destination port Gate 4.</div>
  </div>
  <div className="text-[8px] text-primary/50 flex items-center gap-1">
  <span className="w-1 h-1 rounded-full bg-primary/50" />
  Auto-reply sent
  </div>
  </div>
  </div>
  )
  }

function ShipmentCard() {
  return (
  <div className="floating-card rounded-2xl p-3 h-full">
  <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-2">Live Tracking</div>
  {/* Mini map visualization */}
  <div className="relative h-[80px] bg-foreground/[0.02] rounded-lg overflow-hidden mb-2">
  {/* Simplified route line */}
  <svg viewBox="0 0 140 70" className="w-full h-full">
  {/* Europe coastline hint */}
  <path d="M 20 25 Q 35 20, 50 25 Q 65 30, 70 35 Q 75 45, 65 55" 
        fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
  {/* UK coastline hint */}
  <path d="M 100 20 Q 105 30, 100 45 Q 95 55, 105 60" 
        fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
  {/* Route line - Rotterdam to Felixstowe */}
  <path d="M 40 32 Q 70 25, 100 38" 
        fill="none" stroke="url(#route-gradient)" strokeWidth="2" strokeDasharray="4,2" />
  {/* Animated dot on route */}
  <circle r="3" fill="#00d4a0">
  <animateMotion dur="3s" repeatCount="indefinite" path="M 40 32 Q 70 25, 100 38" />
  </circle>
  {/* Origin point - Rotterdam */}
  <circle cx="40" cy="32" r="4" fill="#00d4a0" opacity="0.6" />
  <circle cx="40" cy="32" r="2" fill="#00d4a0" />
  {/* Destination point - Felixstowe */}
  <circle cx="100" cy="38" r="4" fill="rgba(255,255,255,0.2)" />
  <circle cx="100" cy="38" r="2" fill="rgba(255,255,255,0.4)" />
  <defs>
  <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stopColor="#00d4a0" />
  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
  </linearGradient>
  </defs>
  </svg>
  </div>
  {/* Route info */}
  <div className="flex items-center justify-between">
  <div>
  <div className="text-[9px] text-primary font-medium">Port of Rotterdam</div>
  <div className="text-[8px] text-foreground/30">Origin</div>
  </div>
  <div className="flex-1 mx-2 h-px bg-gradient-to-r from-primary/40 to-foreground/10" />
  <div className="text-right">
  <div className="text-[9px] text-foreground/50">Port of Los Angeles</div>
  <div className="text-[8px] text-foreground/30">ETA 9 AM</div>
  </div>
  </div>
  </div>
  )
  }

function ComplianceCard() {
  return (
  <div className="floating-card rounded-2xl p-4 h-full">
  <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-3">Compliance</div>
  <div className="space-y-2">
  {[
  { name: "HMRC", checked: true },
  { name: "FDA Prior Notice", checked: true },
  { name: "EUR.1 Certificate", checked: true },
  { name: "T1 Transit", checked: true },
  { name: "Health Cert", checked: true },
  ].map((item, i) => (
  <div key={i} className="flex items-center justify-between">
  <span className="text-[10px] text-foreground/50">{item.name}</span>
  <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  </div>
  ))}
  </div>
  </div>
  )
  }

function EmailCard() {
  return (
  <div className="floating-card rounded-2xl p-4 h-full">
  <div className="flex items-center gap-3">
  <div className="flex-shrink-0">
  <div className="text-[8px] text-foreground/30 uppercase tracking-[0.2em] mb-2">Email Sent</div>
  <div className="text-[9px] text-foreground/40 mb-2">To: ops@globalfreight.com</div>
  </div>
  <div className="flex-1">
  <div className="text-[10px] text-foreground/60 leading-relaxed">
  Your shipment TCKU3954821 has cleared customs and is scheduled for delivery between 9-11 AM at Gate 4.
  </div>
  <div className="mt-2 flex items-center gap-1 text-[8px] text-primary">
  <div className="w-1 h-1 rounded-full bg-primary" />
  Sent automatically
  </div>
  </div>
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
// HERO SECTION - Grid layout with multiple functionality panels
// ============================================================================
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header content - centered */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
        
        {/* Grid of functionality panels - rectangular arrangement */}
        <div className="relative max-w-[1100px] mx-auto">
          {/* Main grid layout */}
          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            {/* Row 1 */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 animate-float-1">
              <DriverCard />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 animate-float-2">
              <WhatsAppCard />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 animate-float-3">
              <CalendarCard />
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-3 animate-float-4">
              <ComplianceCard />
            </div>
            
            {/* Row 2 */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 animate-float-5">
              <InvoiceCard />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 animate-float-6">
              <ShipmentCard />
            </div>
            <div className="col-span-12 sm:col-span-4 lg:col-span-6 animate-float-7">
              <EmailCard />
            </div>
          </div>
          
          {/* Subtle connecting gradient overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

  // ============================================================================
  // OPERATIONS SECTION - Horizontal timeline
  // ============================================================================
  function OperationsSection() {
  const steps = [
    { num: "01", title: "Document arrives", desc: "Email, WhatsApp, or call. Any format, any origin." },
    { num: "02", title: "Drayo reads it", desc: "20 fields extracted per document. Zero human input." },
    { num: "03", title: "Systems updated", desc: "TMS filled. Compliance checked. Automatically." },
    { num: "04", title: "Confirmations sent", desc: "Client and carrier notified. Audit trail saved." },
  ]

  const stats = [
    { value: "< 60s", label: "Processing time" },
    { value: "95%+", label: "Extraction accuracy" },
    { value: "80%", label: "Less manual data entry" },
  ]

  return (
    <section id="operations" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] text-foreground/40 uppercase tracking-[0.25em]">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            From document to done. In 60 seconds.
          </h2>
        </div>
        
        {/* Horizontal Timeline */}
        <div className="xl:pl-40 relative">
          {/* Animated connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px hidden lg:block">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-t-2 border-dashed border-primary/30" />
              <div 
                className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent"
                style={{
                  animation: 'shimmer-line 3s linear infinite',
                }}
              />
            </div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-primary text-3xl lg:text-4xl font-extrabold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  {step.num}
                </div>
                <h3 className="text-foreground font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Stats row */}
          <div className="mt-20 pt-10 border-t border-foreground/[0.06]">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center relative">
                  {i > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-foreground/10 hidden sm:block" />
                  )}
                  <div 
                    className="text-primary font-extrabold mb-1"
                    style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-foreground/50 text-xs mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      title: "No API Required", 
      desc: "Works with any TMS, WMS, or customs platform your team already uses. No integration needed.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    { 
      title: "Document Intelligence", 
      desc: "Reads BLs, AWBs, CMRs, and commercial invoices in any format. 95%+ field accuracy.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      title: "Global Compliance", 
      desc: "Validated against customs authorities, international sanctions lists, and commodity code databases worldwide.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "Always On", 
      desc: "Processes documents 24/7 without breaks, holidays, or human error.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "Voice & WhatsApp", 
      desc: "Handles inbound calls and WhatsApp messages from clients and carriers. Automatically.",
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
            Built for how freight actually works.
          </h2>
        </div>
        
        {/* 2x2 grid for first 4 cards */}
        <div className="xl:pl-40 grid sm:grid-cols-2 gap-5 mb-5">
          {features.slice(0, 4).map((feature, i) => (
            <div key={i} className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card/20 border border-foreground/[0.06] hover:border-primary/30 transition-all backdrop-blur-sm overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/[0.06] transition-colors" />
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        
        {/* 5th card spanning full width */}
        <div className="xl:pl-40">
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card/20 border border-foreground/[0.06] hover:border-primary/30 transition-all backdrop-blur-sm overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/[0.06] transition-colors" />
            
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                {features[4].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-2">{features[4].title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{features[4].desc}</p>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
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
            <p className="text-foreground/50 leading-relaxed">
              Drayo connects to your freight systems the way your staff do — by seeing the screen and using it. No API. No setup. No waiting on vendors.
            </p>
          </div>
          
          {/* Right side - logo grid like Lance.ai */}
          <div className="relative">
            {/* Gradient fade overlays */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            
            {/* Logo grid - 3 rows */}
            <div className="grid grid-cols-4 gap-3 p-4">
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
              <LogoCard>
                <OracleLogo />
              </LogoCard>
              
              {/* Row 2 */}
              <LogoCard>
                <FlexportLogo />
              </LogoCard>
              <LogoCard>
                <Project44Logo />
              </LogoCard>
              <LogoCard>
                <TransplaceLogo />
              </LogoCard>
              <LogoCard>
                <E2openLogo />
              </LogoCard>
              
              {/* Row 3 */}
              <LogoCard>
                <GmailLogo />
              </LogoCard>
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

// Actual brand logos as SVGs - text-based for consistency
function CargoWiseLogo() {
  return (
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-tight">
      CargoWise
    </span>
  )
}

function WiseTechLogo() {
  return (
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-tight text-center leading-tight">
      WiseTech<br/>Global
    </span>
  )
}

function SAPLogo() {
  return (
    <span className="text-lg font-bold text-foreground/50 hover:text-foreground/80 transition-opacity">
      SAP
    </span>
  )
}

function OracleLogo() {
  return (
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-wide">
      ORACLE
    </span>
  )
}

function FlexportLogo() {
  return (
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-tight">
      Flexport
    </span>
  )
}

function Project44Logo() {
  return (
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-tight">
      project44
    </span>
  )
}

function TransplaceLogo() {
  return (
    <span className="text-xs font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-tight">
      Transplace
    </span>
  )
}

function E2openLogo() {
  return (
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity tracking-tight">
      E2open
    </span>
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
    <span className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity">
      Outlook
    </span>
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
    <section id="cta" className="relative py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="xl:pl-40 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to cut document processing time by 80%?
          </h2>
          <p className="text-foreground/40 mb-6">
            Book a 20-minute demo. See Drayo process a live shipment document.
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
  AI operations for freight forwarders worldwide.
  </p>
  </div>
  
  {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em]">Contact Us</span>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://linkedin.com/company/drayo-ai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@drayo.ai" 
                    className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/[0.04]">
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Terms of Service</a>
            </div>
            <div className="text-xs text-foreground/30">
              © 2026 Drayo AI Ltd. All rights reserved.
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
