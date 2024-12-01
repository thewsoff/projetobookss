import { Pool } from 'pg';

const connectionString = 'postgresql://thews2_user:Pou46sqyFz4FlGUwnfHmwdspffgiDVoK@dpg-ct696rlumphs73950c7g-a.oregon-postgres.render.com/thews2';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;