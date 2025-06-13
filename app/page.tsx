import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-background to-muted">
        <h1 className="text-5xl font-bold mb-6">Analytics Dashboard</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Track your business metrics in real-time with our powerful analytics dashboard.
          Make data-driven decisions and grow your business faster.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg">View Dashboard</Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" size="lg">Read Blog</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Monitor your business performance in real-time with our advanced analytics dashboard.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Marketing ROI</h3>
              <p className="text-muted-foreground">
                Track your marketing campaigns' performance and optimize your ROI with detailed insights.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Custom Reports</h3>
              <p className="text-muted-foreground">
                Generate custom reports and get actionable insights to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses using our analytics dashboard to make better decisions.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="min-w-[200px]">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
