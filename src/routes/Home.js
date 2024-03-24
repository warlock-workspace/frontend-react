import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Footer from "../components/footer";
import Blog from "../components/blog";
import SocialMedia from "../components/socialMedia";
import FeaturedProperties from "../components/FeaturedProperties";
import Testimonials from "../components/testimonials";

import React, { useState, useEffect } from "react";

const baseurl = "http://localhost:5000";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        className="hero"
        Title="Your Dream Property Awaits!"
        Text="Search Your Solace"
        HeroImg="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <SearchBar />
      <FeaturedProperties />
      <Testimonials />
      <Blog />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default Home;
