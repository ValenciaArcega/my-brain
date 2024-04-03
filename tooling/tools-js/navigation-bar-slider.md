## Navigation bar animation

The elements looks like following

```xml
<div class="overlay-navigation-sidebar-menu hiddenOverlay"></div>

<button
  class="btn-show-sidebar rounded-circle shadow  ml-2 demo-item-wb"
  title="Button to toggle the side bar"
>
  <svg
    class="btn-show-sidebar-svg"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#000000"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
    />
    <path d="M9 4v16" />
    <path d="M14 10l2 2l-2 2" />
  </svg>
</button>

<nav class="navigation-sidebar-menu">
  <img
    src="../Content/LogoMercurioCloud.png"
    alt="Logo de Mercurio de la sidebar parte superior"
    width="208"
  />
  <a
    class="navigation-sidebar-menu-btn"
    onclick="MenuSidebar('../Index.aspx');"
  >
    <svg class="navigation-sidebar-menu-btn-svg" viewBox="0 0 24 24">
      <path
        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
      />
      <path
        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
      />
    </svg>
    Inicio</a
  >

  <a
    class="navigation-sidebar-menu-btn"
    onclick="MenuSidebar('../00_Mercurio.aspx');"
  >
    <svg
      class="navigation-sidebar-menu-btn-svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8 4a2.599 2.599 0 0 0 -2 .957l-4.355 5.24a2.847 2.847 0 0 0 -.007 3.598l4.368 5.256c.499 .6 1.224 .949 1.994 .949a2.599 2.599 0 0 0 2 -.957l4.355 -5.24a2.847 2.847 0 0 0 .007 -3.598l-4.368 -5.256a2.593 2.593 0 0 0 -1.994 -.949z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M16.382 4.214a1 1 0 0 1 1.32 .074l.084 .094l4.576 5.823c.808 .993 .848 2.396 .13 3.419l-.12 .158l-4.586 5.836a1 1 0 0 1 -1.644 -1.132l.072 -.104l4.596 -5.85a.845 .845 0 0 0 .06 -.978l-.07 -.1l-4.586 -5.836a1 1 0 0 1 .168 -1.404z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M12.382 4.214a1 1 0 0 1 1.32 .074l.084 .094l4.576 5.823c.808 .993 .848 2.396 .13 3.419l-.12 .158l-4.586 5.836a1 1 0 0 1 -1.644 -1.132l.072 -.104l4.596 -5.85a.845 .845 0 0 0 .06 -.978l-.07 -.1l-4.586 -5.836a1 1 0 0 1 .168 -1.404z"
        stroke-width="0"
        fill="currentColor"
      />
    </svg>
    Cloud</a
  >

  <a
    class="navigation-sidebar-menu-btn"
    onclick="MenuSidebar('../02_Novartis.aspx');"
  >
    <svg
      class="navigation-sidebar-menu-btn-svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z"
        stroke-width="0"
        fill="currentColor"
      />
    </svg>
    CRM - Novartis</a
  >
  <a href="https://www.mercuriocomunicacion.net/" target="_blank">
    <img
      class="navigation-sidebar-menu-img-footer"
      alt="Logo de Mercurio de la sidebar parte inferior"
      src="../Content/Logo.png"
      width="64"
  /></a>
</nav>
```

For styling the components

```css
.hiddenOverlay {
  display: none;
}

.overlay-navigation-sidebar-menu {
  z-index: 92;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffffd1;
  -webkit-backdrop-filter: blur(8px) !important;
  backdrop-filter: blur(8px) !important;
}

.btn-show-sidebar {
  height: 3rem;
  width: 3rem;
  position: fixed;
  top: 16px;
  left: 16px;
  border: none !important;
  background: none !important;
  outline: none !important;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  z-index: 195;
}

.btn-show-sidebar:hover {
  cursor: pointer;
}

.btn-show-sidebar-svg {
  height: 26px;
  width: 26px;
  transition: transform 0.7s;
}

.btn-show-sidebar-svg.active {
  transform: rotate(180deg);
}
/*
 * The following CSS class is used to style the left sidebar
 * Changing the "height" property there can be add more buttons or items down
 */
.navigation-sidebar-menu {
  height: fit-content;
  width: 16rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: fixed;
  top: 5.6rem;
  left: -75%;
  border-radius: 12px;
  border: 2px solid #c5c5c578;
  gap: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #fff;
  transition: left 0.95s ease-in-out;
  box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.1);
}

.navigation-sidebar-menu.active {
  left: 8px !important;
}

.navigation-sidebar-menu img {
  margin-bottom: 1rem;
}

.navigation-sidebar-menu-img-footer {
  margin-top: 2rem;
  margin-bottom: 0 !important;
}

.navigation-sidebar-menu-btn {
  height: 48px;
  width: 12rem;
  padding-left: 1.2rem;
  border-radius: 12px;
  border: none;
  background: none;
  outline: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
  color: #181818 !important;
  transition: transform 0.7s, box-shadow 1.2s;
}

.navigation-sidebar-menu-btn:hover {
  text-decoration: none !important;
  color: #bd8036 !important;
  cursor: pointer;
}

.navigation-sidebar-menu-btn-svg {
  height: 24px;
  width: 24px;
  fill: #3a3a3a;
  color: #3a3a3a;
  background: none;
}
```

Now the logic to create the effect

```js
window.addEventListener("DOMContentLoaded", function () {
  const navigationSidebarMenu = document.querySelector(
    ".navigation-sidebar-menu"
  );
  const btnToggleSidebar = document.querySelector(".btn-show-sidebar");
  const btnsNavbar = document.querySelectorAll(".navigation-sidebar-menu-btn");
  const iconsBtnNavbar = document.querySelectorAll(
    ".navigation-sidebar-menu-btn-svg"
  );
  const iconSwitchSidebarMenu = document.querySelector(".btn-show-sidebar-svg");
  const overlay = document.querySelector(".overlay-navigation-sidebar-menu");

  btnToggleSidebar.addEventListener("click", (e) => {
    e.preventDefault();
    iconSwitchSidebarMenu.classList.toggle("active");
    navigationSidebarMenu.classList.toggle("active");

    overlay.classList.toggle("hiddenOverlay");
  });

  overlay.addEventListener("click", function () {
    iconSwitchSidebarMenu.classList.remove("active");
    navigationSidebarMenu.classList.remove("active");

    overlay.classList.toggle("hiddenOverlay");
  });

  btnsNavbar.forEach((btn, ind) => {
    btn.addEventListener("mouseover", () => {
      btnsNavbar.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          btn.style.transform = "scale(1.03, 1.03)";
          btn.style.boxShadow = "0px 16px 8px -10px #5555556c";
          iconsBtnNavbar[ind].style.fill = "#BD8036";
          iconsBtnNavbar[ind].style.color = "#BD8036";

          otherBtn.style.filter = "blur(3px)";
          otherBtn.style.transform = "scale(0.95, 0.95)";
        }
      });
    });

    btn.addEventListener("mouseout", () => {
      btnsNavbar.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          btn.style.transform = "scale(1, 1)";
          btn.style.boxShadow = "none";
          iconsBtnNavbar[ind].style.fill = "#3a3a3a";
          iconsBtnNavbar[ind].style.color = "#3a3a3a";

          otherBtn.style.filter = "none";
          otherBtn.style.transform = "none";
        }
      });
    });
  });
});
```
