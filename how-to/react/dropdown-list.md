# React select

To use pretty dropdown list in react instead of `<select>` html element, there is a library up ready to create that styles conponent.

### Doc and install resources

- https://www.npmjs.com/package/react-select
- https://github.com/JedWatson/react-select/tree/master

Install the dependency

```bash
npm i react-select
```

```js
import Select from "react-select";
```

```jsx
<Select
  styles={{
    control: (baseStyles) => ({
      ...baseStyles,
      height: 40,
    }),
  }}
  className={css.reactSelectDropDownList}
  options={catAlmacen.map((opcion) => ({
    value: opcion.ID_ALMACEN,
    label: opcion.D_ALMACEN,
  }))}
  onChange={(selectedOption) => {
    setIdAlmacen(selectedOption.value);
  }}
  placeholder="Selecciona un almacén"
  isSearchable
/>
```

Some basic styles

```css
.reactSelectDropDownList {
  margin-top: 16px;
  padding-left: 0.2rem;
  border-radius: 5px;
  color: #2d2d2d;
  font-size: 1.08rem;
}
```
