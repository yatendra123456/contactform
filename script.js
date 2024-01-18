function registerUser() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
  
    const loadingDiv = document.getElementById('loading');
    const successMessageDiv = document.getElementById('successMessage');
    const userNameSpan = document.getElementById('userName');
  
    // Client-side validation
    if (!nameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
  
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Password and Confirm Password must match.');
      return;
    }
  
    // Display loading spinner/message
    loadingDiv.classList.remove('hidden');
  
    // Simulate asynchronous operation (e.g., server request) with setTimeout
    setTimeout(() => {
      // Hide loading and display success message
      loadingDiv.classList.add('hidden');
      successMessageDiv.classList.remove('hidden');
      userNameSpan.textContent = nameInput.value;
    }, 2000);
  }
  
  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  