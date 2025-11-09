import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

export default function About() {
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

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h1 className="mb-4">
            <i>About Me</i>
          </h1>

          <p>
            <b>
              <i>
                I am a passionate Java developer skilled in Spring Boot, Hibernate,
                React, and MySQL. I enjoy creating user-friendly, full-stack web
                applications and solving real-world problems through clean and
                scalable code.
              </i>
            </b>
          </p>

          <h4>
            Full Stack Developer || Frontend Developer || React || MySQL ||
            SpringBoot || Java
          </h4>
        </div>
      </section>

      {/* Education / Skills / Hobbies */}
      <section>
        <div className="container">
          <div className="row">

            {/* Education */}
            <div className="col-md-4">
              <h1>Education</h1>
              <ul style={{ fontWeight: "bold" }}>
                <li>Masters in Full Stack Java Development</li>
                <li>B.Sc Computer Science — 2015</li>
                <li>HSC — 2013</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="col-md-4">
              <h2>Skills</h2>
              <ul>
                <li>Spring Boot</li>
                <li>RESTful Services</li>
                <li>Excellent in Core Java</li>
                <li>MySQL Database</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="col-md-4">
              <h2>Hobbies</h2>
              <ul>
                <li>Playing Cricket</li>
                <li>Cooking</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="d-flex text-center justify-content-center my-3">
        <a href="/" className="btn btn-primary">Home</a>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 Aarti Gadekar</p>
        </div>
      </footer>
    </>
  );
}