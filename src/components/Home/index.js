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
                <h5>Order Online for Touchless Delivery</h5>
            </div>
        </div>
        <div style={{backgroundColor: 'yellow'}}>
            <h3>part two...</h3>
        </div>
       </> 
    )
}

export default Home
