
import Break from "./components/2Breakthebank";
import Navbar from "./components/1navbar";
import Company from "./components/3company";
import Choseus from "./components/4whychoseus";
import Statpage from "./components/5stat";
import Pricing from "./components/6pricing";
import Reviews from "./components/7Reviews";
import Platforms from "./components/8Platforms";
import FAQ from "./components/9FAQ";
import Footer from "./components/10Footer";

export default function Home() {
  return (
    <>
    <div>
    <Navbar/>
    <Break/>
    <Company/>
    <Choseus/>
    <Statpage/>
    <Pricing/>
    <Reviews/>
    <Platforms/>
    <FAQ/>
    <Footer/>
    </div>
    </>
  );
}
