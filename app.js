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

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      showToast(`Welcome, ${email}!`, 'success');
      setTimeout(() => {
        renderDashboard(email);
      }, 1200);
    } else {
      showToast("Please fill in both fields.", 'error');
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

  document.getElementById("logoutBtn").addEventListener("click", () => {
    showToast("Logged out.", 'info');
    renderLogin();
  });
}

// Start app
renderLogin();
