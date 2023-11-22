import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <NavBar />
      <section className="home">
        <div className="home-page">
          <div className="left-content">
            <h1 className="homepage-h1">VENTURE VAULT.</h1>
            <h3 className="homepage-h3">
              "Empowering Dreams, Fueling Innovation"- Your Gateway to Strategic
              Startup Investments
            </h3>
            <Link to="/Ventures">
              <button className="btn-homepage">GET STARTED</button>
            </Link>
            <button className="btn-homepage-b1">KNOW MORE</button>
          </div>
          <div className="right-content">
            <img
              src="locker-1.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </div>

        <div className="trusted-companies">
          <div>
            <h1 className="trusted-companies-h1">TRUSTED BY</h1>
          </div>
          <div className="grid-content">
            <div className="row-cols-4">
              <img
                src="mastercard.svg"
                alt="Mastercard.img"
                className="trusted-companies-img"
              />
            </div>
            <div className="row-cols-4">
              <img
                src="forbes.svg"
                alt="Forbes.img"
                className="trusted-companies-img"
              />
            </div>
            <div className="row-cols-4">
              <img
                src="coinbase.svg"
                alt="Coinbase.img"
                className="trusted-companies-img"
              />
            </div>
            <div className="row-cols-4">
              <img
                src="emirates.svg"
                alt="Emirates.img"
                className="trusted-companies-img"
              />
            </div>
            <div className="row-cols-4">
              <img
                src="airbnb.svg"
                alt="Airbnb.img"
                className="trusted-companies-img"
              />
            </div>
          </div>
        </div>
        <div className="Container">
          <h1 className="content-h1">ASPECTS</h1>
          <div className="grid-wrap">
            <div className="row-cols-6">
              <h2>ENGAGEMENT</h2>
              <p className="content-para">
                The Investment Portfolio Overview encourages users to actively
                engage with their investments and the platform, as they can see
                how their investments are doing at a glance.
              </p>
            </div>
            <div className="row-cols-6">
              <div className="numberings">02.</div>
              <h2>RISK MANAGEMENT</h2>
              <p className="content-para">
                Users can assess the performance of their portfolio to identify
                areas of strength and weakness and make adjustments as needed.
              </p>
            </div>
            <div className="row-cols-6">
              <div className="numberings">03.</div>
              <h2>TRANSPARENCY</h2>
              <p className="content-para">
                Investors can easily track the performance of their investments
                in one place, fostering transparency and trust in the platform.
              </p>
            </div>
            <div className="row-cols-6">
              <div className="numberings">04.</div>
              <h2>INFORMED DECISION-MAKING</h2>
              <p className="content-para">
                Providing performance data helps investors make informed
                decisions about whether to continue investing in a particular
                startup or seek new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
