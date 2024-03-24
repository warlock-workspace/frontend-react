import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 style={styles.title}>Latest Blog Posts</h2>
      <div style={styles.container}>
        <div style={styles.card}>
          <h3 style={styles.postTitle}>5 Tips for First-Time Homebuyers</h3>
          <p style={styles.postContent}>
            Buying your first home can be an overwhelming experience. Here are
            five tips to help you navigate the process smoothly...
          </p>
          <a href="/blog/first-time-homebuyers" style={styles.readMore}>
            Read More
          </a>
        </div>
        <div style={styles.card}>
          <h3 style={styles.postTitle}>Top 10 Neighborhoods to Live in City</h3>
          <p style={styles.postContent}>
            Are you looking for the perfect neighborhood to settle down in?
            Check out our list of the top 10 neighborhoods in the city...
          </p>
          <a href="/blog/top-neighborhoods" style={styles.readMore}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  card: {
    backgroundColor: "#rgb(219 208 208)",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
    width: "calc(50% - 40px)", // Adjust width to fit two cards in a row
    margin: "0 20px", // Add margin between cards
    boxSizing: "border-box",
    transition: "transform 0.5s ease",
  },
  postTitle: {
    color: "#333",
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  postContent: {
    color: "#666",
    marginBottom: "20px",
  },
  readMore: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Blog;
