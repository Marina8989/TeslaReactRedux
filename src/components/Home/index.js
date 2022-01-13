import React from 'react';
import Navbar from '../Navbar';
import './index.css';

const Home = () => {
    return (
       <> 
        <div className='bg-home'>
            <Navbar />
            <div className='home-model3'>
                <h1>MODEL 3</h1>
                <h5>Order Online for <span>Touchless Delivery</span></h5>

              <div className='home-btns'>
                  <button className='btn-order'>CUSTOM ORDER</button>
                  <button className='btn-inventory'>EXISTING INVENTORY</button>
              </div>  
            </div>
        </div>
        <div style={{backgroundColor: 'yellow'}}>
            <h3>part two...</h3>
        </div>
       </> 
    )
}

export default Home
