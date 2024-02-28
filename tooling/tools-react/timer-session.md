# Timer session

How to set a timer to change a global state or parent state

```js
const [remainingTime, setRemainingTime] = useState(6000);
const [msgSessionTime, setMsgSessionTime] = useState("");

useEffect(() => {
  const timerId = setTimeout(() => {
    props.setTieneSesion(false);
  }, remainingTime);

  const intervalId = setInterval(() => {
    if (remainingTime > 0) {
      setRemainingTime((prevRemainingTime) =>
        Math.max(0, prevRemainingTime - 1000)
      );
    } else clearInterval(intervalId);

    // message conditional to set singular or plural
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const minutesText = minutes === 1 ? "minuto" : "minutos";
    const secondsText = seconds === 1 ? "segundo" : "segundos";

    if (minutes === 0) {
      setMsgSessionTime(`La sesión expira en ${seconds} ${secondsText}`);
    } else
      setMsgSessionTime(
        `La sesión expira en ${minutes} ${minutesText} y ${seconds} ${secondsText}`
      );
  }, 1000);

  return () => {
    clearTimeout(timerId);
    clearInterval(intervalId);
  };
}, [remainingTime]);
```

### Control ending

Now to add a validation of time almost done

```js
const [remainingTime, setRemainingTime] = useState(900000);

useEffect(() => {
  const timerId = setTimeout(() => {
    props.setTieneSesion(false);
  }, remainingTime);

  const intervalId = setInterval(() => {
    if (remainingTime > 0) {
      setRemainingTime((prevRemainingTime) =>
        Math.max(0, prevRemainingTime - 1000)
      );

      const minutes = Math.floor(remainingTime / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      const minutesText = minutes === 1 ? "minuto" : "minutos";
      const secondsText = seconds === 1 ? "segundo" : "segundos";

      if (minutes === 0) {
        setMsgSessionTime(`La sesión expira en ${seconds} ${secondsText}`);
      } else
        setMsgSessionTime(
          `La sesión expira en ${minutes} ${minutesText} y ${seconds} ${secondsText}`
        );

      if (remainingTime === 300000) {
        const restart = confirm(
          "La sesión esta apunto de expirar ¿Quieres reiniciar el tiempo?"
        );
        // setAlertShown(true) // Prevent further alerts

        if (restart) setRemainingTime(900000);
      }
    } else clearInterval(intervalId);
  }, 1000);

  return () => {
    clearTimeout(timerId);
    clearInterval(intervalId);
  };
}, [remainingTime]);
```
