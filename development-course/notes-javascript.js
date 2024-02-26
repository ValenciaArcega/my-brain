
// 
(() => {
  // 1.) Destructuring
  // 💭 SPREAD 'cause on RIGHT of = & REST 'cause on LEFT of =
  const [a, b, ...others] = [1, 2, 3, 4, 5]
  console.log(a, b, others)

  // 2.) Functions
  let sum = 0
  const data = [1, 2, 3, 4]
  function fnWithREST(...argUndefined) { // => REST arguments to unpack
    for (let i = 0; i < argUndefined.length; i++) sum += argUndefined[i]
    console.log(sum)
  };
  fnWithREST(...data)
  // objects
  const { sat, ...weekdays } = restaurant.openingHours
});
///////////////////////////////////////////////////////////////
// Short circuiting (|| and &&)
(() => {
  // ❗❗ Falsy values: 0, undefined, '', null, NaN
  // OR: first true value will be printed
  console.log(3 || 'Angel')
  console.log('' || 'Luis')
  console.log(true || 0)
  console.log(undefined || null)
  // AND: first falsy value will be printed
  console.log(10 && null)
  console.log(false && 10)
});
////////////////////////////////////////////////////////
// The nullish coalescing operator (??) => nullish values are JUST "null" n "undefined"
(() => {
  const user = { name: 'Luis' }
  const keyToTest = user.age ?? 21 // if the key doesnot exist in the object gonna return 'undefined' so the NCO gonna be in action
  console.log(keyToTest) // 21
});
////////////////////////////////////////////////////////
//  Logical assignment operators __=
(() => {
  const obj1 = { numGuests: 0, }
  const obj2 = { owner: "Angel Valencia", }
  // ==> OR assignment operator
  obj1.numGuests = obj1.numGuests || 10
  obj2.numGuests ||= 10 // 10
  // ==> AND assignment operator (first falsy value)
  obj2.owner &&= '<ANONYMOUS>'
  // ==> Nullish assignment operator
  obj2.numGuests ??= 10 // 10
});
////////////////////////////////////////////////////////
// Looping arrays: the for-of loop
(() => {
  const names = ["Karla", "Luis", "Gabi", "Sandra"]
  for (const i of names) {
    console.log(i)
  }
  for (const [index, element] of names.entries()) {
    console.log(`${index + 1}. ${element}`)
  }
});
///////////////////////////////////////////////////////////////
// Enhanced object literals
(() => {
  // ==> add an external object inside just setting the name as a property (after declaration)
  // ==> delete ': function' is new
  // ==> set the name of properties using '[]' and here u can compute everything, for example:
  const name = 'Vaca'
  const object = {
    [`La${name}`]: 23,
  }
  console.log(object.LaVaca ?? 'Not defined') // 23
});
////////////////////////////////////////////////////////
// Optional chaining => ?.
(() => {
  const obj = {
    name: 'Angel',
    email: 'luis@tesco.io',
    days: {
      fri: { start: 8 },
      sat: { start: 9 },
      sun: { start: 11 },
    }
  }
  console.log(obj?.somethingRandom ?? 'User array empty')

  // ❗❗ the Nullish Coalescing Operator and optional chaining working together are extremely powerfull
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  for (const i of days) {
    let a = obj?.days[i]?.start ?? 'no hour, \'cause is not study day'
    console.log(`On ${i}, study at ${a}`)
  }
  // ==> Methods
  // console.log(obj.function?.(0,1) ?? 'Method doesnot exist')
});
//////////////////////////////////////////////////////////////
// Looping objects (indirect way cuz they aint iterables)
(() => {
  const obj = { name: 'luis', age: 18, occupation: 'student' }

  Object.keys(obj)
  Object.values(obj)
  Object.entries(obj)

  const user_keys = Object.keys(obj)
  const user_values = Object.values(obj)

  let text = `We have ${user_keys.length} data from the user; the: `
  for (const i of user_keys.values()) {
    console.log(text += `${i}, `)
  }
  // ==> Entire object
  for (const [key, value] of Object.entries(obj)) {
    console.log(`The ${key} is ${value}`)
  }
});
//////////////////////////////////////////////////////////////
// Sets => unique values in iterables
(() => {
  const arr = [1, 2, 3, 1, 2, 3]
  new Set(arr)
    .size
    .add(4)
    // booleans
    .has(5)
    .delete(1)
    .clear()
  // destructuring + rest + spread + sets
  const [a, ...others] = [...new Set(arr)]
  console.log(a, others)
});
///////////////////////////////////////////////////////////////
// Maps
(() => {
  const map = new Map()
    .set('name', 2).set(10, 78).set(false, 'Im false')
    .get(10)
    .clear()
    .size
    // booleans
    .has(10)
    .delete('age')
  // example wiv short circuiting
  let time = 15
  console.log(map.get(time < map.get('some') && time > map.get(15)))
});
///////////////////////////////////////////////////////////////
// Strings
(() => {
  const name = '  Luis angel Valencia Arcega '
  name
    .length
    .indexOf('some') // => returns an index
    .lastIndexOf('some')
    .slice(3, 7)
    // 💭 String methods are case sensitive so...
    .toLowerCase()
    .toUpperCase()
    .trim() // delete white spaces and jump lines
    .trimEnd()
    .trimStart()
    .replace('the value to replace', 'some new value')
    .replaceAll() // all ocurrences
    .split(' ')
    .join(' ') // opposite of split and use for arrays
    .padStart(45, '+') // the length and the fill
    .padEnd()
    .repeat()
    // booleans
    .includes('some')
    .startsWith('Lui')
    .endsWith('rcega')

  // Example
  const capitalizeName = (name) => {
    const partsOfName = name.trim().toLowerCase().split(' ')
    const arr = []
    for (const i of partsOfName) {
      // arr.push(i[0].toUpperCase() + i.slice(1))
      // arr.push(i.replace(i[0], i[0].toUpperCase()));
    }
    console.log(arr.join(' '))
  }
  // ==> Example
  const str = 'underscore_case \n   Some_Variable \n  calculate_AGE \n casa_VOlanda'
  const rows = str.split('\n')

  for (const i of rows) {
    const [a, b] = i.trim().toLowerCase().split('_')
    const output = `${a + b.replace(b[0], b[0].toUpperCase())}`
    console.log(output)
  }
});
///////////////////////////////////////////////////////////////
// Functions (part 2)
(() => {
  //////////////////////////////////////////////
  // Default Parameters
  const funDefArgs = (a = 1 * 3, b = 2, c = 3) => console.log(a, b, c)
  funDefArgs(5, undefined, 3) // 5, 2, 3
  funDefArgs(5, 56) // 5, 56, 3
  //////////////////////////////////////////////
  // How passing arguments works: Value vs.Reference
  const fligth = '2H987'
  const user = {
    name: 'Luis Valencia',
    passport: 213921839812
  }
  const funSome = (numF, passenger) => {
    numF = 'new Value'
    passenger.name = 'Mr ' + passenger.name
    passenger.passport === 213921839812 ? console.log('yep') : console.log('nope')
  }
  funSome(fligth, user)
  console.log(fligth) // not alterate cause works wiv value
  console.log(user) // JS work wiv the same object in function cause is passed by reference
  // 💭 Every JS works wiv values, even if looks like reference
  //////////////////////////////////////////////
  // high order function
  const noSpaces = str => str.trim().replaceAll(/ /g, '')
  const upperFirstLetter = str => {
    const [firstWord, ...other] = str.trim().split(' ')
    return [firstWord.toUpperCase(), other].join(' ')
  }
  // high-order function
  const daddyFun = (str = ''.trim(), fun) => {
    console.log(`The original string is: ${str}`)
    console.log(`Altered text is: ${fun(str)}`)
  }
  daddyFun('hola me llamo pedro   '.trim(), upperFirstLetter)

  //////////////////////////////////////////////
  // Function Methods
  const restaurantOne = {
    name: 'Italianis',
    orderCode: 'IT-',
    orders: [],
    order(orderNumber, customer) {
      console.log(
        `Well ${customer}, your order from ${this.name} is set with the code ${this.orderCode}${orderNumber}`
      )
      this.orders.push({ orderCode: `${this.orderCode}${orderNumber}`, customer })
    },
  }
  const restaurantTwo = {
    name: 'La casa de Toño',
    orderCode: 'CTñ-',
    orders: []
  }

  const storedFunction = restaurantOne.order

  storedFunction.call(restaurantTwo, 123456789, 'Karla Vega')

  const bindMethod = storedFunction.bind(restaurantTwo)
  bindMethod(232345, 'Sofia')

  // 💭 this keyword gonna take the handler parent (the HTML object)
  document.querySelector('.buy').addEventListener('click', restaurantOne.order.bind())
  ///////////////////////
  // Partial application
  const addTax = (rate, value) => value + value * rate
  addTax(0.1, 200)

  const addVAT = addTax.bind(null, 0.23)
  addVAT(23)
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 11: Working with arrays
///////////////////////////////////////////////////////////////
// array methods   
(() => {
  // 💭 Arrays are objects, thats why can recive methods
  const arr = [0, 1, 2, 3, 4, 5, 6]
  // create a copy
  arr.slice()
  arr.slice(1, -2) // [ 1, 2, 3, 4 ] does not mutate the OA

  arr.splice(3) // delete ==>  3, 4, 5, 6 n mutate the OA
  arr // [ 0, 1, 2 ] 
  // if recives 2 paramethers, the second one gonna be the lenght of elements to remove
  arr.splice(2, 4) // [ 2, 3, 4, 5 ] 
  arr // [ 0, 1, 6 ]

  const a = ['a', 'b', 'c', 'd', 'e']
  const b = ['j', 'i', 'h', 'g', 'f']
  b.reverse() // mutate the OA
  const c = a.concat(b) // does not mutate the OA
  c.join(' ') // does not mutate the OA
  a.at(0); S
  a.at(-1) // last element of array

  // .forEach()
  arr.forEach(function (el, index, arr) {
    console.log(index, el, arr)
  })
  // .forEach() for maps and sets
  new Map([['name', 'luis'], ['age', 18]]).forEach(function (value, key, map) {
    console.log(key, value, map)
  })
  new Set(['a', 12, 12, 13, 'a']).forEach((el, _, map) => {
    console.log(el, map)
  })
  // 💭 'break' or 'continue' are not allowed here, gonna iterate whole the array

  // forEach() in HTML
  const component = (arr) => {
    arr.forEach(function (el, i) {
      parentHTML.innerHTML = ''

      const html = `<h1>${i + 1, el}<h1>`
      parentHTML.insertAdjacentHTML('afterbegin', html)
      /*
      <!-- beforebegin -->
      <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
      </p>
      <!-- afterend -->
      */
    })
  }
});

// data transformations
() => {
  const arr = [12, 13, 45, 78, 12, 79]
  // .map()
  const a = arr.map((el, index, arr) => `item: ${el}`)
  console.log(a) // [ 'item: 12', 'item: 13', 'item: 45', 'item: 78', 'item: 12', 'item: 79' ]
  // .filter()
  const b = arr.filter(function (el, index, arr) {
    return el > 12
  })
  console.log(b) // [ 13, 45, 78, 79 ]
  // .reduce() ==> snowball, single value
  const c = arr.reduce((prev, cur, index, arr) => prev + cur, 0)
};

// find, findIndex, indexOf
() => {
  const arr = [1, 2, 3, 4, 5, 6]
  // .find()
  const a = arr.find((el) => el === 5)
  console.log(a) // 5
  // .findIndex() || .indexOf()
  const b = arr.indexOf(4) // 3, cannot recive a conditions so instead...
  const c = arr.findIndex((el) => el >= 3) // el === 3
  console.log(c)
};

// booleans
() => {
  const arr = [10, -10, 20, -20]
  // .includes() ==> equality
  const a = arr.includes(10) // true
  // .some() ==> condition
  const b = arr.some((el) => el > 0) // true
  // .every() ==> all
  const c = arr.every((el) => el > 0) // false
};

// nested arrays
() => {
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
  const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8]
  // .flat()
  arr.flat() // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  // deep argument
  arr2.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

  // .flatMap()
  const a = arr2.flatMap((el) => el)
  console.log(a)
};

// sorting arrays
() => {
  const arr = ['j', 'a', 'z', 'c']
  const arr2 = [-3, -10, 10, 3]
  // .sort() ==> mutate de OA
  arr.sort() // [ 'a', 'c', 'j', 'z' ]
  // by default sort is for strings
  arr2.sort() // [ -10, -3, 10, 3 ]
  // so we can use a callback inside
  arr2.sort((currentValue, nextValue) => {
    // Ascending
    if (currentValue > nextValue) return 1
    if (nextValue > currentValue) return -1
    // Descending
    if (currentValue > nextValue) return -1
    if (nextValue > currentValue) return 1
  })
  arr2 // [ -10, -3, 3, 10 ] or [ 10, 3, -3, -10 ]
};

// more ways to create and fill arrays
() => {
  // .fill() and empty arrays
  const a = new Array(7)
  console.log(a) // [ <7 empty items> ]
  a.fill('hello', 3, 4) // index of begin and end

  // array constructor ==> better way
  const b = Array.from({ length: 7 }, () => 1)
  const c = Array.from({ length: 3 }, (_, i) => i + 1)
  // output : [1, 2, 3]

  // .querySelectorAll() returns just a 'node list' so to use array methods we have to translate in one
  const arrElementsUI__one = Array.from(document.querySelectorAll('.some'), (el, i) => {
    return Number(el.textContent.replace('some', 'some'))
  })
  // or
  const arrElementsUI__two = [...document.querySelectorAll('.some')]
};

//  summary
(() => {
  // 23 array methods but when use it correctly ?
  const arr = [1, 2, 3, 4, 'a', 'b', 'c']

  // ❗ to mutate the OA
  arr
    .push() // add to the end
    .unshift() // add to the start

    .pop() //remove at the end
    .shift() // remove at the start
    .splice() // remove any

    .reverse()
    .sort()
    .fill()

  // a new array
  arr
    .map() // loop and compute from the original
    .filter() // use a condition
    .slice() // portion of the original
    .concat() // adding original to other
    .flat() // flattering the original
    .flatMap() // with a loop while flat

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
    .forEach() //just loop over the arr

});

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
});

///////////////////////////////////////////////////////////////
// 
(() => {

})