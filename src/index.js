import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navbar.css';
import Navbar from './components/navbar.js';
import DashboardMap from './components/map.js';

ReactDOM.render(
  <React.StrictMode>
    <div class="container">
    <Navbar />
    <DashboardMap />
 
  

  
    
</div>
    
  </React.StrictMode>,
  document.getElementById('root')
);


