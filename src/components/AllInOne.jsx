import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AllInOne() {
  return (
    <>
      
        

          
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          {/* Move your image into public folder as: /aarti.jpg */}
          <img src="/mypic.jpg" height="200" width="200" alt="Aarti" />
          <h1>Aarti Gadekar</h1>
          <p className="lead">
            <i>Java Developer</i> Full Stack Java Developer | Spring Boot | React | MySQL
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h1 className="mb-4"><i>About Me</i></h1>
          <p>
            <b>
              <i>
                I am a passionate Java developer skilled in Spring Boot, Hibernate, React,
                and MySQL. I enjoy creating user-friendly, full-stack web applications and
                solving real-world problems through clean and scalable code.
              </i>
            </b>
          </p>
        </div>

        <div className="row container">
          {/* Education */}
          <div className="col-md-4">
            <h1>Education</h1>
            <ul style={{ fontWeight: "bold" }}>
              <li>Masters in Full Stack Java Development</li>
              <li>B.Sc Computer Science - 2015</li>
              <li>HSC - 2013</li>
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
              <li>Play Cricket</li>
              <li>Cooking</li>
            </ul>
          </div>
        </div>

        <a href="/" className="ms-3 mt-3 d-inline-block">Home</a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Projects</h2>
          <div className="row g-4">

            {/* Project 1 */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Student Managing (Project 1)</h5>
                  <p className="card-text">
                    Expense Tracker Web App using Java, Spring Boot, MySQL. Features login,
                    dashboard, and reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
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
