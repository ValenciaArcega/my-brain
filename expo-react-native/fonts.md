# Fonts setup

To use local fonts into our Expo app we should download the desired fonts and store 'em
`@/assets/fonts/inter/Inter-Black.ttf`

Create and configure the `SplashScreenHandler.jsx` file using the custom hook `useFonts`
```js
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

export function SplashScreenHandler({ children }) {
    const [fontsLoaded] = useFonts({
        "Inter-Bold": require("@/assets/fonts/inter/Inter-Bold.ttf"),
        "Inter-ExtraBold": require("@/assets/fonts/inter/Inter-ExtraBold.ttf"),
        "Inter-Medium": require("@/assets/fonts/inter/Inter-Medium.ttf"),
        "Inter-Regular": require("@/assets/fonts/inter/Inter-Regular.ttf"),
        "Inter-SemiBold": require("@/assets/fonts/inter/Inter-SemiBold.ttf"),
    })
    
    useEffect(() => {
        (async () => {
            await SplashScreen.preventAutoHideAsync()
        })()
    }, [])
    
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])
    
    if (!fontsLoaded) return null
    
    return <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {children}
    </View>
}
```

Now wrap the App onto the Splash component on `App.ts/js`
```js
export default function App() {
    return <SplashScreenHandler>
        <Router />
    </SplashScreenHandler>
}
```

Validate if the fonts loaded

> ⚠️ More info on. https://www.youtube.com/watch?v=25pG-T7jbGM at minute `6:30`


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

**Usage with StyleSheet**

```js
import { InterWeight } from "@/app/constants/fonts";

text: {
    fontFamily: InterWeight.w700,
},
```
