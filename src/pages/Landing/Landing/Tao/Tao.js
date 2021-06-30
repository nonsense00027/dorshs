import React from 'react';
import './Tao.css';
import Pic from '../../../../img/Tao.jpg';

function Tao() {
    return (
        <div className="tao">
            <div className="tao__picture">
                <img src={Pic} alt="Tao" />
            </div>
            
            <div className="tao__text">
                <h2>
                    What do Davao Oriental Regional Science High School Offer?
                </h2>
            </div>

            <div className="tao__para">
                <p>
                    DORSHS-Senior High School Department offers Science, 
                    Technology, Engineering and Mathematics (STEM) strand of 
                    the Academic Track for aspiring students. As a science high
                    ol, they equip their learners the necessary skills through 
                    progressive teaching and instruction geared towards the sciences, 
                    mathematics, engineering, technology and research.
                </p>
            </div>
        </div>
    )
}

export default Tao
