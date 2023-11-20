//////////////////////////////////////////////////
// useEffect
(() => {
  // 🧠 is a hook that allows execute arbitraty code when the component has been loaded in the DOM OR for each time that the dependencies change
  // 💭 is like an event listener, but instead to listen an event is listening to a variable or state

  const [some, setSome] = useState([some]);

  // will run AT LEAST once by default, and wiv no dependencies, if the second parameter(list) is not passed, the Effect will be executed each time the component renders
  useEffect(() => {
    // here is a best practice to call functions, not write code (f.e. Fetch or loops)
    console.log('I just ran!');
  }, [some]/* make sure u really need this var dependency */);
  // ❗❗ anytime that the dependencies inside of the array change, the Effect is gonna run the code

  /* ⚙ usage
  👉 manipulate the state that had been pass as a prop from one component to another */
});


//////////////////////////////////////////////////