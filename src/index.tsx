import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-roboto';


/**
 * !!! Material-UI does not yet fully support StrictMode (https://github.com/mui-org/material-ui/issues/20708). 
 * If you remove the <React.StrictMode> tags in index.js it works fine.
 * ReactDOM.render(
        <React.StrictMode> // <--- Don't use (read the above description)
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
 */
ReactDOM.render(<App />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();