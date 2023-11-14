import React from "react";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  // const [log,setLog]=useState("")
  // if(localStorage.getItem("token")!=null){
  //   setLog("Login")
  // }
  // else{
  //   setLog("Logout")
  // }
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };
  return (
    <>
      <div className="Navcontainer">
        <nav id="desktop-nav">
          <img src="../VENTURE VAULT-logos.jpeg" alt="nav-logo" />
          <div>
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
                <Link to="/About">ABOUT US</Link>
              </li>
              <li>
                <Link to="/Faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <ul className="right-ul">
            <button className="btn-special-btn-nav">DASHBOARD</button>
            {!localStorage.getItem("token") ? (
              <>
                <Link to="/login">
                  <button className="btn-login-nav">
                    LOGIN
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
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
