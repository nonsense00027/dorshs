import React from 'react'
import './Resources.css';
import ResearchLab from '../../../img/Researchlab.jpg';
import SciLab from '../../../img/sci_lab.jpg';
import ComLab from '../../../img/comlab.jpg';

function Details() {
  return (
    <div className='details'>
      <div className="details__row">
          <div className="details__col">
            <div className="details__photo">
                <img src={ResearchLab} alt="ResearchLab" />
            </div>
          </div>
          <div className="details__col">
            <h2>
              Research Lab
            </h2>
            <p>
              As the school is known for practicing students in research field. 
              Davao Oriental Regional Science High School is the right institution for
              research-related teaching. Thus, the well-designed research laboratory 
              helps the students develop their skills in problem-solving, critical 
              thinking, and verifying various scientific facts and principles as this 
              is where school keeps the record of published works or thesis of students. 
              Also, it is a great place for conducting a research with the comfort of good 
              ambiance.
            </p>
          </div>
      </div>

      <div className='details__row'>
        <div className="details__col">
          <div className="details__photo">
            <img src={SciLab} alt="SciLab" />
          </div>
        </div>
        <div className="details__col">
            <h2>
              Science Lab
            </h2>
            <p>
              Davao Oriental Oriental Regional Science High School offers a well-lit, pristinely 
              clean, highly equipped materials and hazard-free science laboratory with sufficient 
              supplies for students conducting scientific or medical research, experimentation, 
              and observations. The school focuses to maintain an efficient science laboratory 
              that can accommodate the learning capacity of students as they get their first-hand 
              learning experiences to perform such various experimentations on their own.
            </p>
          </div>
      </div>

      <div className="details__row">
        <div className="details__col">
          <div className="details__photo">
            <img src={ComLab} alt="ComLab" />
          </div>
        </div>
        <div className="details__col">
          <h2>
             Computer Lab
          </h2>
          <p>
            Davao Oriental Oriental Regional Science High School provides well equipped, practical and 
            accessible computer laboratory that gives students the confidence to adapt technological way of 
            learning. The laboratory is a great place for students to enhance their capacities in scientific, 
            technological and innovation. Thus, improves their programming, automation and basic computer skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details; 
