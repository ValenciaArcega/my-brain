# React Navigation 🌍

The navigation itself

```bash
npm install @react-navigation/native
```

To use

```js
import { NavigationContainer } from "@react-navigation/native";
```

**Install the expo dependencies**

```bash
npx expo install react-native-screens react-native-safe-area-context
```

Install the stack library.
To check more stack options  
👉 https://reactnavigation.org/docs/native-stack-navigator/#options

```bash
npm install @react-navigation/native-stack
```

To use

```js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
```

---

## How to use? 🤔

Now on `App.jsx`

```js
const stack = createNativeStackNavigator();

<NavigationContainer>
  <stack.Navigator initialRouteName="Login">
    <stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false, animation: "fade" }}
    />
  </stack.Navigator>
</NavigationContainer>;
```

**Now to move between screens**

On `Any.jsx`

```js
import { useNavigation } from "@react-navigation/native";

const n = useNavigation();

const goLogin = () => n.navigate("Login");
const goLogin = () => n.replace("Login");
```

### Move data between components

`Any.jsx` (inside a loop or whatever)

```js
<TouchableOpacity
  onPress={function () {
    n.navigate("ComponentChild", item.titulo);
  }}
/>
```

Other component

```js
ComponentChild({ route }) {
  const data = route.params
}
```
