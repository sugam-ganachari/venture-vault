import { Link } from "react-router-dom";

function Details() {
  return (
    <>
      <div className="details-header">
        <Link to="/ventures">
          <button className="btn-special-btn-nav">
            Back To Venture listings
          </button>
        </Link>
      </div>
      <div className="details-container">
        <h1>MediBuddy</h1>
        <h3>
          <img src="location-pin.png" alt="location.img" /> Bengaluru
        </h3>
        <div className="details-mid-container">
          <div className="details-descr">
            <h2>About</h2>
            <p>
              MediBuddy is a leading healthcare platform dedicated to providing
              convenient and accessible healthcare solutions. With a focus on
              leveraging technology, MediBuddy aims to enhance the healthcare
              experience for individuals by offering teleconsultations, health
              check-ups, and a range of medical services. Despite being in a
              growth phase, the company is currently operating at a loss as it
              invests in expanding its services and reach.
            </p>
          </div>
          <div className="details-descr-brief">
            <h4>Employee Count</h4>
            <p>5,400</p>
            <h4>Total Revenue Range</h4>
            <p>$1Mn to $50Mn</p>
            <h4>Valuation Range</h4>
            <p>Less than $200Mn</p>
          </div>
        </div>
        <div className="team-details">
          <h2>Executive Team</h2>
          <div className="details-team">
            <div className="details-team-member">
              <h4>Prashant Tandon</h4>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="details-team-member">
              <h4>Satish Kannan</h4>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="details-team-member">
              <h4>Srikanth Lingidi</h4>
              <p>CTO & Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
