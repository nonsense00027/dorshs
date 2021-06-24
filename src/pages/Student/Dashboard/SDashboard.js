import React from 'react';
import '../Student.css';
import { Avatar } from '@material-ui/core';

function SDashboard() {
    return (
        <div className="sDashboard"> 
            <div className="row">
                <div className="avatar">
                    <Avatar />
                <div className="col">
                    <h2>John D. Yu</h2>
                    <h2>Grade XII - Archimedes</h2>
                    <p>LRN: 129400080753</p>
                </div>
                <div className="col">
                    <p>Academic Standing: GOOD</p>
                    <p>General Average for the Current Semester: N/A</p>
                    <p>S.Y. 2020-2021</p>
                </div>
                </div>
            </div>
                <div className="enrolledSub">
                    <h4>Current Enrolled Subject</h4>
                </div>
                
                <div className="card">

                <div className="row2">
                    <div className="col2">
                        <h5>First Semester</h5>
                    </div>
                    <div className="col2">
                        <h5>Second Semester</h5>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>CORE SUBJECTS</p>
                    </div>
                    <div className="col3">
                        <p>CORE SUBJECTS</p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>Contemporary Philippine Arts From the Region</p>
                    </div>
                    <div className="col3">
                        <p>
                            21st Century Literature from the Philippines and the World
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            Understanding Culture, Society and Politics
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            Media and Information Literacy
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            Physical Education & Health III
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            Physical Education & Health IV
                        </p>
                    </div>
                </div>
                <div className="row3">
                    <div className="col4">
                        <p>
                            APPLIED SUBJECTS
                        </p>
                    </div>
                    <div className="col4">
                        <p>
                            APPLIED SUBJECTS
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            Practical Research II
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            Inquires, Investigation, & Immersion
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            English for Academic & Professional Purposes
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            Entrepreneurship
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            Pagsulat Sa Filipino sa Piling Larangan
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col4">
                        <p>
                            SPECIALIZED SUBJECTS
                        </p>
                    </div>
                    <div className="col4">
                        <p>
                            SPECIALIZED SUBJECTS
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            General Physics I
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            General Physics II
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            General Biology I
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            General Biology II
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p>
                            General Chemistry I
                        </p>
                    </div>
                    <div className="col3">
                        <p>
                            General Chemistry II
                        </p>
                    </div>
                </div>

                <div className="row3">
                    <div className="col3">
                        <p></p>
                    </div>
                    <div className="col3">
                        <p>
                            Research/ Capstone Project
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SDashboard
