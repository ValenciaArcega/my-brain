# React Router Dom 📄
Cuando pulsas un enlace en el navegador, en aplicaciones con más de una página, es enviada una petición al servidor antes de que la página HTML se muestre.

En React, el contenido de la página es creado a partir de componentes. Así que lo que hace React Router es interceptar la petición que se envía al servidor y luego inyectar el contenido dinámicamente desde los componentes que se han creado.  

Esta es la idea general detrás de las SPA, que permiten que el contenido se muestre más rápido sin que la página sea actualizada.

```
npm install react-router-dom -E
```

👉 main.jsx
```
import { BrowserRouter, HashRouter } from "react-router-dom";
// getElementById("#app")
render(<HashRouter> <App /> </HashRouter>)
```

👉 App.jsx
```
import { Route, Routes } from 'react-router-dom';

return (
  <main className="page-home">
    <NavBarDesktop />
    <NavBarMobile />
    <Routes>
      <Route path="/sigfea//*" element={<Dashboard />}></Route>
      <Route path="/sigfea/feed" element={<Feed />}></Route>
    </Routes>
  </main>
);
```

⛔ To navigate between routes
```
// 👉 others.jsx
import { Link } from "react-router-dom";

<Link to='/fare/search' className="navBar__desktop-search" >          
	Buscar
</Link>
```

✅ To navigate and also SHARE data between routes
```
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

onClick={() => navigate('/sigma/garage/', { state: item })}>
```

To consume that data!
```
import { useLocation } from "react-router-dom"

const location = useLocation()
const garageData = location.state
```
