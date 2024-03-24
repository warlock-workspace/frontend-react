import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import "../components/aboutus.css"; // Import the CSS file

function About() {
  // Sample data for About Us page
  const aboutData = {
    companyName: "PropertyDekho.com",
    companyDescription:
      "Welcome to PropertyDekho.com, your trusted destination for all your real estate needs. We are committed to revolutionizing the way you buy, sell, and rent properties. With our cutting-edge technology and personalized services, we strive to provide you with the best real estate experience possible.",
    teamMembers: [
      { name: "John Doe", position: "CEO" },
      { name: "Jane Smith", position: "CFO" },
      { name: "Alice Johnson", position: "CTO" },
    ],
    mission:
      "Our mission is to empower individuals and businesses with the tools and resources they need to make informed decisions in the real estate market.",
    vision:
      "Our vision is to become the leading platform for connecting buyers, sellers, and renters in the real estate industry, fostering transparency, efficiency, and trust.",
  };

  return (
    <>
      <Navbar />
      <Hero
        className="aboutus"
        HeroImg="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="about-page">
        <div className="about-content">
          <div className="container">
            <h2>{aboutData.companyName}</h2>
            <p>{aboutData.companyDescription}</p>
            <h3>Our Team</h3>
            <ul>
              {aboutData.teamMembers.map((member, index) => (
                <li key={index}>
                  {member.name} - {member.position}
                </li>
              ))}
            </ul>
            <h3>Mission</h3>
            <p>{aboutData.mission}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
