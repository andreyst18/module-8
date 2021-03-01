let value = prompt('Введите значение');
value = + value;
if (typeof(value) == 'number') {
  if (!isNaN(value)) {
    let result = value % 2 === 0 ? 'Четное' : 'Нечетное';
    console.log(result);
  }  
  else {
    console.log('Упс, кажется, вы ошиблись');
  }
}