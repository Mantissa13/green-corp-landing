
let a = (" 4 " - 2);

console.log(a);

let b = ("4 " + 2);

console.log(b);

console.log(typeof a);

console.log(typeof b);

let c = Infinity;

console.log(typeof c);

alert(null + undefined);

console.log(error);

let error = "  !";

const error;
console.log(message);
message = "   !";

error = "  !";
console.log(error);
var error = "  !";

let d = (10 / "2");
console.log(d);


const name = "vera";

console.log("Добро пожаловать, " + name);
console.log(`Добро пожаловать, ${name}`);
console.log("Добро пожаловать, ${name}");
console.log('Добро пожаловать,' + name);
console.log('Добро пожаловать, ${name}');

let a = 10;
let answer = 10 != a ? "Yes" : "No";


let a;
switch (a) {
 case 0:
 console.log('0');
 case null:
 console.log('null');
 case undefined:
 console.log('undefined');
 default:
 console.log('default');
}

let a = ("string" + 4 + 2);

console.log(a);

let b = ("string " - 4 + 2);

console.log(b);

console.log(typeof a);

console.log(typeof b);


let f = ("4" + +"2");

console.log(f);

let r = ("4" + +"two");

console.log(r);

console.log(typeof f);

console.log(typeof r);


let i = 1; 
while (i <= 500) { 
console.log(i++); 
}

let word = "string";
for (let i = 0; i < 5; i++) { 
  word += "_1" ; 
  if (word == "string_1_1_1") { 
   continue;
  }
 console.log(word);
}

let price = 80000
function priceMessage(price) {
  console.log(`Данный товар стоит ${price} рублей!`);
}

priceMessage(price);

let num = 2;
let numA = Math.pow(num, 2);
console.log(numA);

let data = 'hello';
function getNumber(data) {

  if (typeof data !== 'string') {
    return 0
  }
  else (!isNaN(data) && !(parseFloat(data))) {
    data = Number
console.log(getNumber(data))
  }  

}
 
getNumber(data);

var obj = { a: 1 };

function f1(o) {
  o.a = 5;
}
f1(obj);
console.log(obj);

var obj = { a: 1 };

function f2(o) {
  o = { hello: 1 };
}

f2(obj);

console.log(obj);

let i;
for (i = 0; i <= 10; ++i) {
 }
console.log(i);

let obj1 = {
  name: "Anna"
};
let obj2 = obj1;
obj2.name = "Kate";

console.log(obj1.name);


for (let i = 5; i < 40; i += 5) {
  console.log(i);
}


let count;
for (let i = 10; i < 20; i++) {
  count = i + 1;
}
console.log(count);


let word = 'sparrow';
for (let i = 0; i < word.length; i++) {
  word += i;
  if (word[i] == 'r') break;
}
console.log(word);

const options = {
  color: 'red';
};
options.style.color

let i = 0; 
while (i <= 26) {
  console.log(i+=5);
}

let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2);

function favouriteColor(color) {
  message = "Любимый цвет: ";
  console.log(message + color);
 }
 
 let message = "Нелюбимый цвет: ";
 favouriteColor("красный");


 (function hello() {

  console.log('Привет!');
 })();


 let a = 1;
function f() {
  console.log(a);
  let a = 5;
}
f();


const userInfo = {
  name: "Илон",
  secondName: "Маск",
  email: "maskrules@mail.ru",
  phone: "88005553533"
};

for (let a in userInfo) {
  console.log(userInfo);
 }


 let array = [1, 2, 3];
console.log(array[-1]);


let array = [1, 2, 3];
console.log(array[-1]);
console.log(array[9999]);
console.log(array['Hello']);

let object = { 1: '1' };
console.log(object[-1]);
console.log(object[9999]);
console.log(object['Hello']);


let array1 = [1, 2, 3];
let array2 = array1;
array2[0] = 2;
console.log(array1);


let array = [4, 5, 6];
function f1(arr) {
  arr[0] = 'Oops!';
}
f1(array);
console.log(array);


const result = [];
result.push('World!');
result.unshift('Hello');
console.log(result);

function printReverseArray(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index]);
  }
}
printReverseArray(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])


let result1 = 0
for (let i = 0; i < list.length; i++) {
   let flag = true
	for (let j = 2; j < list[i]; j++) {
 if (i % j === 0) {
        flag = false
	break
    }
}
if (flag) {
result1 += list[i]
}
}
console.log(result1);


let objectArray = [{ name: 'Иван' }, { name: 'Петя' }, { name: 'Саша' }];
console.log(objectArray.toString());

let list = [2,45,3,23,6]
let result2 = [];
function count(list) {
 for (let i = 0; i < list.length; i++) {
    if (i % 2 == 0)
	result2.push(i);
  }
}
console.log(result2.length);


let list = [{"product":"Груша","price":30},
{"product":"Яблоко","price":54},
{"product":"Апельсин","price":49}]

  list.sort((a, b) => b.price - a.price);
  
console.log(list)