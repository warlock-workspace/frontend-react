import React from "react";

const SocialMedia = () => {
  return (
    
    <div style={styles.container}>
      <div style={styles.section}>
        <h3 style={styles.title}>Contact Us</h3>
        <div style={styles.info}>
          <p style={styles.detail}>
            <strong>Email:</strong> info@example.com
          </p>
          <p style={styles.detail}>
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p style={styles.detail}>
            <strong>Address:</strong> 123 Main Street, City, State, ZIP
          </p>
        </div>
        <div style={styles.contactForm}>
          <h4 style={styles.formTitle}>Send Us a Message</h4>
          {/* Add your contact form component here */}
        </div>
      </div>
      <div style={styles.section}>
        <h3 style={styles.title}>Follow Us</h3>
        <div style={styles.icons}>
          <a
            href="https://www.facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/facebook.svg"
              alt="Facebook"
              style={styles.icon}
            />
          </a>
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/twitter.svg"
              alt="Twitter"
              style={styles.icon}
            />
          </a>
          <a
            href="https://www.instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/instagram.svg"
              alt="Instagram"
              style={styles.icon}
            />
          </a>
        </div>
      </div>
      
      <div>
     
    </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  section: {
    marginRight: "100px", // Add spacing between sections
  },
  title: {
    color: "#333",
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  info: {
    marginBottom: "20px",
  },
  detail: {
    color: "#666",
    marginBottom: "10px",
  },
  contactForm: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  formTitle: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLink: {
    textDecoration: "none",
    margin: "0 10px",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
};

export default SocialMedia;
