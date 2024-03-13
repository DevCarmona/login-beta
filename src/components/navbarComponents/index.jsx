import { Link } from "react-router-dom";
import "./styles.css";

import mediScan from "../../assets/MediscanCor.png";

export const NavbarComponents = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="img-home">
          <img src={mediScan} alt="" />
          <Link className="navbar-brand" href="#">
            MediScanAI
          </Link>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
