import { Link } from "react-router-dom";
import Graph from "./Graph";
import DetailsNavbar from "./DetailsNavbar";
function Details() {
  return (
    <>
      <div className="details-header">
        <Link to="/ventures">
          <img src="backicon.png" alt="back.img" />
        </Link>
      </div>
      <div className="details-container">
        <h1>MediBuddy</h1>
        <h3>
          <img src="location-pin.png" alt="location.img" /> Bengaluru
        </h3>
        <div className="details-mid-container">
          <h2>About</h2>
          <div className="details-descr">
            <div className="details-descr-child">
              <p>
                <span>Overview:</span> MediBuddy is a leading healthcare
                platform dedicated to providing convenient and accessible
                healthcare solutions. With a focus on leveraging technology,
                MediBuddy aims to enhance the healthcare experience for
                individuals by offering teleconsultations, health check-ups, and
                a range of medical services. Despite being in a growth phase,
                the company is currently operating at a loss as it invests in
                expanding its services and reach.
              </p>
            </div>
            <div className="details-descr-child">
              <p>
                <span>Product Offerings:</span> Stashfin offers a range of
                innovative credit products, including personal loans, credit
                lines, and other financial solutions tailored to meet the
                diverse needs of individuals.
              </p>
            </div>
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

        <div className="details-descr-info">
          <div className="details-descr-brief">
            <h3>Valuation Details</h3>
            <h5>Employee Count</h5>
            <p>5,400</p>
            <h5>Valuation Range</h5>
            <p>Less than $200Mn</p>
            <h5>FY22 Total Revenue</h5>
            <p>$6.03Mn</p>
            <h5>Total Revenue Range</h5>
            <p>$1Mn to $50Mn</p>
          </div>
          <div className="details-descr-brief">
            <h3>Growth Details</h3>
            <h5>Adjusted Revenue Growth</h5>
            <p>223%</p>
            <h5>FY22 Revenue Growth</h5>
            <p>423%</p>
            <h5>Expenditure Growth</h5>
            <p>200%</p>
            <h5>Fy22 Total Revenue</h5>
            <p>$6.03Mn</p>
          </div>
          <div className="details-descr-brief">
            <h3>Debt Details</h3>
            <h5>Current Debt</h5>
            <p>$50Mn</p>
            <h5>Long Term Debt</h5>
            <p>$100Mn</p>
            <h5>Total Assets</h5>
            <p>$500Mn</p>
            <h5>Debt To Equity Ratio</h5>
            <p>0.5</p>
          </div>
        </div>

        <div className="graph_style">
          <Graph />
        </div>
        <div className="details-descr">
          <div className="details-descr-child">
            <h3>Technology and Innovation</h3>
            <p>
              Stashfin leverages cutting-edge technology and continuous
              innovation to enhance the user experience, mitigate risks, and
              stay ahead in the competitive fintech landscape.
            </p>
          </div>
          <div className="details-descr-child">
            <h3>Key Partnerships</h3>
            <p>Tech Innovations Inc, Global Investments Group</p>
          </div>
        </div>
        <div>
          <h5>Performance Overview</h5>
          <p>Currently Loss Making</p>
          <h5>Web Link</h5>
          <Link to="https://www.stashfin.com">
            <p>https://www.stashfin.com</p>
          </Link>
        </div>
      </div>
      <DetailsNavbar />
    </>
  );
}

export default Details;
