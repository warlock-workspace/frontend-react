import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/backend.css"; // Import your CSS file for additional styling

const BackendView = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch properties data from the backend
      const response = await axios.get("http://localhost:5000/properties");
      setProperties(response.data.properties);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Backend View</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Property Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={index}>
                <td>{property.property_name}</td>
                <td>{property.description}</td>
                <td>{property.location}</td>
                <td>{property.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BackendView;
