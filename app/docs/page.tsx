import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Documentation',
  description: 'Learn how to integrate analytics tracking into your website',
};

export default function DocsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-analytics-dashboard.com';

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard Integration Guide</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <p className="mb-4">Add the following script to your website's <code>&lt;head&gt;</code> section:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <code>{`<script src="${siteUrl}/analytics.js"></script>
<script>
  Analytics.init('YOUR_SITE_ID', {
    endpoint: '${siteUrl}/api/collect'
  });
</script>`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tracking Events</h2>
        <p className="mb-4">The script automatically tracks:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Page views</li>
          <li>Click events on elements with <code>data-analytics</code> attribute</li>
          <li>Form submissions with <code>data-analytics-form</code> attribute</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Custom Event Tracking</h3>
        <p className="mb-4">Track custom events using the <code>trackEvent</code> method:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <code>{`Analytics.trackEvent('event_name', {
  // Optional metadata
  category: 'category_name',
  label: 'event_label',
  value: 123
});`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML Attributes</h2>
        <p className="mb-4">Add these attributes to track specific elements:</p>

        <h3 className="text-xl font-semibold mb-3">Click Tracking</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <code>{`<button data-analytics="button_click">Click Me</button>`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Form Tracking</h3>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <code>{`<form data-analytics-form id="signup" name="signup">
  <!-- Form fields -->
</form>`}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Configuration Options</h2>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <code>{`Analytics.init('YOUR_SITE_ID', {
  endpoint: '${siteUrl}/api/collect', // Custom endpoint URL
  autoTrack: true, // Enable/disable automatic tracking
});`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Viewing Your Analytics</h2>
        <p className="mb-4">
          Once implemented, you can view your analytics data in the dashboard at{' '}
          <a href="/dashboard" className="text-blue-600 hover:underline">
            {siteUrl}/dashboard
          </a>
        </p>
      </section>
    </div>
  );
}
