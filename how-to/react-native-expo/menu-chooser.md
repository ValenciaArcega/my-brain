# Menu Chooser

```bash
npm i react-native-material-menu
```

## How to use? 🤔

```js
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";

const [currentEntity, setCurrentEntity] = useState("Elegir municipio");
const [visible, setVisible] = useState(false);
const hideMenu = () => setVisible(false);
const showMenu = () => setVisible(true);

<View style={s.containerEntityPhysic}>
  <Menu
    style={s.entitiesPhysic}
    visible={visible}
    anchor={
      <Text style={{ color: "#6C63FF", fontSize: 16 }} onPress={showMenu}>
        {currentEntity}
      </Text>
    }
    onRequestClose={hideMenu}
  >
    <ScrollView>
      <MenuDivider />
      <MenuItem
        onPress={() => {
          hideMenu();
          setCurrentEntity("some");
        }}
      >
        some
      </MenuItem>
      <MenuItem
        onPress={() => {
          hideMenu();
          setCurrentEntity("some");
        }}
      >
        some
      </MenuItem>
    </ScrollView>
  </Menu>
</View>;
```
