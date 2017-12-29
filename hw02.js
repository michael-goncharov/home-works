// Числа Фибоначчи - рекурсия

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

// Сортировка массива с помощью цикла

const array = [1, 3, 4, 2, 5, 3, 7, 2, 8, 6];

// console.log(array.sort((a, b) => (a-b)));

const sort = (array) => {
  let i = 1, j = 2;
    while (i < array.length) {
      if (array[i - 1] < array[i]) {
            i = j;
            j = j + 1;
      }
        else {
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
            i = i - 1;
            if (i === 0) {
              i = j;
              j = j + 1;
            }
        }
    }
    return(array);
};
 console.log(sort(array));
