function createRandom (){
    return Math.floor ( Math.random () * 100 );
}

let numberRandom = [
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
    createRandom (),
];

    for ( let i = 0 ; i < numberRandom.length ; i++ ){
        if (numberRandom [i] % 10 === 0 ) {
            numberRandom [i] = String (numberRandom [i]) [0] + 'zero' ;      
        } else if (numberRandom [i] === 0 ){
            numberRandom [i] = 'zero' ;
        }
}

console.log ( numberRandom );






