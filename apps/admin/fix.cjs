const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";')) {
    const replaceStr = `const _rawApiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
const API_URL = _rawApiUrl.endsWith("/") ? _rawApiUrl.slice(0, -1) + "/api" : (_rawApiUrl.endsWith("/api") ? _rawApiUrl : _rawApiUrl + "/api");`;
    
    content = content.replace(
      'const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";',
      replaceStr
    );
    // Remove duplicate /api/api if it happens
    content = content.replace(/\/api\/api/g, '/api');
    fs.writeFileSync(file, content);
    console.log('Fixed:', file);
  }
});
