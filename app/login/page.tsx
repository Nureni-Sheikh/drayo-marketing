"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// Drayo Logo - matches home page
function DrayoLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/drayo-logo.png" 
        alt="Drayo" 
        width={40} 
        height={40} 
        className="h-10 w-10 rounded-lg"
      />
      <span className="text-foreground font-bold text-xl tracking-tight">DRAYO</span>
    </div>
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
  const [view, setView] = useState<'login' | 'forgot' | 'sent'>('login')
  const [resetEmail, setResetEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate sending reset email
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setView('sent')
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
      
      {/* Card container */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <DrayoLogo />
          <p className="text-sm text-foreground/40 mt-1">AI-Powered Freight Operations</p>
        </div>
        
        {/* Login Form */}
        {view === 'login' && (
          <>
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
            
            {/* Forgot password link */}
            <div className="mt-6 text-center">
              <button 
                onClick={() => setView('forgot')}
                className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
              >
                Forgot your password?
              </button>
            </div>
          </>
        )}

        {/* Forgot Password Form */}
        {view === 'forgot' && (
          <>
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Reset your password</h2>
              <p className="text-sm text-foreground/40">Enter your email and we&apos;ll send you a reset link</p>
            </div>
            
            <form onSubmit={handleForgotPassword} className="space-y-5">
              <div>
                <label htmlFor="reset-email" className="block text-sm text-foreground/60 mb-2">
                  Email
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="you@example.com"
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
                    Sending...
                  </span>
                ) : (
                  "Send reset link"
                )}
              </button>
            </form>
            
            {/* Back to login */}
            <div className="mt-6 text-center">
              <button 
                onClick={() => setView('login')}
                className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
              >
                Back to sign in
              </button>
            </div>
          </>
        )}

        {/* Email Sent Confirmation */}
        {view === 'sent' && (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Check your email</h2>
            <p className="text-sm text-foreground/40 mb-6">
              We&apos;ve sent a password reset link to<br />
              <span className="text-foreground/60">{resetEmail}</span>
            </p>
            <button 
              onClick={() => {
                setView('login')
                setResetEmail('')
              }}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Back to sign in
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
