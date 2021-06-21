import React from 'react';
import '../Landing.css';
import SearchIcon from '@material-ui/icons/Search';

function SeachDesign() {
    return (
        <div>
            <div className="search">               
            <SearchIcon />
            <input placeholder="Type keywords to find the answers" type="text" />
            </div>   
        </div>
    )
}

export default SeachDesign
