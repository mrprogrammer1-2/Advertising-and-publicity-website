import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
// import ServicesMobile from "./sections/ServicesMobile";
import Testimonial from "./sections/Testimonial";
import Portfolio from "./sections/Portfolio";
import MobileServices from "./sections/MobileServices";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// import MobileServices from "./MobileServices";

// const CombinedServices = () => (
//   <>
//     <div className="hidden md:block">
//       <Services />
//     </div>
//     <div className="block md:hidden">
//       <MobileServices />
//     </div>
//   </>
// );

// export default CombinedServices;

function App() {
  return (
    <main className="min-h-dvh w-screen">
      <Hero />
      <About />
      <div className="hidden md:block">
        <Services />
      </div>
      <div className="block md:hidden">
        {/* <ServicesMobile /> */}
        <MobileServices />
      </div>
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
