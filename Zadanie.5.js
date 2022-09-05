const arrow = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;   
  }
  return result;
}

//Зададим значение x и n:

let x = prompt("Чему равно x?", '');
let n = prompt("Чему равно n?", '');

//Проверим, что n - натуральное число:

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( arrow(x, n) );
}
