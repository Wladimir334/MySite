/* ООП (объектно-ориентированное программирование)
    1.Инкапсуляция
    2. Наследование
    3. Полиморфизм
    */

//let user = new Object();
/*let user = {
    name:"Vlad",
    age: 27,

};

console.log(user.name);
console.log(user["age"]);

user.isAdmin = true
delete user.age

console.log(user);
*/

/*let fruit = prompt('enter your favorite fruit: ');

let user = {
    name: "Vlad",
    surname: "Ivanov",
    age: 46,
    city: "SPb",
    weight: 100,
    nationality: "Russian",
    alive: true,
    [fruit]: 'favorite',

}

console.log(user);
*/


let rectangle = {
    A: 0, /*или вместо 0 написать ""  */
    B: 0,
    C: 0,
    D: 0,
}

function set_rectangle(o) {
    A = prompt('Enter coordinate first point: ');
    o.A = A;
    B = prompt('Enter coordinate second point: ');
    o.B = B;
    C = prompt('Enter coordinate third point: ');
    o.C = C;
    D = prompt('Enter coordinate fours point: ');
    o.D = D;
}

function rectangleInfo(o){
    alert(`Точка A: (${o.A})\nТочка В: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`);
}
    

/*
let getWidth = {
    A: 0, 
    B: 0,
    C: 0,
    D: 0,
}

function getWidth(o) {
    A = prompt('Enter coordinate first point: ');
    o.A = A;
    B = prompt('Enter coordinate second point: ');
    o.B = B;
    
}

function getWidth(o){
    alert(`Ширина прямоугольника: ${Number(o.B[0]) - Number(o.A[0])}`);
}

function getArea(o) {
    alert(`Периметр равен: ${
        (Number(o.B[0]) - Number(o.A[0]))*2 +
        (Number(o.B[0]) - Number(o.D[0]))*2
        }`
    );
}
    */

