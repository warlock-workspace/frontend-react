import React from 'react';

const ContactInformation = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Contact Us</h3>
      <div style={styles.info}>
        <p style={styles.detail}><strong>Email:</strong> info@example.com</p>
        <p style={styles.detail}><strong>Phone:</strong> +123-456-7890</p>
        <p style={styles.detail}><strong>Address:</strong> 123 Main Street, City, State, ZIP</p>
      </div>
      <div style={styles.contactForm}>
        <h4 style={styles.formTitle}>Send Us a Message</h4>
        {/* Add your contact form component here */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  },
  info: {
    marginBottom: '20px',
  },
  detail: {
    color: '#666',
    marginBottom: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  contactForm: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  formTitle: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  formTitleHover: {
    color: '#007bff',
  }
};

export default ContactInformation;
