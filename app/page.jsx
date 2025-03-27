import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Footertop from "./components/Footertop";
import Navbar from "./components/Nabvar";
import SwiperComponent from "./components/Swiper";
import Main from "./main/page";

export default function Home() {
  return (
    <div className="m-auto w-[1165px]">
      <Navbar />
      <SwiperComponent />
      <Main />
      <Footertop />
      <Footer />
      <Blog/>
    </div>
  );
}
