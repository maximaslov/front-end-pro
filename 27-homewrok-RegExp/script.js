// Проверить что слово love встречается в строке:

let regexp = /love/;

alert( regexp.test('I love JavaScript') ); // true

alert( regexp.test('I JavaScript') ); // false

// Проверить что строка заканчивается на ing:

let regexp2 = /ing$/;

alert( regexp2.test('Good morning') ); // true

alert( regexp2.test('Good morning!') ); // false