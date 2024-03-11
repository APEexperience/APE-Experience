// Import Cloudflare API authentication credentials (ensure secure storage)
const apiKey = '4yCimx4_C7vtxaXp4tC-bFsC18V9M-JN76cojpzs';
const email = 'apeexperience@gmail.com';
const zoneId = 'a79035a2df478c5bd8630de6d3c05b3aa7653';
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
