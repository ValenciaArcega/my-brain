# Alerts

Customize an alert provided by RN

```js
import { Alert } from "react-native";
```

Create the element which's going to throw the event

```xml
<Button
	title="Send alert"
	onPress={createThreeButtonAlert} />
```

Then the handled function that returns `.jsx` component

```js
function createThreeButtonAlert() {
  return Alert.alert("Title", "Body", [
    {
      text: "Ask me later",
      onPress: () => console.log(""),
      style: "default",
    },
    {
      text: "Delete",
      onPress: () => console.log(""),
      style: "destructive",
    },
    {
      text: "Cancel",
      onPress: () => console.log(""),
      style: "cancel",
    },
  ]);
}
```
