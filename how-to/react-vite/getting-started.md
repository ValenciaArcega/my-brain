# React

```bash
npm create vite@latest
```

Push into the folder project or open with VSCode

```
code .
```

React plugin

```bash
npm install @vitejs/plugin-react -E
```

React dependencies

```bash
npm install react react-dom -E
```

### Using linter

Eslintr standard

```bash
npm install standard -D
```

> package.json

```json
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
}
```

### Vite and React configuration

> vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-projectName/",
  server: {
    host: "0.0.0.0",
    open: true,
  },
});
```

> main.jsx

```js
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));

root.render(<App />);
```
