import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { waitForFonts } from "../utils/fontLoader";

const services = [
  {
    title: "Brand Strategy",
    subtitle: "Brand Strategy",
    description:
      "We help you define your mission, vision, and voice. We conduct deep market research to position your brand for maximum impact and clarity in a crowded marketplace.",
  },
  {
    title: "Creative & Design",
    subtitle: "Creative & Design",
    description:
      "From compelling logos and brand identities to stunning websites and ad campaigns, our designers craft visuals that stop scrolls and capture attention.",
  },
  {
    title: "Digital Marketing",
    subtitle: "Digital Marketing",
    description:
      "We manage targeted paid social campaigns, SEO, and email marketing funnels that convert browsers into loyal customers and drive measurable ROI.",
  },
  {
    title: "Data & Analytics",
    subtitle: "Data & Analytics",
    description:
      "We don’t guess, we know. We track, measure, and analyze every campaign to optimize performance and prove the value of your marketing spend.",
  },
];

const MobileServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    const services = document.querySelectorAll(".mobile_service");
    setAllServices([...services]);
  }, []);

  const handleServiceClick = (e) => {
    if (e.target.classList.contains("active_service")) {
      e.target.classList.remove("active_service");
      return;
    }
    allServices.forEach((service) => {
      service.classList.remove("active_service");
      setActive("");
    });
    e.target.classList.add("active_service");
    setActive(e.target);
  };

  useGSAP(() => {
    waitForFonts().then(() => {
      const mobileServices = gsap.utils.toArray(".mobile_service");

    mobileServices.forEach((service) => {
      const clip = service.querySelector(".clip");
      // const h2 = service.querySelector("h2");
      // const h2Split = new SplitText(h2, {
      //   type: "words,lines",
      //   linesClass: "service-line",
      // });
      const p = service.querySelector("p");

      const img = service.querySelector(".img");

      gsap.set(clip, { height: 0.5 });

      const handleClick = () => {
        mobileServices.forEach((ser) => {
          gsap.set(ser.querySelector(".clip"), { height: 0.5 });
        });
        if (service.classList.contains("active_service")) {
          gsap.set(clip, { height: 0.5 });
          gsap.set(p, { opacity: 0 });
          gsap.set(img, { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" });
          return;
        }
        let clickTl;

        if (clickTl) clickTl.kill();
        clickTl = gsap.timeline({
          defaults: { ease: "power1.inOut" },
          // delay: 0.5,
        });
        clickTl
          .to(clip, { height: 300 })
          // .from(
          //   h2Split.words,
          //   {
          //     yPercent: -200,
          //   },
          //   0
          // )
          .to(
            img,
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 0.6,
              delay: 0.6,
            },
            0.3
          )
          .to(p, { opacity: 1 });
      };

        service.addEventListener("mousedown", handleClick);
      });
    });
  });

  return (
    <section id="services-mobile" className="block md:hidden pb-20">
      <SectionTitle text={"services"} />
      <div className="flex flex-col">
        {services.map((service, index) => (
          <div
            key={index}
            className="mobile_service border-b-2 px-2 py-3 bg-white "
            onClick={(e) => handleServiceClick(e)}
          >
            <h2 className="text-2xl font-roboto-semibold pl-4 w-fit pointer-events-none">
              {service.title}
            </h2>
            <div className="clip h-0.5 transition-all duration-300 overflow-hidden">
              <div className="pt-4  flex flex-col gap-2 justify-center items-center">
                <div
                  style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                  }}
                  className="img w-28 h-28 bg-teal-300 rounded-xl mb-6 flex items-center justify-center font-bold text-black"
                >
                  img
                </div>
                {/* <h2 className="text-2xl font-roboto-bold mb-2">
                  {service.title}
                </h2> */}
                <p className="text-gray-700 text-sm leading-relaxed text-center max-w-[90%] opacity-0">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileServices;
