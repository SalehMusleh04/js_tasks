
const usersStored = JSON.parse(localStorage.getItem('users')) || [];

const adminName = document.getElementById('adminName');
const adminEmail = document.getElementById('adminEmail');
const usersTableBody = document.getElementById('usersTableBody');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');

const currentAdmin = usersStored.find(user => user.role === 'admin' );
if(currentAdmin){
    adminName.textContent = currentAdmin.fullName;
    adminEmail.textContent = currentAdmin.email;
}

function createRow(user){
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = user.fullName;
    const emailTd = document.createElement('td');
    emailTd.textContent = user.email;
    const roleTd = document.createElement('td');
    roleTd.textContent = user.role;
    
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(roleTd);

    return tr;
}

function renderUser(){
    usersTableBody.innerHTML = "";

    for(const user of usersStored){
        if(user.role === 'user'){
            usersTableBody.appendChild(createRow(user));
        }
    }
}

adminLogoutBtn.addEventListener('click' , () => {
    window.location.href = 'login.html';
})


renderUser();