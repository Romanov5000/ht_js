let data = [
    {
        firstName: 'Ashton ',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley ',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah ',
        lastName: 'Dakota',
        age: 24
    }
 ];

 function upperCaseOneSimbol (str) {
    let lower = str.toLowerCase()
    return lower[0].toUpperCase() + lower.slice(1);
}

let userfoundNames = [];

let userSurname = prompt ('Введите вашу фамилию','');

    for ( let i = 0 ; i < data.length ; i++ ) {
         if ( upperCaseOneSimbol(userSurname) === data[i].lastName) {
            userfoundNames.push(data[i]);
         }
    }

    if (!userfoundNames.length) {
        alert ('No results found for your request');
    } else {
        for (let i = 0; i < userfoundNames.length; i++) {
            alert (`user name ${ userfoundNames[i].firstName + upperCaseOneSimbol(userSurname)} \nuser age ${ userfoundNames[i].age}`);
        }
    }


  