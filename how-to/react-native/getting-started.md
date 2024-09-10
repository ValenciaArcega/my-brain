# Expo ^51 - React Native

First to start it is important to understand how React Native components really works behind the scenes.
So this is a real quick summary of how the new architecture works. 👇

https://reactnative.dev/docs/the-new-architecture/landing-page#fast-javascriptnative-interfacing

Create the app with Expo (_empty template_)

```bash
npx create-expo-app@latest my-app-name --template blank
```

## Basic configuration on `app.json`

Splashscreen configuration
```json
"splash": {
    "image": "./assets/app-splashscreen.png",
    "resizeMode": "cover",
    "backgroundColor": "#ffffff"
},
```
Basic **iOS** Configuration for permissions an more.
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
      "NSLocationAlwaysAndWhenInUseUsageDescription": "Permitir a Flego acceder a tu ubicación en todo momento y cuando estés en uso",
      "NSLocationAlwaysUsageDescription": "Permitir a Flego acceder a tu ubicación en todo momento",
      "NSLocationWhenInUseUsageDescription": "Permitir a Flego acceder a tu ubicación mientras estás usando la aplicación"
    }
},
```
Basic **Android** Configuration for permissions an more.
```json
"android": {
    "package": "com.baaccsystems.flego",
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

### Google maps config
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
### To update the dependencies of the new _SDK 51_
> 👉 More info on: https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependencies

```bash
npx expo install --fix
```

---
🚀

```bash
npx expo start
```
