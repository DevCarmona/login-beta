import { Link } from "react-router-dom";
import "./styles.css";

import mediScan from "../../assets/MediscanCor.png";

export const NavbarComponents = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <span className="img-home">
          <img src={mediScan} alt="" />
          <Link class="navbar-brand" href="#">
            MediScanAI
          </Link>
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Link
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
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
