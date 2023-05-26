import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom' 
// import './index.css';
/**updated from css to scss */
import './index.scss';
import App from './App';

import { UserProvider } from './context/user.context';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* now any component nested inside of our app 
    can access the context value inside of the provider itself 
    
    now we are going to go in the sign in component because 
    their we will get the user and their only we have t0o show the sign out thing 
    
    */}
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
