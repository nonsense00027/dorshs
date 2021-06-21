import React from 'react';
import './Landing.css';
import Accordion from './FAQ/Accordion';
import SearchDesign from '../Landing/FAQ/SeachDesign';

function FAQ() {
    return (
        <div className="faq">
           
            <div className="searchDesign">
                <SearchDesign />
            </div>

            <div className="accordion">
                <Accordion />
            </div>
        </div>
    )
}

export default FAQ;
