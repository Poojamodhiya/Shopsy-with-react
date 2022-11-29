import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white">
            <span style={{ color: "#e74c3c" }}>S</span>ho
            <span style={{ color: "#e74c3c" }}>p</span>sy
          </a>
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
                <a className="nav-link active text-white" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">About</a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Brands
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn bg-danger text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
