## What is this about?


### 😱 Another RevealJS project?

well... yes!


### How to use it?

- install dependencies with `npm`, `yarn`
- run `npm run dev` or `yarn dev`
- edit the slides at `slides/reveal-startup.md`
- that's all!



## Customization


### Templating

- find them at: `src/templates`
- they need to be registered in `webpack.config.js`

```js
  new HtmlWebPackPlugin({
    template: "./src/templates/tpl-name.html",
    filename: "./tpl-name.html"
  }),
```


### Theming

- put your theme at `src/styles`
- place a stylesheet import in the `src/index.js`

```js
import '../styles/your-custom-theme.scss';
```



## Time to code!

👨🏻‍💻 👩🏽‍💻 👨🏼‍💻 👨🏾‍💻 👩‍💻 👩🏻‍💻 👨🏽‍💻 👩🏼‍💻 👩🏾‍💻 👨🏿‍💻 👩🏿‍💻 👨‍💻 
