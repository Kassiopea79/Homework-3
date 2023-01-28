// task 1
let password = 'test';
let passwordResponse = prompt ("Введите пароль");
if (passwordResponse === password) {
    alert ("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

// task 2

let c = 15;
if (c > 0 && c < 10) {
    console.log ('True');
} else {
    console.log ('False');
}

let c = 0;
if (c > 0 && c < 10) {
    console.log ('True');
} else {
    console.log ('False');
}

let c = 10;
if (c > 0 && c < 10) {
    console.log ('True');
} else {
    console.log ('False');
}

let c = -3;
if (c > 0 && c < 10) {
    console.log ('True');
} else {
    console.log ('False');
}

let c = 2;
if (c > 0 && c < 10) {
    console.log ('True');
} else {
    console.log ('False');
}

// task 3

let d = 2;
let e = 115;
if (d > 100 || e > 100) {
    console.log ("True");
} else {
    console.log ("False");
}

// task 4

let a = 2;
let b = Number('3');
console.log (a + b);

let a = 2;
let b = 3;
console.log (a + b);

// task 5

let monthNumber = 12;
let monthNumberCheck = Number(prompt("What is the month number?"));
switch (monthNumber = monthNumberCheck) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Error");
    break;
}
