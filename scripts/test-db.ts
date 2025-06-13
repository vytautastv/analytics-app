import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connection successful!');
    return result.rows[0];
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

testConnection()
  .catch((error) => {
    console.error('Test failed:', error);
    process.exit(1);
  });
