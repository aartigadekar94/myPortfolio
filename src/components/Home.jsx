import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import "../style.css"; // keeping your original stylesheet

export default function Home() {  return (
    <>


      {/* Navbar */}
      <header>
        
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">☰</label>

          <a className="logo" href="/">Aarti Gadekar</a>

          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Project</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        
      </header>

      {/* Hero Section */}
      <section>
        <div className="container">
          <div className="oval-wrapper">
            <img src="/mypic.jpg" alt="myPhoto" className="oval" />
            <h1>Aarti Gadekar</h1>
            <p className="lead">
              <i>Java Developer</i> | Full Stack Java Developer | Spring Boot | React | MySQL
            </p>
          </div>

          <div className="ml-5 d-flex justify-content-center">
            <img src="/java.jpg" alt="java logo" style={{ height: "30px", width: "30px" }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-secondary">
        <div className="container">
          <h1 className="mb-4"><i>About Me</i></h1>
          <p>
            <b>
              <i>
                I am a passionate Java developer skilled in Spring Boot, Hibernate, React,
                and MySQL. I enjoy creating user-friendly, full-stack web applications
                and solving real-world problems through clean and scalable code.
              </i>
            </b>
          </p>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <h1>Education</h1>
              <ul style={{ fontWeight: "bold" }}>
                <li>Masters in Full Stack Java Development</li>
                <li>B.Sc. Computer Science - 2015</li>
                <li>HSC - 2013</li>
              </ul>
            </div>

            <div className="col-md-4">
              <h2>Skills</h2>
              <ul>
                <li>Spring Boot</li>
                <li>RESTful Services</li>
                <li>Excellent in Core Java</li>
                <li>MySQL Database</li>
              </ul>
            </div>

            <div className="col-md-4">
              <h2>Hobbies</h2>
              <ul>
                <li>Play cricket</li>
                <li>Cooking</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Projects</h2>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">School ERP System (Project 1)</h5>
                  <p className="card-text">
                    Web App using Java, Spring Boot, MySQL. Features login, dashboard, and reports.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Portfolio Website (Project 2)</h5>
                  <p className="card-text">
                    Portfolio Website using React and Bootstrap. Responsive layout and modern design.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Online Plant Nursery (Project 3)</h5>
                  <p className="card-text">
                    Online plant shop with cart functionality.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4">Contact</h2>
          <p><strong>Email:</strong> aartigadekar831@gmail.com</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/yourname</p>
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
