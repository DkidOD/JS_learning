// console.log("Hello world! I'm a new JavaScript learner !!! ;)")

/*
Name of variables

Good->
let userName = 'Valentin';
let myClass8 = 8;
let _name = 'Anton';
let $myVar = 'var';

Not recommended ->
let user_name = 'Valentin'
let UserName = 'Valentin'

Prohibited ->
let 8myClass = 8;
let my-Var = 'var';
let const = '1';

Deprecated variable 'var' 
We can use 'let' and 'const' instead 'var'

*/

/*
let a = 1
console.log(a);
a = 'test';
console.log(a);
*/

// Inline comment

/*
Two line
comment
*/

// Basic arithmetics operators

// Numbers

/*
const width = 10;
const height = 5;
const square = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2
const volume = 2 ** 3 // equal to  2 * 2 * 2 
console.log( volume );
*/ 

// Strings
/*
const city = 'Odessa'
const street = 'Sakharova'
console.log( city + ', ' + street + ' ' + 26);
*/


// Assignment operator

/*
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2
age++; // age = age + 1
age--; // age = age - 1
console.log(age);
*/

// Comparison operator

/*
const vasiliy  = 20;
console.log(age > vasiliy); // true
console.log(age >= vasiliy); // true
console.log(age < vasiliy); // false
console.log(age <= vasiliy); // false
console.log(age == vasiliy); // false
*/

/*
const isSuited = 100 - 10 > 90 - 5 ;
console.log(isSuited);
*/
// (priority of operations (weight))
// 100 - (12) 10 > (10) 90 - (12) 5
// 90 > 85 - true
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
/*
const a = (6 + 10) / 2;
console.log(a);
*/

/*
let b;
let c;
c = b = 100 + 50;
console.log(c); // 150
console.log(b); // 150
*/


// Types of data

// Objects:
/*
const user = {
 name : "Vasiliy",
 age : 18    
};
*/

//Primitives
// const age = 18
/*
1. Numbers 
const age = 18;

2. Strings
const surname = 'Popov'

3. Boolean
const isAdmin = true; // true of false

4. Undefined
const isAdmin = undefined;
let data;

5. Null - empty
let data = null;

6. Symbols
const admin = Symbol('Admin');

7. Big numbers - specialized type
const big = BigInt(99999999999999999);
*/

/*
let a = 5;
let b = 5.6;
console.log(typeof b);

let isAdmin = false;
isAdmin = a > 10;
console.log(typeof isAdmin);

let c;
console.log(typeof c); // undefined
c = 5;
console.log(typeof c); // number

let d = null;
console.log(typeof d); // object
console.log(d); // null 
console.log(d == null); // true
console.log(typeof (d == null)); // boolean
console.log(typeof d == null); // false
console.log(typeof d == 'object'); // true
console.log(typeof d == object); // object is not defined
*/
/*
let e = 'asd';
console.log(typeof e);
*/


 /*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

/*
let payPerHour = 80;
let totalRequestWorkHour = 40;
let beforeVacationDays = 11;
let workHoursPerDay = 5;
let weekend = 2;
let canWorkInHours = (beforeVacationDays - weekend) * workHoursPerDay;
let salary = totalRequestWorkHour * payPerHour;
console.log('Успеете ли вы взяться за работу? ' + (totalRequestWorkHour < canWorkInHours));
console.log('Сколько вы за неё попросите? ' + sallary +'$')
*/

// Answer from Course
/*
//Data
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

//Solution
console.log('Can I take this project in work? ' + (availableHours > projectHours));
console.log('Project salary: ' + projectHours * payRateUSD + '$');
*/

// Template strings Literal string
/*
const projectName = 'Shopping Mall Site';
const price = 2000;
const author = 'Valentin Banglagesh';
const template = author + ' buying ' + projectName + ' for ' + price + '$';
console.log(template);

const template2 = `${author} buying ${projectName} for ${price}$`
console.log(template2);

const template3 = 'Project \n' + 'Price: ' + price + '$ \n' + 'Buyer: ' + author;
console.log(template3);

const template4 = `Project
Price: ${price}$
Buyer: ${author}`;
console.log(template4);
*/

// Converting types of data
/*
const age = '18';
console.log(age + 5); // 185
console.log(Number(age) + 5); // 23  String to number Number()
console.log(age - 3); // 15
console.log(age / 3); // 6
console.log(age * 3); // 54
const userName = 'Valentin';
console.log(userName + 5);
console.log(Number(userName) + 5); // NaN
console.log(typeof NaN);

console.log(String(4) + 7); // 47 

console.log(Boolean(0)); // false 
console.log(Boolean(1)); // true

console.log(Boolean('')); // false
console.log(Boolean('asdsdasd')); // true 

console.log(Boolean('') + 10); // false + 10 = 10
console.log(Boolean('asd') + 10); // true + 10 = 11
console.log(true + 10); // true + 10 = 11

const a = 2 + '10'; // 210
console.log (a - 10); // 200
*/

// Conditional - true of false
/*
console.log(Boolean(0)); // false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(Number('sx'))); // false Number('sx') = NaN
console.log(Boolean(NaN)); // false
*/

 






