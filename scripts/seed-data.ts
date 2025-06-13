import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: 5432,
  ssl: false
});

async function seedDatabase() {
  try {
    // Insert sample analytics overview data
    await pool.query(`
      INSERT INTO analytics_overview (
        total_visitors,
        engagement_rate,
        avg_session_duration,
        conversion_rate,
        total_revenue,
        ad_spend,
        roas,
        cac
      ) VALUES (
        15000,
        65.5,
        180,
        3.2,
        50000.00,
        10000.00,
        5.0,
        25.00
      );
    `);

    // Insert sample advertising metrics data
    await pool.query(`
      INSERT INTO advertising_metrics (
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
      ) VALUES (
        100000,
        5000,
        5.0,
        10000.00,
        50000.00,
        400.0,
        6.5,
        4.2,
        3.8,
        2.00,
        15.00,
        30.00,
        5,
        'Summer Sale 2024',
        85.5
      );
    `);

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

seedDatabase()
  .catch((err) => {
    console.error('Failed to seed database:', err);
    process.exit(1);
  });
