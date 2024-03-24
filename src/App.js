import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Properties from "./routes/Properties";
import PostProperty from "./routes/postProperty";
import SignIn from "./components/SignIn";
import BackendView from "./routes/backendView";
import "./App.css";

const baseurl = "http://localhost:5000";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/backendview" element={<BackendView />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </div>
  );
}

export default App;
