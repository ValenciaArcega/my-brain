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

To allow prebuild and set on Android, It is necessary to install:
```bash
expo-system-ui
```

## Expo extra and util deps

## Expo properties

```bash
expo-build-properties
```

### Useful commands
```bash
# Update dependencies
# More info on: https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependencies
npx expo install --fix

# Create the .apk for debug
./gradlew assembleDebug
# Create the .apk for release
./gradlew assembleRelease
```


Now we can make a **prebuild** and start coding. 
```bash
npx expo prebuild --clean
```

Everything is ready to rocket up!   
`by: @ValenciaArcega` 🚀
