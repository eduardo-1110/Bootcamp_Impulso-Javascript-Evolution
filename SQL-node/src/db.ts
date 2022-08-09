import { Pool } from 'pg';

const connectionString = 'postgres://uwudjuuw:96y1z9VqwpDAhmqtS7axhhyy5aqYe6qp@kesavan.db.elephantsql.com/uwudjuuw';

const db = new Pool({ connectionString });

export default db;