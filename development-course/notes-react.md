# ReactJS

> ⚛️ : It is a popular, declarative, state driven, component based, JavaScript library to build UI's

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

> En lugar de re-renderizar todo el arbol de elementos en cada cambio, solo actualiza aquellos que han sufrido un cambio de estado, lo que hace es hacerle una **foto al DOM** la primera vez y cada vez, hace las modificaciones mínimas de manera casi quirurjica, la única regla es la propagación de cambios a los componentes hijos.

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

## ![ReviewingProps](image.png)

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

> 💡 The own data of a component. Update component state triggers React to re-render the component

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

In React we never manipulate the DOM, cause it's declarative, and thats why the name is _React_ because **reacts** to state changes by re-rendering th UI.

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

```js
⛔️
useEffect(async () => {}, []);
```

But inside can have an async fn

```js
✅
useEffect(() => {
  async callApi()...

  callApi()
}, []);
```

```js
useEffect(() => {
  // a best practice is to call fn
  // not write code (f.e. fetch or loops)
  console.log("I just ran once!");
}, [dependency]);
// make sure u really need the dependency
```

**Commun use**

> 👉 Manipulate the state that had been pass as a prop from one component to another.

... 🛠️ building
