import React, { useRef } from "react";
import "./Requirements.css";
import image from "../../../img/image.svg";
import { Button } from "@material-ui/core";
import BackupIcon from "@material-ui/icons/Backup";

function Requirements() {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <div className="requirements">
      <input
        type="file"
        id="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={inputFile}
        style={{ display: "none" }}
      />
      {/* <h1>this is requirements</h1> */}
      <div className="requirements__card">
        <div>
          <img src={image} alt="" />
          <p>2x2 ID picture</p>
        </div>
        <Button
          className="requirements__uploadButton"
          fullWidth
          onClick={onButtonClick}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>
      <div className="requirements__card">
        <div>
          <img src={image} alt="" />
          <p>Report Card</p>
        </div>
        <Button
          className="requirements__uploadButton"
          fullWidth
          onClick={onButtonClick}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>
      <div className="requirements__card">
        <div>
          <img src={image} alt="" />
          <p>Good Moral</p>
        </div>
        <Button
          className="requirements__uploadButton"
          fullWidth
          onClick={onButtonClick}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>
      <div className="requirements__card">
        <div>
          <img src={image} alt="" />
          <p>Birth Certificate</p>
        </div>
        <Button
          className="requirements__uploadButton"
          fullWidth
          onClick={onButtonClick}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>
    </div>
  );
}

export default Requirements;
