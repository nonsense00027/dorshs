import React, { useState } from "react";
import "../Enrollment/Enrollment.css";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Button,
  Input,
  TextField,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
}));

const transportationList = [
  "Walking",
  "Public commute (land/water)",
  "Family-owned vehicle",
  "School service",
];

const membersStudyingList = [
  { name: "kinder", label: "Kinder" },
  { name: "grd1", label: "Grade 1" },
  { name: "grd2", label: "Grade 2" },
  { name: "grd3", label: "Grade 3" },
  { name: "grd4", label: "Grade 4" },
  { name: "grd5", label: "Grade 5" },
  { name: "grd6", label: "Grade 6" },
  { name: "grd7", label: "Grade 7" },
  { name: "grd8", label: "Grade 8" },
  { name: "grd9", label: "Grade 9" },
  { name: "grd10", label: "Grade 10" },
  { name: "grd11", label: "Grade 11" },
  { name: "grd12", label: "Grade 12" },
  { name: "others", label: "Others: (i.e college, vocational. etc)" },
];

const membersSupportList = [
  "parents/ guardian",
  "elder siblings",
  "grandparents",
  "extended members of the family",
  "others (tutor, house helper",
  "none",
  "able to do independent learning",
];

const devicesHomeList = [
  "cable TV",
  "non-cable TV",
  "basic cellphone",
  "smartphone",
  "tablet",
  "radio",
  "desktop computer",
  "laptop",
  "none",
  "others: ",
];

const internetTypeList = [
  "own mobile data",
  "own broadband internet (DSL, wireless fiber, satellite)",
  "computer shop",
  "other places outside the home with internet connection (library, barangay/ municipal hall, neighbor, relatives)",
  "none",
];

const modalityList = [
  "online Learning",
  "television",
  "radio",
  "modular learning",
  "combination of face to face with other modalities",
  "others: ",
];

const challengesList = [
  "lack of available gadgets/ equipment",
  "insufficient load/ data allowance",
  "unstable mobile/ internet connection",
  "existing health condition/s",
  "difficulty in independent learning",
  "conflict with other activities (i.e., house chores)",
  "no or lack of available space for studying distractions (i.e., social media, noise from community/ neighbor)",
  "others: ",
];

export default function CheckboxesGroup({ handleBack, handleStepD }) {
  const [transportation, setTransportation] = useState([]);
  const [membersStudying, setMembersStudying] = useState(
    { kinder: "" },
    { grd1: "" },
    { grd2: "" },
    { grd3: "" },
    { grd4: "" },
    { grd5: "" },
    { grd6: "" },
    { grd7: "" },
    { grd8: "" },
    { grd9: "" },
    { grd10: "" },
    { grd11: "" },
    { grd12: "" },
    { others: "" }
  );
  const [membersSupport, setMembersSupport] = useState([]);
  const [devicesHome, setDevicesHome] = useState([]);
  const [internet, setInternet] = useState(null);
  const [internetType, setInternetType] = useState("");
  const [modality, setModality] = useState("");
  const [challenges, setChallenges] = useState("");

  const handleSubmit = () => {
    handleStepD({
      transportation,
      membersStudying,
      membersSupport,
      devicesHome,
      internet,
      internetType,
      modality,
      challenges,
    });
  };

  const handleTransportationChange = (e) => {
    if (e.target.checked) {
      setTransportation((prevContent) => [...prevContent, e.target.value]);
    } else {
      var newContent = transportation.filter((item) => item !== e.target.value);
      setTransportation(newContent);
    }
  };
  const handleMembersSupportChange = (e) => {
    if (e.target.checked) {
      setMembersSupport((prevContent) => [...prevContent, e.target.value]);
    } else {
      var newContent = membersSupport.filter((item) => item !== e.target.value);
      setMembersSupport(newContent);
    }
  };
  const handleDevicesHomeChange = (e) => {
    if (e.target.checked) {
      setDevicesHome((prevContent) => [...prevContent, e.target.value]);
    } else {
      var newContent = devicesHome.filter((item) => item !== e.target.value);
      setDevicesHome(newContent);
    }
  };
  const handleInternetTypeChange = (e) => {
    if (e.target.checked) {
      setInternetType((prevContent) => [...prevContent, e.target.value]);
    } else {
      var newContent = internetType.filter((item) => item !== e.target.value);
      setInternetType(newContent);
    }
  };
  const handleModalityChange = (e) => {
    if (e.target.checked) {
      setModality((prevContent) => [...prevContent, e.target.value]);
    } else {
      var newContent = modality.filter((item) => item !== e.target.value);
      setModality(newContent);
    }
  };
  const handleChallengesChange = (e) => {
    if (e.target.checked) {
      setChallenges((prevContent) => [...prevContent, e.target.value]);
    } else {
      var newContent = challenges.filter((item) => item !== e.target.value);
      setChallenges(newContent);
    }
  };
  return (
    <div className="stepD">
      <h2 className="section__title">Section D</h2>
      <div className="row">
        <div className="col">
          <p>D1. How Does your child go to school? Choose all that applies</p>
          <FormGroup>
            {transportationList.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    checked={transportation.includes(item)}
                    value={item}
                    onChange={handleTransportationChange}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>
            D2. How many of your household members (including the enrollee) are
            studying in School Year 2020-2021? Please specify each.
          </p>
          {membersStudyingList.map((item) => (
            <TextField
              required
              name={item.name}
              value={membersStudying[item.name]}
              label={item.label}
              variant="outlined"
              onChange={(e) =>
                setMembersStudying((prevContent) => ({
                  ...prevContent,
                  [e.target.name]: [e.target.value],
                }))
              }
            />
          ))}
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>
            D3. Who among the household members can provide instructional
            support to the child’s distance learning? Choose all that applies.
          </p>
          <FormGroup>
            {membersSupportList.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    checked={membersSupport.includes(item)}
                    value={item}
                    onChange={handleMembersSupportChange}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>
            D4. What devices are available at home that the learner can use for
            learning? Check all that applies.
          </p>
          <FormGroup>
            {devicesHomeList.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={devicesHome.includes(item)}
                    value={item}
                    onChange={handleDevicesHomeChange}
                  />
                }
                label={item}
              />
            ))}
            <Input
              placeholder="others"
              inputProps={{ "aria-label": "description" }}
            />
          </FormGroup>
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>D5. Do you have a way to connect to the internet?</p>
          <Checkbox
            checked={internet === true}
            value="Yes"
            onChange={() => setInternet(true)}
          />
          <label>Yes</label>
          <Checkbox
            checked={internet === false}
            value="No"
            onChange={() => setInternet(false)}
          />
          <label>No (if NO, proceed to D7)</label>
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>
            D6. How do you connect to the internet? Choose all that applies.
          </p>
          <FormGroup>
            {internetTypeList.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={internetType.includes(item)}
                    value={item}
                    onChange={handleInternetTypeChange}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>
            D7. What distance learning modality/ies do you prefer for your
            child? Choose all that applies.
          </p>
          <FormGroup>
            {modalityList.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={modality.includes(item)}
                    value={item}
                    onChange={handleModalityChange}
                  />
                }
                label={item}
              />
            ))}

            <Input placeholder="others" />
          </FormGroup>
        </div>
      </div>
      <div clasName="row">
        <div className="col">
          <p>
            D8. What are the challenges that may affect your child’s learning
            process through distance education? Choose all that applies.
          </p>
          <FormGroup>
            {challengesList.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={challenges.includes(item)}
                    value={item}
                    onChange={handleChallengesChange}
                  />
                }
                label={item}
              />
            ))}

            <TextField placeholder="others" />
          </FormGroup>
        </div>
      </div>
      {/* </div> */}
      <div className="enrollment__buttonContainer">
        <Button variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button
          className="nextButton"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
