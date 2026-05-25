import pool from "./db";

export async function initDatabase() {
  const conn = await pool.getConnection();
  try {
    // ── contacts ──────────────────────────────────────────────────────────
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id          INT AUTO_INCREMENT PRIMARY KEY,
        name        VARCHAR(150)  NOT NULL,
        email       VARCHAR(255)  NOT NULL,
        phone       VARCHAR(30)   DEFAULT NULL,
        company     VARCHAR(200)  DEFAULT NULL,
        subject     VARCHAR(300)  NOT NULL,
        message     TEXT          NOT NULL,
        status      ENUM('new','read','replied','archived') DEFAULT 'new',
        created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ── newsletter_subscribers ────────────────────────────────────────────
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id            INT AUTO_INCREMENT PRIMARY KEY,
        email         VARCHAR(255) NOT NULL UNIQUE,
        subscribed    BOOLEAN      DEFAULT TRUE,
        subscribed_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ── leads ─────────────────────────────────────────────────────────────
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS leads (
        id          INT AUTO_INCREMENT PRIMARY KEY,
        name        VARCHAR(150)  NOT NULL,
        email       VARCHAR(255)  NOT NULL,
        phone       VARCHAR(30)   DEFAULT NULL,
        company     VARCHAR(200)  DEFAULT NULL,
        service     VARCHAR(200)  DEFAULT NULL,
        budget      VARCHAR(100)  DEFAULT NULL,
        message     TEXT          DEFAULT NULL,
        source      VARCHAR(100)  DEFAULT 'website',
        status      ENUM('new','contacted','qualified','closed','lost') DEFAULT 'new',
        created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    console.log("✅ Database tables initialized successfully.");
  } finally {
    conn.release();
  }
}
