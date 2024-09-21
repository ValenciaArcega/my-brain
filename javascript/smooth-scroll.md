If the CSS way does not work

```css
html {
  scroll-behavior: smooth;
}
```

```js
The with JS we can achieve that behavior
const a = document.querySelector('.some')
const someSection = document.querySelector('#some')

a.addEventListener('click', (e) => {
	e.target.getBoundingClientRect() // x, y, height...

	const b = someSection.getBoundingClientRect()

	// get the scrolled units
	window.pageXOffset
	// if the client scroll the page
	window.pageYOffset // 128px

	// get the client viewport
	document.documentElement.clientHeight
	document.documentElement.clientWidth

	// scrolling considering the viewport top (absolute, no relative current value)
	window.scrollTo({
		left: b.left + window.pageXOffset,
		top: b.top + window.pageYOffset,
		behavior: 'smooth',
	})

	// modern way (modern browsers)
	some.scrollIntoView({ behavior: 'smooth' })
})
```
