// Объявление переменных
let firePos;
let myShips;
let myShipsPlan = [];
let array = [];
let pcArray = [];
let pcShipsPlan = [];
let fireArray = [];
let myCount = 0, pcCount = 0;
let seaLeft = document.querySelector('.seaLeft');
let seaRight = document.querySelector('.seaRight');
console.log(seaLeft, seaRight);
const containerLeft = document.querySelector('.left-container');
const containerRight = document.querySelector('.right-container');
const myScoreCount = document.querySelector('.my-score');
const pcScoreCount = document.querySelector('.pc-score');
let startBtn = document.querySelector('.start-button');
let newGameBtn = document.querySelector('.new-game-button');

//Генерация HTML
// Создание ряда
function row(value) {
  let row = document.createElement('div');
  row.className = 'row';
  row.id = 'row' + value;
  return row;
}

// Создание ячейки
function cell(rowNum, cellNum) {
  let btn = document.createElement('button');
  btn.className = 'col btn btn-outline-secondary';
  btn.id = 'cell' + rowNum + cellNum;
  btn.textContent = '#';
  return btn;
}

// Генерация поля
function generateMap(container) {
  let currentRow;
  const nextRow = document.querySelector('.row');
  for (let i = 0; i < 10; i++) {
    container.appendChild(row(i));
    if (container === seaLeft) {
      currentRow = document.querySelector(`.left-container #row${i}`);
    } else {
      currentRow = document.querySelector(`.right-container #row${i}`);
    }
    for (let j = 0; j < 10; j++) {
      currentRow.appendChild(cell(i, j));
    }
  }
}

//Установка корабля случайным образом (для компьютера)
function randomGenerator () {

  return function (size) {
    let pos = Math.floor(Math.random()*100);
    if (pos % 10 < 10 - size && !array[pos - 1] && !array[pos + size] &&
       !array[pos + size + 10] && !array[pos + size - 10] && !array[pos - 11] &&
        !array[pos - 10] && !array[pos + 10] && !array[pos + 9] ) {
      for (let j = pos; j < pos + size; j++) {
        if (!array[j] && !array[j] + 10 && !array[j] - 10) {
          array[j] = 1;
        } else iter(size);
      }
    } else iter(size);
    return array;
  };
}
let iter = randomGenerator();
// Генерация выстрела компьютером
function fireGenerator () {
  return function () {
    firePos = Math.floor(Math.random()*100);
    if (!fireArray[firePos]) {
      fireArray[firePos] = firePos;
    } else fire();
    return firePos;
  }
}
let fire = fireGenerator();

// Обработчики
// Начальная расстановка своих кораблей
function onInit(e) {
  if (!e.target.classList.contains('start-button')) {
    e.target.classList.add('btn-secondary');
    e.target.classList.remove('btn-outline-secondary');
    }
  }

// Считывание расстановки кораблей в массив, маскировка кораблей, деактивация кнопки старт
  function onStart(e) {
    containerRight.addEventListener('click', onFire);
    if (e.target.classList.contains('start-button')) {
      myShips = document.querySelectorAll('.left-container .btn-secondary ');
      for (let i = 0; i < myShips.length; i++) {
      myShipsPlan.push(myShips[i].id);
    };
    if (myShipsPlan.length === 20) {
      startBtn.disabled = true;
      containerLeft.removeEventListener('click', onInit);
      let myShipsHide = document.querySelectorAll('.left-container .row .btn')
      for (let i = 0; i < myShipsHide.length; i++) {
      myShipsHide[i].classList.remove('btn-secondary');
      myShipsHide[i].classList.add('btn-outline-secondary');
        }
      }
      else {
        myShipsPlan = [];
        alert('Ошибка при размещении кораблей')}

    }
  }

// Ход
  function onFire(e) {
    // console.log(myShipsPlan);
    e.target.classList.remove('btn-outline-secondary');
    if (pcShipsPlan.indexOf(e.target.id) >= 0) {
      e.target.classList.add('btn-danger');
      myCount++;
      myScoreCount.textContent = myCount;
      if (myCount === 20) {
        alert(`Вы победили со счетом ${myCount} : ${pcCount}`);
      }
    } else {
      e.target.classList.add('btn-info');
    }
    fire();
    currentPos = document.querySelector(`.left-container #cell${firePos < 10 ? '0' : ''}${firePos}`);
    currentPos.classList.remove('btn-outline-secondary');
    if (myShipsPlan.indexOf(`cell${firePos < 10 ? '0' : ''}${firePos}`) > -1) {
      currentPos.classList.add('btn-danger');
      pcCount++;
      pcScoreCount.textContent = pcCount;
      if (pcCount === 20) {
        alert(`Вы проиграли со счетом ${pcCount} : ${myCount}`)
      }
    } else {
      currentPos.classList.add('btn-info');
    }
  }

// Сброс игры, начало игры заново
  function onReset(e) {
    containerRight.removeEventListener('click', onFire);
    seaLeft.textContent = '';
    seaRight.textContent = '';
    myShipsPlan = [];
    array = [];
    myCount = 0, pcCount = 0;
    pcArray = [];
    containerLeft.addEventListener('click', onInit);
    fireArray = [];

    startBtn.disabled = false;
    pcScoreCount.textContent = pcCount;
    myScoreCount.textContent = myCount;

    generateMap(seaLeft);
    generateMap(seaRight);

    iter(4);
    iter(3);
    iter(3);
    iter(2);
    iter(2);
    iter(2);
    iter(1);
    iter(1);
    iter(1);
    let shipsPlan = iter(1);
    for (let i = 0; i < shipsPlan.length; i++) {
      let fullCell = document.querySelector(`.right-container #cell${i < 10 ? '0' : ''}${i}`)
       if (shipsPlan[i] === 1) {
         pcShipsPlan.push(fullCell.id);
       }
    };
  }

// Слушатели событий
containerLeft.addEventListener('click', onInit);
containerLeft.addEventListener('click', onStart);
containerRight.addEventListener('click', onFire);
newGameBtn.addEventListener('click', onReset);


onReset();
