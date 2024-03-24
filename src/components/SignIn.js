import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios"; // Import axios for making HTTP requests
import "./signIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const staticEmail = "khushipanchal@gmail.com"; // Static email
  const staticPassword = "iambandar"; // Static password

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Check if entered email and password match the static ones
    if (email === staticEmail && password === staticPassword) {
      console.log("User signed in with:", email, password);
      // Redirect to BackendView component
      navigate("/backendview");
    
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        Title="Login"
        Text="How can I help You?"
        className="service"
        HeroImg="https://images.unsplash.com/photo-1628121750296-227128f4d7dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
