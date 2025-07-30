# The ultimate guide to create app - Expo 53^

Before to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the **new architecture** works.

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

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
      "@/*": ["./*"],
      "@components/*": ["src/components/*"],
      "@constants/*": ["src/constants/*"],
      "@contexts/*": ["src/contexts/*"],
      "@hooks/*": ["src/hooks/*"],
      "@interfaces/*": ["src/interfaces/*"],
      "@routes/*": ["src/routes/*"],
      "@utils/*": ["src/utils/*"],
      "@views/*": ["src/views/*"],
      "@core/*": ["src/views/core/*"],
      "@public/*": ["src/views/public/*"]
    }
  }
}
```

Now it's just simply as:

```js
import useSome from '@hooks/useSome';
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
const plugin = require('tailwindcss');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  };
};
```

## Appearance

Set on `app.json` the property `"userInterfaceStyle": "automatic"`.

## Dependencies

```bash
expo-dev-client
expo-haptics 
expo-blur
expo-linear-gradient
expo-system-ui
expo-splash-screen
expo-asset
expo-sharing
expo-constants
expo-task-manager
expo-location
expo-document-picker
expo-file-system
expo-symbols
@expo/vector-icons

@react-native-async-storage/async-storage 
react-native-mmkv 
react-native-gesture-handler
react-native-svg
# Navigation
@react-navigation/native 
react-native-screens 
react-native-safe-area-context 
@react-navigation/native-stack 
@react-navigation/bottom-tabs 
@react-navigation/drawer 

# Config on app.json
expo-build-properties
expo-camera
expo-image-picker
expo-local-authentication
expo-secure-store
expo-localization

react-native-reanimated 

# Components or functions on other projects
expo-clipboard
react-native-toast-message
react-native-date-picker

# Other util dependencies
react-native-walkthrough-tooltip
react-native-maps
react-native-qrcode-svg
react-native-gifted-charts
react-native-star-rating-widget
```

## Root App Stack for a good workflow

```js
import "./global.css";
import Toast from 'react-native-toast-message'
import { toastVariants } from "@components/Toast"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { cssInterop } from 'nativewind';

LogBox.ignoreAllLogs()

cssInterop(Ionicons, {
  className: {
    target: 'style',
    nativeStyleToProp: {
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
              config={toastVariants} />
      </UserContext>
   </NavigationContainer>
 </SplashScreenHandler>
}
```

Now to make a **prebuild version**.
- Use the flag `--platform ios` to build on specific CNG
- Use the flag `--clean` to clean the current native folders.

```bash
npx expo prebuild
```

Create the `local.properties` file on the *android* folder on macOS
```bash
sdk.dir=/Users/user-name/Library/Android/sdk
```

To build and launch on 🤖 & 🍎

```bash
npx expo run:(ios|android)
```

Everything is ready to **rocket up**!  

🚀 `@ValenciaArcega`
