import mysql from "mysql2/promise";
import { mockPool } from "./mock-db";

const isMock = process.env.MOCK_DB === "true";

// Create real connection pool
const realPool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000, // 10 seconds
});

// Export mock pool if local dev, else export real pool
const pool = isMock ? mockPool : realPool;

if (isMock) {
  console.log("⚠️ Using MOCK DATABASE for local development!");
} else {
  console.log(`🔌 Attempting to connect to REAL database at ${process.env.DB_HOST}...`);
}

export default pool as any;
