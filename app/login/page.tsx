"use client"

import { useState } from "react"
import Link from "next/link"

// Drayo Logo Icon - Clean black on white
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

// Drayo Logo - matches home page
function DrayoLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <DrayoLogoIcon size={36} />
      <span className="text-foreground font-bold text-xl tracking-tight">DRAYO</span>
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
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setView('sent')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Back to home */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>
      
      {/* Card container */}
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <DrayoLogo />
          <p className="text-sm text-muted-foreground mt-2">AI-Powered Freight Operations</p>
        </div>
        
        {/* Login Form */}
        {view === 'login' && (
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot your password?
              </button>
            </div>
          </div>
        )}

        {/* Forgot Password Form */}
        {view === 'forgot' && (
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Reset your password</h2>
              <p className="text-sm text-muted-foreground">Enter your email and we&apos;ll send you a reset link</p>
            </div>
            
            <form onSubmit={handleForgotPassword} className="space-y-5">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to sign in
              </button>
            </div>
          </div>
        )}

        {/* Email Sent Confirmation */}
        {view === 'sent' && (
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Check your email</h2>
            <p className="text-sm text-muted-foreground mb-6">
              We&apos;ve sent a password reset link to<br />
              <span className="text-foreground">{resetEmail}</span>
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
