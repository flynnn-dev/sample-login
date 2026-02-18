document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("createForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (username.length < 3) {
      alert("Username must be at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert("Username already exists!");
      return;
    }

    users.push({
      username: username,
      email: email,
      password: password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "index.html";
  });
});
