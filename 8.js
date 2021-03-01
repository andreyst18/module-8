let arr = new Map();
arr.set('name', 'Петр');
arr.set('age', 30);
arr.set('country', 'Russia');
arr.set('isMarried', true);
for (let elem of arr) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}