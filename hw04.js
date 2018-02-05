//Домашка, задача 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
//Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function randomGenerator () {
  const array = [];
  return function () {
    let value = Math.floor(Math.random()*100);
    if (!array[value]) {
      array[value] = value;
    } else iter();
  console.log(array);
return array;
  }
}
let iter = randomGenerator();

for (let i = 0; i < 101; i++) {
  iter();
}
