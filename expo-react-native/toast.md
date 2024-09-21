# Toast

Install the lib and import it in the `App.js` file

```js
import Toast from "react-native-toast-message";
import { toastConfig } from "./app/components/CustomToast";
```

return the component to each child can access

```xml
<Toast config={toastConfig} />
```

Now in the `CustomToast.tsx` file configure the BaseToast to reuse it

```jsx
import { Ionicons } from "@expo/vector-icons";
import { BaseToast } from "react-native-toast-message";
// optional but recommended to have a colors scheme
import { appColors } from "@/app/constants/colors";

export function CustomToast({ props, height, iconName, colorIcon }) {
  return (
    <BaseToast
      {...props}
      text1NumberOfLines={1}
      text2NumberOfLines={2}
      text1Style={{
        fontSize: 18,
        fontWeight: "500",
      }}
      text2Style={{
        fontSize: 17,
        fontWeight: "400",
        color: "#999",
      }}
      contentContainerStyle={{
        paddingHorizontal: 8,
      }}
      renderLeadingIcon={() => (
        <Ionicons name={iconName} size={30} color={colorIcon} />
      )}
      style={{
        height: height,
        marginTop: "8%",
        borderLeftColor: colorIcon,
        borderLeftWidth: 8,
        alignItems: "center",
        paddingVertical: 6,
        paddingLeft: 10,
      }}
    />
  );
}

export const toastConfig = {
  successLarge: (props) => (
    <CustomToast
      props={props}
      height={86}
      iconName="checkmark-circle"
      colorIcon="#20c997"
    />
  ),
  successShort: (props) => (
    <CustomToast
      props={props}
      height={58}
      iconName="checkmark-circle"
      colorIcon="#20c997"
    />
  ),
  errorLarge: (props) => (
    <CustomToast
      props={props}
      height={86}
      iconName="alert-circle"
      colorIcon="#ff6b6b"
    />
  ),
  errorShort: (props) => (
    <CustomToast
      props={props}
      height={58}
      iconName="alert-circle"
      colorIcon="#ff6b6b"
    />
  ),
};
```

Last is just use the name of the toast

```jsx
const showToast = () => {
  Toast.show({
    type: "successLarge",
    text1: "Title",
    text2: "Body message",
  });
};
```

If is a **short toast** avoid the second text

```jsx
const showToast = () => {
  Toast.show({
    type: "successShort",
    text1: "Title",
  });
};
```

Call everywhere

```js
showToast();
```
