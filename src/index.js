import React, {createContext} from 'react';
import colors from './color-data';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const ColorContext = createContext();

ReactDOM.render(
  <ColorContext.Provider value={{colors}}>
    <App />
  </ColorContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
