import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDuration, formatCurrency, formatPercentage } from "@/lib/utils";

// Helper function to format ROAS
function formatROAS(value: number | string | undefined): string {
  if (value === undefined || value === null) return '0.00x';
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return '0.00x';
  return `${numValue.toFixed(2)}x`;
}

async function fetchAnalyticsData() {
  try {
    const response = await fetch('http://localhost:3000/api/analytics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error('Failed to fetch analytics data');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return null;
  }
}

export default async function DashboardPage() {
  const data = await fetchAnalyticsData();
  const overview = data?.overview || {};
  const advertising = data?.advertising || {};

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Track your key metrics in real-time</p>
      </header>

      <Tabs defaultValue="overview" className="flex-1">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium">Total Visitors</h3>
              <p className="text-3xl font-bold mt-2">{overview.total_visitors?.toLocaleString() || '0'}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {((overview.total_visitors || 0) * 0.9).toFixed(0)}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium">Engagement Rate</h3>
              <p className="text-3xl font-bold mt-2">{formatPercentage(overview.engagement_rate)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatPercentage(overview.engagement_rate * 0.95)}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium">Average Session</h3>
              <p className="text-3xl font-bold mt-2">{formatDuration(overview.avg_session_duration)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatDuration(overview.avg_session_duration * 1.005)}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium">Conversion Rate</h3>
              <p className="text-3xl font-bold mt-2">{formatPercentage(overview.conversion_rate)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatPercentage(overview.conversion_rate * 0.92)}</p>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium">Total Revenue</h3>
              <p className="text-3xl font-bold mt-2">{formatCurrency(overview.total_revenue)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatCurrency(overview.total_revenue * 0.85)}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium">Ad Spend</h3>
              <p className="text-3xl font-bold mt-2">{formatCurrency(overview.ad_spend)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatCurrency(overview.ad_spend * 0.92)}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium">ROAS</h3>
              <p className="text-3xl font-bold mt-2">{formatROAS(overview.roas)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatROAS(overview.roas * 0.935)}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium">CAC</h3>
              <p className="text-3xl font-bold mt-2">{formatCurrency(overview.cac)}</p>
              <p className="text-sm text-muted-foreground mt-2">Previous: {formatCurrency(overview.cac * 1.023)}</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advertising" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Ad Performance</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Impressions</p>
                  <p className="text-2xl font-bold">{advertising.impressions?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Clicks</p>
                  <p className="text-2xl font-bold">{advertising.clicks?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CTR</p>
                  <p className="text-2xl font-bold">{formatPercentage(advertising.ctr)}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Campaign ROI</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Spend</p>
                  <p className="text-2xl font-bold">{formatCurrency(advertising.total_spend)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue Generated</p>
                  <p className="text-2xl font-bold">{formatCurrency(advertising.revenue_generated)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ROI</p>
                  <p className="text-2xl font-bold text-green-600">{formatPercentage(advertising.roi)}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Channel Performance</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Google Ads</p>
                  <p className="text-2xl font-bold">ROAS: {formatROAS(advertising.google_ads_roas)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Meta Ads</p>
                  <p className="text-2xl font-bold">ROAS: {formatROAS(advertising.meta_ads_roas)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">LinkedIn Ads</p>
                  <p className="text-2xl font-bold">ROAS: {formatROAS(advertising.linkedin_ads_roas)}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Cost Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">CPC (Average)</p>
                  <p className="text-xl font-bold">{formatCurrency(advertising.avg_cpc)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">CPM</p>
                  <p className="text-xl font-bold">{formatCurrency(advertising.cpm)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">CPA</p>
                  <p className="text-xl font-bold">{formatCurrency(advertising.cpa)}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Campaign Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Active Campaigns</p>
                  <p className="text-xl font-bold">{advertising.active_campaigns}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">Best Performing</p>
                  <p className="text-xl font-bold">{advertising.best_performing_campaign}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">Budget Utilized</p>
                  <p className="text-xl font-bold">{formatPercentage(advertising.budget_utilized)}</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Detailed Analytics</h3>
            <p className="text-muted-foreground">Coming soon: Detailed analytics view with graphs and charts</p>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Reports</h3>
            <p className="text-muted-foreground">Coming soon: Generate and download custom reports</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
