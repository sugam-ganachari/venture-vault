import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
// import Spinner from "./Spinner"
export default function Ventures() {
  const [companies,setCompanies]=useState([])
  const [uniqueSectors,setUniqueSectors]= useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/authorization/fetchVentures"
        );
        
        if (response.data.ventures) {
          const companiesData = response.data.ventures[0].data;
          setCompanies(companiesData);
          // const uniqueSectors = Array.from(
          //   new Set(companiesData.map((company) => company.sector))
          // );
          setUniqueSectors(["All", ...Array.from(new Set(companiesData.map((company) => company.sector)))]);

          setSelectedCategory("All")
        }
      } catch (error) {
        console.error('Error making the request:', error);
      }
    }

    fetchData();
  }, []);

  

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique sectors
  // const uniqueSectors = Array.from(
  //   new Set(companies.map((company) => company.sector))
  // );
  // const uniqueSectors = ["All", ...new Set(companies.map((company) => company.sector))];

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
          {selectedCategory !== "All"
            ? companies
                .filter((company) => company.sector === selectedCategory)
                .map((company) => (
                  <div className="vv-flex" key={company.id}>
                    <div className="product" >
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
                <div className="vv-flex" key={company.id}>
                  <div className="product" >
                    <img src={company.image} alt={company.name} />
                    <h3>{company.name}</h3>
                    <p>Industry: {company.sector}</p>
                    <p>Headquarters: {company.headquarters}</p>
                    <p>Team Size: {company.employees}</p>
                  </div>
                  <div>
                    <Link to="/Details" state={company} >
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
