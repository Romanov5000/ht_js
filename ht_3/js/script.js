const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];
const addUserBtn = document.querySelector('.add_user_btn');
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');


function deleteUser() {
    let deleteTr = this.closest('tr');
    deleteTr.remove();
}
function addTdWithBtns(tr) {
    let deleteUserBtn = document.createElement('button');
    let editUserBtn = document.createElement('button');
    let btnsTd = document.createElement('td');

    deleteUserBtn.className = 'delete_user_btn';
    editUserBtn.className = 'edit_user_btn';
    btnsTd.className = 'btns_td';

    deleteUserBtn.addEventListener ( 'click', deleteUser );
    editUserBtn.addEventListener ('click' , changeUserName );

    deleteUserBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    editUserBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';

    btnsTd.append(editUserBtn);
    btnsTd.append(deleteUserBtn);
    tr.append(btnsTd);
}

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }

    addTdWithBtns(tr);
    
    tbody.append(tr);
}

formAddUser.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNameValue = event.target.querySelector('.input_name').value;
    let inputSecondNameValue = event.target.querySelector('.input_second_name').value;
    let inputAgeValue = event.target.querySelector('.input_age').value;
    
    let tr = document.createElement('tr');
    tr.innerHTML = `            
    <td>${inputNameValue}</td>
    <td>${inputSecondNameValue}</td>
    <td>${inputAgeValue}</td>`;
    addTdWithBtns(tr);
    tbody.append(tr);
   formAddUser.reset();
});

function changeUserName () {
 
    let tr = this.closest('tr');
    let tdArr = tr.cells;
    console.log(tdArr);
    for(let i = 0; i < tdArr.length; i++) {
        console.log(tdArr[i]);
        if(tdArr[i].classList.contains('btns_td')) {
            
        } else {
            tdValue = tdArr[i].innerHTML;
            let input = document.createElement('input');
            input.value = tdValue;
            tdArr[i].innerHTML = '';
            tdArr[i].append(input);
        }
    }
     
}
