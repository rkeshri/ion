import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

 ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
