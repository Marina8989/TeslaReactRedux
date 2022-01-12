import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <div className='bg-nav'>
          <Link to='/'>
            <img src='https://lezebre.lu/images/detailed/17/30460-Tesla.png' style={{width: '125px', height: '115px'}}/>
          </Link>  
        </div>
    )
}

export default Navbar
