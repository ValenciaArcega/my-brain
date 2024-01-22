// import crypto from 'crypto';

// Avoid to use types and let TS infer 'em
const nombre = "Luis Angel";
const person = {
  name: "Angel",
  age: 22,
};
// any ==> ⛔ ignore the TS typing AVOID ALWAYS

// When we donot know what type we use...
const idk: unknown = "Home";

/**
 * The TS inference DOESNOT make magic
 * function (params:any) ====> any by default
 * change to void to avoid return
 */
function saludar(name: string): void {
  console.log(`Hola ${name}`);
}
// saludar('Angel');

/**
 * A function that recives an object as argument
 * has different ways of typing
 * ⛔ WARNING
 * (function ({ name: string, age: number }) { } ==> renaming obj properties
 * so...
 */
// 1.
(function ({ name, age }: { name: string; age: number }) { });

// 2.
(function (person: { name: string, age: number }) {
  const { name, age } = person;
  console.log(name + " you have " + age);
})// ({ name: "Angel", age: 23 });

/**
 * Typing returning values
 */

/**
 * TS Inference
 * the type name is always with PascalCase
 */
const a: string = (function (name: string, age: number) {
  // return age = ⛔ Type 'number' is not assignable...
  return name
})("Alexandra", 21);
// a = Alexandra

(function (): string {
  // return 23 = ⛔ Type 'number' is not assignable...
  return "Howdy"
})();

// fn() :Function = is the :any of functions LOL so...AVOID ALWAYS ⛔
(function (fn): Function {
  return () => Math.random();
});

/**
 * Typing args and returns
 * what a function has to return
 */
function fnA(name: string, hasCar: boolean) {
  return hasCar
}

(function (fn: (name: string, hasCar: boolean) => boolean) { // => void ✅
  console.log(fn("Alexandra", true)); // true
});// (fnA);

/**
 * Typing arrow functions
 */
((a: number, b: number): number => a + b)(2, 2);

// never
// never gonna return a value, is different to void
(function (message: string): never {
  throw new Error(message);
});// ("Error");


// anonymous functions (Inference because the forEach)
const avengers = ["Spider-man", "Hulk", "Thor"]
avengers.forEach((avenger) => {
  // console.log(avenger)
})

/**
 * Type Alias (our own type)
 * the type name is always with PascalCase
 */
type KeyUnique = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
  // avoid overwrite a property
  readonly id?: KeyUnique
  name: string
  age: number
  // ➕ to add an optional property
  isActive?: boolean
}

let heroA: Hero = {
  name: 'Hulk',
  age: 23,
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero;

  return {
    id: crypto?.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const angel = createHero({ name: "Angel", age: 24 })

/**
 * Template union types
 * can be regular expressions or something else
 */
type HexadecimalColors = `#${string}`

// ⛔ const color1: HexadecimalColors = "f2f2f7"
const color2: HexadecimalColors = "#f2f2f7"

/**
 * Union types
 * condicional typing
 */
let unionTypeB: number | boolean = true
// values or types
let unionTypeA: string | 2 // | 200ms
unionTypeA = 2

type HeroPower = 'low' | 'normal' | 'high'
type HeroB = {
  levelPower: HeroPower
}

let heroB: HeroB = {
  // ⛔ levelPower: "MAMADISIMO"
  levelPower: "low"
}

/**
 * Intersection types
 * Join types and pack in one 
 */
type HeroBasicInfo = {
  name: string
  age: number
}
type HeroProperties = {
  levelPower: HeroPower
  enemy: string
}
type HeroIntersected = HeroBasicInfo & HeroProperties

let c: HeroIntersected
c = {
  name: 'Pablo',
  age: 23,
  levelPower: 'low',
  enemy: "Me"
}

/**
 * Type Indexing
 * ...
 */

/**
 * Interfaces
 * ...
 */
interface Person {
  age: number
  name: string
  hasDriverLincese: boolean
  _walk(): void
  _talk(): String
}

class Hugo implements Person {
  age = 23
  name = "Hugo"
  hasDriverLincese: false

  _walk(): void { }

  _talk(): string { return "" }
}