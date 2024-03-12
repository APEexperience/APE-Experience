// Node.js with Express
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://cloudflare.com/');
  next();
});

// ...other middleware and route definitions

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Import Cloudflare API authentication credentials (ensure secure storage)
const apiKey = '4yCimx4_C7vtxaXp4tC-bFsC18V9M-JN76cojpzs';
const email = 'apeexperience@gmail.com';
const zoneId = 'v1.0-3ef27b33e35db94790646785-0fdbd6bf7b9cedf2ee4c7474a1ce08f74a34dab146fc5ac549303436e9331d29913d8413c7e6333c130bdf2d26873ef8fdaf6c0a57a7496f6f14a07db0377bc242a40e0401a33975f2';
const d1DatabaseId = '00c3fd9f-2396-4cdb-88ee-f9011af18120';

// Form data
const formData = {
  nombre: 'Example',
  email: 'example@email.com',
};

// Cloudflare endpoint to send data to D1
const endpoint = `https://api.cloudflare.com/client/v4/zones/${zoneId}/workers/databases/${d1DatabaseId}/write`;

// Request configuration
const requestOptions = {
  method: 'POST',
  headers: {
    'X-Auth-Email': email,
    'X-Auth-Key': apiKey,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
};

// Send request to Cloudflare API
fetch(endpoint, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send data to Cloudflare D1');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data successfully sent to Cloudflare D1:', data);
  })
  .catch(error => {
    console.error('Error sending data to Cloudflare D1:', error);
  });
