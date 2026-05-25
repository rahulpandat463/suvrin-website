import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// ── GET /api/leads ─────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    await initDatabase();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let query = "SELECT * FROM leads";
    const params: any[] = [];
    if (status) { query += " WHERE status = ?"; params.push(status); }
    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const [rows] = await pool.execute(query, params);
    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── POST /api/leads ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    await initDatabase();
    const body = await req.json();
    const { name, email, phone, company, service, budget, message, source } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: "name and email are required." }, { status: 400 });
    }

    const [result] = await pool.execute(
      "INSERT INTO leads (name, email, phone, company, service, budget, message, source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, email, phone || null, company || null, service || null, budget || null, message || null, source || "website"]
    );

    return NextResponse.json(
      { success: true, message: "Lead captured successfully!", id: (result as any).insertId },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
