let X = 1;
X = typeof(X);
switch (X) {
  case 'number': console.log('X - число');
    break;
  case 'string': console.log('X - строка');
    break;
  case 'boolean': console.log('X - логический тип');
    break;
  default: console.log('Тип Х не определён');
}