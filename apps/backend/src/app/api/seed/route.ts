import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// ── POST /api/seed ─────────────────────────────────────────────────────────────
// Inserts dummy data into all tables for testing.
// REMOVE or PROTECT this route before going to production!
export async function POST() {
  try {
    await initDatabase();

    // ── Dummy Contacts ─────────────────────────────────────────────────────
    const contacts = [
      ["Alice Johnson",   "alice@example.com",   "+1-555-0101", "TechCorp Inc.",   "Odoo Implementation Query",    "Hi, we need Odoo ERP for 50 users.",          "new"],
      ["Bob Smith",       "bob@example.com",     "+1-555-0102", "RetailMax",       "Website Redesign Quote",        "Looking for a modern e-commerce site.",       "read"],
      ["Carol Williams",  "carol@example.com",   "+44-20-1234", "GlobalTrade Ltd", "Digital Marketing Services",    "We want SEO + social media management.",      "replied"],
      ["David Khan",      "david@example.com",   "+92-300-1234","StartupXYZ",      "Cloud Migration Help",          "Need to move from on-prem to cloud AWS.",     "new"],
      ["Emma Davis",      "emma@example.com",    "+91-98765432","FashionBrand",    "Custom Software Development",   "We need a custom inventory management app.",  "archived"],
    ];

    for (const c of contacts) {
      await pool.execute(
        "INSERT INTO contacts (name, email, phone, company, subject, message, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
        c
      );
    }

    // ── Dummy Leads ────────────────────────────────────────────────────────
    const leads = [
      ["Zara Ahmed",    "zara@fashionco.com",   "+92-321-5555", "FashionCo",      "Odoo ERP",          "$5,000-$10,000",  "We need POS + inventory.",            "website",  "new"],
      ["James Murphy",  "james@logistix.io",    "+1-617-9999",  "Logistix IO",    "Web Development",   "$2,000-$5,000",   "B2B portal for tracking shipments.",  "referral", "contacted"],
      ["Priya Sharma",  "priya@edutech.in",     "+91-9876-5432","EduTech India",  "Mobile App",        "$10,000+",        "LMS mobile app for students.",        "linkedin", "qualified"],
      ["Chen Wei",      "chen@shenzhen.cn",     "+86-138-8888", "SZ Electronics", "Digital Marketing", "$1,000-$2,000",   "SEO for our product listings.",       "website",  "new"],
      ["Sara Miller",   "sara@healthplus.com",  "+1-212-4444",  "HealthPlus",     "Custom Software",   "$20,000+",        "Patient management system.",          "website",  "closed"],
    ];

    for (const l of leads) {
      await pool.execute(
        "INSERT INTO leads (name, email, phone, company, service, budget, message, source, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        l
      );
    }

    // ── Dummy Newsletter Subscribers ───────────────────────────────────────
    const subscribers = [
      ["newsletter1@example.com"],
      ["newsletter2@example.com"],
      ["newsletter3@example.com"],
      ["business@techco.com"],
      ["hello@startup.io"],
    ];

    for (const s of subscribers) {
      await pool.execute(
        "INSERT INTO newsletter_subscribers (email) VALUES (?) ON DUPLICATE KEY UPDATE subscribed = TRUE",
        s
      );
    }

    // ── Summary ────────────────────────────────────────────────────────────
    const [[{ contacts: totalContacts }]] = await pool.execute("SELECT COUNT(*) as contacts FROM contacts") as any;
    const [[{ leads: totalLeads }]]       = await pool.execute("SELECT COUNT(*) as leads FROM leads") as any;
    const [[{ subs }]]                    = await pool.execute("SELECT COUNT(*) as subs FROM newsletter_subscribers") as any;

    return NextResponse.json({
      success: true,
      message: "✅ Dummy data seeded successfully!",
      summary: {
        contacts:              totalContacts,
        leads:                 totalLeads,
        newsletter_subscribers: subs,
      },
    });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ── DELETE /api/seed ───────────────────────────────────────────────────────────
// Clears all dummy data (truncate). Use with caution!
export async function DELETE() {
  try {
    await pool.execute("SET FOREIGN_KEY_CHECKS = 0");
    await pool.execute("TRUNCATE TABLE contacts");
    await pool.execute("TRUNCATE TABLE leads");
    await pool.execute("TRUNCATE TABLE newsletter_subscribers");
    await pool.execute("SET FOREIGN_KEY_CHECKS = 1");
    return NextResponse.json({ success: true, message: "🗑️ All tables cleared." });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
