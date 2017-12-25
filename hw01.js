// Числа Фибоначчи

const num = prompt("Число фибоначчи", 1);
const fibo = (num) => {
  switch (num) {
    case 0: return 0;
    case 1: return 1;
    default: return(fibo(num-2)+fibo(num-1));
  }
}
for(let i = 0; i <= num; i++) {
  console.log(i+'-е число Фибоначчи', fibo(i));
}

// Мудрец и шахматы
const chess = (foo) => {
  let result = 1, prevIter = 1, nextIter;
  for (let i = 2; i <= foo; i++) {
    nextIter = prevIter * 2;
    result += nextIter;
    prevIter = nextIter;
  }
  return(result);
}
const bar = chess(64);
console.log("Количество зерен:", bar);
console.log("Вес зерен, тонн", (bar * 0.06479891 / 1000000));
console.log("Сумма продаж при цене $200 за тонну", (bar * 0.06479891 / 1000000 * 200));

// решение в одну строку

console.log("Стоимость зерна, $", (Math.pow(2, 64)-1)*0.06479891/1000000*200);
