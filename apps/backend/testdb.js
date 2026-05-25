require('dotenv').config();
const mysql = require('mysql2/promise');

mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'hypeszia_Suvrin_Admin_Panel',
    user: 'hypeszia_SuvrinAdminPanel',
    password: 'SuvrinAdmin@2026'
}).then(c => {
    console.log('✅ SUCCESS: Database Connected!');
    c.end();
}).catch(e => {
    console.error('❌ ERROR CODE:', e.code);
    console.error('❌ ERROR NUMBER:', e.errno);
    console.error('❌ FULL ERROR:', e);
});