import React from 'react';
import './About.css';
import rsphoto from '../../../img/rsphoto.png';
import Button from '@material-ui/core/Button';

function History() {
    return (
        <div className="history">
            <div className="row">
                <div className="col">
                    <div className="rsphoto">
                        <img src={rsphoto} alt="photo" />
                    </div>
                </div>
                <div className="col2">
                    <h3>
                         History of Davao Oriental Regional Science High School
                    </h3>
                    <p>
                        Davao Oriental Regional Science High School is a public science high school supervised by the Department of Education. 
                        The school was established on May 28, 2009 through the R.A. No. 9630 as the Regional Science High School for Region XI: 
                        Davao Region. It is located in Mati City, Davao Oriental, Philippines.
                    </p>
                    <div className="button">
                    <Button>
                        Read More
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
