const http = require('http');

const data = JSON.stringify({ username: 'testuser', email: 'test@example.com', password: 'password123' });

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', body);
  });
});

req.write(data);
req.end();