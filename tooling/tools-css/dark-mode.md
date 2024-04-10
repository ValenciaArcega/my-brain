## Dark mode with custom properties and toggle

The first step it is create our custom properties for light and dark mode

```css
:root {
  --bg: #f2f2f7;
}

#rootDarkMode {
  --bg: #1d2132;
}
```

And the switcher

```html
<input
  ref="{checkBoxAppearance}"
  onClick="{toggleAppearance}"
  type="checkbox"
  className="{css.switchAppearance}"
/>
```

Create the DOM reference of the **root** and the **input checkbox**

```js
const checkBoxAppearance = useRef();
const root = document.documentElement;
```

Now the function to toggle the appearance

```js
function toggleAppearance(e) {
  if (e.target.checked) {
    root.id = "rootDarkMode";
    checkBoxAppearance.current.checked = "true";
  } else root.removeAttribute("id");
}
```
