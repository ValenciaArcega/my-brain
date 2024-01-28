# TypeScript course

> Avoid to use types and let TS infer 'em

```ts
const nombre = "Luis Angel";
const person = {
  name: "Angel",
  age: 22,
};
```

| Type    | Description                           |
| ------- | ------------------------------------- |
| any     | Ignore the TS typing. ⛔ AVOID ALWAYS |
| unknown | When we donot know what type is       |

## Typing functions

> The TS inference DOESNOT make magic  
> function (params:any) any by default so to change to void to ignore return

```ts
function saludar(name: string): void {
  console.log(`Hola ${name}`);
}

saludar("Angel");
```

> A function that recives an object as argument has different ways of typing

> ⛔ function ({ name: string, age: number }) { } rename obj properties

```ts
// 1.
function ({ name, age }: { name: string; age: number })

// 2.
function (person: { name: string, age: number }) {
 const { name, age } = person; // destructuring
 console.log(name + " you have " + age);
}
```

## TS Inference

       The type name is always with PascalCase

```ts
const a: string = (function (name: string, age: number) {
  // return age = ⛔ Type 'number' is not assignable...
  return name;
})("Alexandra", 21);
// a = Alexandra

(function (): string {
  // return 23 = ⛔ Type 'number' is not assignable...
  return "Howdy";
})();

// fn() :Function = is the :any of functions
(function (fn): Function {
  return () => Math.random();
});
```

## Typing functions, args and returns

```ts
function add (a: number): number { return a }

// args
function fnA(name: string, hasCar: boolean) {
  return hasCar
}

// function inside the args
function (fn: (name: string, hasCar: boolean) => boolean) { // => void ✅
  console.log(fn("Alexandra", true)); // true
}
```

## Typing arrow functions

```ts
let a = (a: number, b: number): number => a + b;
```

> 💡never: never's gonna return a value, is different to void

```ts
(function (message: string): never {
  throw new Error(message);
})("Error");
```

### Typing anonymous functions

`👉 forEach(function() {})`<br><br>
`👉 (fun() {})()`
`👉 (() => {})()`

```ts
const avengers = ["Spider-man", "Hulk", "Thor"];
avengers.forEach((avenger) => {
  console.log(avenger);
});
```

## Type Alias (our own type)

      The type name is always with PascalCase

```ts
// 👇 template union type... more down below
type KeyUnique = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  // avoid overwrite a property
  readonly id?: KeyUnique;
  name: string;
  age: number;
  // ➕ to add an optional property
  isActive?: boolean;
};

let heroA: Hero = {
  name: "Hulk",
  age: 23,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;

  return {
    id: crypto?.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const angel = createHero({ name: "Angel", age: 24 });
```

## Template union types

      Can be for regular expressions or something else

```ts
type KeyUnique = `${string}-${string}-${string}-${string}-${string}`;
type HexadecimalColors = `#${string}`;

// ⛔ const color1: HexadecimalColors = "f2f2f7"
const color2: HexadecimalColors = "#f2f2f7";
```

## Union types

> Condicional typing, so powerful to can use more than one type

```ts
let unionTypeB: number | boolean = true;
// values or types
let unionTypeA: string | 2; // | 200ms
unionTypeA = 2;

type HeroPower = "low" | "normal" | "high";
type Hero = {
  levelPower: HeroPower;
};

let hero: Hero = {
  // ⛔ levelPower: "MAMADISIMO"
  levelPower: "low",
};
```

## Intersection types

> Join types and pack in one

```ts
type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  levelPower: HeroPower;
  enemy: string;
};
type HeroIntersected = HeroBasicInfo & HeroProperties;

let c: HeroIntersected;
c = {
  name: "Pablo",
  age: 23,
  levelPower: "low",
  enemy: "Me",
};
```

## Type Indexing

```ts
type HeroIndexing = {
  isGood: boolean;
  address: {
    city: string;
    country: string;
  };
};

const typeIndexingObj: HeroIndexing["address"] = {
  country: "Mexico",
  city: "Coacalco",
};

// Get a type from a value with "typeof"
type TypeFromValue = typeof typeIndexingObj;

// Get a type from a function return (not so useful)
const getData = () => ({ name: "Juan", age: 23 });

type TypeFromFunctionReturn = ReturnType<typeof getData>;
const typeReturnType: TypeFromFunctionReturn = {
  name: "Some",
  age: 2,
};
```

# Arrays

> Two ways of typing arrays

```ts
const languages = []; // ⛔️ By default is "never"
const arr: string[] = ["JavaScript", "TypeScript"];
// or
const arrSecondWay: Array<string> = ["", ""];
// 👉 EVEN CUSTOM TYPES const a:Hero[] = []

// different types
const arrMultipleTypes: (string | number)[] = ["Text", 7];

const arrayDeArrays: number[][] = [[2]];
```

## Tuples

> Una tupla es un array que tiene un limite fijado de longitud

```ts
type CellValue = "x" | "" | "o";
type Dashboard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gato: Dashboard = [
  ["x", "x", "o"],
  ["o", "x", "o"],
  ["x", "o", ""],
];
```

### State in React

```ts
type State = [name: string, (newName: string) => void];

const [name, setName]: State = useState("Rosa");
```

Colors RGB system

```ts
type RGB = [number, number, number];

const color: RGB = [0, 0, 0];
```

## ENUMS

> Use without const when using in other projects

```ts
const enum ERROR_TYPES {
  NOT_FOUND, // 0
  UNAUTHORIZED, // 1
  FORBIDDEN, // 2
  // or
  FORBIDDEN = "forbidden",
}
```

## Interfaces

> To define the contract of an object, the structure (properties and methods), is like the elephant shadow, not knowing the inside. 99% are interchangeable with types

```ts
interface Person {
  age: number;
  name: string;
  hasDriverLincese: boolean;
  _walk(): void;
  _talk(): String;
}

class Hugo implements Person {
  age = 23;
  name = "Hugo";
  hasDriverLincese: false;

  _walk(): void {}

  talk(language: string): string;
  // or
  talk: (language: string) => string;
}
```

> The real differences are that interfaces can extends other interfaces and also write the same interface twice or even more times (isn't recommendable) because Interfaces are close to objects. Types are close to primitive types then becomes easy to use types in more commoun situations

```ts
interface Product {
  name: string
  price: number
}
interface Product {
  store: string
}

interface Shoes extends Product {
  size: string
}

const product: Shoes {
  name: ,
  price: ,
  store: ,
  size: ,
}
```
