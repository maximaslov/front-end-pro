'use strict'

const calc = new Calculator(100);

function Calculator(base) {
    this.base = base;
    this.add = function(n) {
        isNaN(n) ? base : this.base += n;
    }
    this.sub = function(n) {
        isNaN(n) ? base : this.base -= n;
    }
    this.set = function (n) {
        isNaN(n) ? base : this.base = n;
    }
    this.get = function () {
        base = this.base;
    }
}

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add('qwe');
console.log(calc.base); 
calc.get();
console.log(calc.base);