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
