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
          <img src="copywriting.png" alt="img" />

          <p>
            Venture Vault is an innovative online platform reshaping the
            landscape of startup investments. With a curated list of startups
            accompanied by detailed profiles and quarterly performance
            analytics, investors gain unprecedented insights. What sets Venture
            Vault apart is its unique "Negotiating Rooms," allowing direct
            communication between investors and startups for personalized
            negotiation. The platform also serves as an educational hub,
            providing investors with market trends, risk assessment strategies,
            and best practices. Built on the MERN stack, Venture Vault ensures a
            responsive and scalable experience. By blending digital convenience
            with traditional negotiation spaces, the platform aims to
            democratize access to startup information, foster collaboration, and
            empower investors to make informed decisions in the dynamic realm of
            startup investments.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
