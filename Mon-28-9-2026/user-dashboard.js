
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userRole = document.getElementById('userRole');
const logoutBtn = document.getElementById('logoutBtn');

userName.textContent = currentUser.fullName;
userEmail.textContent = currentUser.email;
userRole.textContent = currentUser.role;



logoutBtn.addEventListener('click' , () => {
    window.location.href = 'login.html';
})