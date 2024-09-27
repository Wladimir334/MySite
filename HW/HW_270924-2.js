
    let A  = +prompt('Введите числитель1: '); 
    let B  = +prompt('Введите знаменатель1: ');
    let C  = +prompt('Введите числитель2: ');
    let D  = +prompt('Введите знаменатель2: ');

    let FrAdd = {}
    function Add(FrAdd) {
        addition = ((A/B) + (C/D));
        const rounded = (addition).toFixed(2);
        alert("Сложение: " + rounded);

    }
    
    let FrSub = {}
    function Sub(FrSub) {
        subtraction = ((A/B) - (C/D));
        const rounded = (subtraction).toFixed(2);
        alert("Вычитание: " + rounded);
    }

    let FrMul = {}
    function Mul(FrMul) {
        multiplication = ((A/B) * (C/D));
        const rounded = (multiplication).toFixed(2);
        alert("Умножение: " + rounded);
    }

    let FrDiv = {}
    function Div(FrDiv) {
        division = ((A/B) / (C/D));
        const rounded = (division).toFixed(2);
        alert("Деление: " + rounded);
    }

    Add(FrAdd);
    Sub(FrSub);
    Mul(FrMul);
    Div(FrDiv);

