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

## Props

Data that travels between components, usually since parent elements to child elements, is like the communication channel for components
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

## Conditional rendering

```jsx
isOpen ? <p>Open</p> : <p>Close</p>;
```

### Short circuting for conditional rendering

```js
isOpen && <p>isOpen was falsy</p>;
```

Try to avoid evaluate numbers with the
`&&` cause we will get that number printed to the user interface, instead we have to use an evaluation:

```js
numPizzas > 0 && <p></p>;
```

---

## ![ReviewingProps](image.png)

---

## Hooks

Utilidades que añaden funcionalidad a los componentes, o ejecutar cierto código arbritrario cuando ocurre algo en los componentes

### useEffect

It is a hook that allows execute arbitraty code when the component has been loaded in the DOM OR for each time that the dependencies change

> It's like an event listener, but instead to listen an event is listening to a variable or state change

This hook will run AT LEAST once by default, and wiv no dependencies if the second parameter(list) is not passed, the _Effect_ will be executed each time the component renders

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

### useState

```jsx
const state = useState(false);

const isFollowing = state[0];
const setIsFollowing = state[1]; // Upd the state

// applying destructuring
const [isFollowing, setIsFollowing] = useState(false);
```

## Virtual DOM 🌳

> En lugar de re-renderizar todo el arbol de elementos en cada cambio, solo actualiza aquellos que han sufrido un cambio de estado, lo que hace es hacerle una **foto al DOM** la primera vez y cada vez, hace las modificaciones mínimas de manera casi quirurjica, la única regla es la propagación de cambios a los componentes hijos.
