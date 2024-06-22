# Onboarding component

To declare a stack of screen before init the login and also when the app launches for first time

First is important to import the dependencies

```js
import Onboarding from "react-native-onboarding-swiper";
import { OnboardingSlide } from "./components/OnboardingSlide";
import { useNavigation } from "@react-navigation/native";
import { useOnboardingStack } from "./hooks/useOnboardingStacks";
```

The `components/OnboardingSlide.jsx` contains the main component which is going to be render at the center

```js
import { Image, Text, View } from "react-native";
import { useStylesSlide } from "../hooks/useStylesSlide";

export function OnboardingSlide(props) {
  const s = useStylesSlide();

  return (
    <View style={s.containerSlide}>
      <Image style={s.slideImg} source={props.imgUrl} />
      <Text style={s.slideTitle}>{props.title}</Text>
      <Text style={s.slideDescription}>{props.description}</Text>
    </View>
  );
}
```

The styles of the component are stored on a custom hook to can use **other custom hooks** like the device media.

> 💡 To review how to control **Match media device** we should to check the documentation file `match-media.md`

On `hooks/useStylesSlide.ts`

```js
import { StyleSheet } from "react-native";
import { InterWeight } from "../../../constants/fonts";
import { useMatchMedia } from "../../../hooks/useMatchMedia";

export function useStylesSlide() {
  const { isShortPhone } = useMatchMedia();

  return StyleSheet.create({
    containerSlide: {
      alignItems: "center",
      rowGap: 30,
      maxWidth: isShortPhone ? "90%" : "90%",
      maxHeight: "100%",
    },
    slideImg: {
      maxHeight: isShortPhone ? "50%" : "60%",
      aspectRatio: 1,
      resizeMode: "contain",
    },
    slideTitle: {
      fontFamily: InterWeight.w700,
      letterSpacing: -2.2,
      fontSize: 44,
      color: "#181818",
    },
    slideDescription: {
      fontSize: 22,
      textAlign: "center",
      color: "#767676",
      fontFamily: InterWeight.w400,
      lineHeight: 38,
    },
  });
}
```

> 💡 To review how to work with fonts check the `fonts.md` file.

---

Now we can define an array of the screens in `./hooks/useOnboardingStacks` to render the same component but whit a different information

> ⚠️ It most be in a custom hook to can use `require()` keyword and not have troubles with `commonJS`

```js
export function useOnboardingStack() {
  const dataOnBoarding = [
    {
      imgUrl: require("../../../../assets/img/onboarding/morphis-glass-phone.png"),
      title: "",
      description: "",
    },
    {
      imgUrl: require("../../../../assets/img/onboarding/morphis-glass-car.png"),
      title: "",
      description: "",
    },
    {
      imgUrl: require("../../../../assets/img/onboarding/morphis-glass-magnifying.png"),
      title: "",
      description: "",
    },
  ];

  return dataOnBoarding;
}
```

## Now all together on the main component

```js
export function OnboardingScreen() {
  const navigation = useNavigation();
  const dataOnBoarding = useOnboardingStack();

  return (
    <Onboarding
      nextLabel="Siguiente"
      showSkip={false}
      bottomBarColor="transparent"
      bottomBarHighlight={false}
      showDone={true}
      transitionAnimationDuration={350}
      containerStyles={{ marginTop: 52 }}
      onDone={goLogin}
      pages={dataOnBoarding.map((item, index) => {
        return {
          backgroundColor: "#fff",
          image: (
            <OnboardingSlide
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
            />
          ),
          title: "",
          subtitle: "",
        };
      })}
    />
  );

  function goLogin() {
    navigation.navigate("Login");
  }
}
```

To configure the loading if is just the fisrt time that the app is installed it is neccessary to install and import a dependency in the `App.js`.

```js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
```

Then use it into an effect to validate if is first time or not

```js
export default function App() {
   const [isJustInstalled, setIsJustInstalled] = useState(null)

   useEffect(() => {
      AsyncStorage.getItem("alreadyLaunched")
         .then(value => {
            if (value == null) {
               AsyncStorage.setItem("alreadyLaunched", 'true')
               setIsJustInstalled(true)
            } else {
               setIsJustInstalled(false)
            }
         })
  }, [])

  if (isJustInstalled == null) return null
  else if (isJustInstalled) {
      return (
         <NavigationContainer>
            <stack.Navigator initialRouteName="Onboarding">
               <stack.Screen
                  name="Onboarding"
                  component={OnboardingScreen}
                  options={{ headerShown: false, animation: "fade", }} />
            </stack.Navigator>
         </NavigationContainer>
      )
   } else {
      return (
         <NavigationContainer>
            <stack.Navigator>
               <stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false, animation: "fade", }} />
            </stack.Navigator>
         </NavigationContainer>
      )
   }
  )
}
```
