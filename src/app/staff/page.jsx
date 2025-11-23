"use client";

import Image from "next/image";

export default function StaffPage() {
  return (
    <>
      <div className="container my-5 py-5">
        {/* Section Title */}
        <div className="text-center mb-5 pb-4">
          <h2 className="display-5 fw-bold text-primary mb-3">
            {/* <i className="bi bi-people-fill me-3"></i> */}
            OUR STAFF
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Meet the dedicated leaders driving our mission forward with passion,
            experience, and heart.
          </p>
          <hr className="w-25 mx-auto border-primary border-3 opacity-75" />
        </div>
        <div className="row justify-content-center g-5">
          {/* CEO Card */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg h-100 text-center overflow-hidden">
              <Image
                src="/weche3.jpeg"
                alt="CEO - Jane Mwangi"
                width={400}
                height={700}
                className="card-img-top"
                style={{ objectFit: "cover", height: "550px" }}
              />
              <div className="card-body p-4">
                <h5 className="card-title fw-bold text-primary fs-3 mb-1">
                  Jane Mwangi
                </h5>
                <p className="text-info fw-semibold mb-3">
                  <i className="bi bi-person-fill-gear me-2"></i>
                  Chief Executive Officer (CEO)
                </p>
              </div>
            </div>
          </div>

          {/* Director Card */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg h-100 text-center overflow-hidden">
              <Image
                src="/weche3.jpeg"
                alt="Director - David Kimani"
                width={400}
                height={500}
                className="card-img-top"
                style={{ objectFit: "cover", height: "550px" }}
              />
              <div className="card-body p-4">
                <h5 className="card-title fw-bold text-primary fs-3 mb-1">
                  David Kimani
                </h5>
                <p className="text-info fw-semibold mb-3">
                  <i className="bi bi-person-fill-check me-2"></i>
                  Executive Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
