# Fonts setup

To use local fonts into our Expo app we should download the desired fonts and store 'em
`./assets/fonts/inter/Inter-Black.ttf`

Then install the dependencies and import 'em

```js
import { useFonts } from "expo-font";
```

Configure `App.js` using the custom hoom `useFonts`

```js
const [fontsLoaded] = useFonts({
  "Inter-Black": require("./assets/fonts/inter/Inter-Black.ttf"),
  "Inter-Bold": require("./assets/fonts/inter/Inter-Bold.ttf"),
  "Inter-ExtraBold": require("./assets/fonts/inter/Inter-ExtraBold.ttf"),
  "Inter-ExtraLight": require("./assets/fonts/inter/Inter-ExtraLight.ttf"),
  "Inter-Light": require("./assets/fonts/inter/Inter-Light.ttf"),
  "Inter-Medium": require("./assets/fonts/inter/Inter-Medium.ttf"),
  "Inter-Regular": require("./assets/fonts/inter/Inter-Regular.ttf"),
  "Inter-SemiBold": require("./assets/fonts/inter/Inter-SemiBold.ttf"),
  "Inter-Thin": require("./assets/fonts/inter/Inter-Thin.ttf"),
});
```

Validate if the fonts loaded

> ⚠️ This just works for local development, to validate loading check with a **SplashScreen** watch https://www.youtube.com/watch?v=25pG-T7jbGM at minute `6:30`

```js
if (!fontsLoaded) return null;
```

---

Now on `constants/fonts.ts` configure the font dictionary to use it on style files

```js
export enum InterWeight {
	w100 = "Inter-Thin",
	w200 = "Inter-ExtraLight",
	w300 = "Inter-Light",
	w400 = "Inter-Regular",
	w500 = "Inter-Medium",
	w600 = "Inter-SemiBold",
	w700 = "Inter-Bold",
	w800 = "Inter-ExtraBold",
	w900 = "Inter-Black"
}
```

**Usage**

```js
import { InterWeight } from "./constants/fonts";

text: {
	fontFamily: InterWeight.w700,
},
```
