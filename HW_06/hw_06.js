const colorsArray = ['blue', 'green', 'white', 'black', 'yellow', 'orange'];
let element = document.getElementById('section');
element.onclick = function() {
  return element.style.backgroundColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
};
