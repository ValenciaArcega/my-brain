# Border gradient

```html
<button class="btn________">
  <svg fill="#fff" height="24px" />
  ANDON
</button>
```

```css
.btn________ {
  height: 42px;
  min-width: 42px;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
  color: white;
  background: linear-gradient(to bottom, #4a4a4a, black 60%) padding-box, linear-gradient(
        to bottom,
        #646464,
        black
      ) border-box;
  border: 2px solid transparent;
  transition: all 0.8s;
}
```

Hover effect

```css
.btn_______:hover {
  border: 2px solid #464646;
  cursor: pointer;
}
```
