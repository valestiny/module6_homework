function isPrime(num) {
    if (!Number.isInteger(num) || num < 2 && num > 1000) return "данные неверны";
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
        if (num % i === 0) return "непростое число";
    return "простое число";
}
console.log(isPrime(1000)); //Здесь нужно ввести число
