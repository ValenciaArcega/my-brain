`@author: ValenciaArcega` - June 2023

# ReactJS

> ⚛️ : It is a popular, declarative, state driven, component based, JavaScript library to build UI's

## Components

Components are reusable UI pieces. Each component can handle its own state and properties.

<br/>

**Size really matters**  
A _huge_ component can...

- Too many responsabilities
- Might need to many props
- Hard to reuse
- Complex code, hard to understand

A _small_ component can...

- Finish the app with 100s of mini-components
-

## JSX Rules

👉 JSX works essentially like HTML, but we can "scape" to JS usign `{}` for text or attribute
<br/>  
👉 We can place JS expressions inside the JS, like `reference variables`, `create arrays or objects`, `[].map()` or the ternary operator
<br/>  
👉 Statements are not allowed `(if/else, for, switch)`
<br/>  
👉 A piece of JSX can only have one root element. If you
need more, use `<React.Fragment>` (or the short `< >`)

## Virtual DOM 🌳

> 🇲🇽 En lugar de re-renderizar todo el arbol de elementos en cada cambio, solo actualiza aquellos que han sufrido un cambio de estado, lo que hace es hacerle una **foto al DOM** la primera vez y cada vez, hace las modificaciones mínimas de manera casi quirurjica, la única regla es la propagación de cambios a los componentes hijos.

## Props

Data that travels between components, usually since parent elements to child elements, is like the communication channel for components.  
<br>
To set the data we use

```jsx
<Component name="" price={10} />
```

And to get that data

```jsx
const Component = (props) => {
  const name = props.name;
};
```

> 👉 The paramether **props** is basically the object with the data

But instead we can also use an object as a prop to avoid passing each value in the component

```jsx
<Pizza pizzaObj={obj} />
```

```jsx
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizza0bj.url} />
      <h3>{props.pizza0bj.name}</h3>
      <p>{props.pizza0bj.price}</p>
    </div>
  );
}
```

### Destructuring props

```jsx
function Pizza({ pizzaObj }) {
  return (
    <div className="pizza">
      <img src={pizza0bj.url} />
      <h3>{pizza0bj.name}</h3>
      <p>{pizza0bj.price}</p>
    </div>
  );
}
```

## Conditional rendering

```jsx
<p>{isOpen ? "Open" : "Close"}</p>
```

or

```jsx
isOpen ? <p>Open</p> : <p>Close</p>;
```

### Short circuting

```js
isOpen && <p>isOpen was falsy</p>;
```

##### For className property

We can "scape" twice for JS code inside jsxs

```jsx
className={`some ${var && ""}`}
```

Try to avoid evaluate numbers with the
`&&` cause we will get that number printed to the user interface, instead we have to use an evaluation:

```js
numPizzas > 0 && <p></p>;
```

## Events

To handle an event on each component or element we have to use the camelCase notation and pass a _function value_ instead write direct the code inside

```html
<p onClick="{}"></p>
```

Also works for passing a function

```js
function doSomething() {}

return <p onMouseEntered={doSomething}></p>;
```

or

```html
<p onMouseEntered={() => doSomething()}></p>
```

---

## Hooks

Utilities that add functionality to the components, or execute certain arbitrary code when something happens in the components. It starts with `use()`

> Are functions with top level use, it means that can only be use in the main scope of the component

```js
function someFn () {
  ❌ use___()
}
```

Neither in loops or statements

```js
if (true) {
  ❌ use___()
}
```

### `useState`

State is the most important concept in React, is a tool that allows to persist local variables between renders

> 💡 The own data of a component. Update component state triggers React to re-render the component. Like the component memory because keeps the state even though render over and over again.

```js
import { useState } from "react";

useState(defaultValue);
```

```js
const state = useState(false);

const isFollowing = state[0];
const setIsFollowing = state[1]; // upd state

// applying destructuring
const [isFollowing, setIsFollowing] = useState(false);
```

> 💡 Never try to update the state manually

In React we never manipulate the DOM, cause it's declarative, and thats why the name is _React_ because **reacts** to state changes by re-rendering the UI.

### Derived state

Keep states as simple as posible, try to create 'em just when is neccessary and if is not, just store or calc in variables.

## Children prop

This prop exist in every component and takes all the content between the opening and closing tag of the component.

```js
<Button>
  <span>👈</span> Previous text
</Button>
```

```js
function Button({ children }) {
  return <button>{children}</button>;
}
```

### `useEffect`

It is a hook that allows execute arbitraty code when the component has been loaded in the DOM OR for each time that the dependencies change

> It's like an event listener, but instead to listen an event is listening to a variable or state change

This hook will run AT LEAST once by default, and wiv no dependencies if the second parameter(list) is not passed, the _Effect_ will be executed each time the component renders.  
<br>
Execute once the component has been rendered

```js
useEffect(() => {});
```

This hook **cannot** recive an asyncronis fn

❌

```js
useEffect(async () => {}, []);
```

But inside can have or call an async fn

✅

```js
useEffect(() => {
  async function callApi()...

  callApi()
}, []);
```

A best practice is to call fn instead write code (f.e. fetch or loops)

```js
useEffect(() => {
  console.log("I just ran once!");
}, [dependency]);
// make sure u really need the dependency
```

**Commun use**

> 👉 Manipulate the state that had been pass as a prop from one component to another.

### Custom hooks

Those are created when we want to split some logic outside to the component, to can reuse some functionality.  
To declare we have to write the `use` keyword before the alias.

- Store in a different file
- Catch the returning values using destructuring on the main component

> ⚠️ Use the regular hooks as `useState` but returning just the value, AVOID to return the setter function

```js
export const useMyHook = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return { isFollowing };
};
```

❌

```js
return {
  isFollowing,
  setIsFollowing,
};
```

> Each time when you got a `useEffect()` make the question if the logic cab be in a custom hook.

### `useRef`

Allows you to create a mutable reference that persists throughout the life cycle of a component and is very useful for any value that you want to mutate such as an identifier, a DOM element, a counter... and that once it changes **does not re-render the component**.

> 🌐 Permite crear una referencia mutable que persiste en todo el ciclo de vida de un componente y es muy útil para cualquier valor que se quiera mutar, como un identificador, un elemento del DOM, un contador y que una vez que cambia **no vuelve a renderizar el componente**

### Save a DOM element reference (uncontrolled way)

Instead of using the `.querySelector()` we have to declare the obj reference. Inside the parentesis we pass the _initial value_

```js
const inputSome = useRef();
```

Creating the reference

```js
return <input ref={inputSome} />;
```

Now to access the properties inside is neccessary to access the `.current` property (_native of React_)

```js
const value = inputSome.current.value;
```

> ⚠️ Sometimes this hooks becomes so useful that we can get into the trap of using in every input element

Instead of abuse of the useRef we can use a native way to control form data in JavaScript...

### `window.FormData()`

Set a name to the inputs inside the form and handle the `onSubmit` event

```html
<input name="salsa" />
```

```js
const onSubmit = function (e) {
  e.preventDefault();

  const fields = new window.FormData(e.target);
  const salsa = fields.get("salsa");
};
```

To chatch the values of all the inputs in an object `{}` we can use

```js
const fields = Object.fromEntries(new window.FormData(e.target));
```

### Controlled elements

Those are elements that now React can control, to achieve this behavior it may follow the next rules:

1. Create a pience of state and change the value of the element to that existing state

```jsx
const [idUser, setIdUser] = useState(false)

<input value={idUser}>
```

2. Handle an event to the element and triggers a state change

```html
<input value={idUser} onChange={(e) => setIdUser(e.target.value)} />
```

Or even in the function there can be validations that are easier than in not controlled way

```js
const onChange = (event) => {
  const query = event.target.value;
  if (query.startsWith(" ")) return;

  setIdUser(query); // async if is not setted before (event.target.value)
};
```

> ⚠️ The issue with this way can be if is a large app, each time value change, the component is going to be re-render 'cause the state changed

### Save the state to catch the previous value

```js
const [search, setSearch] = useState(false);

const previousSearch = useRef(search);

// ... then in logic
if (search === previousSearch.current) return;
```

### `useMemo`

Is a React Hook that lets cache the result of a calculation between re-renders

> ⚠️ Just use this hook when the re-render is a really **expensive** data load

### Example

```js
const customHook = function {
  const name = "Some"

  function calcFunction() {
    // ... some really huge calc
  }

  return { name, calcFunction }
}
```

Avoid re-load the function each time

```js
import { useMemo } from "react"

const customHook = function {
  const name = "Some"

  const calcFunction = useMemo(() => {
    return // ... some really huge calc
  }, [name])

  return { name, calcFunction }
}
```

## Context API

An state that can live in multiple components, lives in the main scope of the app so the rest of components can access to it.

Can return

- Provider
- Objects

Then we can use the `createContext` from react

```shell
└── context
     └── authContext.js
```

We can store static data (`{}`, `var`, `[]`) is not neccessary to write ~~states~~ (_eventually will be needed, but it **does not means is mandatory**_)

```js
import { createContext } from "react";

export const authContext = createContext();

export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}
```

Then to achieve that all components get access (or we can make our own selection of components that can access)

```js
import { AuthProvider } from "./context/authContext";

function App() {
  return <AuthProvider>{/* Routes or components*/}</AuthProvider>;
}
```

Now to use the context in a particular component...

### `useContext`

```js
import { authContext } from "./context/authContext";
import { useContext } from "react";

export function MyComponent() {
  const obj = useContext(authContext);

  console.log(obj); // user: { login: true}
}
```

To optimize this way we can create a **customHook**.  
✅

```js
export function useAtuth() {
  const context = useContext(authContext);
  return context;
}
```

Then is just import the _customHook_ on each component to access the data.

## Global state

---

### How do ⚛️ works behind the scenes

What triggers the initial render is something called _React element tree_ 🌳 or a popular term that developers used to call... `Virtual DOM`

> Is not the official name by the documentation but is easier to understand for developers

When a state change on A component the entire _Virtual DOM_ re-renders whole A child componets to play it safe with down propagation

### 🛠️ learning...
