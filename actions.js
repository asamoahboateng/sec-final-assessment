// actions.js

// ✅ Toast Notification (success, error, info)
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = `fixed top-4 right-4 px-4 py-2 rounded shadow-md text-white z-50 transition-opacity
    ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2800);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ✅ Simple email format validator
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ✅ Simulated login function (mock auth)
function mockLogin(email, password) {
  // You can later swap this with real API call
  const dummyUser = {
    email: 'user@example.com',
    password: '123456',
  };

  if (email === dummyUser.email && password === dummyUser.password) {
    return { success: true, user: dummyUser };
  } else {
    return { success: false, message: 'Invalid credentials.' };
  }
}

// ✅ Logger for dev/debug
function logAction(action, data = {}) {
  console.log(`[ACTION] ${action}:`, data);
}
