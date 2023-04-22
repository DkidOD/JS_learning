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

// if else
/*
const money = 100;
const canBuy = money > 50;

if (money > 50){
    console.log('Can buy our product');
} else if (money > 5) {
    console.log('Can buy MINI product');
} else {
    console.log('No enough money')
}
*/

// Task - Putting deposit

/*
Description

The man put 12 000$ with rate 7% per year
with capitalization 1 time per month.

Give output in console, can he buy a house 
for 13 500$ in 2 years after taking deposit. 
And remains of money after buying.

Total = Summa * (1 + rate in month not in %) ^ time in month;
*/

/*
// calc per formula given by course
const deposit = 12000;
const ratePerYear = 7;
const housePrice = 13500;
const rateInMonth = 7 / 12 / 100;
const periodInMonth = 24;
console.log(rateInMonth);
let total;
total = deposit * (1 + rateInMonth) ** periodInMonth;
console.log(total);

// my calc
let calculations = 12000;
for (i = 0 ; i != 24 ; i ++ ){
    calculations = calculations + calculations * rateInMonth;
}
console.log(calculations);

let house = total > housePrice;
let remains = total - housePrice;
const template5 = `If the man putting ${deposit}$ for ${periodInMonth} month
He can buy House :${house} and he will have remains of cost ${remains}$`
console.log(template5);
*/

// Course solution
/*
const deposit = 1000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost){
    console.log(`Collected ${res} Can buy. Remains ${res - houseCost}$`)
} else {
    console.log(`Collected ${res}. Can not buy the house (((`)
}
*/

// Equality operators
/*
const secretNumber =  '7';

if (secretNumber === 7){  //strong '===' string not equal number
    console.log('You reach!!! STRONG'); // if number 7 
}

if (Number(secretNumber) === 7){ // to number
    console.log('You reach!!! STRONG'); 
}

if (secretNumber == 7){  
    console.log('You reach!!! NOT strong'); // if string 7
}
*/
/*
const q = Number(prompt('Write a number: '));
if (q === 7){  
    console.log('You reach!!! STRONG'); 
}
*/

// SWITCH Statements
/*
const role = 'admin';

if (role === 'manager') {
    console.log('Manager');
} else if (role === 'admin') {
    console.log('Administrator');
} else if (role === 'ceo') {
    console.log('CEO');
} else {
    console.log('Who are you, stranger???')
}

switch (role){
    case 'manager': // role === 'manager'
        console.log('Manager');
        break;
    case 'admin':
        console.log('Administrator');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('Who are you, stranger???');
}
*/
/*
const role = 'manager';
switch (role){ 
    case 'manager': // role === 'manager'
        console.log('Manager'); //  in case manager - true
    case 'admin':
        console.log('It is not boss'); //  in case manager - true
        break;
    case 'ceo':
        console.log('Boss');
        break;
    default:
        console.log('Who are you, stranger???');
}
*/
/*
const num = 0;

 switch (true){
    case num > 0: // true === num > 0
        console.log('Positive +');
        break;
    case num < 0:
        console.log('Negative -');
        break; 
    default:
        console.log('Yes! It is ZERO !)')
}
*/

// Ternary operators
/*
const bmwX3Price = 100000; // 100k
const fordFocusPrice = 10000; // 10k 
const budget = 1000; // 20k

let message;

if (budget >= bmwX3Price){
    message = 'BMW';
} else if (budget >= fordFocusPrice) {
    message = 'Ford';
} else {
    message = 'Bicycle';
}
console.log(`I wanna buy a ${message}!!!`)

if (budget > bmwX3Price){
    message = 'BMW';
} else {
    message = 'Bicycle';
}
console.log(`I wanna buy a ${message}!!!`)

const newMessage = budget > bmwX3Price ? 'BMW': 'Bicycle';
console.log(`I wanna buy a ${newMessage}!!!`);

console.log(`I wanna buy a ${budget > bmwX3Price ? 'BMW': 'Bicycle!!!!'}!!!`);

let message2 = budget > bmwX3Price ? 'BMW': budget > fordFocusPrice ? 'Ford' : 'Bicycle :)'
console.log(`I wanna buy a ${message2}!!!`);


if (-10 > 0){
    console.log('Greater that zero');
} else {
    console.log('Not greater that zero');
}


10 > 0 ? console.log('Greater that zero'):console.log('Not greater that zero');

const str = -10 > 0 ? 'Greater that zero': 'Not greater that zero';
console.log(str);
*/

// Practice. Exercise - Checking of robot

/*
Taking data from user using prompt. We will asking
"How much it will be 7 + or - 15?"
If answer are correct write in console 'Good', 
if not - 'You are a robot technologies! :)',
but if he write "I am not robot", it will be also 'Good'
*/

/*
let input = prompt("How much it will be 7 + or - 15?");

switch(input){
    case 'I am not robot':
    case '22': 
    case '-8': 
        console.log('Good');
        break;
    default:
        console.log('You are a robot technologies! :)')
}
*/

// Courses solution
/*
let res = prompt("How much it will be 7 + or - 15?");

switch(true){
    case res === 'I am not robot':
    case Number(res) === 22: 
    case Number(res) === -8: 
        console.log('Good');
        break;
    default:
        console.log('You are a robot technologies! :)')
}

if (res === 'I am not robot'){
    console.log('Good');
} else {
    const numRes = Number(res);
    switch (numRes){
        case 22: 
        case -8: 
        console.log('Good');
        break;
    default:
        console.log('You are a robot technologies! :)')   
    }
}
*/

// Chapter 6
// Boolean logics
/*
AND => && - a and b // true if a=true and b=true
OR => || - a or b // true if a or b = true // false id both are false
NOT A => ! - // true to false or false to true inverting
*/

// Operators of boolean logics.
/*
const isAdmin = true;
const canWrite = true;

console.log(`System file ${isAdmin && canWrite}`)
console.log(`User file ${isAdmin || canWrite}`)
console.log(`Inverting admin permission ${!isAdmin}`)

const isEdited =  true;
const isSuperAdmin = false;

console.log(`System file with editing  ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`)
*/

// Operators with other types

/*
console.log ('Mariya' || 'John'); // true true // Mariya
console.log (false || 'John'); // false tue // John
console.log ('Mariya' || false); // true false // Mariya
console.log (false || false); // false false // false

console.log ('Mariya' && 'John'); // John
console.log (false && 'John'); // false
console.log ('Mariya' && false); // false
console.log (false && false); // false

let a = 'Can';
const userName = a || 'Alfred';
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && `file_${userName}.mp4`; // true || file.mp4 
console.log(fileName); // file.mp4 
*/

// Null merge operator
/*
let userName = 0;
console.log(userName || 'Default UserName'); // Default UserName
console.log(userName ?? 'Default UserName'); // '' // null and undefined -> Dafault UserName
*/

// Practice. Exercise - Game buyer
/*
User want to buy a game.
He can make it if:
-   Balance is more that 1000 (balance) 
    or Bonus balance more that 100 (bonusBalance);
-   Not banned (isBanned); // not banned - false
-   Game is not bought (isExist); // is Exist - true
-   Game is selling (isSelling); // is Selling - true

Write cases for buying and output result in console;  
*/
/*
//My suggestion
const balance = 1000;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;
const canOrNot = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
canOrNot ? console.log('Can buy :) ') : console.log ("Can't buy :(" )
//console.log(canOrNot);
*/

// Courses solution
/*
const balance = 1000;
const bonusBalance = 101;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) 
                && !isBanned 
                && !isExist 
                && isSelling;
console.log(`Can I buy a game?: ${canBuy ? 'Yes' : 'No'}`);
*/


// Chapter 7
// Intro in functions

// function - key word
// fromMilesToKm - name of function
// (miles) - argument
// return - returned argument

/*
function fromMilesToKm (miles){
    const km = miles / 0.6137;
    return km;
} 

console.log(fromMilesToKm(600));
*/
/*
function logName(name, surname){
    console.log(`My name is ${name} ${surname} !`)
}
logName('Alex','Odessov');
*/

let a = 301012345678909786950437382910473n;
let b = a / 97n;

console.log(a);
console.log(b);


