
let isLoggedIn = false;

function handleLogin() {
  isLoggedIn = !isLoggedIn;
  const authLink = document.getElementById('authLink');

  if (isLoggedIn) {
    authLink.innerHTML = '<button onclick="handleLogin()" class="hover:text-gray-200">Logout</button>';
    alert("Login successful!");
  } else {
    authLink.innerHTML = '<button onclick="handleLogin()" class="hover:text-gray-200">Login</button>';
    alert("Logged out.");
  }
}

let isLogin = true;

function openModal() {
document.getElementById('authModal').classList.remove('hidden');
}

function closeModal() {
document.getElementById('authModal').classList.add('hidden');
}

function toggleForms() {
isLogin = !isLogin;

document.getElementById('loginForm').classList.toggle('hidden');
document.getElementById('signupForm').classList.toggle('hidden');

document.getElementById('formTitle').innerText = isLogin ? 'Login' : 'Sign Up';
document.getElementById('toggleText').innerText = isLogin ? "Don't have an account?" : "Already have an account?";
document.getElementById('toggleButton').innerText = isLogin ? "Sign Up" : "Login";
}


