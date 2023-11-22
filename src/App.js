import "./App.css";
import "./Custom.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ventures from "./components/Ventures";
import Faqs from "./components/Faqs";
import Details from "./components/Details";
import DetailsNavbar from "./components/DetailsNavbar";

function App() {
  const something={
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
      }
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
    shareprice: 2500
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Details" element={<Details details={something}/>} />
          <Route path="/Details" element={<DetailsNavbar />} />
        </Routes>
        {/* <Login /> */}
        {/* <Signup /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
