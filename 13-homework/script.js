'use strict'

function Hamburger(hamburger) {
    this.price = hamburger.price;
    this.callories = hamburger.callories;
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}
Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30,
}
Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
}

Hamburger.TOPPING_SALAT = {
    price: 20,
    callories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10,
}

Hamburger.TOPPING_SPICES = {
    price: 15,
    callories: 0,
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}

Hamburger.prototype.addTopping = function(topping) {
    this.price += topping.price;
    this.callories += topping.callories;
}

Hamburger.prototype.getPrice = function () {
    return this.price;
}
Hamburger.prototype.getCallories = function () {
    return this.callories;
}

const smallHamburger = new Hamburger(Hamburger.SIZE_SMALL);
const mediumHamburger = new Hamburger(Hamburger.SIZE_MEDIUM);
const bigHamburger = new Hamburger(Hamburger.SIZE_BIG);

smallHamburger.addTopping(Hamburger.TOPPING_MAYO);
smallHamburger.addTopping(Hamburger.TOPPING_POTATO);
smallHamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with sauce: ${smallHamburger.getPrice()}`);
console.log(`Callories with sauce: ${smallHamburger.getCallories()}`);

