# Gh-pages
``` git init ```  
``` git add . ```  
``` git commit -m "first commit" ```  
``` git push ```  

Deployment dependency
```
npm install gh-pages
```

Add the following lines
👉 package.json
```
"homepage": "https://valenciaarcega.github.io/project",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
},
```

🚀
```
npm run deploy
```
