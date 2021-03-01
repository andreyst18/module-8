let someString = 'power';
let result = '';
for (let i = someString.length - 1; i >= 0; i--) {
  result += someString[i];
}
console.log(result);