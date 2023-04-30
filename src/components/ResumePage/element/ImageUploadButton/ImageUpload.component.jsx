import React, { useState } from "react";
import "./ImageUpload.styles.css";
import Files from "react-files";
import { useResume } from "../../Context";
import Alert from 'react-bootstrap/Alert';
function ImageUpload() {
  const { about, setAbout } = useResume();
  const [error, setError] = useState(false);

  const onFilesChange = (files) => {
    console.log(files[0]?.preview.url);
    setAbout({ ...about, picture: files[0]?.preview.url });
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
    setError(true);
  };
  return (
    <>
    {error && <Alert variant='danger'>Only jpeg/png/jpg file types are allowed</Alert>}
    <Files
      className="files-dropzone"
      onChange={onFilesChange}
      onError={onFilesError}
      accepts={["image/png", "image/jpeg", "image/jpg"]}
      maxFileSize={10000000}
      minFileSize={0}
      clickable
    >
      Upload Image
    </Files>
    </>
  );
}

export default ImageUpload;
