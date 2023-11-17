import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Ventures() {
  const companies = [
    {
      id: 1,
      name: "MediBuddy",
      sector: "Healthcare",
      headquarters: "Bengaluru",
      employees: 5400,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$29.67Mn",
      adjusted_revenue_growth: "470%",
      YoY_revenue_growth: "787%",
      YoY_expenditure_growth: "317%",
      profit_loss_making: "Loss Making",
      description:
        "MediBuddy is a leading healthcare platform dedicated to providing convenient and accessible healthcare solutions. With a focus on leveraging technology, MediBuddy aims to enhance the healthcare experience for individuals by offering teleconsultations, health check-ups, and a range of medical services. Despite being in a growth phase, the company is currently operating at a loss as it invests in expanding its services and reach.",
    },
    {
      id: 2,
      name: "Twinhealth",
      sector: "Healthcare",
      headquarters: "Chennai",
      employees: 9000,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.35Mn",
      adjusted_revenue_growth: "262%",
      YoY_revenue_growth: "433%",
      YoY_expenditure_growth: "171%",
      profit_loss_making: "Loss Making",
      description:
        "Twinhealth is a healthcare company committed to improving health outcomes through innovative solutions. The company focuses on digital health services and medical technology to address the evolving needs of the healthcare industry. Despite strong revenue growth, Twinhealth is currently operating at a loss due to strategic investments in research and development.",
    },
    {
      id: 3,
      name: "Kissht",
      sector: "Fintech",
      headquarters: "Mumbai",
      employees: 1143,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$19.48Mn",
      adjusted_revenue_growth: "361%",
      YoY_revenue_growth: "389%",
      YoY_expenditure_growth: "28%",
      profit_loss_making: "Profitable",
      description:
        "Kissht is a fintech company at the forefront of providing innovative financial solutions. The company specializes in offering consumer loans and financing options to enhance the purchasing power of individuals. With a focus on profitability, Kissht has demonstrated strong revenue growth and effective cost management strategies.",
    },
    {
      id: 4,
      name: "Khatabook",
      sector: "Fintech",
      headquarters: "Bengaluru",
      employees: 4338,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$9.77Mn",
      adjusted_revenue_growth: "234%",
      YoY_revenue_growth: "309%",
      YoY_expenditure_growth: "74%",
      profit_loss_making: "Loss Making",
      description:
        "Khatabook is a fintech company revolutionizing financial record-keeping for small businesses. The company's digital solutions streamline bookkeeping processes and support the financial growth of small enterprises. While experiencing substantial revenue growth, Khatabook is currently operating at a loss, investing in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 5,
      name: "Stashfin",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 51000,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.03Mn",
      adjusted_revenue_growth: "223%",
      YoY_revenue_growth: "423%",
      YoY_expenditure_growth: "200%",
      profit_loss_making: "Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique sectors
  const uniqueSectors = Array.from(
    new Set(companies.map((company) => company.sector))
  );

  const handleCategoryClick = (sector) => {
    setSelectedCategory(sector);
  };

  return (
    <>
      <NavBar />
      <div className="venture-page">
        <nav className="sidebar-venture">
          <div className="vv-heading">
            <h1>CATEGORIES</h1>
          </div>
          <ul className="faq-list">
            {uniqueSectors.map((sector) => (
              <li
                key={sector}
                className={`faq-questions ${
                  selectedCategory === sector ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick(sector)}
              >
                {sector}
              </li>
            ))}
          </ul>
        </nav>
        <div className="venture-list">
          {selectedCategory !== null
            ? companies
                .filter((company) => company.sector === selectedCategory)
                .map((company) => (
                  <div className="vv-flex">
                    <div className="product" key={company.id}>
                      <img src={company.image} alt={company.name} />
                      <h3>{company.name}</h3>
                      <p>Industry: {company.sector}</p>
                      <p>Headquarters: {company.headquarters}</p>
                      <p>Team Size: {company.employees}</p>
                    </div>
                    <div>
                      <Link to="/Details">
                        <button className="btn-special-btn-nav">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
            : companies.map((company) => (
                <div className="vv-flex">
                  <div className="product" key={company.id}>
                    <img src={company.image} alt={company.name} />
                    <h3>{company.name}</h3>
                    <p>Industry: {company.sector}</p>
                    <p>Headquarters: {company.headquarters}</p>
                    <p>Team Size: {company.employees}</p>
                  </div>
                  <div>
                    <Link to="/Details">
                      <button className="btn-special-btn-nav">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
