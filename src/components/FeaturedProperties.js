import React, { useEffect, useState } from "react";
import axios from "axios";
import "./featuredProperties.css"; // Import the CSS file

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const baseurl = "http://localhost:5000";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseurl}/properties`);
      const filteredProperties = [];
      response.data.properties.forEach((property) => {
        if (property.category === "villa") {
          filteredProperties.push(property);
        }
      });
      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    console.log(properties);
  };

  return (
    <div className="container-featured-poperties">
      <div className="container">
        <h2 className="title">Featured Properties</h2>
        <div className="cardContainer">
          {properties.map((property, index) => (
            <div key={index} className="card">
              <div className="propertyInfo">
                <div className="propertyDetailsContainer">
                  <h3 className="propertyTitle">{property.property_name}</h3>
                  <p className="propertyDetails">{property.description}</p>
                  <p className="propertyDetails">Amount: ${property.amount}</p>
                  <p className="propertyDetails">
                    Location: {property.location}
                  </p>
                </div>
                <button className="viewButton">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
