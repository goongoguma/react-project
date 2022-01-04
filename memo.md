1. https://dev.to/riddhiagrawal001/create-react-app-without-create-react-app-2lgd 세팅

2. 에러 Error: Cannot find module 'html-webpack-plugin' 발생 -> npm install -D html-webpack-plugin으로 설치

3. 에러 발생

```js
configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

그래서 아래 코드를 웹팩에 설정해줌

```js
const mode = process.env.NODE_ENV || "development";
```

4. 에러 발생

```js
Uncaught TypeError: react__WEBPACK_IMPORTED_MODULE_0__.render is not a function
```

알고보니 index.js에서 ReactDOM을 react에서 import 해주고 있어 발생한 문제 -> import ReactDOM from "react-dom"으로 수정 5. 이제 타입스크립트를 웹팩에 설치해보자 (https://webpack.kr/guides/typescript/)

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const mode = process.env.NODE_ENV || "development";
module.exports = {
  mode,
  entry: "./src/index.ts",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
};
```

위와 같이 세팅을 해줬는데 에러가 발생했다.

```js
Compiled with problems:X
ERROR in ./src/index.ts 2:17
Module parse failed: Unterminated regular expression (2:17)
File was processed with these loaders:
 * ./node_modules/ts-loader/index.js
You may need an additional loader to handle the result of these loaders.
| import ReactDOM from "react-dom";
> ReactDOM.render(/>, document.querySelector("#root")););
|
```

index.js를 index.tsx로 바꾸고 파일안을 보니 react와 react-dom의 타입 선언이 되어있지 않아 빨간 밑줄이 발생, 그래서 타입을 설치했지만 다음과 같은 에러가 발생

```js
This module is declared with using 'export =', and can only be used with a default import when using the 'allowSyntheticDefaultImports' flag
```

tsconfig.json에 "allowSyntheticDefaultImports": true 를 추가했더니 에러가 사라졌다.
이제 정상작동 하는거같다. 6. 이제 css를 적용해주려고 하니 style-loader에러가 발생해서 로더를 설치했다. 7. 이제 eslint를 webpack에 적용시켜보자.
(적용시키기전에 vscode extension에 prettier와 eslint를 설치하는것을 잊지말자)

- 아래 패키지들을 개발 환경(-D)으로 설치하고 (prettier도 잊지말길 https://velog.io/@kmlee95/React-Typescript-eslint-prettier%EC%84%A4%EC%A0%95 참조)

```js
    "eslint": "^8.4.1",
    "eslint-config-airbnb": "^19.0.2",
    "eslint-config-prettier": "^8.3.0",
    "eslint-import-resolver-typescript": "^2.5.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.27.1",
    "eslint-plugin-react-hooks": "^4.3.0",
```

- .eslintrc.js 파일을 최상단에 생성해서 내용 작성.
- https://velog.io/@kmlee95/React-Typescript-eslint-prettier%EC%84%A4%EC%A0%95 참조

8. alias import 설정해주기
   https://medium.com/@danil_chepelev/how-to-setup-path-aliases-with-react-typescript-and-webpack-54e579c189e1 참조
   - tsconfig 파일 세팅후에 webpack.config.js에서 alias 세팅해주는것도 잊지말자
9. 리액트용 fontawesome을 설치하고 코드를 작성하였지만 다음과 같은 에러가 발생한다.

```
WARNING in ./node_modules/@fortawesome/react-fontawesome/index.es.js 269:6-16
export 'parse' (imported as 'parse') was not found in '@fortawesome/fontawesome-svg-core' (possible exports: default)
 @ ./src/components/header/header.view.tsx 2:0-65 7:210-225
 @ ./src/App.tsx 8:0-56 14:151-161
 @ ./src/index.tsx 3:0-24 4:50-53
WARNING in ./node_modules/@fortawesome/react-fontawesome/index.es.js 270:11-21
export 'parse' (imported as 'parse') was not found in '@fortawesome/fontawesome-svg-core' (possible exports: default)
 @ ./src/components/header/header.view.tsx 2:0-65 7:210-225
 @ ./src/App.tsx 8:0-56 14:151-161
 @ ./src/index.tsx 3:0-24 4:50-53
WARNING in ./node_modules/@fortawesome/react-fontawesome/index.es.js 324:83-98
export 'parse' (imported as 'parse') was not found in '@fortawesome/fontawesome-svg-core' (possible exports: default)
 @ ./src/components/header/header.view.tsx 2:0-65 7:210-225
 @ ./src/App.tsx 8:0-56 14:151-161
 @ ./src/index.tsx 3:0-24 4:50-53
WARNING in ./node_modules/@fortawesome/react-fontawesome/index.es.js 326:21-25
export 'icon' (imported as 'icon') was not found in '@fortawesome/fontawesome-svg-core' (possible exports: default)
 @ ./src/components/header/header.view.tsx 2:0-65 7:210-225
 @ ./src/App.tsx 8:0-56 14:151-161
 @ ./src/index.tsx 3:0-24 4:50-53
WARNING in ./src/components/header/header.view.tsx 8:10-18
export 'faCoffee' (imported as 'faCoffee') was not found in '@fortawesome/free-solid-svg-icons' (possible exports: default)
 @ ./src/App.tsx 8:0-56 14:151-161
 @ ./src/index.tsx 3:0-24 4:50-53
```

웹팩에서 다음과 같이 수정했더니 에러가 해결되었다. (참조: https://github.com/gowravshekar/font-awesome-webpack)

```js
  {
    test: /\.(png|svg|jpg|gif|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: {
      loader: 'file-loader',
    },
  },
```

https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=dnepdrn&logNo=221595417600 를 읽어보자

10. yarn berry를 설치했으나 외부 모듈을 읽지 못하는 ts(2307)에러가 발생
    알고보니 vs코드에서 pnp 방식으로 typesciprt를 사용하기 위한 셋팅도 했어야 했음 (참조: https://www.zigae.com/yarn2/)

11. yarn plugin import typescript 설치(https://haranglog.tistory.com/28)

12. ts(2307)에러가 사라졌지만 이제 파일 최상위에 Resolve error: unable to load resolver라는 eslint 에러가 발생하고있음
    .eslintrc.js에서 import/resolve안에 해당 코드 추가

    ```js
     typescript: {
        project: 'tsconfig.json',
      },
    ```

13. assets/images에 있는 이미지들을 가져오지 못하는 문제 발생
    (https://pretagteam.com/question/webpack-typescript-image-import)
    웹팩에서 rules안에 이미지 test의 타입을 다음과 같이 설정

```js
  {
    test: /\.(png|svg|jpg|jpeg|gif|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    type: 'asset/resource',
  },
```

그 후에 image.d.ts 파일을 만들고 jpeg 다음과 같이 설정

```js
declare module '*.jpeg';

```

그 다음으로 tsconfig.json에 include와 exclude를 설정해준다.

```js
  "include": ["src"],
  "exclude": ["node_modules", "babel.config.js"]
```

이제 이미지를 로드하는데... 문제발생...

14. 이미지를 가져오기위해 import judo from '../../assets/images/judo.jpeg' 하면 이미지를 정상적으로 가져오는데... import judo from '@assets/images/judo.jpeg' 하면 못가져온다...

찾아보니 당연한거였음 tsconfig.json에 path 설정을 했으면 webpack.config.js의 alias에도 똑같이 설정을 해줬어야 했었음...

```js
// tsconfig.json
    "paths": {
      "@assets/*": ["./src/assets/*"],
      "@components/*": ["./src/components/*"]
    }
// webpack.config.js
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
```
