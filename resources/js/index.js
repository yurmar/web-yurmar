import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Main from './Main'

const main = (
    <Main />
)


ReactDOM.render(main, document.getElementById('index'));
serviceWorker.unregister();
