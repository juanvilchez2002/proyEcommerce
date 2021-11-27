import React from "react";

export default function Footer() {
  return (
    <footer className="text-white bg-black d-flex mt-5 py-3">
      <div className="container">
        <nav className="row">
          <ul className="d-flex col-12 col-md-3 list-unstyled align-items-center">
            <li className="font-weigth-bold me-4">Siguenos:</li>
            <li className="d-flex justify-content-between align-items-center">
              <i
                className="bi bi-facebook me-4"
                style={{
                  fontSize: "35px",
                  cursor: "pointer",
                }}
              />
              <i
                className="bi bi-instagram me-4 "
                style={{
                  fontSize: "35px",
                  cursor: "pointer",
                }}
              />
              <i
                className="bi bi-twitter me-4"
                style={{
                  fontSize: "35px",
                  cursor: "pointer",
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
