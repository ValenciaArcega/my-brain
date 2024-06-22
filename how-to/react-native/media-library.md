# Expo Media Library

```js
import * as MediaLibrary from "expo-media-library";
import { Linking } from "react-native";
```

Ask for permission and create the validations

```js
useEffect(() => {
  (() => MediaLibrary.requestPermissionsAsync())();
}, []);
```

To save the image on the device

```js
async function saveImage_onPress(uri) {
  await MediaLibrary.createAssetAsync(uri);
  // ... logic
}
```

To open the Photos app in **iOS and Android**

```js
async function openPhotosApp_onPress() {
  if (Platform.OS === "ios") {
    Linking.openURL(`photos-redirect://`);
  } else {
    Linking.openURL(`content://media/external/images/media`);
  }
}
```

The paramether `uri` is actually the uri string that camera returns

```js
onPress={() => saveImage_onPress(uri);()}
```
