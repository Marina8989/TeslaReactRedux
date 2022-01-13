import React from 'react';
import { Link } from 'react-router-dom';
import NavbarModel from '../NavbarModel';
import './index.css';

const Navbar = () => {
    return (
     <div className='nav-wrap'>
        <div className='bg-nav'>
          <Link to='/'>
            <img src='https://lezebre.lu/images/detailed/17/30460-Tesla.png' style={{width: '125px', height: '115px'}}/>
          </Link> 
          <div className='nav-options'>
            <NavbarModel text='Model S'/>
            <NavbarModel text='Model 3'/>
            <NavbarModel text='Model X'/>
            <NavbarModel text='Model Y'/>
            <NavbarModel text='Solar Roof'/>
            <NavbarModel text='Solar Panels'/>
          </div> 
          <div className='nav-contact'>
              <NavbarModel text='Shop'/>
              <NavbarModel text='Account'/>
              <NavbarModel text='Menu'/>
          </div>
        </div>
      </div>  
    )
}

export default Navbar
