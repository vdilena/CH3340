import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Usuarios from './Usuarios';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Usuarios />, document.getElementById('root'));
registerServiceWorker();
