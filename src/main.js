//alert("Hello from Javascript")
//confirm("Согласны, узнали?")


/* undefined - неинициализированные значения 
null - флаг отсутствия значений (либо нулевое значение)
bool (Boolean) - логический тип данных true  или  false
string  - последовательность символов (или символ) объединённых в структуру
number - число (любого вида). Внутри могут быть: NaN (Noy-a-Number), Infinity (-Infinity), +0 (-0).
object - представление объекта языка Javascript

Декремент:
++х или х++ <=> х+1

Инкремент:
--х или х-- <=> х-1

prompt() - ввод инфы, это метод (пробела нет!)
alert - вывод результата
if () - это условие (пробел есть!)

= - присваиванеи
== - проверка на соответсвие

*/


/* 
let ans;
ans = prompt("Введите код операции:");
if (ans == "6453") {
    alert("Молодец! Правильно!");
}
else {
    alert("Код неверный!");
}
*/
/* 
if (condition){
    statement
}
else{
    other statement
}
*/
/*
let x
x = prompt("Введите число:");
Number(x);
alert("Ваше число в квадрате: " + x **2)
*/
/*
Запросить 2 чмсла и посчитать их среднее арифметическое
*/

/*
let x, y, s;
x = prompt("Введите число:");
y = prompt("Введите число:");
x = Number(x);
y = Number(y);
s = (x + y) / 2;
alert("Ответ: " + s);
*/

/*
const mile = 0.621371;
let x, s;
x = prompt("Введите километры:");
x = Number(x);
s = x * mile
alert("Мили: " + s)
*/

/*
let input = prompt("Введите пятизначное число:");
//  0   1   2   3   4
//['1' '2' '3' '4' '5'] = '12345';
let last = input.slice(4);
let res = last + input.slice(0, 4); //диапазон интекса от 0 до 3, 4 не включается!
alert("Ваше число: " + res)
*/

/*
let x, y;
x = prompt("Введите число:"); // let x = Number(prompt("Введите число:")) - короткая запись
y = prompt("Введите число:");
x = Number(x)
y = Number(y)
res = (x + y);
res1 = (x * y);
res2 = (x / y);
res3 = (x - y);
alert("Сложение: " + res); 
alert("Умножение: " + res1);
alert("Деление: " + res2);
alert("Вычитание: " + res3);
*/

/*
window.onload = function() {
    function foo() {
        let x, a;
        const k = 4;
        x = Number(prompt("Введите число X:"));
        a = Number(prompt("Введите число A:"));
        y = k * x + a * x **2;
        alert("Result: " + y);
    }   
    foo()
}
*/

function calc(a, b, operation){
    if (operation == '+'){
        return a + b; 
    }
    else if (operation == '-'){
        return a - b;
    }
    else if (operation == '*'){
        return a * b;
    }
    else if (operation == '/'){
        
        if (b == 0){
            return 'На ноль делить нельзя!';
        } else {
            return a / b;
        }
    }
    else{
        return "Неизвестная операция";
    }
    
}
/*
window.onload = () => {
    let x = Number(prompt("Введите первое число: "));
    let y = Number(prompt("Введите второе число: "));
    let op = prompt("Введите операцию (+,-,/,*): ");
    let res = calc(x, y, op);
    alert("Результат операции: " + res);

}
*/

function calcPaS(){
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let res = calc(x, y, op);
    alert("Результат: " + res);

}

window.onload = () => {
    let buttonCalc = document.getElementById("calculator");
    buttonCalc.addEventListener('click', calcPaS);


}




