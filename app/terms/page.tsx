export default function TermsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using our analytics service, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use our analytics service for personal or commercial
            purposes, subject to the following restrictions:
          </p>
          <ul>
            <li>You must not use the service for any illegal or unauthorized purpose</li>
            <li>You must not attempt to reverse engineer or decompile the service</li>
            <li>You must not use the service to collect sensitive personal information</li>
            <li>You must comply with all applicable privacy laws and regulations</li>
          </ul>

          <h2>3. Service Description</h2>
          <p>
            Our analytics service provides website traffic and user behavior tracking capabilities.
            We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
          </p>

          <h2>4. User Accounts</h2>
          <p>
            To use certain features of the service, you must register for an account. You are responsible
            for maintaining the confidentiality of your account information and for all activities that
            occur under your account.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Subscription fees are billed in advance on a monthly or annual basis. You can cancel your
            subscription at any time, but no refunds will be provided for partial subscription periods.
          </p>

          <h2>6. Data Privacy</h2>
          <p>
            We are committed to protecting your privacy and the privacy of your website visitors. Our
            service is designed to collect only non-personal, aggregated data. We do not collect or store
            personal information without explicit consent.
          </p>

          <h2>7. Service Limitations</h2>
          <p>
            We do not guarantee that the service will be uninterrupted or error-free. We reserve the right
            to limit the amount of data collected or stored based on your subscription plan.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are owned by us and are
            protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your access to the service immediately, without prior notice or
            liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or
            other intangible losses.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material,
            we will provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@yourapp.com.
          </p>

          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
