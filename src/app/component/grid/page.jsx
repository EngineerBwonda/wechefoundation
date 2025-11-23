"use client";

import Image from "next/image";

export default function GridPart() {
  return (
    // <>
    //   <div className="container text-center">
    //     <div className="row">
    //       <div className="col">
    //         <div className="card">
    //           <Image
    //             src="/weche2.jpeg"
    //             alt="Card image"
    //             width={288}
    //             height={162}
    //             className="card-img-top"
    //           />
    //           <div className="card-body">
    //             <h5 className="card-title">Card title</h5>
    //             <p className="card-text">
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card content.
    //             </p>
    //             <a href="#" className="btn btn-primary">
    //               Go somewhere
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col">
    //         {" "}
    //         <div className="card">
    //           <Image
    //             src="/weche2.jpeg"
    //             alt="Card image"
    //             width={288}
    //             height={162}
    //             className="card-img-top"
    //           />
    //           <div className="card-body">
    //             <h5 className="card-title">Card title</h5>
    //             <p className="card-text">
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card content.
    //             </p>
    //             <a href="#" className="btn btn-primary">
    //               Go somewhere
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col">
    //         {" "}
    //         <div className="card">
    //           <Image
    //             src="/weche2.jpeg"
    //             alt="Card image"
    //             width={288}
    //             height={162}
    //             className="card-img-top"
    //           />
    //           <div className="card-body">
    //             <h5 className="card-title">Card title</h5>
    //             <p className="card-text">
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card content.
    //             </p>
    //             <a href="#" className="btn btn-primary">
    //               Go somewhere
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="container my-5 py-5">
        {/* Row 1: Mission + Vision */}
        <div className="row g-5 mb-5 justify-content-center">
          {/* Mission Card */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg h-100 text-center">
              <div className="card-body p-5">
                <i className="bi bi-heart-fill text-primary display-1 mb-4"></i>
                <h3 className="card-title fw-bold text-primary fs-2 mb-3">
                  Our Mission
                </h3>
                <p className="lead fs-4 text-muted">
                  Restoring hope through support, care and opportunity
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg h-100 text-center">
              <div className="card-body p-5">
                <i className="bi bi-eye-fill text-primary display-1 mb-4"></i>
                <h3 className="card-title fw-bold text-primary fs-2 mb-3">
                  Our Vision
                </h3>
                <p className="lead fs-4 text-muted">
                  A world where no one is left behind
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Values + Impact */}
        <div className="row g-5 justify-content-center">
          {/* Values Card */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg h-100 text-center">
              <div className="card-body p-5">
                <i className="bi bi-shield-check text-primary display-1 mb-4"></i>
                <h3 className="card-title fw-bold text-primary fs-2 mb-3">
                  Our Values
                </h3>
                <p className="lead fs-4 text-muted">
                  Compassion • Integrity • Inclusion • Empowerment
                </p>
              </div>
            </div>
          </div>

          {/* Impact Card */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg h-100 text-center">
              <div className="card-body p-5">
                <i className="bi bi-graph-up-arrow text-primary display-1 mb-4"></i>
                <h3 className="card-title fw-bold text-primary fs-2 mb-3">
                  Our Impact
                </h3>
                <p className="lead fs-4 text-muted">
                  Transforming lives, one person, one community at a time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
