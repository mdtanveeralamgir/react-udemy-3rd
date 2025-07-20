import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';

import App from './App.jsx';
import './index.css';

//Strict mode executes each component twice to cath the error
//It does it only in dev mode. not in prod

//React developer tools plugin for chrome helps understand the components chain
//details about each component
ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
