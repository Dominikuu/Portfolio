# Portfolio (20210409)
1. Configuring the publishing source for your GitHub Pages site
   For your repository, go to settings and under “GitHub Pages”, select source as ‘gh-pages branch’

2. Add home page

```
//package.json
...
"homepage": "https://yourUserName.github.io/yourProjectName/",
...
```

3. Deploy gh-pages

   * Install gh-pages

```
// Terminal
npm install gh-pages --save-dev
```

```
//Added to predeploy and deploy to package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```

4. Check the latest changes is pushed to master branch

   * Run the below two command

```
npm run predeploy
npm run deploy
```

   Finally, check https://[USERNAME].github.io/[REPOSITORY_NAME]/
