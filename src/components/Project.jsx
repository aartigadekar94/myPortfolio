import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Aarti Gadekar</a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Projects</h2>

          <div className="row g-4">

            {/* Project 1 */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">School ERP System (Project 1)</h5>
                  <p className="card-text">
                    Web App using Java, Spring Boot, MySQL. Features login, dashboard, and reports.
                  </p>

                  <div>
                    <h4>Technologies Used:</h4>
                    <p><b>Frontend:</b> HTML, CSS, Bootstrap</p>
                    <p><b>Backend:</b> Java, REST API</p>
                    <p><b>Database:</b> MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Portfolio Website (Project 2)</h5>
                  <p className="card-text">
                    Portfolio Website using React and Bootstrap. Responsive layout, modern design.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Online Plant Nursery (Project 3)</h5>
                  <p className="card-text">
                    Online plant shop with cart functionality.
                  </p>

                  <div>
                    <h4>Technologies Used:</h4>
                    <p><b>Frontend:</b> HTML, CSS, Bootstrap</p>
                    <p><b>Backend:</b> Java, REST API</p>
                    <p><b>Database:</b> MySQL</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <a href="/" className="btn btn-primary">Home</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 Aarti Gadekar</p>
        </div>
      </footer>
    </>
  );
}
