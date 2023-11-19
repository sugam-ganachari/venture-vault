import { Link } from "react-router-dom";
import Graph from "./Graph";
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

        <h1>
          <img src="https://etimg.etb2bimg.com/photo/91518387.cms" alt="logo" style={{
            height: "100px",
            width: "300px"
          }} ></img></h1>
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
            <div style={{
              display: "flex"
            }} >
              <div style={{
                display: "inline-block"
              }}>
                <h2>
                  Key Partnerships
                </h2>
                <p>
                  <b>XYZ Bank
                  </b>
                </p>
                <h3>
                  Tech Innovation Inc.
                </h3>
                <h3>
                  Global Investments Group
                </h3>

              </div>

              <div style={{
                marginLeft: "40px"
              }}>

                <h2>Contact</h2>
                <h3>Address</h3>
                <p>123 Main Street, Delhi NCR, India</p>
                <h3>Email</h3>
                <p>info@stashfin.com</p>

              </div>
            </div>

          </div>
          <div className="details-descr-brief">
            <h3>Valuation Details</h3>
            <h4>Employee Count</h4>
            <p>5,400</p>
            <h4>Total Revenue Range</h4>
            <p>$1Mn to $50Mn</p>
            <h4>Valuation Range</h4>
            <p>Less than $200Mn</p>
            <h4>Fy22 Total Revenue</h4>
            <p>$6.03Mn</p>
          </div>
          <div className="details-descr-brief">
            <h3>Growth Details</h3>
            <h4>Adjusted Revenue Growth</h4>
            <p>223%</p>
            <h4>FY22 Revenue Growth</h4>
            <p>423%</p>
            <h4>Expenditure Growth</h4>
            <p>200%</p>
            <h4>Fy22 Total Revenue</h4>
            <p>$6.03Mn</p>
          </div>
          <div className="details-descr-brief">
            <h3>Debt Details</h3>
            <h4>Current Debt</h4>
            <p>$50M</p>
            <h4>Long Term Debt</h4>
            <p>$100M</p>
            <h4>Total Assets</h4>
            <p>500M</p>
            <h4>Debt To Equity Ratio</h4>
            <p>0.5</p>
          </div>
        </div>

        <div className="graph_style">
          <Graph />
        </div>



        <div className="team-details">
          <h2>Executive Team</h2>
          <div className="details-team">
            <div className="details-team-member">
              <h4>Prashant Tandon</h4>
              <p>CEO & Co-Founder</p>
              <p>
                Contact : info@stashfin.com
              </p>
            </div>
            <div className="details-team-member">
              <h4>Satish Kannan</h4>
              <p>CEO & Co-Founder</p>
              <p>
                Contact : info@stashfin.com
              </p>
            </div>
            <div className="details-team-member">
              <h4>Srikanth Lingidi</h4>
              <p>CTO & Co-Founder</p>
              <p>
                Contact : info@stashfin.com
              </p>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default Details;
