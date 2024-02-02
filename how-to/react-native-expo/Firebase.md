# Firebase 🔥

```bash
npx expo install firebase
```

Start by generating the template file **metro.config.js** in your project's root directory using the following command:

```bash
npx expo customize metro.config.js
```

## Configuring the file

```js
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;
```
