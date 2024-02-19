# CSS

Custom properties are like variables, where we can store units, colors and some many properties to use through all our code

```css
:root {
  --variable-black: #181818;
  --variable-rounded: 12px;
}
```

Combining selectors

```css
p,
h1 {
  font-family: "Inter", sans-serif;
}
```

Decendence (parents and childs)

```css
article header p {
  font-weight: 900;
}
```

## Classes and ID's

```css
/* ID always will have highest priority (without key !important) */
#element {
}

/* Classes can be use in more than one element */
.element {
}
```

### Colors

```css
/* rgb model (0,0,255) = blue && for transparency rgba(Alpha) (0,0,0,0.5) */
.element {
  border: 5px solid #d9d9d9;
  border-bottom: 5px solid rgb(0, 0, 0);
  box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.3);
}
```

## Nested CSS

```css
.example {
  font-size: 1.2rem;

  & > a {
    color: tomato;

    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```
