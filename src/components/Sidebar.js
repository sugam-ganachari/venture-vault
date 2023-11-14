import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="navbar">
          <ul
            className="nav-links-sidebar"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-items">
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
