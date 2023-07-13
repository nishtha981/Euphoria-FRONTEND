import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Meet the Developers
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <h2>Oshin Saraf</h2>
            <Link to='/'>
            <img src='images/oshin.jpg' class="img2021"></img>
            </Link>
            
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Nishtha P</h2>
            <Link to='/'>
            <img src='images/nishtha.jpg' class="img2021"></img>
            </Link>
           
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              EUPHORIA
              
            </Link>
          </div>
          <small class='website-rights'>EUPHORIA © year2022</small>
         
        </div>
      </section>
    </div>
  );
}

export default Footer;
