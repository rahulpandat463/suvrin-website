import pool from "./db.js";

pool.getConnection()
    .then((conn: any) => {
        console.log("✅ Database Connected Successfully!");
        conn.release();
        process.exit(0);
    })
    .catch((err: any) => {
        console.error("❌ Connection Failed:", err.message);
        process.exit(1);
    });