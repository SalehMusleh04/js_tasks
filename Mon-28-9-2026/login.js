
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit' , (event) => {
    event.preventDefault();
    const loginEmailValue = loginEmail.value.trim();
    const loginPasswordValue = loginPassword.value.trim();
    if(loginEmailValue !== "" && loginPasswordValue !== ""){
        const userList = JSON.parse(localStorage.getItem('users'));
        const matchedUser = userList.find((user) => user.email === loginEmailValue 
        && user.password === loginPasswordValue)

        !matchedUser ? emptyMsg.textContent = "There Info are not Correct" : window.location.href = `${matchedUser.role}-dashboard.html`;
    } else{
        emptyMsg.textContent = "Plz Fill All Fields Correctly";
    }
})