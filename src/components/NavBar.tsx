import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Book Me
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto booking-steps">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link step-link" + (isActive ? " active-step" : "")
                }
                to="/"
              >
                1️⃣ Date
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link step-link" + (isActive ? " active-step" : "")
                }
                to="/slots"
              >
                2️⃣ Slots
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link step-link" + (isActive ? " active-step" : "")
                }
                to="/info"
              >
                3️⃣ Customer Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link step-link" + (isActive ? " active-step" : "")
                }
                to="/confirm"
              >
                4️⃣ Confirm
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
