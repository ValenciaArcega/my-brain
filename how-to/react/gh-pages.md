# Gh-pages

First start the project with git following  
`git init`
`git add .` `git commit -m ""`
`git push`

### Deployment dependency

```bash
npm install gh-pages
```

Add the following lines

> package.json

```js
homepage: 'https://valenciaarcega.github.io/project',
scripts: {
  predeploy: 'npm run build',
  deploy: 'gh-pages -d dist',
},
```

🚀

```bash
npm run deploy
```
