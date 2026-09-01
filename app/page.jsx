import Hero from "@/Components/landig/hero";
import Info from "@/Components/landig/info";
import Services from "@/Components/landig/service";
import Menu from "@/Components/landig/menu";
import History from "@/Components/landig/history";
import Testimonial from "@/Components/landig/testimonial";
import FAQ from "@/Components/landig/faq";
import Contact from "@/Components/landig/contact";
import Footer from "@/Components/landig/footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Main page content stacked on top */}
      <div className="relative z-10 bg-[#f9f4de]">
        {/* <Hero />
        <Info />
        <Services />
        <Menu />
        <History />
        <Testimonial />
        <FAQ />
        <Contact /> */}
      </div>

      {/* Sticky footer underneath */}
      <Footer />
    </div>
  );
}