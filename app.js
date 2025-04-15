// app.js

const app = document.getElementById("app");

function renderLogin() {
  app.innerHTML = `
    <div class="bg-white shadow-md rounded p-6">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
      <form id="loginForm" class="space-y-4">
        <div>
          <label class="block text-gray-600 mb-1">Email</label>
          <input type="email" id="email" required
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block text-gray-600 mb-1">Password</label>
          <input type="password" id="password" required
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  `;

  // Handling form submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Email validation
    if (!validateEmail(email)) {
      showToast("Enter a valid email address.", 'error');
      logAction('Email validation failed', { email });
      return;
    }

    // Mock login attempt
    const result = mockLogin(email, password);
    
    if (result.success) {
      showToast(`Welcome, ${email}!`, 'success');
      logAction('Login successful', { email });
      setTimeout(() => renderDashboard(email), 1000); // Redirect to dashboard after 1 second
    } else {
      showToast(result.message, 'error');
      logAction('Login failed', { email });
    }
  });
}

function renderDashboard(userEmail) {
  app.innerHTML = `
    <div class="bg-white shadow-md rounded p-6 text-center">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">Welcome to the Dashboard!</h1>
      <p class="text-gray-600 mb-6">Logged in as <strong>${userEmail}</strong></p>
      <button id="logoutBtn" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Log Out</button>
    </div>
  `;

  // Handle log out
  document.getElementById("logoutBtn").addEventListener("click", () => {
    showToast("Logged out.", 'info');
    logAction('User logged out', { userEmail });
    renderLogin();
  });
}

// Start app by rendering login page
renderLogin();
