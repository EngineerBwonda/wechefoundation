"use client";

import Image from "next/image";
import styles from "./gallery.module.css"; // ← import the CSS module

export default function GalleryPage() {
  const images = [
    "/weche1.jpeg",
    "/weche2.jpeg",
    "/weche3.jpeg",
    "/weche2.jpeg",
    //
  ];

  return (
    <>
      <div className="container my-5 py-5">
        {/* Section Title */}
        <div className="text-center mb-5 pb-4">
          <h2 className="display-5 fw-bold text-primary mb-3">GALLERY</h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            A glimpse into our journey, showcasing moments of impact, joy, and
            community.
          </p>
          <hr className="w-25 mx-auto border-primary border-3 opacity-75" />
        </div>

        <div className="row g-4">
          {images.map((src, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card border-0 shadow-sm">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={300}
                  className={`card-img-top ${styles.galleryImage}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
