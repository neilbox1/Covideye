import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import '../navbar.css';
import '../styles.css';

//returns the navbar onto the page
export default function Navbar() {
    return (
        <div class="wrapper">
  
    <nav id="sidebar">
    
        <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
        </div>

        <div class="sidebar-header">
            <h3 class="text-light">CovidEye</h3>
            
        </div>

        <ul class="list-unstyled components">
            <p>Live COVID-19 dashboard</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                
            </li>
            <li>
                <a href="#">Numbers</a>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Stats</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Globe</a>
                    </li>
                    <li>
                        <a href="#">USA</a>
                    </li>
                    <li>
                        <a href="#">California</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Our Portfolios</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>

   
   
    <div class="overlay"></div>
</div>

    );
}