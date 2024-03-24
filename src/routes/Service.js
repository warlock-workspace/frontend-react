import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        Title="Services"
        Text="How can I help You?"
        className="service"
        HeroImg="https://images.unsplash.com/photo-1628121750296-227128f4d7dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Footer />
    </>
  );
}

export default Service;
