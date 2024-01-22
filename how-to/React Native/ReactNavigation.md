
# React Navigation 🌍
```
npm install @react-navigation/native
```

Install the expo dependencies
```
npx expo install react-native-screens react-native-safe-area-context
```
Install the stack library❗ can be more than one (https://reactnavigation.org/docs/native-stack-navigator/#options)
```
npm install @react-navigation/native-stack
```
---
<br>

## How to use? 🤔
App.jsx
```
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

<NavigationContainer>
	<Stack.Navigator initialRouteName="Login">
	  <Stack.Screen  
			name='Login' 
			component={Login} 
			options={{ headerShown: false, animation: "fade" }}>
    </Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>
```

Now to move between screens   
Any.jsx
```
import { useNavigation } from '@react-navigation/native';

const n = useNavigation();

const goLogin = () => n.navigate('Login');
const goLogin = () => n.replace('Login');
```

### Move data between components  
Any.jsx (inside a loop or whatever)  
```
<TouchableOpacity onPress={function () {
   navigation.navigate('ComponentChild', item.titulo)
}}/>
```
Other component
```
ComponentChild({ route }) {
  const data = route.params
}
```
