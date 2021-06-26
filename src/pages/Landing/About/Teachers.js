import React from 'react';
import './About.css';
import Card from './Card';

function Teachers() {
    return (
        <div className="teachers">
            <div className="meetTeachers">
                <h2>Meet The School Heads and Teachers</h2>
                <hr />
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers
