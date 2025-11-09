import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4">Contact</h2>
          <p>
            <strong>Email:</strong> aartigadekar831@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong> linkedin.com/in/yourname
          </p>
        </div>
      </section>

      {/* Home Link */}
      <section>
        <div className="text-center mb-4">
          <a href="/" className="btn btn-primary">
            Home
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mb-0">
        <div className="container">
          <p>&copy; 2025 Aarti Gadekar</p>
        </div>
      </footer>
    </>
  );
}
