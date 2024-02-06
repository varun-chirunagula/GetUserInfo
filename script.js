document.getElementById('getUserInfoBtn').addEventListener('click', fetchUserInfo);

function fetchUserInfo() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter a GitHub username');
    return;
  }
  
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(user => {
      displayUserInfo(user);
    })
    .catch(error => {
      alert(error.message);
    });
}

function displayUserInfo(user) {
  const userInfoContainer = document.getElementById('userInfo');
  userInfoContainer.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.login}</p>
    <p><strong>Location:</strong> ${user.location}</p>
    <p><strong>Repositories:</strong> ${user.public_repos}</p>
    <p><strong>Followers:</strong> ${user.followers}</p>
    <p><strong>Following:</strong> ${user.following}</p>
    <img src="${user.avatar_url}" alt="Avatar" style="width: 100px; height: 100px; border-radius: 50%;">
  `;
}
