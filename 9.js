function getQuantityOfNumTypes(arr) {
    let odd = 0; //счетчик нечетных
    let even = 0; //счетчик четных 
    let zero = 0; //счетчик нолей
    arr.forEach(function(elem) {
        if (typeof(elem) == 'number') {
            if (elem === 0) {
                zero++;
            }
            else {
                elem % 2 === 0 ? even++ : odd++;
            }
        }
    })
    console.log(`Нечетных - ${odd}, четных - ${even}, нолей - ${zero}`);
}

let arr_0 = [5, 'hi', 20, 0, null, 3, 0, 6, 13, 'test', -100, 7];
getQuantityOfNumTypes(arr_0);