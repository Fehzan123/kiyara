
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



  function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("hidden");
  }




  function openhero(name, description, image, price) {
    // Show the login modal instead of just displaying the product info
    document.getElementById('loginModal').classList.remove('hidden');
    document.getElementById('loginModal').classList.add('flex');

    // Optionally store product info in the modal (for context)
    document.getElementById('selectedProduct').innerHTML = `
      <h2 class="text-xl font-bold mb-2">${name}</h2>
      <p class="text-gray-700">${description}</p>
      <img src="${image}" class="w-32 my-2 rounded-md">
      <p class="text-lg font-semibold">₹${price}</p>
    `;
  }

  function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
  }
  




  function handleBuyNow(event) {
    event.preventDefault(); // Stop form from submitting

    // Show success message
    const msg = document.getElementById("thankYouMsg");
    msg.classList.remove("hidden");

    // Optionally, hide the modal after 2 seconds
    setTimeout(() => {
      msg.classList.add("hidden");
      closeModal();
      const form = event.target;
      form.reset();
    }, 5000);

  }
  function contectUs(event) {
    event.preventDefault(); // Stop form submission

    alert("✅ Thank you! We will connect with you as soon as possible.");

    // Optional: Clear the form
    event.target.closest("form").reset();
  }
