import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.css"
import "./global.css"

import ServerList from './pages/ServerList';

let rootElem = document.getElementById('root');
ReactDOM.render(<ServerList/>, rootElem);
//ReactDOM.render(<ServerInfo serverAddress="minegrech.com"/>, rootElem);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
