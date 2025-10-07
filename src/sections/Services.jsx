import SectionTitle from "../components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Services = () => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const services = gsap.utils.toArray(".service");

      services.forEach((service) => {
        const text = service.querySelector("p");
        gsap.set(text, { opacity: 0 });

        const handleEnter = () => {
          // Kill any existing animation before starting a new one
          if (service._hoverTween) service._hoverTween.kill();

          service._hoverTween = gsap.to(text, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.3, // small delay before showing
            overwrite: "auto",
          });
        };

        const handleLeave = () => {
          // Cancel any delayed or running animation immediately
          if (service._hoverTween) service._hoverTween.kill();

          gsap.set(text, { opacity: 0 }); // hide instantly
        };

        service.addEventListener("mouseenter", handleEnter);
        service.addEventListener("mouseleave", handleLeave);

        // Cleanup when component unmounts
        return () => {
          service.removeEventListener("mouseenter", handleEnter);
          service.removeEventListener("mouseleave", handleLeave);
        };
      });
    });

    return () => ctx.revert();
  }, []); // Run once

  return (
    <section id="services" className="min-h-dvh relative pb-14">
      <SectionTitle text={"services"} />

      <div className=" bg-yellow-500 h-[70vh] !p-0">
        <div className="w-full h-full  flex justify-center bg-blue-100">
          <div className="service flex-1 group hover:flex-2 transition-all duration-500 border-l-2 pt-4 px-8 text-center">
            <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">Brand Strategy</h2>
            <p className=" opacity-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur quam id consequatur natus quasi suscipit? Magni veniam
              quam hic eos!
            </p>
          </div>
          <div className="service flex-1 hover:flex-2 transition-all duration-500 border-l-2 pt-4 px-8 text-center">
            <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">Creative & Design</h2>
            <p className=" opacity-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur quam id consequatur natus quasi suscipit? Magni veniam
              quam hic eos!
            </p>
          </div>
          <div className="service flex-1 hover:flex-2 transition-all duration-500 border-l-2 pt-4 px-8 text-center">
            <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">Digital Marketing</h2>
            <p className=" opacity-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur quam id consequatur natus quasi suscipit? Magni veniam
              quam hic eos!
            </p>
          </div>
          <div className="service flex-1 hover:flex-2 transition-all duration-500 border-l-2 pt-4 px-8 text-center border-r-2">
            <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">Data & Analytics</h2>
            <p className=" opacity-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur quam id consequatur natus quasi suscipit? Magni veniam
              quam hic eos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
