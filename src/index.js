import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RegisterServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
RegisterServiceWorker();
