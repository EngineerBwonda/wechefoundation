"use client";

// components/Navbar.jsx  (or put in layout.jsx)
// components/Navbar.jsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Main Navbar – Always visible */}
      <nav
        className="navbar navbar-expand-lg bg-white shadow-sm sticky-top"
        style={{
          minHeight: "100px",
          padding: "1rem 0",
          borderBottom: "4px solid #0d6efd",
        }}
      >
        <div className="container-fluid px-4 px-lg-5">
          {/* Logo – Always far left, even on mobile */}
          <Link href="/" className="navbar-brand me-0">
            <Image
              src="/pic.png"
              alt="Organization Logo"
              width={200}
              height={80}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Offcanvas Trigger – Visible only on md and smaller */}
          <button
            className="navbar-toggler d-lg-none border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#topOffcanvas"
            aria-controls="topOffcanvas"
          >
            <i className="bi bi-list text-primary fs-1"></i>
          </button>

          {/* Desktop Menu – Hidden on md and smaller */}
          <div className="d-none d-lg-flex ms-auto align-items-center">
            <ul className="navbar-nav gap-5 fw-bold text-uppercase">
              <li className="nav-item">
                <Link href="/" className="nav-link text-primary hover-effect">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link text-primary hover-effect"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/programs"
                  className="nav-link text-primary hover-effect"
                >
                  Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/staff"
                  className="nav-link text-primary hover-effect"
                >
                  Our Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link text-primary hover-effect"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  href="/donate"
                  className="btn btn-primary text-white fw-bold px-5 py-3 rounded-3 shadow-sm"
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Top Offcanvas Menu – Slides down from top on mobile/tablet */}
      <div
        className="offcanvas offcanvas-top bg-white shadow-lg"
        tabIndex="-1"
        id="topOffcanvas"
        aria-labelledby="topOffcanvasLabel"
        style={{ height: "100vh" }}
      >
        <div className="offcanvas-header border-bottom">
          <Link href="/" className="navbar-brand">
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={70}
              priority
            />
          </Link>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <ul className="list-unstyled text-center fs-1 fw-bold">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Programs", href: "/programs" },
              { name: "Our Staff", href: "/staff" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name} className="my-4">
                <Link
                  href={item.href}
                  className="text-primary text-decoration-none hover-text-dark"
                  data-bs-dismiss="offcanvas"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/donate"
            className="btn btn-primary btn-lg px-5 py-4 mt-5 fw-bold text-white shadow-lg"
            data-bs-dismiss="offcanvas"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Hover Effect CSS moved to `globals.css` to avoid styled-jsx hydration mismatch */}
    </>
  );
}
