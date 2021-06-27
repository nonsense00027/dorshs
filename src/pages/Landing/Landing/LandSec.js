import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "./LandSec.css";
import education from "../../../img/education.svg";
import excellent from "../../../img/excellent.svg";
import competent from "../../../img/competent.svg";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function LandSec() {
  const history = useHistory();

  return (
    <div className="landSec">
      <Container>
        <h1>Why Choose Our School</h1>

        <div className="landSec__content">
          <div className="landSec__card">
            <div className="landSec__cardHeader">
              <img src={education} alt="" />
            </div>
            <div className="landSec__info">
              <h2>Quality Education</h2>
              <p>
                As the academic institution of DORSHS provides knowledge to
                students, the objective is to provide a pre-requisite for
                learning and human development. With that, the school provides
                quality education to learnings through engaging in the health,
                social-emotional skills, and academic capabilities of learners.
                The institution sees quality education as fundamental in
                building learners that would develop sustainable societies and
                improve individual well-being, thus the school seeks to achieve.
              </p>
            </div>
          </div>
          <div className="landSec__card">
            <div className="landSec__cardHeader">
              <img src={excellent} alt="" />
            </div>
            <div className="landSec__info">
              <h2>Excellence</h2>
              <p>
                Excellence is a set of values and outcomes that students strive
                to achieve, yet in DORSHS, excellence is a goal for all. The
                school sets aspirations for students, staff and parents that is
                envisioned to be fulfilled. Further, the school manifests
                discipline, virtues and missions that sets us vessels for
                excellence to not an act, but a character.
              </p>
            </div>
          </div>
          <div className="landSec__card">
            <div className="landSec__cardHeader">
              <img src={competent} alt="" />
            </div>
            <div className="landSec__info">
              <h2>Competent</h2>
              <p>
                Skills and knowledge are factors that contribute to the growth
                of a learner, thus DORSHS understands that its role is to hone
                these capabilities. Such strength of learners requires to be
                assessed and improved to be done efficiently and sustainably.
                The institution utilizes competence to aid students to draw and
                build upon what they know, how they think, and what they can do.
              </p>
            </div>
          </div>
        </div>
        <div className="landSec__button">
          <Button
            variant="contained"
            disableElevation
            onClick={() => history.push("/enrollment")}
          >
            Become a Student
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default LandSec;
