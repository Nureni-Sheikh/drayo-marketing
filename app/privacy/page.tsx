import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Drayo',
  description: 'Privacy Policy for Drayo AI Ltd - AI operations platform for UK freight forwarding and logistics companies.',
}

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl font-semibold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-foreground/40 mb-12">Effective: April 2026 | Last Updated: April 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Who We Are</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              Drayo AI Ltd (&quot;Drayo,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is an AI operations platform for UK freight forwarding and logistics companies.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Registered in England and Wales.<br />
              Contact: <a href="mailto:info@drayo.ai" className="text-primary hover:underline">info@drayo.ai</a>
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. What Data We Collect</h2>
            
            <h3 className="text-foreground/80 font-medium mb-2">Business contact data:</h3>
            <ul className="list-disc list-inside text-foreground/60 mb-4 space-y-1">
              <li>Name and job title</li>
              <li>Business email address</li>
              <li>Company name and address</li>
              <li>Phone number</li>
            </ul>

            <h3 className="text-foreground/80 font-medium mb-2">Platform usage data:</h3>
            <ul className="list-disc list-inside text-foreground/60 mb-4 space-y-1">
              <li>Login activity and session data</li>
              <li>Document upload history</li>
              <li>Actions taken within the platform</li>
            </ul>

            <h3 className="text-foreground/80 font-medium mb-2">Document data:</h3>
            <p className="text-foreground/60 leading-relaxed">
              Documents you submit may contain data about third parties such as shippers and consignees. You are the data controller for this information. We process it solely as your data processor to deliver our service.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>To operate and deliver the Drayo platform</li>
              <li>To process your shipping documents</li>
              <li>To manage your account and provide support</li>
              <li>To send transactional emails about your account</li>
              <li>To meet our legal obligations under UK law</li>
            </ul>
            <p className="text-foreground/60 leading-relaxed mt-4">
              We do not use your data for marketing without your explicit consent.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Legal Basis for Processing (UK GDPR)</h2>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li><strong className="text-foreground/80">Contract:</strong> to deliver the service you have signed up for</li>
              <li><strong className="text-foreground/80">Legitimate interests:</strong> account security and fraud prevention</li>
              <li><strong className="text-foreground/80">Legal obligation:</strong> to comply with UK law</li>
            </ul>
            <p className="text-foreground/60 leading-relaxed mt-4">
              Where you submit documents containing third-party personal data, we act as your data processor under Article 28 UK GDPR. You remain the data controller.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
            <p className="text-foreground/60 leading-relaxed mb-2">
              We do not sell or share your data with third parties for commercial purposes.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              We may disclose data when required by UK law or regulatory authority.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li><strong className="text-foreground/80">Business account data:</strong> duration of contract plus 6 years</li>
              <li><strong className="text-foreground/80">Shipping documents:</strong> 4 years (HMRC requirement)</li>
              <li><strong className="text-foreground/80">Billing records:</strong> 7 years (UK Companies Act)</li>
            </ul>
            <p className="text-foreground/60 leading-relaxed mt-4">
              On termination, your data is deleted within 30 days except where retention is required by law.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-foreground/60 leading-relaxed mb-2">Under UK GDPR you have the right to:</p>
            <ul className="list-disc list-inside text-foreground/60 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
            </ul>
            <p className="text-foreground/60 leading-relaxed mt-4">
              Submit requests to <a href="mailto:info@drayo.ai" className="text-primary hover:underline">info@drayo.ai</a>. We respond within 30 days.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Security</h2>
            <p className="text-foreground/60 leading-relaxed">
              We protect your data through encryption in transit and at rest, access controls, and regular security reviews.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Complaints</h2>
            <p className="text-foreground/60 leading-relaxed mb-2">
              Contact <a href="mailto:info@drayo.ai" className="text-primary hover:underline">info@drayo.ai</a> with any concerns. You also have the right to complain to the ICO:
            </p>
            <p className="text-foreground/60 leading-relaxed">
              <a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk/make-a-complaint</a><br />
              0303 123 1113
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Changes</h2>
            <p className="text-foreground/60 leading-relaxed">
              We will notify you by email of material changes at least 14 days before they take effect.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Contact</h2>
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
            <Link href="/privacy" className="text-xs text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Terms of Service</Link>
          </div>
          <div className="text-xs text-foreground/30">
            © 2026 Drayo AI Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
