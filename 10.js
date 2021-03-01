function isPrime(arg) {
    switch (arg) {
        case 0: return 'введен 0';
            break;
        case 1: return 'введен 1';
            break;
    }
    if (arg >=0 && arg <= 1000) {
        for (let i = 2; i <= arg / 2; i++) {
            if (arg % i === 0) {
                return 'Нет';
            }
        }
        return 'Да'
    }
    return 'Данные неверны!'
}

console.log('Число простое? - ' + isPrime(1001));