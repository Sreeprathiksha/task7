const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
  container.innerHTML = "Loading users...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    container.innerHTML = `<p class="error">⚠️ Error: ${error.message}. Please check your internet and try again.</p>`;
  }
}

function displayUsers(users) {
  container.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    container.appendChild(card);
  });
}

reloadBtn.addEventListener("click", fetchUsers);

// Load users on page load
fetchUsers();
