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
            <Link to="/About">
              <button className="btn-homepage-b1">KNOW MORE</button>
            </Link>
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
          <div className="flex-wrap">
            <div className="flex-wrap-child">
              <h2>ENGAGEMENT</h2>
              <p className="content-para">
                The Investment Portfolio Overview not only provides a quick
                snapshot of investment performance but also offers interactive
                features that encourage users to delve deeper into their
                portfolio details.
              </p>
            </div>
            <div className="flex-wrap-child">
              <img src="eng.png" alt="img" />
            </div>
          </div>
          <div className="flex-wrap">
            <div className="flex-wrap-child">
              <img src="risk.png" alt="img" />
            </div>
            <div className="flex-wrap-child">
              <h2>RISK MANAGEMENT</h2>
              <p className="content-para">
                In addition to performance evaluation, the platform equips users
                with risk analysis tools, allowing them to assess the overall
                risk profile of their portfolio. Through detailed risk metrics,
                volatility indicators, and scenario analysis, investors can
                proactively identify potential areas of concern and
                strategically adjust their holdings.
              </p>
            </div>
          </div>
          <div className="flex-wrap">
            <div className="flex-wrap-child">
              <h2>TRANSPARENCY</h2>
              <p className="content-para">
                The transparency provided by the Investment Portfolio Overview
                extends beyond performance metrics. The platform offers detailed
                breakdowns of fees, transaction history, and the underlying
                assets in the portfolio.
              </p>
            </div>
            <div className="flex-wrap-child">
              <img src="transparency.png" alt="img" />
            </div>
          </div>
          <div className="flex-wrap">
            <div className="flex-wrap-child">
              <img src="decision.png" alt="img" />
            </div>
            <div className="flex-wrap-child">
              <h2>INFORMED DECISION-MAKING</h2>
              <p className="content-para">
                Beyond performance data, the platform equips investors with
                comprehensive market insights, company updates, and trend
                analyses. By providing a holistic view of the market landscape,
                the platform becomes a valuable resource for investors seeking
                to optimize their portfolio and seize new opportunities as they
                arise.
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
