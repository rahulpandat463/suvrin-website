import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// ── GET /api/health ────────────────────────────────────────────────────────────
export async function GET() {
  try {
    await initDatabase();
    const conn = await pool.getConnection();
    const [rows] = await conn.execute("SELECT 1 + 1 AS result, NOW() AS server_time");
    conn.release();
    return NextResponse.json({
      status: "✅ Connected",
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      server_time: (rows as any[])[0].server_time,
      message: "Namecheap MySQL connection is healthy!",
    });
  } catch (error: any) {
    console.error("DB health check failed:", error);
    return NextResponse.json(
      { status: "❌ Failed", error: error.message },
      { status: 500 }
    );
  }
}
