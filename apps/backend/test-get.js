async function main() {
  console.log('Testing GET /api/signup on port 3001...');
  
  try {
    const res = await fetch('http://127.0.0.1:3001/api/signup', {
      method: 'GET',
    });
    
    console.log('Status:', res.status);
    const data = await res.json();
    console.log('Data:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

main();
