# The ultimate app guide - Expo ^51

First to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the new architecture works. 👇

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

Create the app with Expo (_empty template with TypeScript_ in this case)

```bash
npx create-expo-app@latest --template blank-typescript
```
Instantly we must to configure **TypeScript** in the `tsconfig.json` file to allow an absolute route with the `@` symbol.
```json
{
  ...
  "compilerOptions": {
    "strict": true,
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
import useSome from "@/app/hooks"
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

### To update the dependencies of the new _SDK 51_
```bash
npx expo install --fix
```
> More info on: https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependencies


Now we can make a **prebuild** and start coding. Everything is ready to rocket up!   
`by: @ValenciaArcega` 🚀
