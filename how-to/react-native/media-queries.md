# Match media

A reference of the use: https://blog.expo.dev/media-queries-with-react-native-for-ios-android-and-web-e0b73ed5777b

---

**Install the dependencies** and import 'em at `hooks/useMatchMedia.ts`

```js
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
```

Set the rules **per constant** and return it

```js
export function useMatchMedia() {
  const isShortPhone = useMediaQuery({
    query: "(max-device-width:320) and (min-device-height:568)",
  });

  return { isShortPhone };
}
```
