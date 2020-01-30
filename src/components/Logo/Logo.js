import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import pyramid from './pyramid.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow2" options={{ max : 30 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"><img alt='logo' src={pyramid}></img></div>
            </Tilt>
        </div>
    )
}

export default Logo;