import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// ── GET /api/contacts ──────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    await initDatabase();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let query = "SELECT * FROM contacts";
    const params: any[] = [];

    if (status) {
      query += " WHERE status = ?";
      params.push(status);
    }

    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const [rows] = await pool.execute(query, params);
    const [countRows] = await pool.execute(
      status ? "SELECT COUNT(*) as total FROM contacts WHERE status = ?" : "SELECT COUNT(*) as total FROM contacts",
      status ? [status] : []
    );

    return NextResponse.json({
      success: true,
      data: rows,
      total: (countRows as any[])[0].total,
      limit,
      offset,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── POST /api/contacts ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    await initDatabase();
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      "INSERT INTO contacts (name, email, phone, company, subject, message) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, phone || null, company || null, subject, message]
    );

    return NextResponse.json(
      { success: true, message: "Contact submitted successfully!", id: (result as any).insertId },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
