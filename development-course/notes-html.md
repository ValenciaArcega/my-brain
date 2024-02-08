# HTML (HyperText Markup Languaje)

Language of markup to design the structure of a web site, does not has to be nothing with how looks like, and how works, instead is how the content has to be placed

We use `<!DOCTYPE html>` to say to the browser wich extension is it

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- tools for inputs in iOS -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1"
    />
    <!-- meta extends for METADATA -->
    <title>PageTitle</title>
  </head>
</html>
```

```html
<h1>We have 6 types of H tag</h6>
<strong> intead of <b>
<em> instead of <i>
```

## Lists

```html
Order list
<ol>
  <li>List item</li>
</ol>

Unorder list
<ul>
  <li>List item</li>
</ul>
```

## Replace tags and attributes

```html
<img src="source" alt="alternative text" />
```

## Hyperlinks

```html
<a href="hypertext reference" target="_blank"> Open blank page</a>
```

## Classes and IDs

ID's are unique for one element in the DOM tree

```html
<button class="btn__logOut" id="btn-logOut">Log out!</button>
```

## Tables

```html
<table>
  <thead>
    <tr>
      table rows
      <th>table header (like columns)</th>
      <td>table data</td>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

## Container

```html
<header>
  <nav></nav>
</header>

<main>
  <aside></aside>
  <article></article>
  Generic block container, ⚠️ can affect the SEO
  <div></div>
  Generic inline container
  <span></span>
</main>

<footer>
  <small>&copy; 2024</small>
</footer>
```
