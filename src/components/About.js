import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <div className="about-heading">
          <img src="abtpage.png" alt="img" />
        </div>
        <div className="about-us-content">
          <p>
            Welcome to Venture Vault, where innovation meets investment. Our
            platform connects visionary startups with savvy investors, creating
            a dynamic ecosystem for strategic partnerships and growth. Our
            mission is to provide a secure and transparent space for startups to
            showcase their brilliance and for investors to discover
            opportunities that align with their vision.
          </p>
          <p>
            We are passionate about supporting the journey of entrepreneurship,
            fostering meaningful connections, and empowering both startups and
            investors to reach new heights. It's a testament to the creativity
            and inspiration that fuels our commitment to revolutionize the way
            startups and investors connect.
          </p>
        </div>
        <div className="about-midcontainer">
          <img src="aboutimg.jpg" alt="img" />
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
