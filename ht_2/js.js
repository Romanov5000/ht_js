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




newName ('andrei','kovalov',55); // вызываем функцию доб. нового пользователя в таблицу.

deleteName ( 'andrei' ); // Удаляет выбранного пользователя из таблицы.


let table = '<table><tr><td><h3>firstName</h3></td><td><h3>lastName</h3></td><td><h3>age</h3></td></tr>';

for ( let item of data ) {
    table = table + '<td>' + item.firstName + '</td>';
    table += '<td>' + item.lastName + '</td>';
    table += '<td>' + item.age + '</td><tr></tr>';
}

elem.innerHTML = table;

function newName ( firstNameUser , lastNameUser ,  ageUser ) {

    data.push ({firstName: `${firstNameUser}`, lastName: `${lastNameUser}`, age: `${ageUser}`});
}



function deleteName ( nameUser ) {
    for ( i = 0 ; i < data.length ; i++ ){
    if ( nameUser === data[i].firstName || nameUser === data[i].lastName ) {
        data.splice (data.indexOf(data[i]), 1);
        
        }
    }
}


