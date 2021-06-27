import React from 'react';
import './ReadMore.css';
import rsphoto from '../../../img/Header.png';
import rslogo from '../../../img/rslogo.png';

function Blurred() {
    return (
        <div className="blurred">
            <div className="blurred__photo">
                <img src={rsphoto} alt="blurred photo" />
            </div>
            <div className="blurred__logo">
                <img src={rslogo} alt='logo' />
            </div>
            <div className="blurred__text">
                <h2>
                    Davao Oriental Regional Science High School
                </h2>
            </div>
        </div>
    )
}

export default Blurred
