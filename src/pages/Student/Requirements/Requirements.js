import React, { useRef, useState, useEffect } from "react";
import "./Requirements.css";
import image from "../../../img/image.svg";
import { Button } from "@material-ui/core";
import BackupIcon from "@material-ui/icons/Backup";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import { db, storage } from "../../../shared/configs/firebase";
import firebase from "firebase";
import { CircularProgress } from "@material-ui/core";

function Requirements({ student }) {
  const inputFile = useRef(null);
  const [dbStudent, setDbStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [idPicture, setIdPicture] = useState("");
  const [idPreview, setIdPreview] = useState("");
  const [reportCard, setReportCard] = useState("");
  const [reportCardPreview, setReportCardPreview] = useState("");
  const [goodMoral, setGoodMoral] = useState("");
  const [goodMoralPreview, setGoodMoralPreview] = useState("");
  const [nso, setNso] = useState("");
  const [nsoPreview, setNsoPreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const onButtonClick = (selected) => {
    setSelectedImage(selected);
    inputFile.current.click();
  };

  const handleChange = (e) => {
    if (selectedImage) {
      if (e.target.files[0]) {
        switch (selectedImage) {
          case 1:
            setIdPicture(e.target.files[0]);
            break;
          case 2:
            setReportCard(e.target.files[0]);
            break;
          case 3:
            setGoodMoral(e.target.files[0]);
            break;
          case 4:
            setNso(e.target.files[0]);
            break;
          default:
            console.log("error");
        }
      }
    }
  };

  const handleUpload = (image, category, label) => {
    const uploadTask = storage
      .ref(`images/${dbStudent.id}/${category}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      //   progress
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      //   error
      (error) => {
        console.log(error);
        alert(error.message);
      },
      //   complete
      () => {
        storage
          .ref("images")
          .child(dbStudent.id)
          .child(category)
          .getDownloadURL()
          .then((url) => {
            db.collection("students")
              .doc(dbStudent.id)
              .set(
                {
                  [label]: url,
                  // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  // details: details,
                  // imageUrl: url,
                  // result: result,
                },
                { merge: true }
              )
              .then((result) => {
                setProgress(0);
                setIdPicture("");
                setReportCard("");
                setGoodMoral("");
                setNso("");
                // setDetails("");
                // setResult("");
                // setImage(null);
                alert("Result uploaded successfully");
              })
              .catch((err) => alert(`${err.message}`));
          });
      }
    );
  };

  useEffect(() => {
    if (idPicture) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdPreview(reader.result);
      };
      reader.readAsDataURL(idPicture);
    } else {
      setIdPreview(null);
    }

    if (reportCard) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReportCardPreview(reader.result);
      };
      reader.readAsDataURL(reportCard);
    } else {
      setReportCardPreview(null);
    }

    console.log("GOOD MORAL", goodMoral);
    if (goodMoral) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGoodMoralPreview(reader.result);
      };
      reader.readAsDataURL(goodMoral);
    } else {
      setGoodMoralPreview(null);
    }

    if (nso) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNsoPreview(reader.result);
      };
      reader.readAsDataURL(nso);
    } else {
      setNsoPreview(null);
    }
  }, [idPicture, reportCard, goodMoral, nso]);

  useEffect(() => {
    const unsubscribe = db
      .collection("students")
      .doc(student.id)
      .onSnapshot((doc) => {
        setDbStudent({ id: doc.id, ...doc.data() });
        setLoading(false);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="requirements">
      <input
        type="file"
        id="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      {/* <h1>this is requirements</h1> */}
      <div className="requirements__card">
        <div>
          {dbStudent.idPicture ? (
            <div className="requirements__dbImageContainer">
              <img src={dbStudent.idPicture} alt="" />
            </div>
          ) : (
            <div className="requirements__imageContainer">
              <div
                className="requirements__openFileButton"
                onClick={() => onButtonClick(1)}
              >
                <OpenInBrowserIcon />
              </div>
              <img src={idPreview ? idPreview : image} alt="" />
            </div>
          )}
          <p>2x2 ID picture</p>
        </div>
        {idPicture && (
          <progress
            className="requirements__uploadProgress"
            value={progress}
            max="100"
          />
        )}
        <Button
          className={
            idPicture
              ? "requirements__uploadButton"
              : "requirements__uploadButtonDisabled"
          }
          fullWidth
          onClick={() => handleUpload(idPicture, "idPicture", "idPicture")}
          disabled={idPicture.length < 1}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>

      <div className="requirements__card">
        <div>
          {dbStudent.reportCard ? (
            <div className="requirements__dbImageContainer">
              <img src={dbStudent.reportCard} alt="" />
            </div>
          ) : (
            <div className="requirements__imageContainer">
              <div
                className="requirements__openFileButton"
                onClick={() => onButtonClick(2)}
              >
                <OpenInBrowserIcon />
              </div>
              <img src={reportCardPreview ? reportCardPreview : image} alt="" />
            </div>
          )}
          <p>Report Card</p>
        </div>
        {reportCard && (
          <progress
            className="requirements__uploadProgress"
            value={progress}
            max="100"
          />
        )}

        <Button
          className={
            reportCard
              ? "requirements__uploadButton"
              : "requirements__uploadButtonDisabled"
          }
          fullWidth
          onClick={() => handleUpload(reportCard, "reportCard", "reportCard")}
          disabled={reportCard.length < 1}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>

      <div className="requirements__card">
        <div>
          {dbStudent.goodMoral ? (
            <div className="requirements__dbImageContainer">
              <img src={dbStudent.goodMoral} alt="" />
            </div>
          ) : (
            <div className="requirements__imageContainer">
              <div
                className="requirements__openFileButton"
                onClick={() => onButtonClick(3)}
              >
                <OpenInBrowserIcon />
              </div>
              <img src={goodMoralPreview ? goodMoralPreview : image} alt="" />
            </div>
          )}
          <p>Good Moral</p>
        </div>
        {goodMoral && (
          <progress
            className="requirements__uploadProgress"
            value={progress}
            max="100"
          />
        )}
        <Button
          className={
            goodMoral
              ? "requirements__uploadButton"
              : "requirements__uploadButtonDisabled"
          }
          fullWidth
          onClick={() => handleUpload(goodMoral, "goodMoral", "goodMoral")}
          disabled={goodMoral.length < 1}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>

      <div className="requirements__card">
        <div>
          {dbStudent.nso ? (
            <div className="requirements__dbImageContainer">
              <img src={dbStudent.nso} alt="" />
            </div>
          ) : (
            <div className="requirements__imageContainer">
              <div
                className="requirements__openFileButton"
                onClick={() => onButtonClick(4)}
              >
                <OpenInBrowserIcon />
              </div>
              <img src={nsoPreview ? nsoPreview : image} alt="" />
            </div>
          )}
          <p>Birth Certificate</p>
        </div>
        {nso && (
          <progress
            className="requirements__uploadProgress"
            value={progress}
            max="100"
          />
        )}
        <Button
          className={
            nso
              ? "requirements__uploadButton"
              : "requirements__uploadButtonDisabled"
          }
          fullWidth
          onClick={() => handleUpload(nso, "nso", "nso")}
          disabled={nso.length < 1}
        >
          <BackupIcon />
          Upload
        </Button>
      </div>
    </div>
  );
}

export default Requirements;
