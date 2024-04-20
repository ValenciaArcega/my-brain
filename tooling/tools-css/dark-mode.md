## Dark mode with custom properties and toggle

The first step it is create our custom properties for light and dark mode in CSS custom properties

```css
:root {
  --bg: #f2f2f7;
}

#rootDarkMode {
  --bg: #1d2132;
}
```

Now the component to switch the appearance (using React and react-icons but the logic can also be adapted to vanilla JS)

```jsx
export function Appearance() {
  const { toggleAppearance, isDark, checkBoxAppearance } = useAppearance();

  return (
    <article className="wrapperAppearance">
      {!isDark ? (
        <HiMiniMoon color="#181818" size={22} />
      ) : (
        <HiSun color="yellow" size={26} />
      )}
      <input
        ref={checkBoxAppearance}
        type="checkbox"
        title="Toogle appearance"
        onClick={toggleAppearance}
      />
    </article>
  );
}
```

Styling the component

```css
.wrapperAppearance {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  position: relative;

  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
```

Create the DOM reference of the **root** and the **input checkbox** and all together with a custom hook

```jsx
import { useRef, useState } from "react";

export function useAppearance() {
  const [isDark, setIsDark] = useState(false);
  const checkBoxAppearance = useRef();
  const root = document.documentElement;

  function toggleAppearance(e) {
    if (e.target.checked) {
      setIsDark(true);
      root.id = "rootDarkMode";
      // checkBoxAppearance.current.checked = "true"
    } else {
      setIsDark(false);
      root.removeAttribute("id");
    }
  }

  return { isDark, toggleAppearance, checkBoxAppearance, root };
}
```
