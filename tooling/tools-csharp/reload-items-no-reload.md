# Reload items of ASP without reload the page

```js
let timeout;

const refreshGrids = (grid) => {
  window.clearTimeout(timeout);

  timeout = window.setInterval(function () {
    grid.Refresh();
    gvEnsambleLH.Refresh();
    gvEnsambleRH.Refresh();
  }, 3000);
};
```

### GridView ClientSideEvents

```js
function gvInit(s, e) {
  refreshGrids(s);
}

function gvBeginCallback(s, e) {
  window.clearTimeout(timeout);
}

function gvEndCallback(s, e) {
  refreshGrids(s);
}
```
