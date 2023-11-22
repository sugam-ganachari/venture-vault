import { Link } from "react-router-dom";
import Graph from "./Graph";
import DetailsNavbar from "./DetailsNavbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Details({details}) {
  const nav= useNavigate();
  useEffect(()=>{
    if(details==null){
      nav("/");
    }
  }
  )
  return (
    <>
      <div className="details-header">
        <Link to="/ventures">
          <img src="backicon.png" alt="back.img" /> 
        </Link>
      </div>
      <div className="details-container">
        <h1>{details.name}</h1>
        <h3>
          <img src="location-pin.png" alt="location.img" /> {details.headquarters}
        </h3>
        <div className="details-mid-container">
          <h2>About</h2>
          <div className="details-descr">
            <div className="details-descr-child">
              <p>
                <span>Overview:</span> {details.description}
              </p>
            </div>
            <div className="details-descr-child">
              <p>
                <span>Product Offerings:</span> {details.productOffering}
              </p>
            </div>
          </div>
        </div>

        <div className="team-details">
          <h2>Executive Team</h2>
          <div className="details-team">
              {details.executiveMembers.map((execmem,index)=>(
                <div className="details-team-member" key={index}>
                <h4>{execmem.name}</h4>
                <p>{execmem.position}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="details-descr-info">
          <div className="details-descr-brief">
            <h3>Valuation Details</h3>
            <h5>Employee Count</h5>
            <p>{details.employees}</p>
            <h5>Valuation Range</h5>
            <p>{details.valuation_range}</p>
            <h5>FY22 Total Revenue</h5>
            <p>{details.fy22_total_revenue}</p>
            <h5>Total Revenue Range</h5>
            <p>{details.revenue_range}</p>
          </div>
          <div className="details-descr-brief">
            <h3>Growth Details</h3>
            <h5>Adjusted Revenue Growth</h5>
            <p>{details.adjusted_revenue_growth}</p>
            <h5>FY22 Revenue Growth</h5>
            <p>{details.YoY_revenue_growth}</p>
            <h5>Expenditure Growth</h5>
            <p>{details.YoY_expenditure_growth}</p>
            <h5>Fy22 Total Revenue</h5>
            <p>{details.fy22_total_revenue}</p>
          </div>
          <div className="details-descr-brief">
            <h3>Debt Details</h3>
            <h5>Current Debt</h5>
            <p>{details.debtRatio.currentDebt}</p>
            <h5>Long Term Debt</h5>
            <p>{details.debtRatio.longTermDebt}</p>
            <h5>Total Assets</h5>
            <p>{details.debtRatio.totalAssets}</p>
            <h5>Debt To Equity Ratio</h5>
            <p>{details.debtRatio.debtToEquityRatio}</p>
          </div>
        </div>

        <div className="graph_style">
          <Graph />
        </div>
        <div className="details-descr">
          <div className="details-descr-child">
            <h3>Technology and Innovation</h3>
            <p>
              {details.technologyAndInnovation}
            </p>
          </div>
          <div className="details-descr-child">
            <h3>Key Partnerships</h3>
            {details.keyPartnerships.map((item,index)=>(
                <p key={index}>
                  {item}
                </p> 
            ))}

          </div>
        </div>
        <div>
          <h5>Performance Overview</h5>
          <p>Currently Loss Making</p>
          <h5>Web Link</h5>
          <Link to={details.webLink}>
            <p>{details.webLink}</p>
          </Link>
        </div>
      </div>
      <DetailsNavbar shrprice={details.shareprice}/>
    </>
  );
}

export default Details;
