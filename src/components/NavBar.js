import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
function NavBar() {
  // const [log,setLog]=useState("")
  // if(localStorage.getItem("token")!=null){
  //   setLog("Login")
  // }
  // else{
  //   setLog("Logout")
  // }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };
  return (
    <>
      <div className="Navcontainer" >
        <nav id="desktop-nav">
          {/* <Link to="/"> */}
          {/* <img src="../VENTURE VAULT-logos.jpeg" alt="nav-logo" /> */}
          {/* </Link> */}
          {/* <div className="nav-logo"> */}
          <img src="../VENTURE VAULT-logos.jpeg" alt="nav-logo" />
          {/* <h3 style={{color:"#4cd4ca"}}>VENTURE VAULT</h3> */}
        {/* </div> */}
          
          <div className="nav-links-parent">
            <ul className="nav-links">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/Ventures">VENTURES</Link>
              </li>
              <li>
                <Link to="/Tips">TIPS</Link>
              </li>
              <li>
                <Link to="/test">ABOUT US</Link>
              </li>
              <li>
                <Link to="/Faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
            </ul>
          </div>
          <ul className="right-ul">
            {/* <Link to="/dashboard">
            <button style={{paddingBottom: "11px",
    paddingTop: "15px"}}className="btn-special-btn-nav">DASHBOARD</button>
            </Link> */}
            {!localStorage.getItem("token") ? (
              <>
                <Link to="/login">
                  <button className="btn-login-nav">
                    LOGIN
                    <svg
                      id="login-svg"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button className="btn-login-nav" onClick={logout}>
                  LOGOUT
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </button>
                
              </>
            )}
            <div className="hamburger-icon" onClick={toggleMenu}>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={24}
            height={18}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
          </ul>
        </nav>
      </div>
      <div className="nav-links-parent">
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/Ventures">VENTURES</Link>
              </li>
              <li>
                <Link to="/Tips">TIPS</Link>
              </li>
              <li>
                <Link to="/test">ABOUT US</Link>
              </li>
              <li>
                <Link to="/Faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
            </ul>
          </div>
    </>
  );
}

export default NavBar;
