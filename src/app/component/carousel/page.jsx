// app/page.jsx  (or components/Carousel.jsx)
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const carouselRef = useRef(null);

  // Optional: Auto-start the carousel
  // useEffect(() => {
  //   if (carouselRef.current) {
  //     const carousel = new bootstrap.Carousel(carouselRef.current, {
  //       interval: 5000, // Change slide every 5 seconds (false to disable)
  //       ride: "carousel",
  //       wrap: true,
  //       keyboard: true,
  //     });

  //     // Uncomment next line if you want it to start automatically
  //     // carousel.cycle();
  //   }
  // }, []);

  return (
    <>
      <div
        ref={carouselRef}
        className="carousel slide"
        id="carouselExampleCaptions"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/weche2.jpeg"
              alt="First slide"
              width={1920}
              height={1080}
              className="d-block w-100"
              style={{ objectFit: "cover", height: "80vh" }}
              priority
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-4 fw-bold text-white">WECH FOUNDATION</h5>
              <p className="lead text-white">
                Giving Hope, Changing Lives: Empowering Communities for a Better
                Tomorrow.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src="/images/slide2.jpg"
              alt="Second slide"
              width={1920}
              height={1080}
              className="d-block w-100"
              style={{ objectFit: "cover", height: "80vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-4 fw-bold text-white">
                Second slide label
              </h5>
              <p className="lead text-white">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src="/images/slide3.jpg"
              alt="Third slide"
              width={1920}
              height={1080}
              className="d-block w-100"
              style={{ objectFit: "cover", height: "80vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-4 fw-bold text-white">
                Third slide label
              </h5>
              <p className="lead text-white">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}
