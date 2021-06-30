import React from 'react';
import './Medal.css';
import Picture from '../../../../img/Medal.png';

function Medal() {
    return (
        <div className="medal">
            <div className="medal__pic">
                <img src={Picture} alt="Medal" />
            </div>

            <div className="medal__text">
                <h1>
                     Awards and Recognitions
                </h1>
            </div>

            <div className="medal__para">
                <p>
                    Over the past years, Davao Oriental Regional 
                    Science High School has conquered countless 
                    achievements and recognitions from Division to 
                    International Level. As an excellent Science 
                    High School, DORSHS has remained outstanding 
                    among other schools in the region and has been
                    recognized ever since.  
                </p>
            </div>
        </div>
    )
}

export default Medal
