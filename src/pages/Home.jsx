import MyNavbar from "../components/MyNavbar";
import PhotoCarousel from "../components/PhotoCarousel";
import Bestsellers from "../components/Bestsellers";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import CulturalEvent from "../components/CulturalEvent";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <MyNavbar />
      <PhotoCarousel />
      <Bestsellers />
      <AboutUs />
      <OurProducts />
      <CulturalEvent />
      <Footer />
    </div>
  );
}

export default Home;
