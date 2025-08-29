import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
//this will provide store to whole app
//if provider is wrapped around a specific component
//then only that component and all their children will have access
root.render(<Provider store={store}><App/></Provider>);
