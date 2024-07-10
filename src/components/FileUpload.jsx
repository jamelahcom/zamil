import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import './FileUpload.css'; // Import the CSS file

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) { // 10MB limit
      setFile(selectedFile);
    } else {
      alert('Please select a file no larger than 10MB');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.size <= 10 * 1024 * 1024) { // 10MB limit
      setFile(droppedFile);
    } else {
      alert('Please select a file no larger than 10MB');
    }
  };

  return (
    <div className="file-upload-container">
      <h1 className="title">Please verify your identity</h1>
      <p className="subtitle">Select relevant documents to complete your kyc</p>
      
      <div 
        className="drop-zone"
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Upload className="icon" size={48} />
        <p className="drop-zone-text">Select a file or drag and drop here</p>
        <p className="file-types">JPG, PNG or PDF, file size no more than 10MB</p>
        <button className="select-button">
          SELECT FILE
        </button>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
        />
      </div>
      
      {file && (
        <div className="file-info">
          <p className="file-added">File added</p>
          <div className="file-details">
            <div className="file-icon">
              <Upload size={20} className="inner-icon" />
            </div>
            <div className="file-name">
              <p>{file.name}</p>
              <div className="file-progress">
                <div className="file-progress-bar"></div>
              </div>
            </div>
            <p className="file-size">{(file.size / (1024 * 1024)).toFixed(1)}MB</p>
          </div>
        </div>
      )}
      
      <div className="actions">
        <button className="cancel-button">Cancel</button>
        <button className="upload-button" disabled={!file}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
