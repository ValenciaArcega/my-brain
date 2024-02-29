///////////////////////////////////////////////////////////////
// Intersection Oberser API
() => {
  const obsOptions = {
    // the target to intersect
    root: null, // entire viewport
    threshold: 0.1, // percentage that we wanna have of our element into the root (the viewport in this case)
  }
  // this callback will be executing each time that the target reach the root in the threshold(percentage) defined
  function obsCallback(entries, observer) {
    entries.forEach(function (entry) {
      // this gonna return an object with paramethers as the ratio or if isIntersecting
      console.log(entry)
    })
  }
  const observer = new IntersectionObserver(obsCallback, obsOptions)
  observer.observe('someHTML__target')

  // real application
  const heightNav = HTML.getBoundingClientRect().height
  const stickyNav = function (entries) {
    const [entry] = entries

    if (!entry.isIntersecting) HTML.classList.add('sticky')
    else HTML.classList.remove('sticky')
  }
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${heightNav}px`,
  })
  headerObserver.observe(header)

  // Revealing Elements on Scroll
  const allSections = document.querySelectorAll('.section')
  function revealSection(entries, observer) {
    const [entry] = entries
    console.log(entry) // { isIntersecting: true... }
    if (!entry.isIntersecting) return

    entry.target.classList.remove('hidden')
    // to stop throwing events (object 'entry')
    observer.unobserve(entry.target)
  }
  const sectionObserve = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  })
  allSections.forEach((section) => {
    sectionObserve.observe(section)
    section.classList.add('hidden')
  })
};
///////////////////////////////////////////////////////////////
// Dom traversing
(() => {
  const h1 = document.querySelector('h1')
  // going downwards: child
  h1.querySelectorAll('.highlight')
  h1.childNodes // anything (text, comments, etc)
  h1.children // HTML collection
  h1.firstElementChild.style.color = 'white'
  h1.lastElementChild.style.color = 'orangered'

  // going upwards: parents
  h1.parentNode // whos the direct parent fi: <section>
  // closets('') opposite to querySelector(childs)
  h1.closest('.header').style.background = 'var(--some)'
  h1.closest('.h1') // the element itself

  // going sideways: siblings
  h1.previousElementSibling
  h1.nextElementSibling // null if does not have
});
///////////////////////////////////////////////////////////////
// OOP (avoid spagetti code) 
(() => {
  /* 
  👉 Abstraction: 📱 📲
  👉 Encapsulation: 🔐 methods in a class
  👉 Inheritance: a child class can inherit (extends and super)
  👉 Polymorphism: many shapes on other classes 
  */
  // class (blueprint : cianotipo)
  const buildPrototype = {
    1: 'Constructor functions',
    2: 'ES6 classes',
    3: 'Object.create()'
  }

  // Prototypes
  // Each fn has a property call "prototype"
});

///////////////////////////////////////////////////////////////
// Classes: Syntactic Sugar; just a special type of functions. 
(function () {
  // class expression
  const PersonEx = class { }

  // class declaration
  class Person {
    // first step: add a constructor
    constructor(name, birthYear) {
      this.name = name
      this.birthYear = birthYear
    }

    // methods will be added to .prototype property
    calcAge() {
      console.log(2023 - this.birthYear)
    }
  }

  const jess = new Person('Jessica', 2001)
  jess.calcAge() // 22

  console.log(jess.__proto__ === Person.prototype) // true

  // other way 🤔
  Person.prototype.greet = function () {
    console.log(`hey ${this.name}`)
  }
  jess.greet() // hey Jessica

  /*
  💭 To keep in mind
  👉 classes are not hoisted (cannot be use before declaration)
  👉 classes are first-class citizes
  👉 classes are executed in strict mode
  */
});

///////////////////////////////////////////////////////////////
// Getters, setters and more
(() => {
  const account = {
    owner: 'Angel',
    movements: [200, 100, 300],

    get latest() {
      return this.movements.slice(-1).pop()
    },

    set latest(mov) { // one parameter is necessary
      this.movements.push(mov)
    }
  }

  // get
  console.log(account.latest) // 300
  // set
  account.latest = 50
  console.log(account.movements) // [..., 50]

  class Some {
    constructor(fullName, birthYear) {
      this.fullName = fullName
      this.birthYear = birthYear
    }

    get age() { // also added into the prototype as a method
      return 2023 - this.birthYear
    }

    // set a property that already exist
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name
      else console.log('nope')
    }
  }

  const some = new Some('Angel Valencia', 2001)
  // console.log(some.age) // 22
  console.log(some)

  // Static methods
  const example = Array.from(document.querySelectorAll('h1')) // from is attached to the "Array constructor" not to the "prototype property" of the constructor. "[].from" is wrong ⛔
  class SomeClass {
    constructor() { }

    static hey() {
      console.log('Hey there 👋')
    }
  }
  SomeClass.hey() // Hey there 👋
});
///////////////////////////////////////////////////////////////
// Promises
(() => {
  fetch('https://randomuser.me/api?results=1')
    .then(res => res.json())
    .then(res => console.log(res))

  async function someOne() {
    try {
      const a = await fetch('https://randomuser.me/api?results=1')
      const b = await a.json()
      console.log(b)

    } catch (err) {
      console.log(err)
    }
  }

  async function someTwo() {
    const a = await fetch('https://jsonplaceholder.typicode.com/users')
    const b = await a.json()
    console.log(b)
  }
})
