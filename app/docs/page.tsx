import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Documentation',
  description: 'Learn how to integrate analytics tracking into your website',
};

export default function DocsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-analytics-dashboard.com';

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>

        <Tabs defaultValue="quickstart" className="space-y-6">
          <TabsList>
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="events">Custom Events</TabsTrigger>
          </TabsList>

          <TabsContent value="quickstart">
            <Card>
              <CardHeader>
                <CardTitle>Quick Start Guide</CardTitle>
                <CardDescription>
                  Get started with our analytics in just a few minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Sign up for an account</h3>
                  <p className="text-muted-foreground">
                    Create an account and get your tracking ID from the dashboard.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Add the tracking script</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`<script>
  window.analytics = {
    trackingId: 'YOUR_TRACKING_ID'
  };
  (function(s,o,v,a,r){s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
  a=o.createElement('script');a.async=1;a.src=v;o.head.appendChild(a);
  })(window,document,'https://cdn.yourapp.com/analytics.js','analytics');
</script>`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. View your data</h3>
                  <p className="text-muted-foreground">
                    Visit your dashboard to see real-time analytics data.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation">
            <Card>
              <CardHeader>
                <CardTitle>Installation Guide</CardTitle>
                <CardDescription>
                  Detailed installation instructions for different platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">HTML Installation</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`<!-- Add this to your <head> tag -->
<script>
  window.analytics = {
    trackingId: 'YOUR_TRACKING_ID'
  };
  (function(s,o,v,a,r){s[r]=s[r]||function(){(s[r].q=s[r].q||[]).push(arguments)};
  a=o.createElement('script');a.async=1;a.src=v;o.head.appendChild(a);
  })(window,document,'https://cdn.yourapp.com/analytics.js','analytics');
</script>`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">React Installation</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`// Install the package
npm install @yourapp/analytics

// Add to your app
import { Analytics } from '@yourapp/analytics';

function App() {
  return (
    <Analytics trackingId="YOUR_TRACKING_ID">
      {/* Your app content */}
    </Analytics>
  );
}`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Next.js Installation</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`// Install the package
npm install @yourapp/analytics

// Add to your _app.js or app/layout.js
import { Analytics } from '@yourapp/analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Analytics trackingId="YOUR_TRACKING_ID" />
        {children}
      </body>
    </html>
  );
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Complete reference of our analytics API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Page Views</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`// Automatic page view tracking
// No additional code needed

// Manual page view tracking
analytics.page({
  path: '/about',
  title: 'About Us'
});`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Custom Events</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`analytics.track('Button Clicked', {
  buttonId: 'signup',
  location: 'header'
});`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">User Identification</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`analytics.identify('user_123', {
  name: 'John Doe',
  email: 'john@example.com'
});`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Custom Events</CardTitle>
                <CardDescription>
                  Learn how to track custom events in your application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Basic Event Tracking</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    {`// Track a simple event
analytics.track('Purchase Completed');

// Track an event with properties
analytics.track('Product Viewed', {
  productId: '123',
  category: 'Electronics',
  price: 99.99
});`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Common Event Types</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Page Views</li>
                    <li>Button Clicks</li>
                    <li>Form Submissions</li>
                    <li>Product Views</li>
                    <li>Add to Cart</li>
                    <li>Checkout Steps</li>
                    <li>User Registrations</li>
                    <li>Feature Usage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use consistent event names</li>
                    <li>Include relevant properties</li>
                    <li>Don't track sensitive information</li>
                    <li>Test events in development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
