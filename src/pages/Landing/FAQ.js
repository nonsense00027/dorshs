import React from 'react';
import './Landing.css';
import SearchIcon from '@material-ui/icons/Search';

function FAQ() {
    return (
        <div className="faq">
            <div className="faq__design">

            </div>
            <div className="search">               
                <SearchIcon />
                <input placeholder="Type keywords to find the answers" type="text" />
            </div>
        </div>
    )
}

export default FAQ;
