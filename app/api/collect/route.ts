import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import { headers } from 'next/headers';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const origin = headersList.get('origin');
    const data = await request.json();

    // Basic validation
    if (!data.siteId || !data.eventType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert event data
    await pool.query(`
      INSERT INTO analytics_events (
        site_id,
        event_type,
        page_url,
        referrer,
        user_agent,
        timestamp,
        metadata
      ) VALUES ($1, $2, $3, $4, $5, NOW(), $6)
    `, [
      data.siteId,
      data.eventType,
      data.pageUrl,
      data.referrer,
      headersList.get('user-agent'),
      JSON.stringify(data.metadata || {})
    ]);

    // Return success with CORS headers
    return NextResponse.json(
      { success: true },
      {
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
  } catch (error) {
    console.error('Error collecting analytics:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function OPTIONS(request: Request) {
  const headersList = headers();
  const origin = headersList.get('origin');

  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  );
}
