import { useState } from "react";
import axios from "axios";
import imageUrl from "../images/property_new.jpg"

const HomePageHeader = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "a4c9cf71-5754-4386-a29f-3e16fef47098",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Incorrect credentials!");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div id="header">
          <div id="navbar">
          {imageUrl && <img src={imageUrl} alt="Description of the image" />}
            <h3>Property Management systems</h3>
            <a href="#" className="dropdownButton">
              Properties
            </a>
            <div>
              <a>Services</a>
            </div>
            <a href="/aboutus">About Us</a>
            <a href="/contactus">Contacts</a>
          </div>

          <div className="dropdown" style={{ display: "none" }}>
            <p>Rental</p>
            <p>
              <a href="sell-your-property">Sale</a>
            </p>
            <p>Lease</p>
          </div>

          <h1>Easiest way to find your dream home</h1>
          <form id="search-form">
            <input
              type="text"
              id="search-input"
              placeholder="Your ZIP code or City. e.g. New York"
            />
            <button type="submit" id="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
