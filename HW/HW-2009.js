/*
x = prompt("Введите ваше имя: ");
alert("Привет," + x); 
*/

/*
const age = 2024;
x = prompt("Введите ваш год рождения: ");
alert("Ваш возраст: " + (age - x));
*/

/*
let x = Number(prompt("Введите сторону кватрата:"));
alert("Периметр квадрата: " + (x + x + x + x));
*/

/*
const Pi = 3.14159; 
let x = Number(prompt("Введите радиус круга:"));
alert("Радиус круга: " + Pi * (x ** 2));
*/

/*
let x = Number(prompt("Расстояние между городами, км: "));
let y = Number(prompt("За какое время нужно доехать, ч: "));
alert("Скорость: " + x / y + " км/ч");
*/

/*
const Doll = 0.90; 
let x = Number(prompt("Введите сумму в долларах:"));
alert("Сумма в евро: " + Doll * x + " EUR");
*/

/*
const fl = 820;
let x = Number(prompt("Введите объем флешки в Гб: "));
let y = Math.floor(x * 1000 / fl)
alert("Количество файлов размером в 820 Мб: " + y);
*/

/*
let x = Number(prompt("Введите сумму денег: "));
let y = Number(prompt("Введите стоимость одной шоколадки: "));
let choco = Math.floor(x / y);
let sd = Number(x - (y * choco));
alert('Количество шоколадок, которые можно купить: ' + choco);
alert('Сдача: ' + sd);
*/

/*
let x = prompt("Введите трёхзначное число: ");
let y = 0;
for(; x; x = Math.floor(x / 10)) {
    y *= 10;
    y += x % 10;
}
alert('Число наоборот: ' + y);
*/


function check(num) {
    return  parseInt(num)&1 ?  "нечётное" : "чётное" ;
  }
  const n = prompt("Введите целое число.");
  alert(check(n));



