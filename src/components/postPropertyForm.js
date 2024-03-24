import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { useDropzone } from "react-dropzone";
import MyImage from "./img/upload.png";

import "../components/postPropertyForm.css";

const baseurl = "http://localhost:5000";

function PostPropertyForm() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    property: "",
    value: "",
    category: "",
    other: "",
    location: "",
    description: "",
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithFiles = {
        ...formData,
        attachments: uploadedFiles,
      };
      console.log("formDataWithFiles", formDataWithFiles);
      const response = await axios.post(
        `${baseurl}/properties`,
        formDataWithFiles
      ); // Send form data with files to Flask backend
      console.log("Response:", response.data);

      // Clear input values
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setFormData({
      property: "",
      value: "",
      category: "",
      other: "",
      location: "",
      description: "",
    });

    setUploadedFiles([]);
  };

  return (
    <>
      <div className="post-property-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="property">Property Name:</label>
            <input
              type="text"
              id="property"
              name="property"
              value={formData.property} // Bind value to state
              onChange={handleChange} // Handle change
              placeholder="Enter property Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="value">Amount:</label>
            <input
              type="text"
              id="value"
              name="value"
              value={formData.value} // Bind value to state
              onChange={handleChange} // Handle change
              placeholder="Enter value"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category} // Bind value to state
              onChange={handleChange} // Handle change
            >
              <option value="">Select a category</option>
              <option value="bunglow">Bunglow</option>
              <option value="shop">Shop</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="other">Other</option>
            </select>
          </div>
          {formData.category === "other" && (
            <div className="form-group">
              <label htmlFor="other">Other:</label>
              <input
                type="text"
                id="other"
                name="other"
                value={formData.other} // Bind value to state
                onChange={handleChange} // Handle change
                placeholder="Please Specify value"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location} // Bind value to state
              onChange={handleChange} // Handle change
              placeholder="Enter Location"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description} // Bind value to state
              onChange={handleChange} // Handle change
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {uploadedFiles.length == 0 && (
                <div className="icon-preview">
                  <img src={MyImage} alt="upload icon" />
                  <p>Drag and drop files here or click to browse.</p>
                </div>
              )}
              <ul>
                {uploadedFiles.length > 0 && (
                  <img
                    name="images"
                    key={uploadedFiles[0].name}
                    src={URL.createObjectURL(uploadedFiles[0])}
                    alt={`Preview ${uploadedFiles[0].name}`}
                    className="preview-image"
                  />
                )}
              </ul>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PostPropertyForm;
