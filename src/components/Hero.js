import "../components/Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.className}>
        <img
          alt="HeroImg"
          style={{ width: "100%", height: "800px" }}
          src={props.HeroImg}
        />
        <div className="hero-text">
          <h1>{props.Title}</h1>
          <p>{props.Text}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
