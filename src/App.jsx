import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <main className="min-h-dvh w-screen">
      <Hero />
      <About />
      <Services />
      <Testimonial />
    </main>
  );
}

export default App;
