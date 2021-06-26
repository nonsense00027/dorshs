import React from 'react';
import './About.css';
import Mission from '../../../img/Mission.png';
import Vision from '../../../img/Vision.svg';

function MissViss() {
    return (
        <div className="missViss">
            <div className="row2">
                <div className="col3">
                    <div className="mission">
                        <img src={Mission} alt="Mission" width="50" height="50" />
                        <h3>DORSHS MISSION</h3>
                    </div>
                </div>
                <div className="col3">
                    <div className="vision">
                        <img src={Vision} alt="Vision" width="80" height="80" />
                        <h3>DORSHS VISION</h3>
                    </div>
                </div>
            </div>
            <div className="row3">
                <div className="col4">
                    <h3>
                        To develop Responsible and morally upright Science Oriented Leaders through relevant and globally competitive Science and 
                        Mathematics Education Programs.
                    </h3>
                </div>
                <div className="col4">
                    <h3>
                        Davao Oriental Regional Science High School is a center of excellence in Science and Mathematics Education at the 
                        Secondary Level that shall develop potential leaders in science and related fields.
                    </h3>
                </div>
            </div>   
        </div>
    )
}

export default MissViss;
