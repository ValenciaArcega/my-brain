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
/* ID always will have highest priority */
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
  box-shadow: 0px 5px 15px -4px rgb(0 0 0 /0.2);
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

## Pseudo-classes

```css
article p:first-child
li:last-child,
li:nth-child(3),
/* 1,3,5,7,9 */
li:nth-child(odd),
/* 2,4,6,8,10 */
li:nth-child(even) {
  font-size: 20px;
}
```

## CSS Box Model

> **Border**. The contour line of the element

> **Padding**. The space between the border and the childs or the content of the element

> **Margin**. The space between the border and the parents of the element

```css
.boxModel {
  /* firstValue will be vertical */
  padding: 20px 40px;
  /* onces is for all sides */
  margin: 30px;
  border: 2px solid 20px;
}
```

This sould to be always to keep the strict size of the widths and heights donot mattering the padding, margin or border.

```css
box-sizing: border-box;
```

## Center elements

The easy way (_center itself_)

```css
.container {
  width: 85%;
  margin: 0 auto 0 auto;
}
```

Flexbox way (_center their childs_)

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

The Grid way

```css
.container {
  display: grid;
  align-items: center;
  justify-items: center;

  /* short */
  display: grid;
  place-items: center;
}
```

Relative and absolute way

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* short */
  inset: 0;
  margin: auto;
}
```

## Types of elements

### Block elements

Basically are those that need all the space in a single line _creating a block effect_

```css
display: block;
```

Some tags that contains this property as default are:

- body
- aside, article, section, main
- div
- header
- nav
- h1-h6
- p
- ol
- ul
- li
- footer... _etc._

</br>

### Inline elements

These can be in the same line with another elements, occupies only the space that is necessary for the content

```css
display: inline;
```

Some tags that contains this property as default are:

- button
- a
- img
- strong
- em

  > ⚠️ Paddings n margins are applied only horizontally (left & right)

  > ⚠️ Top and bottom donot apply

  > ⚠️ Height and width donot apply

To use both and apply margin at the top or bottom we can use the property

```css
.element {
  display: inline-block;
}
```

---

## Relative and absolute

The tag `<body` it's by default the first **relative** parent of the document. So the childs that have **absolute** position and are not container by another relative parent will be absolute to the body.

```css
button {
  position: absolute;
  top: 0;
  left: 0;
}
```

To move an element inside another, the parent has to be relative.

> This allows be the first relative parent that absolute childs can find when they look up upwards

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
}
```
