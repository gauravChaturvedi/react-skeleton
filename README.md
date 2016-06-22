React App
=========

### Usage

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)


### Development

All development related files, services, components etc go in the `/src` folder.

### Testing

To run tests, run the command `npm test`

Mocha test framework with chai, enzyme for various assertions. Will be updated as and when required.

To add a unit test, simply create a `-test.js ` file inside the `/tests` folder with the same directory structure as the component itself inside `/src`.

### Routing

We use [react-router](https://github.com/reactjs/react-router) to define routing logic within our application inside `/src/Routes.js`.
