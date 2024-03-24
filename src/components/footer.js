import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <p style={styles.text}>
          Made with <span role="img" aria-label="heart">❤️</span> by Khushi Panchal
        </p>
        <p style={styles.text}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    position: 'static', // Change position to fixed
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: '10px 0',
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Footer;
