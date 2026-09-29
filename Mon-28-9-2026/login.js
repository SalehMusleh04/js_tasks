
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const emptyMsg = document.querySelector('.empty-msg');

loginForm.addEventListener('submit' , (event) => {
    event.preventDefault();
    const loginEmailValue = loginEmail.value.trim();
    const loginPasswordValue = loginPassword.value.trim();
    if(loginEmailValue !== "" && loginPasswordValue !== ""){
        const userList = JSON.parse(localStorage.getItem('users'));
        const matchedUser = userList.find((user) => user.email === loginEmailValue 
        && user.password === loginPasswordValue)
        if(matchedUser){
          localStorage.setItem("currentUser" , JSON.stringify(matchedUser));
          matchedUser.role === "admin" ? window.location.href = "admin-dashboard.html" : window.location.href = "user-dashboard.html";
        } else {
            emptyMsg.textContent = "The info is not correct"
        }
    } else{
        emptyMsg.textContent = "Plz Fill All Fields Correctly";
    }
})