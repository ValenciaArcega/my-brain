# The ultimate app guide - Expo ^51

First to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the new architecture works. 👇

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

Create the app with Expo (_empty template with TypeScript_ in this case)

```bash
npx create-expo-app@latest my-app-name --template blank-typescript
```
Instantly we must to configure **TypeScript** in the `tsconfig.json` file to allow an absolute route with the `@` symbol.
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": false,
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  }
}
```
Now we can use the root folder _app_ as static route inside the code like 
```js
import Some from "@/app/hooks"
```
or resources
```js
source={require("@/assets/some.png")}
```

Then it is time to configure the main config file in our project. Which is `app.json`
> This properties will be compiled onto native code for `AndroidManifest.xml` and `Info.plist`

`app.json`
Splashscreen configuration
```json
"splash": {
    "image": "./assets/app-splashscreen.png",
    "resizeMode": "cover",
    "backgroundColor": "#ffffff"
},
```
Basic **iOS** configuration for permissions, apps access and more.
```json
"ios": {
    "bundleIdentifier": "com.company.appName",
    "supportsTablet": true,
    "infoPlist": {
      "UIBackgroundModes": [
        "location",
        "fetch"
      ],
      "LSApplicationQueriesSchemes": [
        "tel",
        "telprompt"
      ],
      "NSAppTransportSecurity": {
        "NSAllowsArbitraryLoads": true
      },
      "NSLocationAlwaysAndWhenInUseUsageDescription": "Permitir a ... acceder a tu ubicación en todo momento y cuando estés en uso",
      "NSLocationAlwaysUsageDescription": "Permitir a ... acceder a tu ubicación en todo momento",
      "NSLocationWhenInUseUsageDescription": "Permitir a ... acceder a tu ubicación mientras estás usando la aplicación"
    }
},
```

To allow prebuild and set `"userInterfaceStyle": "automatic"` on Android we must to install first:
```bash
npx expo install expo-system-ui
```

Then the basic **Android** configuration for permissions and more.
```json
"android": {
    "package": "com.company.appName",
    "softwareKeyboardLayoutMode": "pan",
    "userInterfaceStyle": "automatic",
    "adaptiveIcon": {
      "foregroundImage": "./assets/app-icon-adaptive.png",
      "backgroundColor": "#ffffff"
    },
    "permissions": [
      "android.permission.ACCESS_NETWORK_STATE",
      "android.permission.ACCESS_BACKGROUND_LOCATION",
      "android.permission.ACCESS_FINE_LOCATION",
      "android.permission.ACCESS_COARSE_LOCATION",
      "android.permission.FOREGROUND_SERVICE",
      "android.permission.RECORD_AUDIO",
      "android.permission.CAMERA"
    ]
},
```

### Google config (Maps & Firebase files)
```json
"ios": {
    "googleServicesFile": "./GoogleService-Info.plist",
    "config": {
      "googleMapsApiKey": "YOUR_API_KEY"
    },
},
"android": {
    "googleServicesFile": "google-services.json",
    "config": {
      "googleMaps": {
        "apiKey": "YOUR_API_KEY"
      }
    },
},
```
## Expo properties
Now it is paramount to configure the external properties to access open backend servers or even, allow backends as a service like Firebase works.
```bash
npx expo install expo-build-properties
```

Configure onto the `app.json` for iOS and Android.  
> This configuration will grow as the project needs it so... if a plugin it's unnecessary. Just skip it.
```json
"plugins": [
  [
    "expo-build-properties",
    {
      "android": {
        "usesCleartextTraffic": true
      },
      "ios": {
        "useFrameworks": "static"
      }
    }
  ],
  "@react-native-firebase/app",
  "expo-font",
  [
    "expo-image-picker",
    {
      "photosPermission": "... accesa a tus fotos para poder dar de alta documentos"
    }
  ],
  [
    "expo-camera",
    {
      "cameraPermission": "Permitir a ... acceder a la cámara",
      "microphonePermission": "Permitir a ... acceder al micrófono",
      "recordAudioAndroid": false
    }
  ]
],
```
## Styling
Now lets configure **Nativewind** (and amazing tool to style our Native Code with **Tailwind**). It is as easy as just install:
```bash
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
```
> ⚠️ Caution. Always check the docs to install the new long term versions. https://www.nativewind.dev/quick-starts/expo

### TypeScript support
Create the file `nativewind-env.d.ts` and set
```ts
/// <reference types="nativewind/types" />
```
Once it is installed and configured run:
```bash
npx tailwindcss init
```
This will create the `tailwind.config.js`. Inside the file we can set or scheme colors, the dark mode property and many more props.
```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p100: "#edf2ff",
        p200: "#dbe4ff",
        ...,
      },
    },
  },
  plugins: [],
}
```
Finally just modify the `babel.config.js` file and add the dependency, also it's a good moment to install `react-native-reanimated` which also needs to add the plugin.
```js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "react-native-reanimated/plugin",
      "nativewind/babel",
    ],
  }
}
```
> The steps may change with the new versions of each dependecy, thats why it's important to always follows the latest version of our utils.  

### To update the dependencies of the new _SDK 51_
```bash
npx expo install --fix
```
> More info on: https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependencies

### Git config
`.gitignore` comes always by default. But there are some routes "missing" (_optional_)
```git
%ProgramData%
.vs/
.vscode/
obj
bin

android/
ios/
eas.json
```

Now we can make a **prebuild** and start coding.

To launch the server run:
---
```bash
npx expo start
```
Or if we change the script onto the `package.json`
```bash
npm run dev
```

Everything is ready to rocket up!  
`by: @ValenciaArcega` 🚀
