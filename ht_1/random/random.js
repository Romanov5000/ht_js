function createRandom (){
    return Math.floor ( Math.random () * 100 );
}

let numberRandom = [
  
];

for ( let i = 10 ; i > numberRandom.length ; numberRandom.push(createRandom()) ){
  
}

    for ( let i = 0 ; i < numberRandom.length ; i++ ){
        if (numberRandom [i] === 0 ){
            numberRandom [i] = 'zero' ;      
        } else if (numberRandom [i] % 10 === 0 ) {
            numberRandom [i] = String (numberRandom [i]) [0] + 'zero' ;
        }
}

console.log ( numberRandom );