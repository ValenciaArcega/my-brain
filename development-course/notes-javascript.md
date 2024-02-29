# JavaScript

JavaScript was consider an interpretated language, however is a just in time (JIT) compilation language.

---

To write secure code

    "use strict"

### Messages

To print a message in console and also custom the entire message we can use

```js
console.log(`%c` + "", `font-size: 1.65rem; color: #e599f7;`);
```

Or we can also use alerts (those are **async**, _more on that later_)

```js
alert("Hello world");
```

### Comments

```js
// this's a single line comment

/*
 * this is a multiple line comment
 */
```

## Variables and data types

```js
let myFirstVariable;

const myFirstConstant = "Hello world 🌎!";
```

### Declare variables

JavaScript has weak and dynamic typing so we dont have to specify the type, instead we use...

#### `let` and `const`

```js
let a = 30;
// let allows variable mutate
a = "Change to a string";

// const thisIsAnError; ❌
const b = "Must be inizialized";
```

### The 7 primitives data types

```js
// String
let name = "Angel";

// Numeric (decimals & integers)
let $age = 22;

// Boolean
let _has_car = false;

// Undefined
let declareTheVariable;

// Null
let isEmpty = null;

// Symbol
let keyUnique = Symbol("foo");

// BigInt (larger integer)
let largerInteger = 2n;
```

To know the type of a variable we have to use the `typeof` keywork.
There are some wear 🐞 bugs in the language like:

```js
console.log(typeof null);
// will return 'object'
```

### Type conversion (manually)

```js
const toNumber = Number(year) + 18;

const toString = String(year);

// rarely use
const toBoolean = Boolean(year);
```

### Type coercion (automatic)

```js
const year = `1991`;
console.log(year + 18);
// this just concatenate so...199118

const b = `10` - 5; // 5 Number
```

### Operators

```js
const year = "2001";
const result = year - 10;

console.log(result, result ** 3);
```

Short operating

```js
let x = 5 + 10;

x += 10; // x = x + 10

x *= 10; // x = x * 10

x /= 10; // x = x / 10
```

Add and substract

```js
x++;

x--;
```

Concat strings

```js
const myName = "Angel";
const mySurname = "Arcega";

console.log(myName + " " + mySurname);
```

## Working with strings

```js
const myName = "Luis Angel";
const myAge = 2023 - 2001;
```

### Template literals or string literals

Backticks are amazing! donot more restrictions and we can use nextline spaces: `\n` and also **ternary operator** or variables (_any expression actually_) `${foo ? : \n}`

```js
const phrase = `Text ${scapeJS} or ${variable}`;
```

## Control structure

```js
const a = 19;

if (a >= 18) console.log(true);
else {
  const ageToWait = 18 - a;
  console.log(`Wait ${ageToWait} years to pass`);
}

const b = NaN;
// everything in the parethesis will convert in boolean
if (b) {
  console.log(true);
} else {
  console.log(false);
}
```

### NaN

Not a number (NaN) but really means "_an invalid number_", but the type still being one, how?

```js
typeof NaN; // number
```

### The 6 falsy values

```js
0, NaN, "", undefined, null, false;
```

## Boolean logical operators

AND | OR | NOT

```js
const hasDriversLicense = true;
const hasGoodVision = false;

// AND: both statements has to be true
hasDriversLicense && hasGoodVision;

// OR: one or other, but just one
hasDriversLicense || hasGoodVision;

// NOT: invert the true/false values
!hasGoodVision;
```

### Switch statement

```js
const day = `sunday`;
switch (day) {
  case "monday":
    console.log(`today is ${day}`);
    // without break, code continious executing
    break;
  case "tuesday":
    // ...
    break;
  case "wednesday":
    // ...
    break;
  default: // the else
    console.log("No one or other day");
}
```

## Statements

```js
// a statement (cannot be in a template literals)
if (1999 > 2000) {
}

// for loops, switch case ...
```

## Expressions

### The conditional ternary operator

Can be use, in template literals

```js
const a = 17;

a >= 18 ? console.log(true) : console.log(false);

// or multiple conditions
a >= 18 ? console.log(true) : a == 16 ? console.log("") : console.log("");
```

## Fundamentals part 2

## `Functions`

A pience of code that we can reuse to avoid _DRY = Donot Repeat Yourself_

```js
function add(a, b) {
  // a & b are paramethers

  // function body...

  // to end the fn (optional)
  return a + b;
}
```

`calling` | `invoking` | `running`

```js
add(5, 10); // 5 & 10 are arguments
```

### The 3 ways to use a function

Function declaration

```js
// can be invokate before declare it
calcAge01(2002);

function calcAge01(birthday) {
  return 2024 - birthday;
}
```

Function expression

```js
const calcAge02 = function (birthday) {
  return 2023 - birthday;
};

calcAge02(2001);
```

Arrow functions

```js
const calcAge03 = (birthday) => 2023 - birthday;

calcAge03(2001);
```

### Example #1

```js
const calcRetirement = (birthday, firstName) => {
  const age = 2023 - birthday;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

calcRetirement(2001, `Angel`);
```

### Example #2

```js
function fruitProcessor(apples, oranges) {
  console.log(`There're ${apples} apples, and ${oranges} oranges`);
}

fruitProcessor(5, 2);
```

Functions calling other functions

```js
const cutPieces = (fruit) => fruit * 4;

const fruitMachine = (apples, oranges) => {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  return `are ${applePieces} apple pieces and are ${orangePieces} orange pieces`;
};

fruitMachine(2, 4);
```

To return an object inline we have to use `( {} )`

```js
const returnObj = () => ({ key: "value" });
```

## Data Structures

## `Arrays`

```js
const arr = [0, 1, 2, 3, 4];
const otherWay = new Array(3);

// to mutate an element of the array
arr[2] = "Christian";

// to declare the last value of the array
arr[arr.length - 1];

// array methods (overview)
arr.length
  .push("new item") // add to the end
  .pop() // delete the last one
  .unshift("") // add to the beginning
  .shift() // delete the first one
  .indexOf("some") // get the index
  .includes("some"); // check if exist
```

## `Objects`

```js
const user = {
  firstName: "Luis",
  lastName: "Arcega",
  occupation: "Software Developer",
  birthYear: 2001,
  hobbies: ["code", "learn", "speak english"],
  hasDiversLicence: false,
  calcAge: function () {
    user.luisAge = 2024 - this.birthYear;
    return this.luisAge;
  },
};
```

To see or add new values into an object we can use both notations
`Dot notation`

```js
user.firstName;
user.calcAge();
user.location = "Mexico";
```

```js
user.propertyThatDoesNotExist; // undefined
```

`Bracket notation`

```js
user["firstName"]; // here we can make operations or any expression
user["calcAge"](user.birthYear);
user["instagram"] = "valencia.arcega";
```

### The power of ternary operator

❌

```js
if (user.hasDiversLicence) {
  console.log(
    `${user.firstName} is a ${user.calcAge()} years old ${
      user.ocuppation
    } and he has a driver's license.`
  );
} else {
  console.log(
    `${user.firstName} is a ${user.calcAge()} years old ${
      user.ocuppation
    } and he has no driver's license.`
  );
}
```

✅

```js
console.log(
  `${user.firstName} is a ${user.calcAge()} years old ${
    user.ocuppation
  } and he has ${user.hasDiversLicence ? "a" : "no"} driver's license.`
);
```

## Control structures: Loops

Keeps running while the condition is true

### for

```js
// lopping arrays
const arr = ["Luis", "Valencia", 21, "Developer", ["Chris", "Brandon"]];
const emptyArr = [];

for (let i = 0; i < arr.length; i++) {
  emptyArr.push(typeof arr[i]);
  // console.log(emptyArr);
}

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") continue; // jump to the next iteration
  // console.log(`Element ${arr[i]}, is a ${typeof arr[i]}`);
}

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") break; // until a number is gonna stop
  // console.log(`${arr[i]}`);
}

// ==> backwards
for (let i = arr.length - 1; i >= 0; i--) console.log(i, arr[i]);

// ==> loop inside a loop (nested for)
for (let k = 1; k <= 2; k++) {
  console.log(`------ Starting exercise ${k}`);
  for (let rep = 1; rep <= 3; rep++) {
    console.log(`Exercise ${k}: Repetition ${rep}`);
  }
}
```

### while

```js
let dice = Math.trunc(Math.random() * 7) + 1;

while (dice !== 6) {
  console.log(`U got ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) break;
}
```

### Execusion context : variables environment

Scopes : `The scope chain`

### Types of Scope

**Global Scope**: outside of any function or code block

```js
const c = "Im a in global scope";
```

Variables inside are in **local scope** or **function scope**: only avaliable there inside, not outside

```js
function some() {
  const b = 0;

  if (b == 0) {
    // cannot be used outside 'let' and 'const'
    const c = "Im c in a if";
    // var can be used outside
    var d = "Im d in a if";

    console.log(c);
    // find in 'scope chain' until find the variable
  }

  console.log(d); // ✅
  console.log(c); // Reference error
}
```

### Functions scoping

```js
console.log(funcDeclaration(2, 3));
// we get 5

console.log(funcExpression(2, 3));
// we cannot get before declaration

console.log(funcArrow(2, 3));
// we cannot get before declaration, however if we use 'var' to declare a function expression or arrow we'll get the error "is not a function"

//////// 1 //////////
function funcDeclaration(a, b) {
  return a + b;
}
//////// 2 //////////
const funcExpression = function (a, b) {
  return a + b;
};
//////// 3 //////////
const funcArrow = (a, b) => a + b;
```

## Best practices

To recap, the best practices of scopes topic

- Donot use `var`, use `const` or `let` if we really want to mutate the value or type
- Write the variables at the very top
- Use function after the declaration
- Add an script tag on...

❌

```js
    if (head)
    👉 parcing HTML by the browser
    👉 fetch script
    👉 execute
        .then(waiting...)
    👉 finish parcing
        .then(DOMContentLoaded)
```

✅

```js
    if (body end)
    👉 parcing HTML
    👉 fetch and execute
        .then(DOMContentLoaded)
```

### The `this` keyword

```js
const obj = {
  age: 21,
  funcCalcAge() {
    return this.age + 5;
  },
};
// the arrow fn cannot get their own this keyword
```

## JS Dictionary 📙

- A **bug** is a defect or problem in a computer program, basically, any unexpected or unintended behavior of a software.

## Destructuring arrays

Break a complex data structure into a small data structure, like variables.

```js
const arr = [2, 3, 4];
const wrongWay = arr[1];
// ☝️ doing like this can be tricky if we have tons of data so... the sintaxis for the destructuring assigment is: [ ]
const [x, y, z] = arr;

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 Firenze Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Fococcia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // somethimes we have a lot of paramethers into a function
  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = "16:00" }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // so...
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});

let [a, , b] = restaurant.categories;
console.log(a, b); // => to reassign: [a, b] = [b, a]

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
```

### Nested destructuring

```js
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
const [i, , [j, k]] = nested;

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
```

## Destructuring objects

```js
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// rename properties
const { name: aNewName, openingHours: hours, categories: tags } = restaurant;
console.log(aNewName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
let e = 12;
const obj = { a: 23, b: 21, c: 65 };

console.log(a); // 111
({ a, b, e = 70 } = obj);
// ☝️ parenthesis to override obj values on variables
console.log(a, b, e); // 23 21 70

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
```

## Spread operator

Spread operator works wiv any iterables _except objects_

```js
const arr = [7, 8, 9];
```

❌

```js
const arrNoSpread = [1, 2, arr[0], arr[1], arr[2]];
```

✅

```js
const arrWithSpread = [1, 2, ...arr];

console.log(...arrSpread);
```

```js
const newMenu = [...restaurant.mainMenu, "Gnocci"]; // here we are not manipulating the original, we are creating a new array

// copy an array
const copyMenu = [...restaurant.mainMenu];

// join 2 arrays
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

const myNamewithSpread = "Angel";
console.log(...myNamewithSpread);

const ingredientsByPrompt = ["a", "b", "c"];
restaurant.orderPasta(...ingredientsByPrompt);

// spread on objects
const restaurantCopy = { ...restaurant };
const newRestaurant = {
  foundedIN: 1998,
  ...restaurant,
  founder: "Guiseppe",
};

newRestaurant.name = "Ristorante Roma";
```

## Rest pattern

Does the opposite to the spread (_unpack an array_) and the rest pattern (**pack elements into an array**)

> SPREAD because is on RIGHT of the = symbol  
>  REST because is on LEFT of the = symbol

## Destructuring

```js
// destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// functions
let sum = 0;
const data = [1, 2, 3, 4];
function fnWithREST(...argUndefined) {
  // rest arguments to unpack
  for (let i = 0; i < argUndefined.length; i++) sum += argUndefined[i];
  console.log(sum);
}
fnWithREST(...data);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
```

## Short circuiting `||` and `&&`

```js
// OR: first true value will be printed
console.log(3 || "Angel");
console.log("" || "Luis");
console.log(true || 0);
console.log(undefined || null);

// AND: first falsy value will be printed
console.log(10 && null);
console.log(false && 10);
```

## The nullish coalescing operator `??`

Nullish values are JUST `null` and `undefined`

```js
const user = { name: "Luis" };
const keyToTest = user.age ?? 21;
// ☝️ if the key doesnot exist in the object gonna return 'undefined' so the NCO going to be in action

console.log(keyToTest); // 21
```

### Logical assignment operators `__=`

```js
const obj1 = { numGuests: 0 };
const obj2 = { owner: "Angel Valencia" };
// OR assignment operator
obj1.numGuests = obj1.numGuests || 10;
obj2.numGuests ||= 10; // 10

// AND assignment operator (first falsy value)
obj2.owner &&= "<ANONYMOUS>";

// Nullish assignment operator
obj2.numGuests ??= 10; // 10
```

---

### Looping arrays: the for-of loop

```js
const names = ["Karla", "Luis", "Gabi", "Sandra"];
for (const i of names) {
  console.log(i);
}
for (const [index, element] of names.entries()) {
  console.log(`${index + 1}. ${element}`);
}
```

## Enhanced object literals

```js
// add an external object inside just setting the name as a property (after declaration)
// delete ': function' is new
// set the name of properties using '[]' and here u can compute everything, for example:
const name = "Vaca";
const object = {
  [`La${name}`]: true,
};

console.log(object.LaVaca ?? "Not defined"); // true
```

## Optional chaining `?.`

```js
const obj = {
  name: "Angel",
  email: "luis@tesco.io",
  days: {
    fri: { start: 8 },
    sat: { start: 9 },
    sun: { start: 11 },
  },
};

console.log(obj?.somethingRandom ?? "User array empty");

// the Nullish Coalescing Operator and optional chaining working together are extremely powerfull
const days = ["mon", "tue", "wed"];

for (const i of days) {
  let a = obj?.days[i]?.start ?? "no hour, because is not study day";

  console.log(`On ${i}, study at ${a}`);
}

// methods
obj.function?.(0, 1) ?? "fn doesnot exist";
```

## Looping objects (indirect way cuz they aint iterables)

```js
const obj = {
  name: "luis",
  age: 18,
  occupation: "student",
};

Object.keys(obj);
Object.values(obj);
Object.entries(obj);

const user_keys = Object.keys(obj);
const user_values = Object.values(obj);

let text = `We have ${user_keys.length} data from the user; the: `;

for (const i of user_keys.values()) {
  console.log((text += `${i}, `));
}

// entire object
for (const [key, value] of Object.entries(obj)) {
  console.log(`The ${key} is ${value}`);
}
```

## Sets

```js
const arr = [1, 2, 3, 1, 2, 3];
new Set(arr).size
  .add(4)
  // booleans
  .has(5)
  .delete(1)
  .clear();

// destructuring + rest + spread + sets
const [a, ...others] = [...new Set(arr)];

console.log(a, others);
```

## Maps

```js
const map = new Map()
  .set("name", 2)
  .set(10, 78)
  .set(false, "Im false")
  .get(10)
  .clear()
  .size // booleans
  .has(10)
  .delete("age");

// example wiv short circuiting
let time = 15;

console.log(map.get(time < map.get("some") && time > map.get(15)));
```

## String

```js
const name = "  Luis angel Valencia Arcega ";
name.length
  .indexOf("some") // returns an index
  .lastIndexOf("some")
  .slice(3, 7)
  // string methods are case sensitive so...
  .toLowerCase()
  .toUpperCase()
  .trim() // white spaces n jump lines
  .trimEnd()
  .trimStart()
  .replace("the value to replace", "some new value")
  .replaceAll() // all ocurrences
  .split(" ")
  .join(" ") // opposite of split and use for arrays
  .padStart(45, "+") // the length and the fill
  .padEnd()
  .repeat()
  // booleans
  .includes("some")
  .startsWith("Lui")
  .endsWith("rcega");

// example
const capitalizeName = (name) => {
  const partsOfName = name.trim().toLowerCase().split(" ");
  const arr = [];

  for (const i of partsOfName) {
    // arr.push(i[0].toUpperCase() + i.slice(1))
    // arr.push(i.replace(i[0], i[0].toUpperCase()));
  }
  console.log(arr.join(" "));
};

// example
const str =
  "underscore_case \n   Some_Variable \n  calculate_AGE \n casa_VOlanda";
const rows = str.split("\n");

for (const i of rows) {
  const [a, b] = i.trim().toLowerCase().split("_");
  const output = `${a + b.replace(b[0], b[0].toUpperCase())}`;

  console.log(output);
}
```

## `Functions (part 2)`

```js
// default parameters
const funDefArgs = (a = 1 * 3, b = 2, c = 3) => console.log(a, b, c);
funDefArgs(5, undefined, 3); // 5, 2, 3
funDefArgs(5, 56); // 5, 56, 3

// how passing arguments works: Value vs.Reference
const fligth = "2H987";
const user = {
  name: "Luis Valencia",
  passport: 213921839812,
};
const funSome = (numF, passenger) => {
  numF = "new Value";
  passenger.name = "Mr " + passenger.name;
  passenger.passport === 213921839812
    ? console.log("yep")
    : console.log("nope");
};
funSome(fligth, user);
console.log(fligth); // not alterate cause works wiv value
console.log(user); // JS work wiv the same object in function cause is passed by reference
// every JS works wiv values, even if looks like reference

// high order function
const noSpaces = (str) => str.trim().replaceAll(/ /g, "");
const upperFirstLetter = (str) => {
  const [firstWord, ...other] = str.trim().split(" ");
  return [firstWord.toUpperCase(), other].join(" ");
};

// high-order function
const daddyFun = (str = "".trim(), fun) => {
  console.log(`The original string is: ${str}`);
  console.log(`Altered text is: ${fun(str)}`);
};
daddyFun("hola me llamo pedro   ".trim(), upperFirstLetter);

// function Methods
const restaurantOne = {
  name: "Italianis",
  orderCode: "IT-",
  orders: [],
  order(orderNumber, customer) {
    console.log(
      `Well ${customer}, your order from ${this.name} is set with the code ${this.orderCode}${orderNumber}`
    );
    this.orders.push({
      orderCode: `${this.orderCode}${orderNumber}`,
      customer,
    });
  },
};
const restaurantTwo = {
  name: "La casa de Toño",
  orderCode: "CTñ-",
  orders: [],
};

const storedFunction = restaurantOne.order;

storedFunction.call(restaurantTwo, 123456789, "Karla Vega");

const bindMethod = storedFunction.bind(restaurantTwo);
bindMethod(232345, "Sofia");

// this keyword gonna take the handler parent (the HTML object)
document
  .querySelector(".buy")
  .addEventListener("click", restaurantOne.order.bind());

// partial application
const addTax = (rate, value) => value + value * rate;
addTax(0.1, 200);

const addVAT = addTax.bind(null, 0.23);
addVAT(23);
```

## Working with arrays

### `Array methods `

```js
// arrays are objects, thats why can recive methods
const arr = [0, 1, 2, 3, 4, 5, 6];

// create a copy
arr.slice();
arr.slice(1, -2); // [ 1, 2, 3, 4 ] does not mutate the OA

arr.splice(3); // delete ==>  3, 4, 5, 6 n mutate the OA
arr; // [ 0, 1, 2 ]
// if recives 2 paramethers, the second one gonna be the lenght of elements to remove
arr.splice(2, 4); // [ 2, 3, 4, 5 ]
arr; // [ 0, 1, 6 ]

const a = ["a", "b", "c", "d", "e"];
const b = ["j", "i", "h", "g", "f"];
b.reverse(); // mutate the OA
const c = a.concat(b); // does not mutate the OA
c.join(" "); // does not mutate the OA
a.at(0);
a.at(-1); // last element of array

// .forEach()
arr.forEach(function (el, index, arr) {
  console.log(index, el, arr);
});
// .forEach() for maps and sets
new Map([
  ["name", "luis"],
  ["age", 18],
]).forEach(function (value, key, map) {
  console.log(key, value, map);
});
new Set(["a", 12, 12, 13, "a"]).forEach((el, _, map) => {
  console.log(el, map);
});
// 'break' or 'continue' are not allowed here, gonna iterate whole the array

// forEach() in HTML
const component = (arr) => {
  arr.forEach(function (el, i) {
    parentHTML.innerHTML = "";

    const html = `<h1>${(i + 1, el)}<h1>`;
    parentHTML.insertAdjacentHTML("afterbegin", html);
    /*
      <!-- beforebegin -->
      <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
      </p>
      <!-- afterend -->
      */
  });
};
```

### Data transformations

```js
const arr = [12, 13, 45, 78, 12, 79];
// .map()
const a = arr.map((el, index, arr) => `item: ${el}`);

console.log(a); // [ 'item: 12', 'item: 13', 'item: 45', 'item: 78', 'item: 12', 'item: 79' ]

// .filter()
const b = arr.filter(function (el, index, arr) {
  return el > 12;
});

console.log(b); // [ 13, 45, 78, 79 ]

// .reduce(): snowball, single value
const c = arr.reduce((prev, cur, index, arr) => prev + cur, 0);

// find, findIndex, indexOf
const arr = [1, 2, 3, 4, 5, 6];

// .find()
const a = arr.find((el) => el === 5);
console.log(a); // 5

// .findIndex() || .indexOf()
const b = arr.indexOf(4); // 3, cannot recive a conditions so instead...
const c = arr.findIndex((el) => el >= 3); // el === 3
console.log(c);

// booleans
const arr = [10, -10, 20, -20];
// .includes() ==> equality
const a = arr.includes(10); // true
// .some() ==> condition
const b = arr.some((el) => el > 0); // true
// .every() ==> all
const c = arr.every((el) => el > 0); // false

// nested arrays
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// .flat()
arr.flat(); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// deep argument
arr2.flat(2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// .flatMap()
const a = arr2.flatMap((el) => el);
console.log(a);

// sorting arrays
const arr = ["j", "a", "z", "c"];
const arr2 = [-3, -10, 10, 3];
// .sort() ==> mutate de OA
arr.sort(); // [ 'a', 'c', 'j', 'z' ]
// by default sort is for strings
arr2.sort(); // [ -10, -3, 10, 3 ]
// so we can use a callback inside
arr2.sort((currentValue, nextValue) => {
  // Ascending
  if (currentValue > nextValue) return 1;
  if (nextValue > currentValue) return -1;
  // Descending
  if (currentValue > nextValue) return -1;
  if (nextValue > currentValue) return 1;
});
arr2; // [ -10, -3, 3, 10 ] or [ 10, 3, -3, -10 ]
```

### More ways to create and fill arrays

```js
// .fill() and empty arrays
const a = new Array(7);
console.log(a); // [ <7 empty items> ]
a.fill("hello", 3, 4); // index of begin and end

// array constructor ==> better way
const b = Array.from({ length: 7 }, () => 1);
const c = Array.from({ length: 3 }, (_, i) => i + 1);
// output : [1, 2, 3]

// .querySelectorAll() returns just a 'node list' so to use array methods we have to translate in one
const arrElementsUI__one = Array.from(
  document.querySelectorAll(".some"),
  (el, i) => {
    return Number(el.textContent.replace("some", "some"));
  }
);
// or
const arrElementsUI__two = [...document.querySelectorAll(".some")];
```

## Summary

```js
// 23 array methods but when use it correctly ?
const arr = [1, 2, 3, 4, "a", "b", "c"];

// to mutate the arr
arr
  .push() // add to the end
  .unshift() // add to the start

  .pop() //remove at the end
  .shift() // remove at the start
  .splice() // remove any

  .reverse()
  .sort()
  .fill();

// a new array
arr
  .map() // loop and compute from the original
  .filter() // use a condition
  .slice() // portion of the original
  .concat() // adding original to other
  .flat() // flattering the original
  .flatMap(); // with a loop while flat

// an index array
arr
  .indexOf() // based on value
  .findIndex() // based on test condition
  // an array element
  .find() // based on test condition
  // know if the array includes (booleans)
  .includes() // based in a condition
  .some() // at least one satisfy the condition
  .every() // everyone satisfy the condition
  // a new string
  .join() // based on separator string
  // to transform to value
  .reduce() // boil down array to single value of any type
  // to just loop array
  .forEach(); //just loop over the arr
```

## Converting and Checking Numbers

```js
// floating point numbers (decimals)
console.log(23 === 23.0); // true
// numbers are store in base 2 format (binary)
console.log(Number("23")); // 23
console.log(+"23"); // 23

// parsing
console.log(Number.parseInt("54px")); // 54
Number.parseInt("23px");
Number.parseInt("e23"); // NaN
Number.parseInt("2.5rem"); // 2

Number.parseFloat("2.5rem"); // 2.5
Number.isNaN(Number("20X")); // true
Number.isNaN(23 / 0); // Infinity
// Checking if a value is number
Number.isFinite(20);
Number.isFinite(+"20X"); // false

Number.isInteger(23);
Number.isInteger(23.0);
Number.isInteger(23 / 0);
```

### Math and rounding

```js
// square root
Math.sqrt(25);
// 25 ** (1/2)
// cubic root => 8 ** (1/3)
Math.max(1, 2, 3, 4, 5);
Math.max(1, 2, "23px", 3); // NaN cuz doesnot parse it

Math.min(1, 2, 3, 4, 5);

Math.PI * Number.parseFloat("10px") ** 2;

//
Math.trunc(Math.random() * 6) + 1; // 1 to 6

const randomBetween = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
randomBetween(10, 20);

// rounding integers
Math.trunc(23.4); // 23
Math.round(23.5); // (.5) 23
Math.round(23.51); // 24

// round up
Math.ceil(23.3); // 24
Math.ceil(23.9);
// round down
Math.floor("23.9"); // type coersion

// negative way
Math.trunc(-23.6); // -23
Math.floor(-23.6); // -24
Math.ceil(-23.6); // -23

// toFixed(2) => string
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log(+(2.345).toFixed(2)); // 2.35
```

### Reminder operator

```js
console.log(5 % 2);
5 / 2; // 2.5 just the integer part

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(9)); // false

// real case of even or odds
[...document.querySelectorAll("rows")].forEach(function (row, i) {
  if (i % 2 === 0) row.style.backgroundColor = "orangered";
  // if (i % 3 === 0) row.style.backgroundColor = 'blue'
});
```

### Working with BigInt

```js
Number.MAX_SAFE_INTEGER;
// if u try to operate wiv more than this the data gonna be inprecise
2 ** 53 - 1; // 13982139819038219038129381
13982139819038219038129381n;
// or
BigInt(13982139819);
// operations: just between big numbers
100000n + 100000n;

20n === 20; // false
// type cohertion
20n == 20; // true
typeof 20n; // bigInt

// ❌ Math does not work here
```

## Dates

```js
const now = new Date();
new Date("December 24, 2015"); // 2015-12-24T06:00:00.000Z
new Date(2037, 10, 19, 15, 23, 5); // november cuz is 0 based

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
future.getFullYear();
future.getMonth(); // 10
future.getDate(); // 19
future.getDay(); // 0 is Sunday // 4
future.getHours(); // 15
future.getMinutes();
future.getSeconds();
// international standard
future.toISOString();
future.getTime;

Date.now();

// also setters
future.setFullYear(2040);
```

## Internatilization API (`Intl`)

Format numbers or string by languages

```js
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // numeric || 2-digit
  year: "numeric", // 2-digit
  weekday: "long",
};
// ISO language table (lingoes.net)
let a = new Intl.DateTimeFormat("en-GB", options).format(now);
a; // 'Tuesday, 4 April 2023 at 09:43'

// from user browser
const locale = navigator.language;
let b = new Intl.DateTimeFormat(locale, options).format(now);
b; // 'martes, 4 de abril de 2023, 09:46'

// numbers
const num = 3898398.23;
const options2 = {
  style: "currency", // unit
  unit: "celsius", // mile-per-hour || much more
  currency: "EUR", // we have to do it manually
  // useGrouping: false,
};
new Intl.NumberFormat("pt-BR", options2).format(num);
new Intl.NumberFormat("es-MX", options2).format(num);
```

## Timers

`setTimeout()` just execute ones.

```js
const ingredients = ["piña", "salchicha"];
const pizzaTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`Here is ur pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);

// stop the timer
if (ingredients.includes("piña")) clearTimeout(pizzaTimer);
```

`setInterval()` run a function over over again

```js
/*setInterval(() => {
    const now = new Date()
    console.log(now)
  }, 50000)*/
let time = 100;
const timer = setInterval(() => {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  labelTimer.textContent = `${min}:${sec}`;

  if (time === 0) clearInterval(timer);
  time--;
}, 900000);
```

## DOM manipulation

```js
document.documentElement; // whole the HTML
const header = document.getElementById("header");
const sections = document.querySelectorAll(".sections");
// ☝ return a node list
// 👇 convert to an array
const sections = Arrar.from(document.querySelectorAll(".sections"));
const allButtons = document.getElementsByTagName("button");
// ☝ 👇 return HTML Collection if the DOM changes this will update automatically
document.getElementsByClassName("btn");

// creating
// .insertAdjacentHTML()
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies...";
message.innerHTML = '<button class="some">Got it!</button>';

// inserting
header.prepend(message); // add the child as first one
header.append(message); // add the child as last one
// there cannot be more than one in the DOM so...
header.append(message.cloneNode(true));
// sibling of the parent
header.before(message);
header.after(message);

// deleting
message.remove();
```

### Styles

```js
const a = document.querySelector(".some");
a.style.backgroundColor = "#fff";
a.style.width = "120%";
// ❌
a.style.color; // nothing cuz we not defined here

getComputedStyle(message).color; //rgb
a.style.height = Number.parseFloat(getComputedStyle(a).height, 10) + 30 + "px";

// css custom properties
document.querySelector(":root");
// to set new values
document.documentElement.style.setProperty("--var", "12px");
```

### Attributes

```js
const logo = document.querySelector("nav__logo");
logo.src; // http://127...some/some.png
logo.className; // nav__logo
// set
logo.alt = "New alternative text";

// non.standard
logo.designer; // undefined
// so...
logo.getAttribute("designer"); // Angel
logo.getAttribute("src"); // some/some.png
// to create
logo.setAttribute("company", "Bankist");

// Data attributes
// <img data-version-number='3.0'>
logo.dataset.versionNumber; // 3.0

// donot use, cuz overwrite whole classes
logo.className = "jonas";
// Classes
logo.classList.add("h");
logo.classList.remove("h");
logo.classList.toggle("h");
logo.classList.contains("h");
```

### Types of events n event handlers

```js
const a = document.querySelector("#some");
const fun = (e) => alert("some");

a.addEventListener("mouseenter", fun);
// older way : a.onmouseenter = function () {}

// remove ❌
setTimeout(() => a.removeEventListener("mouseenter", fun), 3000);
```

## Event Propagation: Bubbling and Capturing

```js
const a = document.querySelector(".some");
a.addEventListener("click", (e) => {
  e.target; // where the event gonna happen
  e.currentTarget; // this
  e.stopPropagation(); // stop bubbling up
});
```

## Intersection Oberser API

```js
const obsOptions = {
  // the target to intersect
  root: null, // entire viewport
  threshold: 0.1, // percentage that we wanna have of our element into the root (the viewport in this case)
};
// this callback will be executing each time that the target reach the root in the threshold(percentage) defined
function obsCallback(entries, observer) {
  entries.forEach(function (entry) {
    // this gonna return an object with paramethers as the ratio or if isIntersecting
    console.log(entry);
  });
}
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe("someHTML__target");

// real application
const heightNav = HTML.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) HTML.classList.add("sticky");
  else HTML.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${heightNav}px`,
});
headerObserver.observe(header);

// Revealing Elements on Scroll
const allSections = document.querySelectorAll(".section");
function revealSection(entries, observer) {
  const [entry] = entries;
  console.log(entry); // { isIntersecting: true... }
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");
  // to stop throwing events (object 'entry')
  observer.unobserve(entry.target);
}
const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserve.observe(section);
  section.classList.add("hidden");
});
```

## Dom traversing

```js
const h1 = document.querySelector("h1");
// going downwards: child
h1.querySelectorAll(".highlight");
h1.childNodes; // anything (text, comments, etc)
h1.children; // HTML collection
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// going upwards: parents
h1.parentNode; // whos the direct parent fi: <section>
// closets('') opposite to querySelector(childs)
h1.closest(".header").style.background = "var(--some)";
h1.closest(".h1"); // the element itself

// going sideways: siblings
h1.previousElementSibling;
h1.nextElementSibling; // null if does not have
```

## OOP

To avoid spagetti code and based on 4 fundamentals:
👉 Abstraction: 📱 📲
👉 Encapsulation: 🔐 methods in a class
👉 Inheritance: a child class can inherit (extends and super)
👉 Polymorphism: many shapes on other classes

```js
// class (blueprint)
const buildPrototype = {
  1: "Constructor functions",
  2: "ES6 classes",
  3: "Object.create()",
};
```

### Prototypes

Each function has a property call "prototype"

### Classes

Syntactic Sugar; just a special type of functions based in prototypes.

```js
// class expression
const PersonEx = class {};

// class declaration
class Person {
  // first step: add a constructor
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jess = new Person("Jessica", 2001);
jess.calcAge(); // 22

console.log(jess.__proto__ === Person.prototype); // true

// other way 🤔
Person.prototype.greet = function () {
  console.log(`hey ${this.name}`);
};
jess.greet(); // hey Jessica
```

**To keep in mind**  
👉 classes are not hoisted (cannot be use before declaration)  
👉 classes are first-class citizes  
👉 classes are executed in strict mode

## Getters, setters and more

```js
const account = {
  owner: "Angel",
  movements: [200, 100, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    // one parameter is necessary
    this.movements.push(mov);
  },
};

// get
console.log(account.latest); // 300
// set
account.latest = 50;
console.log(account.movements); // [..., 50]

class Some {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    // also added into the prototype as a method
    return 2023 - this.birthYear;
  }

  // set a property that already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log("nope");
  }
}

const some = new Some("Angel Valencia", 2001);
// console.log(some.age) // 22
console.log(some);

// static methods
const example = Array.from(document.querySelectorAll("h1")); // from is attached to the "Array constructor" not to the "prototype property" of the constructor. "[].from" is wrong ⛔
class SomeClass {
  constructor() {}

  static hey() {
    console.log("Hey there 👋");
  }
}

SomeClass.hey(); // Hey there 👋
```

## Promises

```js
fetch("https://randomuser.me/api?results=1")
  .then((res) => res.json())
  .then((res) => console.log(res));

async function someOne() {
  try {
    const a = await fetch("https://randomuser.me/api?results=1");
    const b = await a.json();
    console.log(b);
  } catch (err) {
    console.log(err);
  }
}

async function someTwo() {
  const a = await fetch("https://jsonplaceholder.typicode.com/users");
  const b = await a.json();
  console.log(b);
}
```
