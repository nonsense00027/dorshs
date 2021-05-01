import React, { useState } from "react";

function StepB() {
  const [birthCertificateNo, setBirthCertificateNo] = useState("");
  const [lrnNo, setLrnNo] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [extensionname, setExtensionname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [ip, setIp] = useState(false);
  const [ipType, setIpType] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [religion, setReligion] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState(false);
  const [specialNeedsType, setSpecialNeedsType] = useState("");
  const [device, setDevice] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [subdivision, setSubdivision] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div>
      <h3>Step B</h3>
    </div>
  );
}

export default StepB;
