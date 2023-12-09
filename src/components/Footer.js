import { Link } from "react-router-dom";
import React from "react";
function Footer() {
  return (
    <>
      <div className="Container-footer">
        <div className="grid-wrap-footer">
          <div className="row-cols-3">
            <h1>VENTURE VAULT</h1>
            <h4>Empowering Dreams, Fueling Innovation</h4>
          </div>
          <div className="row-cols-3">
            <h2>Office</h2>
            <p>
              Chaitanya Bharathi Institute of Technology(CBIT), Gandipet,
              Hyderabad, Telangana 500075 ·
            </p>
            <h4>
              <Link
                to="aneesh.kaleru@gmail.com,sugamganachary@gmail.com"
                className="links"
              >
                Contact Us
              </Link>
            </h4>
            <p className="no-footer">040 2419 XXXX</p>
          </div>
          <div className="row-cols-3">
            <h2>Links</h2>
            <h4>
              <Link to="/" className="links">
                Home
              </Link>
            </h4>
            <h4>
              <Link to="/Ventures" className="links">
                Ventures
              </Link>
            </h4>

            <h4>
              <Link to="/About" className="links">
                About Us
              </Link>
            </h4>
            <h4>
              <Link to="/Faqs" className="links">
                FAQs
              </Link>
            </h4>
          </div>
          <div className="row-cols-3">
            <h2>Get In Touch</h2>
            <form action="">
              <label htmlFor="query-input-text" className="query-label">
                Need Assistance? Reach out to us!
              </label>
              <textarea
                className="footer-textarea"
                name="querytext"
                id="query-input-text"
                rows={5}
                cols={20}
                style={{ borderRadius: "10px", padding: "10px" }}
              ></textarea>
              <button className="btn-footer" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <p className="footer-copyright">
          VENTURE VAULT © 2023-All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
