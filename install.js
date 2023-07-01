const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  // Serve the login page
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const { credential } = req.body;

  // Verify and authenticate the credential on the server-side
  // You need to use the Google API client library for server-side verification

  // Example response indicating successful login
  const successResponse = {
    success: true,
    message: 'Login successful',
    // Additional data can be sent if needed
  };

  // Return the response to the frontend
  res.json(successResponse);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
