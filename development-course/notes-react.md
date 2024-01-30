# ReactJS

> ⚛️ : It is a popular, declarative, state driven, component based, JavaScript library to build UI's

## Hooks

### useEffect

It is a hook that allows execute arbitraty code when the component has been loaded in the DOM OR for each time that the dependencies change

> It's like an event listener, but instead to listen an event is listening to a variable or state change

This hook will run AT LEAST once by default, and wiv no dependencies if the second parameter(list) is not passed, the _Effect_ will be executed each time the component renders

```js
useEffect(() => {
  // a best practice is to call fn
  // not write code (f.e. Fetch or loops)
  console.log("I just ran!");
}, [dependency]);
// make sure u really need the dependency
```

**Commun use**

> 👉 Manipulate the state that had been pass as a prop from one component to another.
