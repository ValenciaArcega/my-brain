## Update project dependencies
More info at https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#upgrade-dependenciesexpo-linear-gradient
```bash
npx expo install --fix
```
# Test the app

Generate the `.apk` artifact for debug
```bash
./gradlew assembleDebug
```
Generate the `.apk` artifact for internal release
```bash
./gradlew assembleRelease
```
---
# Publish on Play Store
Generate `.keystore`
```bash
keytool -genkey -v -keystore key-app.keystore -alias appName -keyalg RSA -keysize 2048 -validity 10000
```
Save on `android/app`

Set the key variables at `android/gradle.properties`
```bash
MY_APP_UPLOAD_STORE_FILE=key-app.keystore
MY_APP_UPLOAD_KEY_ALIAS=appName
MY_APP_UPLOAD_STORE_PASSWORD=somePass
MY_APP_UPLOAD_KEY_PASSWORD=somePass
```

Add the configs like 
https://reactnative.dev/docs/signed-apk-android#setting-up-gradle-variables

Generate the `.abb` bundle for the store
```bash
./gradlew bundleRelease
```