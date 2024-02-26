
///////////////////////////////////////////////////////////////
//  Converting and Checking Numbers
(() => {
  // floating point numbers (decimals)  
  console.log(23 === 23.0) // true
  // numbers are store in base 2 format (binary)
  console.log(Number('23')) // 23
  console.log(+'23') // 23

  // parsing
  console.log(Number.parseInt('54px')) // 54
  Number.parseInt('23px')
  Number.parseInt('e23') // NaN
  Number.parseInt('2.5rem') // 2

  Number.parseFloat('2.5rem') // 2.5
  Number.isNaN(Number('20X')) // true
  Number.isNaN(23 / 0) // Infinity
  // Checking if a value is number
  Number.isFinite(20)
  Number.isFinite(+'20X') // false

  Number.isInteger(23)
  Number.isInteger(23.0)
  Number.isInteger(23 / 0)
});

///////////////////////////////////////////////////////////////
//  Math and rounding
(() => {

  // square root
  Math.sqrt(25)
  // 25 ** (1/2)
  // cubic root => 8 ** (1/3)
  Math.max(1, 2, 3, 4, 5)
  Math.max(1, 2, '23px', 3) // NaN cuz doesnot parse it

  Math.min(1, 2, 3, 4, 5)

  Math.PI * Number.parseFloat('10px') ** 2

  // 
  Math.trunc(Math.random() * 6) + 1 // 1 to 6

  const randomBetween = function (min, max) {
    return Math.trunc(Math.random() * (max - min) + 1) + min
  }
  randomBetween(10, 20)

  // rounding integers
  Math.trunc(23.4) // 23
  Math.round(23.5) // (.5) 23
  Math.round(23.51) // 24

  // round up
  Math.ceil(23.3) // 24
  Math.ceil(23.9)
  // round down
  Math.floor('23.9') // type coersion

  // negative way
  Math.trunc(-23.6) // -23
  Math.floor(-23.6) // -24
  Math.ceil(-23.6) // -23

  // toFixed(2) => string
  console.log((2.7).toFixed(0)) // 3
  console.log((2.7).toFixed(3)) // 2.700
  console.log(+(2.345).toFixed(2)) // 2.35
});

///////////////////////////////////////////////////////////////
//  Reminder operator
(() => {
  console.log(5 % 2)
  5 / 2 // 2.5 just the integer part

  const isEven = n => n % 2 === 0
  console.log(isEven(8)) // true
  console.log(isEven(9)); // false

  // real case of even or odds
  [...document.querySelectorAll('rows')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered'
    // if (i % 3 === 0) row.style.backgroundColor = 'blue'
  })
});

///////////////////////////////////////////////////////////////
// Working with BigInt
(() => {
  Number.MAX_SAFE_INTEGER
  // if u try to operate wiv more than this the data gonna be inprecise
  2 ** 53 - 1 // 13982139819038219038129381
  13982139819038219038129381n
  // or
  BigInt(13982139819)
  // operations => just between big numbers
  100000n + 100000n

  20n === 20 // false
  // type cohertion
  20n == 20 // true
  typeof 20n // bigInt

  // ❌ Math does not work here
});

///////////////////////////////////////////////////////////////
// Creating dates
(() => {
  const now = new Date()
  new Date('December 24, 2015') // 2015-12-24T06:00:00.000Z
  new Date(2037, 10, 19, 15, 23, 5) // november cuz is 0 based

  // working with dates
  const future = new Date(2037, 10, 19, 15, 23)
  future.getFullYear()
  future.getMonth() // 10
  future.getDate() // 19
  future.getDay() // 0 is Sunday // 4
  future.getHours() // 15
  future.getMinutes()
  future.getSeconds()
  // international standard
  future.toISOString()
  future.getTime

  Date.now()

  // also setters
  future.setFullYear(2040)
});

///////////////////////////////////////////////////////////////
// Internatilization API (Intl) : format numbers or string by languages
(() => {
  const now = new Date()
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long', // numeric || 2-digit
    year: 'numeric', // 2-digit
    weekday: 'long',
  }
  // ISO language table (lingoes.net)
  let a = new Intl.DateTimeFormat('en-GB', options).format(now)
  a // 'Tuesday, 4 April 2023 at 09:43'

  // from user browser
  const locale = navigator.language
  let b = new Intl.DateTimeFormat(locale, options).format(now)
  b // 'martes, 4 de abril de 2023, 09:46'

  // numbers
  const num = 3898398.23
  const options2 = {
    style: 'currency', // unit
    unit: 'celsius', // mile-per-hour || much more
    currency: 'EUR', // we have to do it manually
    // useGrouping: false,
  }
  new Intl.NumberFormat('pt-BR', options2).format(num)
  new Intl.NumberFormat('es-MX', options2).format(num)
});

///////////////////////////////////////////////////////////////
// Timers
(() => {
  // setTimeout() : just execute ones
  const ingredients = ['piña', 'salchicha']
  const pizzaTimer = setTimeout(
    function (ing1, ing2) {
      console.log(`Here is ur pizza with ${ing1} and ${ing2}`)
    },
    3000,
    ...ingredients
  )
  // stop the timer
  if (ingredients.includes('piña')) clearTimeout(pizzaTimer)

  // setInterval : run a function over over again
  /*setInterval(() => {
    const now = new Date()
    console.log(now)
  }, 50000)*/
  let time = 100
  const timer = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0)
    const sec = String(time % 60).padStart(2, 0)
    labelTimer.textContent = `${min}:${sec}`

    if (time === 0) clearInterval(timer)
    time--
  }, 900000)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// DOM manipulation
(() => {
  document.documentElement // whole the HTML
  const header = document.getElementById('header')
  const sections = document.querySelectorAll('.sections')
  // ☝ return a node list
  const allButtons = document.getElementsByTagName('button')
  // ☝ 👇 return HTML Collection if the DOM changes this will update automatically
  document.getElementsByClassName('btn')

  // creating 
  // .insertAdjacentHTML()
  const message = document.createElement('div')
  message.classList.add('cookie-message')
  message.textContent = 'We use cookies...'
  message.innerHTML = '<button class="some">Got it!</button>'

  // inserting
  header.prepend(message) // add the child as first one
  header.append(message) // add the child as last one
  // there cannot be more than one in the DOM so...
  header.append(message.cloneNode(true))
  // sibling of the parent
  header.before(message)
  header.after(message)

  // deleting
  message.remove()
});

///////////////////////////////////////////////////////////////
// Styles
(() => {
  const a = document.querySelector('.some')
  a.style.backgroundColor = '#fff'
  a.style.width = '120%'
  // ❌
  a.style.color // nothing cuz we not defined here

  getComputedStyle(message).color //rgb
  a.style.height = Number.parseFloat(getComputedStyle(a).height, 10) + 30 + 'px'

  // Custom properties(var)
  document.querySelector(':root')
  // or
  document.documentElement.style.setProperty('--var', '12px')
});

///////////////////////////////////////////////////////////////
// Attributes
(() => {
  const logo = document.querySelector('nav__logo')
  logo.src // http://127...some/some.png
  logo.className // nav__logo
  // set
  logo.alt = 'New alternative text'

  // non.standard
  logo.designer // undefined
  // so...
  logo.getAttribute('designer') // Angel
  logo.getAttribute('src') // some/some.png
  // to create
  logo.setAttribute('company', 'Bankist')

  // Data attributes
  // <img data-version-number='3.0'>
  logo.dataset.versionNumber // 3.0

  // donot use, cuz overwrite whole classes
  logo.className = 'jonas'
  // Classes
  logo.classList.add('h')
  logo.classList.remove('h')
  logo.classList.toggle('h')
  logo.classList.contains('h')
});

///////////////////////////////////////////////////////////////
// Smooth Scrolling
() => {
  const a = document.querySelector('.some')
  const someSection = document.querySelector('#some')
  a.addEventListener('click', (e) => {
    // e means the element itself
    e.target.getBoundingClientRect() // x, y, height...

    const b = someSection.getBoundingClientRect()

    // get the scrolled units
    window.pageXOffset
    // if the client scroll the page
    window.pageYOffset // 128px

    // get the client viewport
    document.documentElement.clientHeight
    document.documentElement.clientWidth

    // scrolling considering the viewport top (absolute no relative current value)
    window.scrollTo({
      left: b.left + window.pageXOffset,
      top: b.top + window.pageYOffset,
      behavior: 'smooth',
    })

    // modern way (❗ modern browsers)
    some.scrollIntoView({ behavior: 'smooth' })
  })
};

///////////////////////////////////////////////////////////////
// Types of events n event handlers
() => {
  const a = document.querySelector('#some')
  const fun = (e) => alert('some')

  a.addEventListener('mouseenter', fun)
  // older way : a.onmouseenter = function () {}

  // remove ❌
  setTimeout(() => a.removeEventListener('mouseenter', fun), 3000)
};

///////////////////////////////////////////////////////////////
// Event Propagation: Bubbling and Capturing
(() => {
  const a = document.querySelector('.some')
  a.addEventListener('click', (e) => {
    e.target // where the event gonna happen
    e.currentTarget // this
    e.stopPropagation() // stop bubbling up
  })
});
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
