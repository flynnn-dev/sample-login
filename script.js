document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    button.textContent = "Logging in...";
    button.disabled = true;

    setTimeout(() => {
      alert("Login successful!");

      button.textContent = "Login";
      button.disabled = false;

      form.reset();
    }, 1200);
  });
});
