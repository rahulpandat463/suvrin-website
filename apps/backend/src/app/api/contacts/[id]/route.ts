import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// ── GET /api/contacts/[id] ─────────────────────────────────────────────────────
export async function GET(_req: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const params = await props.params;
    const [rows] = await pool.execute("SELECT * FROM contacts WHERE id = ?", [params.id]);
    const contact = (rows as any[])[0];
    if (!contact) return NextResponse.json({ success: false, error: "Contact not found." }, { status: 404 });
    return NextResponse.json({ success: true, data: contact });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── PATCH /api/contacts/[id] ───────────────────────────────────────────────────
export async function PATCH(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const params = await props.params;
    const body = await req.json();
    const { status } = body;
    const allowed = ["new", "read", "replied", "archived"];
    if (!allowed.includes(status)) {
      return NextResponse.json({ success: false, error: `status must be one of: ${allowed.join(", ")}` }, { status: 400 });
    }
    await pool.execute("UPDATE contacts SET status = ? WHERE id = ?", [status, params.id]);
    return NextResponse.json({ success: true, message: "Contact updated." });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── DELETE /api/contacts/[id] ──────────────────────────────────────────────────
export async function DELETE(_req: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const params = await props.params;
    const [result] = await pool.execute("DELETE FROM contacts WHERE id = ?", [params.id]);
    if ((result as any).affectedRows === 0) {
      return NextResponse.json({ success: false, error: "Contact not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Contact deleted." });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
