# The ultimate app guide Expo 52

Before to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the **new architecture** works.

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

## Create the app
Empty template with TypeScript.

```bash
npx create-expo-app@latest --template blank-typescript
```
Instantly we must to configure **TypeScript** in the `tsconfig.json` file to allow an absolute route with the `@` symbol.
```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ],
      "@utils/*": [
        "app/utils/*"
      ],
    }
  }
}
```
Now it's just simply as:
```js
import useSome from "@hooks/useSome"
```
or resources
```js
source={require("@/assets/some.png")}
```
# Environment variables
Once project folding arch its set. Lets create a `.env` and a `env.d.ts` file and ignore 'em at `.gitignore`.
```bash
react-native-dotenv
```
Inside `env.d.ts` we must to determinate the same name of our `.env` variables.
```ts
declare module '@env' {
  export const ENDPOINT_TEAMS: string;
}
```
Add onto `tsconfig.json`: 
```json
"compilerOptions": {
  "types": [
    "./env.d.ts"
  ],
}
```
Now just remains to add the plugin at the file `babel.config.js` (if exists for nativewind, if not just create it).
```js
const plugin = require("tailwindcss")

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
       "nativewind/babel",
    ],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
      }]
    ]
  }
}
```
## Appearance

Set on `app.json` the property `"userInterfaceStyle": "automatic"`.  

https://www.nativewind.dev/getting-started/react-native

## Expo extra and util deps

```bash
expo-system-ui
@expo/vector-icons
expo-haptics

## QR sharing
expo-asset

expo-blur
expo-linear-gradient
expo-clipboard

expo-build-properties
expo-constants
expo-camera
expo-image-picker
expo-document-picker
expo-file-system
expo-location
expo-sharing
expo-splash-screen
expo-local-authentication
expo-task-manager

@react-native-async-storage/async-storage
@react-native-segmented-control/segmented-control
@react-navigation/bottom-tabs
@react-navigation/drawer
@react-navigation/native
@react-navigation/native-stack

@types/react

react-native-reanimated
react-native-gesture-handler
react-native-safe-area-context
react-native-screens

react-native-toast-message
react-native-date-picker
react-native-element-dropdown
react-native-walkthrough-tooltip
react-native-maps
react-native-qrcode-svg
react-native-gifted-charts
react-native-svg
react-native-star-rating-widget
```

## Root App Stack for a good workflow
```js
import Toast from 'react-native-toast-message'
import { toastConfig } from "@/app/components/Toast"
import { StatusBar } from "expo-status-bar"
import { LogBox } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SplashScreenHandler } from "@/app/core/SplashScreenHandler"
import { UserContext } from "@context/UserContext"
import { Router } from "@routes/Router"
import { useAppearance } from "@hooks/useAppareance"

LogBox.ignoreAllLogs()
const originalWarn = console.warn
console.warn = message => {
   if (message.includes("React Components must start with an uppercase letter")) {
      return
   }
   originalWarn(message)
}

export default function App() {
   const { isDarkMode } = useAppearance()

   return <NavigationContainer>
      <UserContext>
         <SplashScreenHandler>
            <GestureHandlerRootView>
               <StatusBar
                  style={!isDarkMode ? "dark" : "light"}
                  backgroundColor="transparent" />
               <Router />
            </GestureHandlerRootView>
            <Toast
              config={toastConfig} />
         </SplashScreenHandler>
      </UserContext>
   </NavigationContainer>
}
```

### Useful commands
```bash
# Update dependencies
npx expo install --fix

# Create the .apk for debug
./gradlew assembleDebug

# Create the .apk for release
./gradlew assembleRelease
```
> More info on: https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependencies


Now we can make a **prebuild** and start coding. 
```bash
npx expo prebuild --clean
```

Everything is ready to rocket up!   
`by: @ValenciaArcega` 🚀
