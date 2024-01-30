<svg viewBox="0 0 256 256" width="48" height="48" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>

# TypeScript

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
> function (params:any) any by default so change to void to ignore return

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
function add (a: number): number { 
  return a 
}

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

> 💡 never: never's gonna return a value, is different to void

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
  readonly id?: KeyUnique; // avoid overwrite a property
  name: string;
  age: 23;
  // to add an optional property
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

### Type never clear

```ts
function neverType(x: string | number) {
  if (typeof x === "string") {
    // do something...
  } else if (typeof x === "number") {
    // do something...
  } else {
    x; // --> never
  }
}
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

## Enums

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

## Narrowing

> Controling posible type errors

```ts
const gimmeString = (obj: string | number) => {
  if (typeof obj === "string") {
    return obj.length;
  }

  return obj.toString();
};
```

## Type guard

```ts
interface Sonic {
  company: string;
  run(): void;
}

interface Mario {
  company: string;
  jump: () => void;
}

type Character = Sonic | Mario;

function checkSonic(character: Character): character is Sonic {
  return (character as Sonic).run() !== undefined;
}

function jugar(character: Character) {
  if (checkSonic(character)) {
    character.run();
  }
}
```

## Classes

```ts
class Avenger {
  public name: string;
  private powerScale: number;
  protected wonBattles: number = 2;

  constructor(name: string, powerScale: number) {
    this.name = name;
    this.powerScale = powerScale;
  }
}
```

## Conventions

    Use types.d.ts to static types, NO CODE
