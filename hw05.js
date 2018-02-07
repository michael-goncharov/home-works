/* [16.01.2018, 20:49:10] Alexey Shkumat: Михаил, если я правильно понял, то задача следующая.
Нужно создать объект "микроволновка" класса Microwave,
а также объект "кофеварка" класса CoffeeMachine.
Оба эти класса Microwave и CoffeeMachine являются потомками класса Machine.
Это схематически показано на рисунке выше. И "микроволновка" и "кофеварка"
должны уметь работать в течение  заданного промежутка времени (через setTimeout).
И вот надо с помощью  "кофеварки" "приготовить" какой-нибудь кофе,
а с помощью "микроволновки" "разогреть" чего-нибудь.
[16.01.2018, 20:50:04] Alexey Shkumat: Задачу требуется решить двумя способами:
1. через классы
2. через прототипы.
*/


//Classes

class Machine {
  constructor(manuf, model, type) {
    this.manuf = manuf;
    this.model = model;
    this.type = type;
  }
}

class Microwave extends Machine {
  get heating() {
    console.log('Microwave is working...');
    setTimeout(console.log, 2000, 'food is warm now');
  }
}
class CoffeMachine extends Machine {
    get coffee() {
      console.log('CoffeMachine is working...');
      setTimeout(console.log, 1000, 'Coffee')
    }
}

myCoffeeMaker = new CoffeMachine('Samsung', 'cm-01', 'full-cycle');
myCoffeeMaker.coffee;
myMicrowave = new Microwave('LG', 'mw_01', 'plain');
myMicrowave.heating;
