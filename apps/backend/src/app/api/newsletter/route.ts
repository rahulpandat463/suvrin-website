import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// ── GET /api/newsletter ────────────────────────────────────────────────────────
export async function GET() {
  try {
    await initDatabase();
    const [rows] = await pool.execute(
      "SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC"
    );
    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── POST /api/newsletter ───────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    await initDatabase();
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "email is required." }, { status: 400 });
    }

    // Upsert — if already exists, resubscribe
    await pool.execute(
      "INSERT INTO newsletter_subscribers (email) VALUES (?) ON DUPLICATE KEY UPDATE subscribed = TRUE",
      [email]
    );

    return NextResponse.json({ success: true, message: "Subscribed successfully!" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
