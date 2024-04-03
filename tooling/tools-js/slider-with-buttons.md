# Slider of items (no animation)

```xml
<section class="container-items">
    <button class="btnPrev">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="24px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    </button>
    <button class="btnNext">
        <svg fill="none" style="rotate: 180deg;" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="24px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    </button>

    <main class="wrapper-items">
        <article class="item">
            <h3>1</h3>
        </article>
        <article class="item dNone">
            <h3>2</h3>
        </article>
        <article class="item dNone">
            <h3>3</h3>
        </article>
    </main>
</section>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container-items {
  width: 100%;
  height: 34rem;
  position: relative;
  display: flex;
  justify-content: center;
}

.btnPrev,
.btnNext {
  height: 3.7rem;
  width: 3.7rem;
  border-radius: 50px;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, #737373, black);
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnNext {
  position: absolute;
  top: 50%;
  left: 99%;
}

.btnPrev:hover,
.btnNext:hover {
  cursor: pointer;
  box-shadow: 0px 24px 6px -20px rgba(0, 0, 0, 0.3);
}

.wrapper-items {
  height: 100%;
  width: 98%;
}

.item {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
}

.dNone {
  display: none;
  opacity: 0;
}
```

```js
let currentIndex = 0;
const arr = new Array(6);
const items = document.querySelectorAll(".item");
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

function showCurrentItem() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.remove("dNone");
    } else {
      item.classList.add("dNone");
    }
  });
}

btnPrev.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = currentIndex === 0 ? arr.length - 1 : currentIndex - 1;

  showCurrentItem();
});

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = currentIndex === arr.length - 1 ? 0 : currentIndex + 1;

  showCurrentItem();
});
```
