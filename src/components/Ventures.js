import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Ventures() {
  const companies = [
    {
      id: 1,
      name: "MediBuddy",
      sector: "Healthtech",
      headquarters: "Bengaluru",
      employees: 5400,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$29.67Mn",
      adjusted_revenue_growth: "470%",
      YoY_revenue_growth: "787%",
      YoY_expenditure_growth: "317%",
      profit_loss_making: "Currently Loss Making",
      description:
        "MediBuddy is a leading healthcare platform dedicated to providing convenient and accessible healthcare solutions. With a focus on leveraging technology, MediBuddy aims to enhance the healthcare experience for individuals by offering teleconsultations, health check-ups, and a range of medical services. Despite being in a growth phase, the company is currently operating at a loss as it invests in expanding its services and reach.",
    },
    {
      id: 2,
      name: "Twinhealth",
      sector: "Healthtech",
      headquarters: "Chennai",
      employees: 9000,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.35Mn",
      adjusted_revenue_growth: "262%",
      YoY_revenue_growth: "433%",
      YoY_expenditure_growth: "171%",
      profit_loss_making: "Currently Loss Making",
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
      profit_loss_making: "Currently Profitable",
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
      profit_loss_making: "Currently Loss Making",
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
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 6,
      name: "CRED",
      sector: "Fintech",
      headquarters: "BEngaluru",
      employees: 1240,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$52.74Mn",
      adjusted_revenue_growth: "168%",
      YoY_revenue_growth: "342%",
      YoY_expenditure_growth: "174%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 7,
      name: "Indifi",
      sector: "Fintech",
      headquarters: "Delhi NCR",
      employees: 1015,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$4.25Mn",
      adjusted_revenue_growth: "162%",
      YoY_revenue_growth: "201%",
      YoY_expenditure_growth: "39%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 8,
      name: "MFine",
      sector: "Healthtech",
      headquarters: "Bengaluru",
      employees: 5400,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.71Mn",
      adjusted_revenue_growth: "177%",
      YoY_revenue_growth: "301%",
      YoY_expenditure_growth: "123%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 9,
      name: "Cult fit",
      sector: "Healthtech",
      headquarters: "Bengaluru",
      employees: 925,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$6.02Mn",
      adjusted_revenue_growth: "33%",
      YoY_revenue_growth: "59%",
      YoY_expenditure_growth: "26%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 10,
      name: "Pharmeasy",
      sector: "Healthtech",
      headquarters: "Mumbai",
      employees: 12500,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$40.99Mn",
      adjusted_revenue_growth: "5%",
      YoY_revenue_growth: "176%",
      YoY_expenditure_growth: "170%",
      profit_loss_making: "Currently Profitable",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 11,
      name: "Physics Wallah",
      sector: "Edtech",
      headquarters: "Delhi NCR",
      employees: 146,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$29.26Mn",
      adjusted_revenue_growth: "279%",
      YoY_revenue_growth: "851%",
      YoY_expenditure_growth: "571%",
      profit_loss_making: "Currently Profitable",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 12,
      name: "Vedantu",
      sector: "Edtech",
      headquarters: "Bengaluru",
      employees: 500,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$24.29Mn",
      adjusted_revenue_growth: "24%",
      YoY_revenue_growth: "44%",
      YoY_expenditure_growth: "20%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 13,
      name: "Unacademy",
      sector: "Edtech",
      headquarters: "Bengaluru",
      employees: 1220,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$89.69Mn",
      adjusted_revenue_growth: "-2%",
      YoY_revenue_growth: "78%",
      YoY_expenditure_growth: "80%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 14,
      name: "Classplus",
      sector: "Edtech",
      headquarters: "Delhi NCR",
      employees: 128,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$22.18Mn",
      adjusted_revenue_growth: "-3%",
      YoY_revenue_growth: "46%",
      YoY_expenditure_growth: "48%",
      profit_loss_making: "Currently Profitable",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 15,
      name: "CollegeDekho",
      sector: "Edtech",
      headquarters: "Delhi NCR",
      employees: 500,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$18.26Mn",
      adjusted_revenue_growth: "-35%",
      YoY_revenue_growth: "83%",
      YoY_expenditure_growth: "119%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 16,
      name: "Cropin",
      sector: "Agritech",
      headquarters: "Bengaluru",
      employees: 190,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$4.88Mn",
      adjusted_revenue_growth: "56%",
      YoY_revenue_growth: "108%",
      YoY_expenditure_growth: "53%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 17,
      name: "Ninjacart",
      sector: "Agritech",
      headquarters: "Bengaluru",
      employees: 9200,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$118.12Mn",
      adjusted_revenue_growth: "53%",
      YoY_revenue_growth: "23%",
      YoY_expenditure_growth: "-30%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 18,
      name: "Absolute Foods",
      sector: "Agritech",
      headquarters: "Delhi NCR",
      employees: 4170,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$45.19Mn",
      adjusted_revenue_growth: "48%",
      YoY_revenue_growth: "1170%",
      YoY_expenditure_growth: "1122%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 19,
      name: "Crofarm",
      sector: "Agritech",
      headquarters: "Delhi NCR",
      employees: 1200,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$4.46Mn",
      adjusted_revenue_growth: "13%",
      YoY_revenue_growth: "50%",
      YoY_expenditure_growth: "37%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 20,
      name: "Waycool",
      sector: "Agritech",
      headquarters: "Chennai",
      employees: 458,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$115.03Mn",
      adjusted_revenue_growth: "-1%",
      YoY_revenue_growth: "144%",
      YoY_expenditure_growth: "145%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 21,
      name: "Porter",
      sector: "Logistics",
      headquarters: "Mumbai",
      employees: 2980,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$107.76Mn",
      adjusted_revenue_growth: "12%",
      YoY_revenue_growth: "163%",
      YoY_expenditure_growth: "151%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 22,
      name: "Leap India",
      sector: "Logistics",
      headquarters: "Mumbai",
      employees: 240,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$26.61Mn",
      adjusted_revenue_growth: "10%",
      YoY_revenue_growth: "21%",
      YoY_expenditure_growth: "10%",
      profit_loss_making: "Currently Profitable",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 23,
      name: "Xpressbees",
      sector: "Logistics",
      headquarters: "Pune",
      employees: 560,
      image: "medibuddy.webp",
      valuation_range: "$1Bn+ and above",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$235.10Mn",
      adjusted_revenue_growth: "9%",
      YoY_revenue_growth: "84%",
      YoY_expenditure_growth: "75%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 24,
      name: "ShadowFax",
      sector: "Logistics",
      headquarters: "Bengaluru",
      employees: 160,
      image: "medibuddy.webp",
      valuation_range: "Less than $200Mn",
      revenue_range: "$50Mn to $500Mn",
      fy22_total_revenue: "$124.67Mn",
      adjusted_revenue_growth: "15%",
      YoY_revenue_growth: "105%",
      YoY_expenditure_growth: "89%",
      profit_loss_making: "Currently Loss Making",
      description:
        "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    },
    {
      id: 25,
      name: "Netradyne",
      sector: "Logistics",
      headquarters: "Bengaluru",
      employees: 1200,
      image: "medibuddy.webp",
      valuation_range: "$200Mn to $1Bn",
      revenue_range: "$1Mn to $50Mn",
      fy22_total_revenue: "$12.14Mn",
      adjusted_revenue_growth: "14%",
      YoY_revenue_growth: "139%",
      YoY_expenditure_growth: "125%",
      profit_loss_making: "Currently Loss Profitable",
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
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrandequity.economictimes.indiatimes.com%2Fnews%2Fmarketing%2Fmedibuddy-unveils-refreshed-logo-and-tagline%2F81273140&psig=AOvVaw1YWSQ8ZdvhqY9npZtOT09s&ust=1700410853598000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj7z5n6zYIDFQAAAAAdAAAAABAE",
    valuation_range: "$200Mn to $1Bn",
    revenue_range: "$1Mn to $50Mn",
    fy22_total_revenue: "$6.03Mn",
    adjusted_revenue_growth: "223%",
    YoY_revenue_growth: "423%",
    YoY_expenditure_growth: "200%",
    profit_loss_making: "Currently Loss Making",
    description:
      "Stashfin is a fintech company dedicated to providing flexible and accessible financial solutions. The company focuses on empowering individuals with innovative credit products and personalized financial services. While experiencing substantial revenue growth, Stashfin is currently operating at a loss, reflecting strategic investments in technology and market expansion.",
    executiveMembers: [
      {
        name: "John Doe",
        position: "CEO",
      },
      {
        name: "Jane Smith",
        position: "CFO",
      },
      // Add additional executive members as needed
    ],
    productOffering:
      "Stashfin offers a range of innovative credit products, including personal loans, credit lines, and other financial solutions tailored to meet the diverse needs of individuals.",
    webLink: "https://www.stashfin.com",
    technologyAndInnovation:
      "Stashfin leverages cutting-edge technology and continuous innovation to enhance the user experience, mitigate risks, and stay ahead in the competitive fintech landscape.",
    debtRatio: {
      currentDebt: "$50M",
      longTermDebt: "$100M",
      totalAssets: "$500M",
      debtToEquityRatio: 0.5,
    },

    keyPartnerships: ["Tech Innovations Inc.", "Global Investments Group"],
    shareprice: 2500,
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
                        <button className="btn-special-btn-nav">DETAILS</button>
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
                      <button className="btn-special-btn-nav">DETAILS</button>
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
