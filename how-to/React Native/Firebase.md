# Firebase 🔥
```
npx expo install firebase
```

Start by generating the template file **metro.config.js** in your project's root directory using the following command:
```
npx expo customize metro.config.js
```
Configuring the file
```
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
```