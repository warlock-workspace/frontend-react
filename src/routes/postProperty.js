import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import PostPropertyForm from "../components/postPropertyForm";

function PostProperty() {
  
  return (
    <>
      <Navbar />
      <Hero
        Title="Post Properties"
        Text="Post Property"
        className="post-property-page"
        HeroImg="https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PostPropertyForm/>
    </>
  );
}

export default PostProperty;
