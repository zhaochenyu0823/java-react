import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Navbar from './pages/NavBar.tsx';
import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





