> A yeoman generator to run spring boot app (**target/war**) in electron package generated with [generator-electron-war-package](https://github.com/fullStackApp/generator-electron-war-package)

# Installation

Run 

```bash
yarn
```

or

```bash
npm install
```


# usage

After installing dependencies and generating **target/*.war** with spring-boot, you can run in this:

* `npm start` : it runs the app in a live electron process
* `npm package` : it creates an **electron-war 1.0.0.exe** app in **electron-war-package\distribution**

For both, you can read the backend log into the electron window using **F1 keyword**.

> The default port used in spring boot, called from the electron app, is **8081**. You can change it in the **electron.app.config.json**
