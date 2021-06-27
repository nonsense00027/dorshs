import React from 'react';
import Blurred from './Blurred';
import './ReadMore.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ReadMore() {

    return (
        <div className="readMore">
            <Navbar />
            <div className="readMore__blurred">
                <Blurred />
            </div>

            <div className="readMore__text">
              <h2>                  
              Davao Oriental Regional Science High School was formerly known as Gov. Leopoldo Lopez Memorial High School. In 2001, Pres. 
              arroyo issued an executive order No. 36 providing for the reorganization of the Administrative Regions in Mindanao where 
              Region XI was reorganized to be known as " Davao Region". The school was designated as the Regional Science High School for
               Davao Region through Deped Memorandum No. 48, s.2002. The memorandum also stated that the curriculum required for Regional
                Science High School be implemented on SY-2003- 2004. However, in August 2008, Representative Almario, DeGuzman and Lagman 
                passed house bill no. 4335, " An act establishing a science high school in the City of Mati, Province of Davao Oriental to
                 be known as Davao Oriental Regional Science High School. And finally, the school was declared as Davao Oriental Regional 
                 Science High School by RA No. 9630 dated May 31, 2009.
              </h2>
            </div>

            <Footer />
        </div>
    )
}

export default ReadMore
