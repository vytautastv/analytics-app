import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import { unstable_noStore as noStore } from 'next/cache';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: 5432,
  ssl: false
});

// Fetch overview metrics
async function fetchOverviewMetrics() {
  noStore();
  try {
    const result = await pool.query(`
      SELECT
        total_visitors,
        engagement_rate,
        avg_session_duration,
        conversion_rate,
        total_revenue,
        ad_spend,
        roas,
        cac
      FROM analytics_overview
      ORDER BY timestamp DESC
      LIMIT 1
    `);

    return result.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch overview metrics');
  }
}

// Fetch advertising metrics
async function fetchAdvertisingMetrics() {
  noStore();
  try {
    const result = await pool.query(`
      SELECT
        impressions,
        clicks,
        ctr,
        total_spend,
        revenue_generated,
        roi,
        google_ads_roas,
        meta_ads_roas,
        linkedin_ads_roas,
        avg_cpc,
        cpm,
        cpa,
        active_campaigns,
        best_performing_campaign,
        budget_utilized
      FROM advertising_metrics
      ORDER BY timestamp DESC
      LIMIT 1
    `);

    return result.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch advertising metrics');
  }
}

export async function GET() {
  try {
    const [overviewMetrics, advertisingMetrics] = await Promise.all([
      fetchOverviewMetrics(),
      fetchAdvertisingMetrics(),
    ]);

    return NextResponse.json({
      overview: overviewMetrics,
      advertising: advertisingMetrics,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
