/*
let fractions = {
    a: 0,
    b: 0,
}

function summation(s){
    alert("Суммирование: " + (a/b + a/b))
}

summation()
*/
/*
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    }
    
    Fraction.prototype.add = function(otherFraction) {
    let resultNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
    let resultDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(resultNumerator, resultDenominator);
    }
    
    Fraction.prototype.subtract = function(otherFraction) {
    let resultNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
    let resultDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(resultNumerator, resultDenominator);
    }
    
    Fraction.prototype.multiply = function(otherFraction) {
    let resultNumerator = this.numerator * otherFraction.numerator;
    let resultDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(resultNumerator, resultDenominator);
    }
    
    Fraction.prototype.divide = function(otherFraction) {
    let resultNumerator = this.numerator * otherFraction.denominator;
    let resultDenominator = this.denominator * otherFraction.numerator;
    return new Fraction(resultNumerator, resultDenominator);
    }
    
    Fraction.prototype.reduce = function() {
    let gcd = function(a, b) {
    return b === 0 ? a : gcd(b, a % b);
    };
    let commonDivisor = gcd(this.numerator, this.denominator);
    return new Fraction(this.numerator / commonDivisor, this.denominator / commonDivisor);
    }
    
    // Пример использования
    let fraction1 = new Fraction(1, 2);
    let fraction2 = new Fraction(1, 3);
    
    let sum = fraction1.add(fraction2);
    console.log(sum);
    
    let difference = fraction1.subtract(fraction2);
    console.log(difference);
    
    let product = fraction1.multiply(fraction2);
    console.log(product);
    
    let quotient = fraction1.divide(fraction2);
    console.log(quotient);
    
    let reducedFraction = fraction1.reduce();
    console.log(reducedFraction);

    */
    let num1 = 1;
    let den1 = 5;
    let num2 = 3;
    let den2 = 15;
    let commonDen = den1 * den2;
    let newNum1 = num1 * (commonDen / den1);
    let newNum2 = num2 * (commonDen / den2);
    let res = newNum1 + newNum2;
    let gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    };
    let div = gcd(res, commonDen);
    res /= div;
    commonDen /= div;
    console.log(`${num1}/${den1} + ${num2}/${den2} is equal to ${res}/${commonDen}`);
    