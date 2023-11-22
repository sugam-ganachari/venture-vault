import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
// import Spinner from "./Spinner"
export default function Ventures() {
  const [companies,setCompanies]=useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/authorization/fetchVentures"
        );
        
        if (response.data.ventures) {
          const companiesData = response.data.ventures[0].data;
          setCompanies(companiesData);
          const uniqueSectors = Array.from(
            new Set(companiesData.map((company) => company.sector))
          );
        }
      } catch (error) {
        console.error('Error making the request:', error);
      }
    }

    fetchData();
  }, []);


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
