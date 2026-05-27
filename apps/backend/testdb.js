async function main() {
  const email = `testuser_${Date.now()}@example.com`;
  const password = 'password123';
  const name = 'Test User';
  
  console.log('Testing signup API on port 3001...');
  
  try {
    const res = await fetch('http://127.0.0.1:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });
    
    console.log('Status:', res.status);
    const data = await res.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

main();
