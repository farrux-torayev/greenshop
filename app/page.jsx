import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nabvar";
import SwiperComponent from "./components/Swiper";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className=" m-auto w-[1165px]">
      <Navbar />
      <SwiperComponent />
      <Dashboard />
      <Hero />
      <Footer />
    </div>
  );
}
