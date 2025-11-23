"use client";

// components/Footer.jsx  (or paste directly into layout.jsx)
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container pt-4">
        <div className="row g-5">
          {/* Logo + Mission */}
          <div className="col-lg-4">
            <Image
              src="/pic.png"
              alt="Organization Logo"
              width={220}
              height={120}
              className="mb-4"
              priority
            />
            <p className="lead text-light opacity-90">
              Restoring hope through support, care and opportunity.
            </p>
            <p className="small text-light opacity-75">
              A world where no one is left behind.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h5 className="fw-bold text-primary mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                "Home",
                "About Us",
                "Programs",
                "Our Staff",
                "Contact",
                "Donate",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-white text-decoration-none hover-text-primary transition"
                  >
                    <i className="bi bi-chevron-right me-1"></i>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info – UPDATE THESE 3 LINES */}
          <div className="col-6 col-lg-3">
            <h5 className="fw-bold text-primary mb-4">Get in Touch</h5>
            <ul className="list-unstyled small">
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                Buyangu Trading Centre
                <br />
                Off Kisumu–Kakamega Road
                <br />
                Vihiga County, Kenya
              </li>
              <li className="mb-3">
                <i className="bi bi-phone-fill text-primary me-2"></i>
                <a
                  href="tel:+254712345678"
                  className="text-white hover-text-primary"
                >
                  +254 712 345 678 {/* ← CHANGE THIS */}
                </a>
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <a
                  href="mailto:info@yourorg.org"
                  className="text-white hover-text-primary"
                >
                  info@yourorg.org {/* ← CHANGE THIS */}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media – UPDATE THESE 2 LINKS */}
          <div className="col-lg-3">
            <h5 className="fw-bold text-primary mb-4">Connect With Us</h5>
            <div className="d-flex gap-3 mb-4">
              <a
                href="https://wa.me/254712345678"
                target="_blank"
                rel="noopener"
                className="btn btn-success btn-lg rounded-circle shadow"
              >
                <i className="bi bi-whatsapp fs-3"></i>
              </a>
              <a
                href="https://facebook.com/yourpagehere"
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-lg rounded-circle shadow"
                style={{ backgroundColor: "#1877f2" }}
              >
                <i className="bi bi-facebook fs-3"></i>
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener"
                className="btn btn-danger btn-lg rounded-circle shadow"
              >
                <i className="bi bi-instagram fs-3"></i>
              </a>
            </div>
            <p className="small text-light opacity-75">
              We reply within minutes on WhatsApp
            </p>
          </div>
        </div>

        <hr className="my-5 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start small">
            © {new Date().getFullYear()} Your Organization Name. All rights
            reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small className="text-light opacity-60">
              Made with <i className="bi bi-heart-fill text-danger"></i> in
              Vihiga County
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
