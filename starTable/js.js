const userAttr = ['name', 'height', 'mass'];
let table = document.createElement('table');

async function getPeople() {
    let response = await fetch('https://swapi.dev/api/people/');
    let people = (await response.json()).results;
    return people;
}

function createTable(userAttr) {
    let tr = document.createElement('tr');

    tr.className = 'header_tr';

    userAttr.forEach(element => {
        let td = document.createElement('td');
        td.innerHTML = element;
        tr.append(td);
    });

    table.append(tr);

    let usersBlock = document.querySelector('.users_block');
    usersBlock.append(table);
}
// ????????????????????????????????????????????????????????????????
async function pastePeople(peoplePromise) {
    let people = await peoplePromise;
    
people.forEach ( (el) => {
        for (let key in el){
            if (key=== userAttr[0] || key === userAttr[1] || key === userAttr[2]) {
                
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                tr.innerHTML = el[key];
                console.log(el[key]);
                table.append(tr);
            }
        
  }
}
)}
console.log(getPeople());

console.log(pastePeople(getPeople()));


createTable(userAttr);
pastePeople(getPeople());