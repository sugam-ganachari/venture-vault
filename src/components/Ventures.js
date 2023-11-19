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

  const companyDetails = {
    id: 5,
    name: "Stashfin",
    sector: "Fintech",
    headquarters: "Delhi NCR",
    employees: 51000,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrandequity.economictimes.indiatimes.com%2Fnews%2Fmarketing%2Fmedibuddy-unveils-refreshed-logo-and-tagline%2F81273140&psig=AOvVaw1YWSQ8ZdvhqY9npZtOT09s&ust=1700410853598000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj7z5n6zYIDFQAAAAAdAAAAABAE",
    valuation_range: "$200Mn to $1Bn",
    revenue_range: "$1Mn to $50Mn",
    fy22_total_revenue: "$6.03Mn",
    adjusted_revenue_growth: "223%",
    YoY_revenue_growth: "423%",
    YoY_expenditure_growth: "200%",
    profit_loss_making: "Loss Making",
    description:
      "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    executiveMembers: [
      {
        name: "John Doe",
        position: "CEO",
        email: "john.doe@stashfin.com",
        phone: "+1234567890",
      },
      {
        name: "Jane Smith",
        position: "CFO",
        email: "jane.smith@stashfin.com",
        phone: "+0987654321",
      },
      // Add additional executive members as needed
    ],
    productOffering: "Stashfin offers a range of innovative credit products, including personal loans, credit lines, and other financial solutions tailored to meet the diverse needs of individuals.",
    webLink: "https://www.stashfin.com",
    operationalEfficiency: "Stashfin places a strong emphasis on operational efficiency through streamlined processes, automated workflows, and continuous improvement initiatives.",
    contactInfo: {
      address: "123 Main Street, Delhi NCR, India",
      email: "info@stashfin.com",
      phone: "+9876543210",
    },
    technologyAndInnovation: "Stashfin leverages cutting-edge technology and continuous innovation to enhance the user experience, mitigate risks, and stay ahead in the competitive fintech landscape.",
    eventsAndPresentations: "Stashfin actively participates in industry events, webinars, and presentations to showcase its achievements, share insights, and engage with stakeholders.",
    futureProjections: "Stashfin envisions sustained revenue growth, increased market share, and expanded product offerings. The company aims to achieve profitability through strategic initiatives and market penetration.",
    debtRatio: {
      currentDebt: "$50M",
      longTermDebt: "$100M",
      totalAssets: "$500M",
      debtToEquityRatio: 0.5, // This is a hypothetical value, actual ratio may vary
      explanation:
        "Stashfin maintains a prudent debt management strategy with a debt-to-equity ratio of 0.5. This indicates a balanced mix of debt and equity in the company's capital structure. As of the most recent financial statements, the company has $50 million in current debt, $100 million in long-term debt, and total assets amounting to $500 million.",
    },
  
    keyPartnerships: [
      "XYZ Bank",
      "Tech Innovations Inc.",
      "Global Investments Group",
    ]
  };

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
