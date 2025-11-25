// "use client";

// import React from "react";
// import Image from "next/image";
// import styles from "./about.module.css";

// export default function About() {
//   return (
//     <div class="container text-center">
//       <div class="row">
//         <div class="col">
//           <Image
//             src="/hope.png"
//             alt="Card image"
//             width={288}
//             height={430}
//             className="card-img-top"
//           />
//         </div>
//         <div class="col">
//           <Image
//             src="/support.png"
//             alt="Card image"
//             width={288}
//             height={430}
//             className="card-img-top"
//           />
//         </div>
//         <div class="col">
//           <Image
//             src="/pink.png"
//             alt="Card image"
//             width={288}
//             height={430}
//             className="card-img-top"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// components/About.jsx
"use client";

import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  const values = [
    {
      src: "/hope.png",
      title: "Hope",
      // description: "Inspiring change through empathy and shared humanity.",
    },
    {
      src: "/support.png",
      title: "Support",
      // description: "Providing resources and care to uplift communities.",
    },
    {
      src: "/pink.png",
      title: "Compassion",
      // description: "Walking hand-in-hand with those in need.",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-primary">Our Values</h2>
        <p className="text-muted mt-3">
          Guided by purpose, driven by compassion.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {values.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={1000}
                  className={styles.image}
                />
              </div>
              {/* <h3 className={styles.title}>{item.title}</h3> */}
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
