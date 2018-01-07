// Написать скрипт, который на входе принимает любой текст - предложение/словосочетание/абзац.
// В ходе обработки вывести в консоль количество слов, количество букв “а” в нем и среднюю длину слова.

const text = prompt("Введите текст", "lorem ipsum aAeng аАрус");

const textInfo = (string) => {
  const strArray = string.split(" ");
  let charCounter = 0;
  let aCounter = 0;
  strArray.forEach(function (element) {
    charCounter += element.length;
    for (let i = 0; i < element.length; i++) {
      if (element[i] === "a" || element[i] === "A" || element[i] === "а" || element[i] === "А") {
        aCounter++;
      }
    }
  });
  console.log("Текст: ", text);
  console.log("Количество слов: ", strArray.length);
  console.log("Средняя длина слова: ", Math.round(charCounter/strArray.length));
  console.log("Количество букв 'а': ", aCounter);
};

textInfo(text);

/*
Напишите функцию range, принимающую два аргумента, начало и конец диапазона,
и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный
третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице.
Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1)
возвращает [5, 4, 3, 2].
*/

const range = (start, end, param = 1) => {
  const array = [];
  if ((start < end && param < 0)||(start > end && param > 0)||(param === 0)) {
    console.log("Некорректные данные");
  }
  else if (start < end) {
    for (let i = start; i <= end; i += param) {
    array.push(i);
    }
  }
  else if (start > end) {
    for (let i = start; i >= end; i += param) {
    array.push(i);
    }
  }
  else if (start === end) {
    array.push(start);
  }
  console.log("Массив", array);
  return(array);
};
const sum = (array) => {
  console.log("Сумма элементов массива", array.reduce((acc, element) => acc += element, 0));
};
range(1, 4, 1);
sum(range(1, 10));
