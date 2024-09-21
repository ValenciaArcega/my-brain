# Checkbox customizable

👉 Follow project  
https://github.com/WrathChaos/react-native-bouncy-checkbox

# Combobox customizable

Ready to use example
```ts
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { InterWeight } from "@/app/constants/fonts";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colorsLight } from "../constants/colors";

export function Dropdownlist({ placeholder, data, setSelected, marginTop = 0 }) {
	const s = StyleSheet.create({
		dropdownItemStyles: {
			borderBottomColor: "#c5c5c5",
			borderBottomWidth: 1,
			paddingVertical: 16,
		},
		dropdownTextStyles: {
			fontSize: 16,
			fontFamily: InterWeight.w400,
		},
		dropdownStyles: {
			width: "100%",
			borderWidth: 1,
			backgroundColor: "#fff",
			borderColor: "#c5c5c5",
			// position: "absolute",
			// top: 50,
			// zIndex: 999,
		},
		boxStyles: {
			marginTop: marginTop,
			backgroundColor: colorsLight.bgInput,
			borderWidth: 0,
			height: 56,
			alignItems: "center",
		},
		inputStyles: {
			fontSize: 19,
			fontFamily: InterWeight.w500,
			lineHeight: 32,
		}
	})

	return (
		<SelectList
			setSelected={val => setSelected(val)}
			placeholder={placeholder}
			data={data}
			save="key"
			searchPlaceholder="Buscar"
			arrowicon={<Entypo name="chevron-small-down" size={26} color="gray" />}
			searchicon={<AntDesign style={{ marginRight: 18 }} name="search1" size={26} color="gray" />}
			maxHeight={220}
			notFoundText="No hay resultados"
			dropdownItemStyles={s.dropdownItemStyles}
			dropdownTextStyles={s.dropdownTextStyles}
			dropdownStyles={s.dropdownStyles}
			boxStyles={s.boxStyles}
			inputStyles={s.inputStyles}
			dropdownShown={false}
		/>
	)
}
```

Now we can just import the component
```js
import { Dropdownlist } from "@/app/components/Dropdownlist"

const [gender, setGender] = useState();
```

And pass the data
```xml
<Dropdownlist
    marginTop={6}
    placeholder="Selecciona una opción"
    data={[
        { key: false, value: "Femenino", },
        { key: true, value: "Masculino", },
    ]}
    setSelected={setGender} 
/>
```
