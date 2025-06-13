-- Drop existing indexes if they exist
DROP INDEX IF EXISTS idx_analytics_overview_timestamp;
DROP INDEX IF EXISTS idx_advertising_metrics_timestamp;
DROP INDEX IF EXISTS idx_analytics_events_site_timestamp;
DROP INDEX IF EXISTS idx_analytics_events_type;

-- Create analytics_overview table
CREATE TABLE IF NOT EXISTS analytics_overview (
  id SERIAL PRIMARY KEY,
  total_visitors INTEGER NOT NULL,
  engagement_rate DECIMAL(5,2) NOT NULL,
  avg_session_duration INTEGER NOT NULL,
  conversion_rate DECIMAL(5,2) NOT NULL,
  total_revenue DECIMAL(10,2) NOT NULL,
  ad_spend DECIMAL(10,2) NOT NULL,
  roas DECIMAL(5,2) NOT NULL,
  cac DECIMAL(10,2) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create advertising_metrics table
CREATE TABLE IF NOT EXISTS advertising_metrics (
  id SERIAL PRIMARY KEY,
  impressions INTEGER NOT NULL,
  clicks INTEGER NOT NULL,
  ctr DECIMAL(5,2) NOT NULL,
  total_spend DECIMAL(10,2) NOT NULL,
  revenue_generated DECIMAL(10,2) NOT NULL,
  roi DECIMAL(5,2) NOT NULL,
  google_ads_roas DECIMAL(5,2) NOT NULL,
  meta_ads_roas DECIMAL(5,2) NOT NULL,
  linkedin_ads_roas DECIMAL(5,2) NOT NULL,
  avg_cpc DECIMAL(10,2) NOT NULL,
  cpm DECIMAL(10,2) NOT NULL,
  cpa DECIMAL(10,2) NOT NULL,
  active_campaigns INTEGER NOT NULL,
  best_performing_campaign VARCHAR(100) NOT NULL,
  budget_utilized DECIMAL(5,2) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create analytics_events table for tracking
CREATE TABLE IF NOT EXISTS analytics_events (
  id SERIAL PRIMARY KEY,
  site_id VARCHAR(100) NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  page_url TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Create indexes for better query performance
CREATE INDEX idx_analytics_overview_timestamp ON analytics_overview(timestamp);
CREATE INDEX idx_advertising_metrics_timestamp ON advertising_metrics(timestamp);
CREATE INDEX idx_analytics_events_site_timestamp ON analytics_events(site_id, timestamp);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
