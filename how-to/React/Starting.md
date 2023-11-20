# React ⚛
```
npm create vite@latest
```

Push into the folder project or open with VSCode
```
code .
```

React plugin
```
npm install @vitejs/plugin-react -E
```

React dependencies
```
npm install react react-dom -E
```

Eslintr standard
```
npm install standard -D
```

Using linter  
package.json
```
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
}
```

Vite and React configuration  
vite.config.js
```
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
  
export default defineConfig({
 plugins: [react()],
 base: '/react-projectName/',
 server: {
   host: '0.0.0.0',
   open: true
 }
});
```

main.jsx
```
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
```
