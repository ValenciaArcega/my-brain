## TS adding

To do the root folder as **static route** is neccessary to configure the `tsconfig.json` file on the _paths_ object
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "extends": "expo/tsconfig.base"
}
```
Now we can use the root folder has static route inside components like 
```js
import Some from "@/app/hooks"
```
or for resources
```js
source={require("@/assets/some.png")}
```
