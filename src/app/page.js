import Image from "next/image";
import styles from "./page.module.css";

import About from "./component/about/page";
import Carousel from "./component/carousel/page";
import GridPart from "./component/grid/page";
import GridPart2 from "./grid2/page";
import StaffPage from "./staff/page";
import ContactUsPage from "./contactUs/page";
import LocationPage from "./location/page";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import GalleryPage from "./gallery/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />

      <GridPart />
      <GridPart2 />
      <GalleryPage />
      <StaffPage />
      <About />
      <ContactUsPage />
      <LocationPage />
      <Footer />
    </div>
  );
}
