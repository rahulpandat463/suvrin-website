/**
 * In-memory mock database for local development.
 * Used when MOCK_DB=true in .env (i.e. no SSH tunnel to Namecheap).
 * Mimics mysql2/promise pool.execute() interface.
 */

// ── In-memory stores ───────────────────────────────────────────────────────────
let contacts: any[] = [
  { id: 1, name: "Alice Johnson",  email: "alice@example.com",   phone: "+1-555-0101", company: "TechCorp Inc.",   subject: "Odoo Implementation Query",   message: "Hi, we need Odoo ERP for 50 users.",         status: "new",      created_at: new Date("2026-05-20T08:00:00"), updated_at: new Date("2026-05-20T08:00:00") },
  { id: 2, name: "Bob Smith",      email: "bob@example.com",     phone: "+1-555-0102", company: "RetailMax",       subject: "Website Redesign Quote",       message: "Looking for a modern e-commerce site.",      status: "read",     created_at: new Date("2026-05-21T09:30:00"), updated_at: new Date("2026-05-21T09:30:00") },
  { id: 3, name: "Carol Williams", email: "carol@example.com",   phone: "+44-20-1234", company: "GlobalTrade Ltd", subject: "Digital Marketing Services",   message: "We want SEO + social media management.",     status: "replied",  created_at: new Date("2026-05-22T11:00:00"), updated_at: new Date("2026-05-22T11:00:00") },
  { id: 4, name: "David Khan",     email: "david@example.com",   phone: "+92-300-1234",company: "StartupXYZ",      subject: "Cloud Migration Help",          message: "Need to move from on-prem to cloud AWS.",    status: "new",      created_at: new Date("2026-05-23T14:00:00"), updated_at: new Date("2026-05-23T14:00:00") },
  { id: 5, name: "Emma Davis",     email: "emma@example.com",    phone: "+91-98765432",company: "FashionBrand",    subject: "Custom Software Development",  message: "We need a custom inventory management app.", status: "archived", created_at: new Date("2026-05-24T16:00:00"), updated_at: new Date("2026-05-24T16:00:00") },
];

let leads: any[] = [
  { id: 1, name: "Zara Ahmed",   email: "zara@fashionco.com",  phone: "+92-321-5555", company: "FashionCo",     service: "Odoo ERP",         budget: "$5,000-$10,000", message: "We need POS + inventory.",           source: "website",  status: "new",       created_at: new Date("2026-05-20T08:00:00"), updated_at: new Date() },
  { id: 2, name: "James Murphy", email: "james@logistix.io",   phone: "+1-617-9999",  company: "Logistix IO",   service: "Web Development",  budget: "$2,000-$5,000",  message: "B2B portal for tracking shipments.", source: "referral", status: "contacted", created_at: new Date("2026-05-21T09:00:00"), updated_at: new Date() },
  { id: 3, name: "Priya Sharma", email: "priya@edutech.in",    phone: "+91-9876-5432",company: "EduTech India", service: "Mobile App",       budget: "$10,000+",       message: "LMS mobile app for students.",       source: "linkedin", status: "qualified", created_at: new Date("2026-05-22T10:00:00"), updated_at: new Date() },
  { id: 4, name: "Chen Wei",     email: "chen@shenzhen.cn",    phone: "+86-138-8888", company: "SZ Electronics",service: "Digital Marketing",budget: "$1,000-$2,000",  message: "SEO for our product listings.",      source: "website",  status: "new",       created_at: new Date("2026-05-23T11:00:00"), updated_at: new Date() },
  { id: 5, name: "Sara Miller",  email: "sara@healthplus.com", phone: "+1-212-4444",  company: "HealthPlus",    service: "Custom Software",  budget: "$20,000+",       message: "Patient management system.",         source: "website",  status: "closed",    created_at: new Date("2026-05-24T12:00:00"), updated_at: new Date() },
];

let subscribers: any[] = [
  { id: 1, email: "newsletter1@example.com", subscribed: true, subscribed_at: new Date("2026-05-20T08:00:00") },
  { id: 2, email: "newsletter2@example.com", subscribed: true, subscribed_at: new Date("2026-05-21T08:00:00") },
  { id: 3, email: "newsletter3@example.com", subscribed: true, subscribed_at: new Date("2026-05-22T08:00:00") },
  { id: 4, email: "business@techco.com",      subscribed: true, subscribed_at: new Date("2026-05-23T08:00:00") },
  { id: 5, email: "hello@startup.io",         subscribed: true, subscribed_at: new Date("2026-05-24T08:00:00") },
];

let nextId = { contacts: 6, leads: 6, subscribers: 6 };

// ── SQL parser (minimal) ───────────────────────────────────────────────────────
function parseSql(sql: string, params: any[] = []): [any[], any] {
  const s = sql.trim().toUpperCase();

  // SELECT 1+1 AS result (health check)
  if (s.startsWith("SELECT 1")) {
    return [[{ result: 2, server_time: new Date() }], []];
  }

  // COUNT queries
  if (s.includes("COUNT(*)") && s.includes("FROM CONTACTS")) {
    const status = params[0];
    const total = status ? contacts.filter((c) => c.status === status).length : contacts.length;
    return [[{ total, contacts: total }], []];
  }
  if (s.includes("COUNT(*)") && s.includes("FROM LEADS")) {
    const status = params[0];
    const total = status ? leads.filter((l) => l.status === status).length : leads.length;
    return [[{ total, leads: total }], []];
  }
  if (s.includes("COUNT(*)") && s.includes("FROM NEWSLETTER")) {
    return [[{ total: subscribers.length, subs: subscribers.length }], []];
  }

  // SELECT contacts
  if (s.includes("FROM CONTACTS") && !s.includes("COUNT")) {
    if (s.includes("WHERE ID")) {
      const row = contacts.find((c) => c.id === Number(params[0]));
      return [row ? [row] : [], []];
    }
    let rows = [...contacts];
    const statusParam = s.includes("WHERE STATUS") ? params[0] : null;
    if (statusParam) rows = rows.filter((c) => c.status === statusParam);
    rows.sort((a, b) => b.created_at - a.created_at);
    // LIMIT / OFFSET
    const limitIdx = s.indexOf("LIMIT");
    if (limitIdx !== -1) {
      const limitParams = params.slice(statusParam ? 1 : 0);
      const limit  = Number(limitParams[0]) || 50;
      const offset = Number(limitParams[1]) || 0;
      rows = rows.slice(offset, offset + limit);
    }
    return [rows, []];
  }

  // SELECT leads
  if (s.includes("FROM LEADS") && !s.includes("COUNT")) {
    let rows = [...leads];
    const statusParam = s.includes("WHERE STATUS") ? params[0] : null;
    if (statusParam) rows = rows.filter((l) => l.status === statusParam);
    rows.sort((a, b) => b.created_at - a.created_at);
    const limitIdx = s.indexOf("LIMIT");
    if (limitIdx !== -1) {
      const limitParams = params.slice(statusParam ? 1 : 0);
      const limit  = Number(limitParams[0]) || 50;
      const offset = Number(limitParams[1]) || 0;
      rows = rows.slice(offset, offset + limit);
    }
    return [rows, []];
  }

  // SELECT newsletter
  if (s.includes("FROM NEWSLETTER_SUBSCRIBERS")) {
    const rows = [...subscribers].sort((a, b) => b.subscribed_at - a.subscribed_at);
    return [rows, []];
  }

  // INSERT contacts
  if (s.startsWith("INSERT INTO CONTACTS")) {
    const [name, email, phone, company, subject, message, status] = params;
    const id = nextId.contacts++;
    contacts.push({ id, name, email, phone, company, subject, message, status: status || "new", created_at: new Date(), updated_at: new Date() });
    return [{ insertId: id, affectedRows: 1 } as any, []];
  }

  // INSERT leads
  if (s.startsWith("INSERT INTO LEADS")) {
    const [name, email, phone, company, service, budget, message, source, status] = params;
    const id = nextId.leads++;
    leads.push({ id, name, email, phone, company, service, budget, message, source: source || "website", status: status || "new", created_at: new Date(), updated_at: new Date() });
    return [{ insertId: id, affectedRows: 1 } as any, []];
  }

  // INSERT newsletter (with ON DUPLICATE KEY)
  if (s.startsWith("INSERT INTO NEWSLETTER_SUBSCRIBERS")) {
    const email = params[0];
    const existing = subscribers.find((s) => s.email === email);
    if (existing) { existing.subscribed = true; return [{ insertId: existing.id, affectedRows: 1 } as any, []]; }
    const id = nextId.subscribers++;
    subscribers.push({ id, email, subscribed: true, subscribed_at: new Date() });
    return [{ insertId: id, affectedRows: 1 } as any, []];
  }

  // UPDATE contacts status
  if (s.startsWith("UPDATE CONTACTS SET STATUS")) {
    const [status, id] = params;
    const c = contacts.find((c) => c.id === Number(id));
    if (c) { c.status = status; c.updated_at = new Date(); }
    return [{ affectedRows: c ? 1 : 0 } as any, []];
  }

  // DELETE contacts
  if (s.startsWith("DELETE FROM CONTACTS")) {
    const id = Number(params[0]);
    const idx = contacts.findIndex((c) => c.id === id);
    if (idx !== -1) contacts.splice(idx, 1);
    return [{ affectedRows: idx !== -1 ? 1 : 0 } as any, []];
  }

  // TRUNCATE / CREATE TABLE / SET FK — no-op
  if (s.startsWith("TRUNCATE") || s.startsWith("CREATE TABLE") || s.startsWith("SET FOREIGN")) {
    if (s.includes("TRUNCATE TABLE CONTACTS"))             contacts = [];
    if (s.includes("TRUNCATE TABLE LEADS"))                leads = [];
    if (s.includes("TRUNCATE TABLE NEWSLETTER_SUBSCRIBERS")) subscribers = [];
    return [{ affectedRows: 0 } as any, []];
  }

  return [[], []];
}

// ── Mock pool object (same interface as mysql2 pool) ──────────────────────────
export const mockPool = {
  async execute(sql: string, params?: any[]): Promise<[any, any]> {
    console.log("[MOCK DB]", sql.slice(0, 80), params || "");
    return parseSql(sql, params);
  },
  async getConnection() {
    return {
      async execute(sql: string, params?: any[]): Promise<[any, any]> {
        return parseSql(sql, params);
      },
      release() {},
    };
  },
};
