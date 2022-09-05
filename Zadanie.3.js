function func1(a) {
  return function (b) {
    return (a + b);
  };
}
console.log(func1(2)(3)); //(2) - значение а; (3) - значение b
