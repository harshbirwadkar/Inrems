document.getElementById('loginpage-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('loginpage_UserId_input').value;
    const password = document.getElementById('loginpage_Password_input').value;
  
    // Check if username and password are correct (for demo purpose)
    if (username === 'admin' && password === 'admin') {
      window.location.href = 'Homepage.html'; // Redirect to home page
    } else {
      alert('Invalid credentials. Please try again.'); // Display error message
    }
  });