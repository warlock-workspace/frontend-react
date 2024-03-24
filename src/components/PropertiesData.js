import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/PropertiesData.css"; // Ensure the path to your CSS file is correct
import { useLocation } from "react-router-dom";

const baseurl = "http://localhost:5000";

// PropertyCard component to display individual property information
const PropertyCard = ({ property }) => (
  <div className="card">
    <h5 className="card-title">{property.property_name}</h5>
    <p className="card-text">Description: {property.description}</p>
    <p className="card-text">Location: {property.location}</p>
    <p className="card-text">Amount: {property.amount}</p>
  </div>
);

function PropertiesData() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    fetchData();
  }, [location.search]);

  const fetchData = async () => {
    try {
      setLoading(true);
      let response = await axios.get(`${baseurl}/properties`);
      if (searchQuery) {
        const filteredProperties = response.data.properties.filter(
          (property) => property.location === searchQuery
        );
        setProperties(filteredProperties);
      } else {
        setProperties(response.data.properties);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="properties">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : properties.length === 0 ? (
          <p>No properties found for the search query.</p>
        ) : (
          properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))
        )}
      </div>
    </div>
  );
}

export default PropertiesData;
