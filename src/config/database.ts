import { Pool } from 'pg';

const connectionString = 'postgresql://db_theus_user:jG0O0wcGCFPeR323cF3AE0E0X6s7ObCH@dpg-csg2f8m8ii6s73btn800-a.oregon-postgres.render.com/db_theus';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;