import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertiesData from "../components/PropertiesData";
import Footer from "../components/footer";

function Properties() {
  const [properties, setProperties] = useState([]);
  const baseurl = "http://localhost:5000";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseurl}/properties`);
      setProperties(response.data.properties);
    } catch (error) {
      console.error("Error fetching data-->>>:", error);
    }
  };

  return (
    <>
      <Navbar />
      <PropertiesData />
      <Footer/>
    </>
  );
}

export default Properties;
