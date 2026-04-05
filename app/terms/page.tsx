import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions — Drayo',
  description: 'Terms and Conditions for Drayo AI Ltd - AI operations platform for UK freight forwarding and logistics companies.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/[0.04]">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-foreground mb-2">Terms and Conditions</h1>
        <p className="text-foreground/40 mb-12">Effective: April 2026 | Last Updated: April 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              These Terms govern access to and use of the Drayo platform by freight forwarding and logistics businesses (&quot;you,&quot; &quot;your business&quot;).
            </p>
            <p className="text-foreground/60 leading-relaxed mb-4">
              By creating an account you confirm you have authority to bind your business to these Terms.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Drayo AI Ltd is registered in England and Wales.<br />
              Contact: <a href="mailto:info@drayo.ai" className="text-primary hover:underline">info@drayo.ai</a>
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. The Platform</h2>
            <p className="text-foreground/60 leading-relaxed">
              Drayo automates document processing for freight forwarders — extracting data from shipping documents, validating compliance, and updating your systems automatically.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Account</h2>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>You must register with accurate business details</li>
              <li>You are responsible for all activity under your account</li>
              <li>Notify us immediately of any unauthorised access</li>
              <li>Accounts are for business use only</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-foreground/60 leading-relaxed mb-2">You must not:</p>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>Submit falsified or fraudulent documents</li>
              <li>Use the platform to facilitate illegal shipments</li>
              <li>Attempt to copy or resell our platform</li>
              <li>Use the platform in violation of UK law</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Documents and Data</h2>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>You retain full ownership of all documents you submit</li>
              <li>You are responsible for verifying AI-extracted data before submission to any regulatory authority</li>
              <li>You warrant you have the right to submit all documents uploaded</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Compliance Responsibility</h2>
            <p className="text-foreground/60 leading-relaxed">
              Drayo&apos;s compliance tools assist your operations — they do not constitute legal or customs advice. You remain solely responsible for the accuracy of all customs declarations and regulatory submissions.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Pricing and Payment</h2>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>All fees are in GBP exclusive of VAT</li>
              <li>Subscriptions are billed monthly or annually in advance</li>
              <li>Pricing changes are notified 30 days in advance</li>
              <li>Refunds are not issued for unused billing periods</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="text-foreground/60 leading-relaxed">
              All rights in the Drayo platform, software, and brand are owned by Drayo AI Ltd. Nothing in these Terms transfers any intellectual property rights to you.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Confidentiality</h2>
            <p className="text-foreground/60 leading-relaxed">
              Both parties agree to keep confidential all non-public information received from the other party. This obligation survives termination for 3 years.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              Our total liability shall not exceed fees paid in the 3 months preceding the claim.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-2">We are not liable for:</p>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>Indirect or consequential losses</li>
              <li>Loss of profit or revenue</li>
              <li>Regulatory penalties arising from unverified platform outputs</li>
              <li>Losses from third-party system failures</li>
            </ul>
            <p className="text-foreground/60 leading-relaxed mt-4">
              Nothing excludes liability for death, personal injury, or fraud.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Termination</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              You may cancel at any time by emailing <a href="mailto:info@drayo.ai" className="text-primary hover:underline">info@drayo.ai</a>. We may suspend accounts for breach of these Terms or non-payment after 14 days notice.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              On termination we provide a 30-day data export window before deletion.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Governing Law</h2>
            <p className="text-foreground/60 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">13. General</h2>
            <p className="text-foreground/60 leading-relaxed">
              These Terms and our Privacy Policy constitute the entire agreement between us. If any provision is unenforceable the remaining provisions continue in full force.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">14. Contact</h2>
            <p className="text-foreground/60 leading-relaxed">
              Drayo AI Ltd<br />
              <a href="mailto:info@drayo.ai" className="text-primary hover:underline">info@drayo.ai</a><br />
              <a href="https://drayo.ai" className="text-primary hover:underline">drayo.ai</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/[0.04] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-primary">Terms of Service</Link>
          </div>
          <div className="text-xs text-foreground/30">
            © 2026 Drayo AI Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
