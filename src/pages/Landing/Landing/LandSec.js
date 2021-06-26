import React from 'react';
import Card from "./Card";
import Card2 from './Card2';
import Card3 from './Card3';
import './LandSec.css';


function LandSec() {
    return (
        <div className="landSec">
          <div className="landSec__text">
              <h2>Why Choose DORSHS?</h2>
          </div>
            <div className="cards">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <Card2 />
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <Card3 />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandSec

