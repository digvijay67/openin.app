google.accounts.id.initialize({
    client_id: 'YOUR_CLIENT_ID',
    callback: handleCredentialResponse,
  });
  function handleCredentialResponse(response) {
    const credential = response.credential;
    // Send the credential to your server for verification and authentication
    // You can use AJAX, Fetch API, or any other method to send the credential to your backend
  }
  google.accounts.id.renderButton(
    document.getElementById('g-id-btn'),
    { theme: 'outline', size: 'large' } // Customize button appearance if desired
  );
      