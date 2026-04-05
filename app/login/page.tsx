"use client"

import { useState } from "react"
import Link from "next/link"

// Drayo Logo
function DrayoLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 32" className={className} fill="none">
      <circle cx="8" cy="16" r="4" fill="currentColor" className="text-primary" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
      <circle cx="34" cy="12" r="2" fill="currentColor" className="text-primary/60" />
      <circle cx="34" cy="20" r="2" fill="currentColor" className="text-primary/60" />
      <line x1="30" y1="14" x2="32" y2="12" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
      <line x1="30" y1="18" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
      <text x="44" y="22" fill="currentColor" className="text-foreground" style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
        DRAYO
      </text>
    </svg>
  )
}

// Logo Icon only
function DrayoLogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      <circle cx="16" cy="24" r="3" fill="currentColor" className="text-primary" />
      <line x1="19" y1="24" x2="25" y2="24" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <circle cx="30" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
      <circle cx="38" cy="20" r="1.5" fill="currentColor" className="text-primary/60" />
      <circle cx="38" cy="28" r="1.5" fill="currentColor" className="text-primary/60" />
      <line x1="35" y1="22" x2="36.5" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
      <line x1="35" y1="26" x2="36.5" y2="28" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
    </svg>
  )
}

// Aurora Background
function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040908] via-[#051512] to-[#071a16]" />
      
      {/* Stars */}
      <div className="absolute inset-0 opacity-60">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Aurora effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[70%] overflow-hidden">
        <div 
          className="absolute bottom-0 left-[10%] w-[600px] h-[400px] animate-aurora-1"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(52, 211, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-[10%] w-[500px] h-[500px] animate-aurora-2"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(45, 212, 191, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div 
          className="absolute bottom-0 left-[30%] w-[700px] h-[350px] animate-aurora-3"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#040908]/50" />
    </div>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <AuroraBackground />
      
      {/* Back to home */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 text-sm text-foreground/40 hover:text-foreground/70 transition-colors z-10 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>
      
      {/* Login card */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <DrayoLogoIcon className="w-14 h-14 mb-4" />
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Drayo</h1>
          <p className="text-sm text-foreground/40 mt-1">AI-Powered Freight Operations</p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-foreground/60 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-white/[0.05] transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm text-foreground/60 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-white/[0.05] transition-all"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
        
        {/* Forgot password */}
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  )
}
