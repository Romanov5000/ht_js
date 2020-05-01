let r ;

let elem = document.getElementById("table");
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



const btnNewUser = document.querySelector ('.btnNewUser');
btnNewUser.addEventListener ('click' , newName );

const deleteUser = document.querySelector ('.deleteUser');
deleteUser.addEventListener ('click' , deleteName );

const changeUser = document.querySelector ('.changeUser');
changeUser.addEventListener ('click' , changeUserName );

let table = '<table><tr><td><h3>firstName</h3></td><td><h3>lastName</h3></td><td><h3>age</h3></td></tr>';

for ( let item of data ) {
    table = table + '<td>' + item.firstName + '</td>';
    table += '<td>' + item.lastName + '</td>';
    table += '<td>' + item.age + '</td><tr></tr>';
}

elem.innerHTML = table;



function newName () {
    let firstNameUser = prompt ('Введите имя');
    let lastNameUser = prompt ('Введите фамилию');
    let ageUser = prompt ('Введите возраст');

    data.push ({firstName: `${firstNameUser}`, lastName: `${lastNameUser}`, age: `${ageUser}`});
    
}




function deleteName () {
    nameUser = prompt ('Введите нужного пользователя');
    
    for ( i = 0 ; i < data.length ; i++ ){
    if ( nameUser === data[i].firstName || nameUser === data[i].lastName ) {
        data.splice (data.indexOf(data[i]), 1);
        } 
    }
}

function changeUserName () {
    oldUser = prompt ('Введите изменяемого пользователя');

    changeUerFirstName = prompt ('Введите новое имя пользователя');
    changeUerLastName = prompt ('Введите новое имя пользователя');
    changeUerAge = prompt ('Введите новое имя пользователя');

    for ( i = 0 ; i < data.length ; i++ ){
        if ( oldUser === data[i].firstName || oldUser === data[i].lastName ) {
            data.splice (data.indexOf(data[i]), 1 , {firstName: `${changeUerFirstName}`, lastName: `${changeUerLastName}`, age: `${changeUerAge}`} );
            } 
        }
}






