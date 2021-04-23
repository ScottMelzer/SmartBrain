import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 flex justify-center'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
                <img src={logo} alt='SmartBrain Logo' className='br-100 shadow-5'></img>
            </div>
            </Tilt>
        </div>
    )
};

export default Logo;