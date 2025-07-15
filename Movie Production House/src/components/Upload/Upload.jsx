// Upload.jsx
import React from 'react';
import axios from 'axios';

const Upload = ({ file, setUploadUrl }) => {
  const [uploadStatus, setUploadStatus] = React.useState('');

  const upload = () => {
    if (!file) {
      setUploadStatus('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3000/upload', formData)
      .then(res => {
        console.log('Upload success:', res.data);
        const fileUrl = `http://localhost:3000/uploads/${res.data.file.filename}`;
        setUploadUrl(fileUrl);
        setUploadStatus('File uploaded successfully!');
      })
      .catch(err => {
        console.error('Upload error:', err);
        setUploadStatus('Upload failed.');
      });
  };

  return (
    <div>
      <button type="button" onClick={upload}>
        Upload Your Portfolio
      </button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default Upload;
