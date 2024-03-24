import React from 'react';

const Testimonials = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Testimonials</h2>
      <div style={styles.testimonial}>
        <p style={styles.quote}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem ut lorem fermentum viverra. Duis consectetur justo eget dui consectetur, sit amet congue mi ultricies."</p>
        <p style={styles.author}>- John Doe</p>
      </div>
      <div style={styles.testimonial}>
        <p style={styles.quote}>"Vivamus lobortis massa sed ligula venenatis, non ultrices ipsum luctus. Integer nec ante sit amet est consequat ultricies. Donec ac bibendum elit."</p>
        <p style={styles.author}>- Jane Smith</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  testimonial: {
    marginBottom: '40px',
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  author: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
};

export default Testimonials;
