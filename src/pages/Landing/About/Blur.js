import React from 'react';
import './About.css';
import rsphoto from '../../../img/rsphoto.png';

function Blur() {
    return (
        <div className="container">
            <div className="photo">
                <img src={rsphoto} alt="blurred photo" />
            </div>
            <div className="text">
                <h2>Story of DORSHS</h2>
            </div>
            <div className="para">
                <p>Scientia et Virtus</p>
            </div>
        </div>
    )
}

export default Blur
