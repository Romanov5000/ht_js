let str = prompt('Введите слово палиндром','');

  strReverse = str.split('').reverse().join(''); 
  if ( str === strReverse){
    alert ('Да, это слово палиндром');
  } else {
    alert ('Нет, это не слово палиндром');
  }
