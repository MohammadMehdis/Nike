"use strict";
const userData = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};
console.log(userData.email, userData.password);

function showToast(message, isLog) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show " + (isLog ? "" : "failure");
  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

function loginUser(email, password) {
  if (email === userData.email && password === userData.password) {
    showToast(`Welcome Back ${email}`, true);
  } else {
    showToast(`Unknown login warning`, false);
  }
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  loginUser(email, password);
});
