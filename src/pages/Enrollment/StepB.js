import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Cookie from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
      width: "55ch",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      width: "60ch",
    },
  },
}));

function StepB({ handleNext, handleBack, handleStepB }) {
  const classes = useStyles();

  const [birthCertificateNo, setBirthCertificateNo] = useState("");
  const [lrnNo, setLrnNo] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [extensionname, setExtensionname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [ip, setIp] = useState(null);
  const [ipType, setIpType] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [religion, setReligion] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState(null);
  const [specialNeedsType, setSpecialNeedsType] = useState("");
  const [device, setDevice] = useState(null);
  const [deviceType, setDeviceType] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [subdivision, setSubdivision] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleStepB({
      birthCertificateNo,
      lrnNo,
      lastname,
      firstname,
      middlename,
      extensionname,
      birthdate,
      age,
      sex,
      ip,
      ipType,
      motherTongue,
      religion,
      specialNeeds,
      specialNeedsType,
      device,
      deviceType,
      houseNumber,
      subdivision,
      barangay,
      city,
      province,
      region,
    });

    putToCookie();
  };

  const handleGoBack = () => {
    putToCookie();
    handleBack();
  };

  const putToCookie = () => {
    Cookie.set(
      "stepb",
      JSON.stringify({
        birthCertificateNo,
        lrnNo,
        lastname,
        firstname,
        middlename,
        extensionname,
        birthdate,
        age,
        sex,
        ip,
        ipType,
        motherTongue,
        religion,
        specialNeeds,
        specialNeedsType,
        device,
        deviceType,
        houseNumber,
        subdivision,
        barangay,
        city,
        province,
        region,
      })
    );
  };

  useEffect(() => {
    const stepbCookie = Cookie.getJSON("stepb")
      ? Cookie.getJSON("stepb")
      : null;
    if (stepbCookie) {
      setBirthCertificateNo(stepbCookie.birthCertificateNo);
      setLrnNo(stepbCookie.lrnNo);
      setLastname(stepbCookie.lastname);
      setFirstname(stepbCookie.firstname);
      setMiddlename(stepbCookie.middlename);
      setExtensionname(stepbCookie.extensionname);
      setBirthdate(stepbCookie.birthdate);
      setAge(stepbCookie.age);
      setSex(stepbCookie.sex);
      setIp(stepbCookie.ip);
      setIpType(stepbCookie.ipType);
      setMotherTongue(stepbCookie.motherTongue);
      setReligion(stepbCookie.religion);
      setSpecialNeeds(stepbCookie.specialNeeds);
      setSpecialNeedsType(stepbCookie.specialNeedsType);
      setDevice(stepbCookie.device);
      setDeviceType(stepbCookie.deviceType);
      setHouseNumber(stepbCookie.houseNumber);
      setSubdivision(stepbCookie.subdivision);
      setBarangay(stepbCookie.barangay);
      setCity(stepbCookie.city);
      setProvince(stepbCookie.province);
      setRegion(stepbCookie.region);
    }
  }, []);

  return (
    <div className="steps">
      <h3>Student Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <p>B1, PSA Birth Certificate No. (if available upon enrollment)</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={birthCertificateNo}
              onChange={(e) => setBirthCertificateNo(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B2. Learner Reference Number (LRN)</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={lrnNo}
              onChange={(e) => setLrnNo(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>B3. Last Name</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B4. First Name</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>B5. Middle Name</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
            />
          </div>

          <div className="col">
            <p>B6. Extension Name e.g. Jr, III (if applicable)</p>
            <TextField
              variant="outlined"
              fullWidth
              value={extensionname}
              onChange={(e) => setExtensionname(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>B7. Date of Birth (Month/Day/Year)</p>
            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <div className="col">
            <p>B8. Age</p>
            <TextField
              fullWidth
              variant="outlined"
              type="number"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B9. Sex</p>
            <Checkbox
              checked={sex === "male"}
              value="male"
              onChange={() => setSex("male")}
            />
            <label>Male</label>
            <Checkbox
              checked={sex === "female"}
              value="female"
              onChange={() => setSex("female")}
            />
            <label>Female</label>
          </div>
        </div>

        <p>B10. Belonging to Indienous People (IP)</p>
        <Checkbox
          value="yes"
          checked={ip === true}
          onChange={() => setIp(true)}
        />
        <label>Yes</label>
        <Checkbox
          value="no"
          checked={ip === false}
          onChange={() => setIp(false)}
        />
        <label>No</label>
        {ip && (
          <>
            <p>B11. If yes, please specify:</p>
            <TextField
              value={ipType}
              fullWidth
              variant="outlined"
              onChange={(e) => setIpType(e.target.value)}
            />
          </>
        )}

        <div className="row">
          <div className="col">
            <p>B12. Mother Tounge</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={motherTongue}
              onChange={(e) => setMotherTongue(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B13. Religion</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h4>For Learnes with Special Education Needs</h4>
        </div>

        <div className="row">
          <div className="col">
            <p>
              B14. Does the learner have special education needs? (i.e.
              physical, mental, developmental disability, medical condition,
              giftedness, among others)
            </p>
            <Checkbox
              value="yes"
              checked={specialNeeds === true}
              onChange={() => setSpecialNeeds(true)}
            />
            <label>Yes</label>
            <Checkbox
              value="no"
              checked={specialNeeds === false}
              onChange={() => setSpecialNeeds(false)}
            />
            <label>No</label>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>B15. If yes, please specify:</p>
            <TextField
              variant="outlined"
              fullWidth
              value={specialNeedsType}
              onChange={(e) => setSpecialNeedsType(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              B16. Do you have any assistive technology devices available at
              home? (i.e. screen reader, Braille, DAISY)
            </p>
            <Checkbox
              value="1"
              checked={device === true}
              onChange={() => setDevice(true)}
            />
            <label>Yes</label>
            <Checkbox
              value="2"
              checked={device === false}
              onChange={() => setDevice(false)}
            />
            <label>No</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>B17. If yes, please specify:</p>
            <TextField
              variant="outlined"
              fullWidth
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h4>Address</h4>
        </div>

        <div className="row">
          <div className="col">
            <p>B18. House Number and Street</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>

          <div className="col">
            <p>B19. Subdivision/ Village/ Zone</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={subdivision}
              onChange={(e) => setSubdivision(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B20. Barangay</p>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={barangay}
              onChange={(e) => setBarangay(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>B21. Region</p>
            <TextField
              fullWidth
              variant="outlined"
              required
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B22. City/ Municipality</p>
            <TextField
              fullWidth
              variant="outlined"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col">
            <p>B23. Province</p>
            <TextField
              fullWidth
              variant="outlined"
              required
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
        </div>
        <div className="enrollment__buttonContainer">
          <Button
            variant="contained"
            onClick={handleGoBack}
            className="steps__backButton"
          >
            Back
          </Button>
          <Button
            className="steps__nextButton"
            variant="contained"
            color="primary"
            // onClick={handleSubmit}
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default StepB;
