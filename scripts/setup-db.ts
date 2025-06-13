import 'dotenv/config';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: 5432,
  ssl: false
});

async function setupDatabase() {
  try {
    const schemaFile = path.join(process.cwd(), 'lib', 'schema.sql');
    const schema = fs.readFileSync(schemaFile, 'utf8');

    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    // Execute each statement
    for (const statement of statements) {
      await pool.query(statement);
    }

    console.log('Database schema created successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

setupDatabase()
  .catch((err) => {
    console.error('Failed to set up database:', err);
    process.exit(1);
  });
