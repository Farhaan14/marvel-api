import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Details from './components/Details';
import { BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

