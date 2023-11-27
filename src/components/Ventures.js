import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Scrollbars from "react-custom-scrollbars";
import Spinner from "./Spinner";
import HamburgerMenu from "react-hamburger-menu";

export default function Ventures() {
  const [companies, setCompanies] = useState([]);
  const [uniqueSectors, setUniqueSectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize to "All"
  const [searchQuery, setSearchQuery] = useState("");

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/authorization/fetchVentures"
        );

        if (response.data.ventures) {
          const companiesData = response.data.ventures[0].data1;
          setCompanies(companiesData);
          setUniqueSectors([
            "All",
            ...Array.from(
              new Set(companiesData.map((company) => company.sector))
            ),
          ]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error making the request:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleCategoryClick = (sector) => {
    setSelectedCategory(sector);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCompanies = companies
    .filter((company) =>
      selectedCategory === "All" || company.sector === selectedCategory
    )
    .filter((company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <NavBar />
      <div className="venture-page">
        <nav className="sidebar-venture">
        <div className="search-bar" >
          <input
            type="text"
            placeholder="Search by company name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
          <div className="vv-heading">
            <h1>CATEGORIES</h1>
            <div className="hamburger-icon" onClick={toggleMenu1}>
          <HamburgerMenu
            isOpen={isOpen1}
            menuClicked={toggleMenu1}
            width={18}
            height={20}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={2}
            animationDuration={1}
          />
        </div>
          </div>
          <ul className={`faq-list ${isOpen1 ? "open" : ""}`}>
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
        {loading && <Spinner />}
        {!loading && (
          <Scrollbars style={{ width: "100%", height: 1000 }}>
          {/*  <Scrollbars className="scrollbar"> */}
            <div className="venture-list">
              {filteredCompanies.map((company) => (
                <div className="vv-flex" key={company.id}>
                  <div className="product">
                    <img src={company.image} alt={company.name} />
                    <h3>{company.name}</h3>
                    <p>Industry: {company.sector}</p>
                    <p>Headquarters: {company.headquarters}</p>
                    <p>Team Size: {company.employees}</p>
                  </div>
                  <div>
                    <Link to="/Details" state={{ company }}>
                      <button className="btn-special-btn-nav">DETAILS</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Scrollbars>
        )}
      </div>
      <Footer />
    </>
  );
}
