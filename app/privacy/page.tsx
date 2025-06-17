export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            We are committed to protecting your privacy and the privacy of your website visitors. This
            Privacy Policy explains how we collect, use, and protect your information when you use our
            analytics service.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Website Visitor Data</h3>
          <p>We collect the following non-personal information about your website visitors:</p>
          <ul>
            <li>Page views and navigation patterns</li>
            <li>Time spent on pages</li>
            <li>Device and browser information</li>
            <li>Geographic location (country/region level)</li>
            <li>Referral sources</li>
          </ul>

          <h3>2.2 Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Email address</li>
            <li>Company name</li>
            <li>Payment information (processed securely by our payment provider)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and improve our analytics service</li>
            <li>Process your payments</li>
            <li>Send you important service updates</li>
            <li>Respond to your support requests</li>
            <li>Analyze usage patterns to improve our service</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data against
            unauthorized access, alteration, disclosure, or destruction. Your data is stored on secure
            servers in compliance with industry standards.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active or as needed to provide you
            services. You can request deletion of your data at any time by contacting us.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We use the following third-party services to operate our business:
          </p>
          <ul>
            <li>Payment processors for handling subscriptions</li>
            <li>Cloud hosting providers for data storage</li>
            <li>Email service providers for communications</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Export your data</li>
          </ul>

          <h2>8. Cookies and Tracking</h2>
          <p>
            Our analytics service uses cookies and similar tracking technologies to collect information
            about your website visitors. We do not use cookies to track individual users across different
            websites.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our service is not intended for use by children under 13 years of age. We do not knowingly
            collect personal information from children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@yourapp.com</li>
            <li>Address: [Your Company Address]</li>
          </ul>

          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
