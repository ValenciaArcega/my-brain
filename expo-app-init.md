# The ultimate guide to create an Expo App

Before to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the **new architecture** works.

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

# Create the app
Empty template with TypeScript.

```bash
bunx create-expo-app@latest --template blank-typescript
```

Instantly configure the `tsconfig.json` file to allow access a route with the `@` symbol.
Based on experience the following structure its the prefered.

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@components/*": ["src/components/*"],
      "@contexts/*": ["src/contexts/*"],
      "@hooks/*": ["src/hooks/*"],
      "@interfaces/*": ["src/interfaces/*"],
      "@routes/*": ["src/routes/*"],
      "@utils/*": ["src/utils/*"],
      "@views/*": ["src/views/*"],
    }
  }
}
```

Now it's just simply as:

```js
import useSome from '@hooks/useSome';
/// in resources
source={require("@/assets/some.png")}
```

## Appearance

Set on `app.json` the property `"userInterfaceStyle": "automatic"`.

## Dependencies

```bash
# Utils
expo-dev-client expo-system-ui expo-haptics expo-symbols @react-native-vector-icons

# Fundamentals
react-native-mmkv 
react-native-gesture-handler
react-native-reanimated
react-native-worklets

# Navigation
@react-navigation/native 
@react-navigation/native-stack
react-native-safe-area-context 
react-native-screens 
react-native-bottom-tabs
@bottom-tabs/react-navigation

# Config on app.json
react-native-bottom-tabs
expo-build-properties
expo-camera
expo-image-picker
expo-local-authentication
expo-localization
expo-splash-screen

# Other Util Dependencies
react-native-gifted-charts
react-native-date-picker
```

## Root App Stack for a good workflow

```js
import "./global.css";
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
   return (
      <SplashScreenWrapper>
        <NavigationContainer>
            <UserContext>
              <GestureHandlerRootView>
                 <Router />
              </GestureHandlerRootView>
          </UserContext>
        </NavigationContainer>
      </SplashScreenWrapper>
    )
}
```

```bash
bunx expo prebuild
```

To build and launch on 🍎 & 🤖

```bash
bunx expo run:(ios|android)
```

Everything is ready to **rocket up**!  

🚀 `@ValenciaArcega`
