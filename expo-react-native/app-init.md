# The ultimate app guide - Expo 52^

Before to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the **new architecture** works.

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

## Create the app
Empty template with TypeScript.

```bash
npx create-expo-app@latest --template blank-typescript
```
Instantly configure the `tsconfig.json` file to allow access a route with the `@` symbol.
Based on experience the following structure its the prefered.
```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ],
      "@components/*": [
        "src/components/*"
      ],
      "@constants/*": [
        "src/constants/*"
      ],
      "@contexts/*": [
        "src/contexts/*"
      ],
      "@hooks/*": [
        "src/hooks/*"
      ],
      "@interfaces/*": [
        "src/interfaces/*"
      ],
      "@routes/*": [
        "src/routes/*"
      ],
      "@utils/*": [
        "src/utils/*"
      ],
      "@core/*": [
        "src/views/core/*"
      ],
      "@public/*": [
        "src/views/public/*"
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
  export const API_URL: string;
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
# app.json config
expo-asset
expo-build-properties
expo-camera
expo-image-picker
expo-local-authentication

expo-system-ui
expo-splash-screen
@expo/vector-icons
expo-blur
expo-document-picker
expo-file-system
expo-location
expo-sharing
expo-task-manager
expo-constants
expo-haptics
expo-clipboard
expo-linear-gradient

react-native-reanimated
react-native-gesture-handler

@react-navigation/native
react-native-screens
react-native-safe-area-context

@react-navigation/native-stack
@react-navigation/bottom-tabs
@react-navigation/drawer

@react-native-async-storage/async-storage
@react-native-segmented-control/segmented-control
react-native-walkthrough-tooltip
react-native-maps
react-native-qrcode-svg
react-native-gifted-charts
react-native-svg
react-native-star-rating-widget

## Component on other projects
react-native-toast-message
react-native-date-picker
react-native-element-dropdown
```

## Root App Stack for a good workflow
```js
import Toast from 'react-native-toast-message'
import { toastConfig } from "@/app/components/Toast"
import { NavigationContainer } from "@react-navigation/native"

LogBox.ignoreAllLogs()

cssInterop(Ionicons, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      // 'size': 'size',
      'color': 'color'
    } as Record<string, string>
  }
});

export default function App() {
   const { isDarkMode } = useAppearance()

   return  <SplashScreenHandler>
      <NavigationContainer>
        <UserContext>
            <GestureHandlerRootView>
               <StatusBar
                  style={!isDarkMode ? "dark" : "light"}
                  backgroundColor="transparent" />
               <Router />
            </GestureHandlerRootView>
            <Toast
              config={toastConfig} />
      </UserContext>
   </NavigationContainer>
 </SplashScreenHandler>
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
