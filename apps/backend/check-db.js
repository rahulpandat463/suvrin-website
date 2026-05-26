const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      database: 'hypeszia_Suvrin_Admin_Panel',
      user: 'hypeszia_SuvrinAdminPanel',
      password: 'SuvrinAdmin@2026',
      connectTimeout: 10000
    });
    
    console.log('✅ SUCCESS: Database Connected to localhost!');
    await connection.end();
  } catch (error) {
    console.error('❌ ERROR CODE:', error.code);
    console.error('❌ ERROR NUMBER:', error.errno);
    console.error('❌ FULL ERROR:', error.message);
  }
}

testConnection();
