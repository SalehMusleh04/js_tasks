if(localStorage.getItem("users") === null){
    const admin = {
        fullName : "saleh musleh",
        email: "saleh.musleh@gmail.com",
        password : 'admin123',
        address : 'amman',
        role : 'admin'
    };
    const users = [admin];
    localStorage.setItem("users",JSON.stringify(users));
}

const form = document.getElementById('regForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const address = document.getElementById('address');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const emptyMsg = document.querySelector('.empty-msg');

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    const fullNameValue = fullName.value.trim(); 
    const emailValue = email.value.trim(); 
    const addressValue = address.value.trim(); 
    const passwordValue = password.value.trim(); 
    const confirmPasswordValue = confirmPassword.value.trim(); 
    if(fullNameValue !== "" 
        && emailValue !== ""
        && addressValue !== ""
        && passwordValue !== ""
        && confirmPasswordValue !== "" 
        && passwordValue === confirmPasswordValue
    ){
       
        const usersList =  JSON.parse(localStorage.getItem("users"));
       const isEmailExist = usersList.some((user)=> user.email === emailValue);
       if(isEmailExist){
        alert("هذا الايميل موجود !!")
       } else {
        usersList.push({
        fullName : fullNameValue,
        email: emailValue,
        password : passwordValue,
        address : addressValue,
        role : 'user'
        })
        localStorage.setItem('users' , JSON.stringify(usersList));
        alert('تم التسجيل بنجاح ');
        window.location.href = "login.html";
       }
    } else{
        emptyMsg.textContent = "Plz Fill All Fields Correctly";
    } 
})
