# React Redux Alert

> HOC to show bootstrap like alerts

## Demo

https://jsbin.com/fatole/edit?js,output

## Usage

### Setup

```js
import { connectAlert, alertReducer, SHOW_ALERT, SUCCESS } from 'react-redux-alert';

const store = createStore(combineReducers({yourReducers, alertReducer}), composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

const mapStateToProps = function(state) {
  return {
    // your other states
    alert: state.alertReducer,
  };
}

const ComponentWithAlert = connectAlert(YourComponent);
```

### Show Alert

```js
dispatch({
  type: SHOW_ALERT,
  alertType: SUCCESS,
  show: true,
  message: "Hello"
})
```

### Hide Alert

```
dispatch({
  type: 'HIDE_ALERT'
})
```

## License

[MIT](https://revathskumar.mit-license.org/)

```
The MIT License (MIT)
Copyright © 2017 Revath S Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```