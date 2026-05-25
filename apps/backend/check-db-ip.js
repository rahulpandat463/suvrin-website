const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: '67.223.118.75',
      port: 3306,
      database: 'hypeszia_Suvrin_Admin_Panel',
      user: 'hypeszia_SuvrinAdminPanel',
      password: 'SuvrinAdmin@2026',
      connectTimeout: 5000
    });
    
    console.log('✅ SUCCESS: Database Connected to 67.223.118.75!');
    await connection.end();
  } catch (error) {
    console.error('❌ ERROR CODE:', error.code);
    console.error('❌ FULL ERROR:', error.message);
  }
}

testConnection();
