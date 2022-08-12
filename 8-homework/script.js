'use strict'

function createCalculator(base) {
    const oirginalBase = base;
    return {
            add: n => isNaN(n) ?  base : base +=n,
            sub: n => isNaN(n) ?  base : base -=n,
            set: n => base = n,
            reset: () => oirginalBase,
            get: () => base = base
    }
}

const calculator = createCalculator(100);

calculator.add(10); 
calculator.add(10); 

console.log(calculator.get())

calculator.sub(20);

console.log(calculator.get())

calculator.set(20);
calculator.add(10);
calculator.add(10);
console.log(calculator.get());
calculator.add('qwe'); 
console.log(calculator.get());
console.log(calculator.reset())