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
