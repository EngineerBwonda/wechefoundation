"use client";

export default function ContactUsPage() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container-fluid px-4 px-md-5">
          {/* Section Title */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary text-uppercase tracking-wider">
              <i className="bi bi-geo-alt-fill me-3"></i>
              Find Us – Buyangu, Vihiga County
            </h2>
            <p className="lead text-muted col-lg-8 mx-auto">
              We’re located in the heart of Buyangu, easily accessible and
              always open to visitors.
            </p>
            <hr className="w-25 mx-auto border-primary border-4 opacity-100" />
          </div>

          {/* Responsive Map Card */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-11 col-xl-10">
              <div
                className="card border-0 shadow-lg rounded-3 overflow-hidden"
                style={{ borderLeft: "8px solid #0d6efd" }}
              >
                <div className="ratio ratio-21x9">
                  {" "}
                  {/* Keeps perfect aspect ratio on all screens */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.012345678901!2d34.727899614758!3d0.08349999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781e94b5f5c5c5d%3A0x9c8f8e8d8e8d8e8d!2sBuyangu%2C%20Vihiga%20County%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Buyangu Location Map"
                    className="rounded-3"
                  ></iframe>
                </div>

                {/* Optional: Address & Directions Button Below the Map */}
                {/* <div className="card-body text-center bg-white p-4"> */}
                {/* <p className="mb-3 fs-5">
                    <i className="bi bi-building-fill text-primary me-2"></i>
                    Buyangu Trading Centre, Off Kisumu–Kakamega Road
                    <br />
                    Vihiga County, Kenya
                  </p> */}
                {/* <div className="d-flex justify-content-center gap-3 flex-wrap"> */}
                {/* <a
                      href="https://maps.google.com/maps?q=Buyangu,Vihiga+County,Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg px-5"
                    >
                      <i className="bi bi-directions me-2"></i>
                      Get Directions
                    </a> */}
                {/* <a
                      href="https://wa.me/254712345678?text=Hi!%20I'm%20near%20Buyangu%20and%20would%20like%20directions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg px-5"
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      WhatsApp for Directions
                    </a> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
