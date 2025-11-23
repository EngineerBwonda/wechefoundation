"use client";

import Image from "next/image";

export default function GridPart() {
  return (
    <>
      <div className="container my-5 py-5 shadow-lg rounded">
        <div className="row align-items-center g-5">
          {/* Left Column - Image */}
          <div className="col-lg-6 text-center text-lg-start">
            <Image
              src="/weche2.jpeg"
              alt="Our work in action"
              width={600}
              height={750}
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Right Column - Text with blue theme */}
          <div className="col-lg-6">
            <div className="p-4 p-md-5">
              <h2 className="display-5 fw-bold text-primary mb-4">
                We Are Here for Every Individual
              </h2>
              <p className="lead fs-4 text-muted mb-4">
                Through compassion, dedicated support, and life-changing
                opportunities, we walk alongside people in their toughest
                moments — restoring dignity, rebuilding hope, and creating
                pathways to a brighter future.
              </p>
              <p className="fs-5 text-muted">
                <i className="bi bi-heart-fill text-primary me-2"></i>
                No one should face hardship alone. Together, we rise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
