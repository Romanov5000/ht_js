let data = [
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
    },
];

let tbody = document.querySelector ('table');

const btnNewUser = document.querySelector ('.btnNewUser'); 
btnNewUser.addEventListener('click', addUser);

const deleteUser = document.querySelector ('.deleteUser');
deleteUser.addEventListener ('click' , deleteUsers );

const changeUser = document.querySelector ('.changeUser');
changeUser.addEventListener ('click' , changeUserName );





for ( i = 0 ; i < data.length ; i++ ) {
    let tr = document.createElement ('tr');

    for ( let key in data[i] ) {
        let td = document.createElement ('td');
        td.innerHTML = data[i][key];
        tr.append (td);        
    }
    tbody.append(tr);
}


function addUser () {
    let firstName = prompt ('введите имя пользователя');
    let lastName = prompt ('введите фамилию пользователя');
    let age = prompt ('введите возраст пользователя');
    
    let tr = document.createElement ('tr');
    tr.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${age}</td>`;
    tbody.append(tr);

}

function deleteUsers () {
    let userName = prompt('Введите нужного пользователя');
    tdArr = tbody.querySelectorAll ('td');
    for ( i = 0 ; i < tdArr.length ; i++ ) {
        if ( userName === tdArr[i].innerHTML ){
           let tr = tdArr[i].closest('tr');
           tr.remove();
        }
    }
}

function changeUserName () {
   let oldUserName = prompt ('Введите изменяемого пользователя');

    changeUerFirstName = prompt ('Введите новое имя пользователя');
    changeUerLastName = prompt ('Введите новую фамилию пользователя');
    changeUerAge = prompt ('Введите новый возраст пользователя');

    tdArr = tbody.querySelectorAll ('td');

    for ( i = 0 ; i < tdArr.length ; i++ ){
        if ( oldUserName === tdArr[i].innerHTML ) {
            let tr = tdArr[i].closest('tr');
            tr.innerHTML = `<td>${changeUerFirstName}</td><td>${changeUerLastName}</td><td>${changeUerAge}</td>`;
            
            } 
        }
}







