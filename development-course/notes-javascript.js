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
