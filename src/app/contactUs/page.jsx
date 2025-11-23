"use client";

export default function ContactUsPage() {
  return (
    <>
      <section
        className="py-5"
        style={{ background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)" }}
      >
        <div className="container-fluid px-4 px-md-5 py-5">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-primary text-uppercase tracking-wider">
              <i className="bi bi-telephone-inbound-fill me-3"></i>
              Contact Us
            </h2>
            <p className="lead text-muted col-xl-8 mx-auto">
              Your voice matters. Get in touch — were ready to listen and act.
            </p>
            <div className="w-100 d-flex justify-content-center">
              <hr className="w-25 border-primary border-4 opacity-100" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
              <div
                className="card border-0 shadow-xl rounded-3 overflow-hidden"
                style={{ borderLeft: "8px solid #0d6efd" }}
              >
                <div className="card-body p-4 p-md-5">
                  <form action="/api/contact" method="POST" className="row g-4">
                    {/* Form fields - same as before */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="firstName"
                        className="form-label fw-bold text-dark fs-5"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-1 shadow-sm"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="lastName"
                        className="form-label fw-bold text-dark fs-5"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-1 shadow-sm"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="mobile"
                        className="form-label fw-bold text-dark fs-5"
                      >
                        Mobile Number
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-success text-white">
                          <i className="bi bi-whatsapp"></i>
                        </span>
                        <input
                          type="tel"
                          className="form-control rounded-1 shadow-sm"
                          id="mobile"
                          name="mobile"
                          placeholder="+254 712 345 678"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="email"
                        className="form-label fw-bold text-dark fs-5"
                      >
                        Email Address
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-danger text-white">
                          <i className="bi bi-envelope-at-fill"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control rounded-1 shadow-sm"
                          id="email"
                          name="email"
                          placeholder="you@gmail.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="message"
                        className="form-label fw-bold text-dark fs-5"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="form-control form-control-lg rounded-1 shadow-sm"
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Tell us how we can help..."
                        required
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-7 py-4 fw-bold text-uppercase rounded-1 shadow-lg"
                        style={{
                          letterSpacing: "2px",
                          background:
                            "linear-gradient(90deg, #0d6efd, #0b5ed7)",
                          border: "none",
                          minWidth: "280px",
                        }}
                      >
                        <i className="bi bi-send-check-fill me-3"></i>
                        Send Message Now
                      </button>
                    </div>
                  </form>

                  {/* Social Contact Links - WhatsApp & Facebook */}
                  <div className="mt-5 pt-4 border-top text-center">
                    <p className="text-muted mb-3 fw-semibold">
                      Or reach us directly:
                    </p>
                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/254712345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                        aria-label="Chat on WhatsApp"
                      >
                        <i className="bi bi-whatsapp fs-1"></i>
                      </a>

                      {/* Facebook Messenger / Page */}
                      <a
                        href="https://m.me/yourfacebookpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{
                          width: "70px",
                          height: "70px",
                          backgroundColor: "#1877f2",
                        }}
                        aria-label="Message us on Facebook"
                      >
                        <i className="bi bi-facebook fs-1"></i>
                      </a>

                      {/* Optional: Direct Phone Call */}
                      <a
                        href="tel:+254712345678"
                        className="btn btn-outline-primary btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: "70px", height: "70px" }}
                        aria-label="Call us"
                      >
                        <i className="bi bi-telephone-fill fs-3"></i>
                      </a>
                    </div>

                    <p className="mt-4 text-muted small">
                      <i className="bi bi-clock-fill text-primary me-1"></i>
                      We reply within minutes on WhatsApp & Messenger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
