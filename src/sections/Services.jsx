import SectionTitle from "../components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { waitForFonts } from "../utils/fontLoader";

const Services = () => {
  useGSAP(() => {
    waitForFonts().then(() => {
      const ctx = gsap.context(() => {
        const services = gsap.utils.toArray(".service");
        
        if (!services.length) return;

        services.forEach((service) => {
          const text = service.querySelector("p");
          const h2 = service.querySelector("h2");
          const h3 = service.querySelector("h3");
          const serviceImg = service.querySelector(".img");
          
          // Check if all elements exist
          if (!text || !h2 || !h3 || !serviceImg) return;

          const h2Split = new SplitText(h2, {
            type: "words,lines",
            linesClass: "service-line",
          });

          // Initial states
          gsap.set(text, { opacity: 0 });
          gsap.set(h3, { yPercent: -150, opacity: 0 });
          gsap.set(serviceImg, {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          });

          let hoverTl;

          const handleEnter = () => {
            // Expand the flex item manually
            gsap.to(service, {
              flex: 2,
              duration: 0.5,
              ease: "power1.inOut",
            });

            if (hoverTl) hoverTl.kill();
            hoverTl = gsap.timeline({
              defaults: { ease: "power2.out" },
            });

            hoverTl
              // Hide h2 instantly
              .to(h2Split.words, { yPercent: -200, duration: 0.5 })
              // Animate image reveal
              .to(
                serviceImg,
                {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  duration: 0.6,
                  delay: 0.6,
                },
                0
              )
              // Bring h3 from above
              .to(
                h3,
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: 0.4,
                },
                0.2
              )
              // Fade in paragraph
              .to(
                text,
                {
                  opacity: 1,
                  duration: 0.5,
                  delay: 0.2,
                },
                0.4
              );
          };

          const handleLeave = () => {
            // Shrink back
            gsap.to(service, {
              flex: 1,
              duration: 0.5,
              ease: "power1.inOut",
            });

            if (hoverTl) hoverTl.kill();

            gsap.set(h2Split.words, { yPercent: 0 });
            gsap.set(h3, { yPercent: -150, opacity: 0 });
            gsap.set(text, { opacity: 0 });
            gsap.set(serviceImg, {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            });
          };

          service.addEventListener("mouseenter", handleEnter);
          service.addEventListener("mouseleave", handleLeave);
        });
      });

      return () => ctx.revert();
    });
  }, []);

  return (
    <section id="services" className="min-h-dvh relative pb-14">
      <SectionTitle text={"services"} />

      <div className="h-[70vh] !p-0 overflow-hidden">
        <div className="w-full h-full flex justify-center">
          {/* Service 1 */}
          <div className="service flex-1 border-t-2 border-l-4 border-black pt-4 px-8 text-center overflow-hidden">
            <div className="overflow-hidd">
              <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">
                Brand Strategy
              </h2>
            </div>
            <div className="w-full relative flex flex-col gap-24">
              <div className="flex w-full justify-between px-7 pt-11">
                <div
                  className="img size-44 rounded-xl bg-teal-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                  }}
                >
                  img
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-3xl font-roboto-bold">Brand Strategy</h3>
                </div>
              </div>
              <p>
                We help you define your mission, vision, and voice. We conduct
                deep market research to position your brand for maximum impact
                and clarity in a crowded marketplace.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service flex-1 border-t-2 border-l-2 border-black  pt-4 px-8 text-center overflow-hidden">
            <div className="overflow-hidden">
              <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">
                Creative & Design
              </h2>
            </div>
            <div className="w-full relative flex flex-col gap-24">
              <div className="flex w-full justify-between px-7 pt-11">
                <div
                  className="img size-44 rounded-xl bg-teal-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                  }}
                >
                  img
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-3xl font-roboto-bold">
                    Creative & Design
                  </h3>
                </div>
              </div>
              <p>
                From compelling logos and brand identities to stunning websites
                and ad campaigns, our designers craft visuals that stop scrolls
                and capture attention.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service flex-1 border-t-2 border-l-2 border-black  pt-4 px-8 text-center overflow-hidden">
            <div className="overflow-hidden">
              <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">
                Digital Marketing
              </h2>
            </div>
            <div className="w-full relative flex flex-col gap-24">
              <div className="flex w-full justify-between px-7 pt-11">
                <div
                  className="img size-44 rounded-xl bg-teal-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                  }}
                >
                  img
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-3xl font-roboto-bold">
                    Digital Marketing
                  </h3>
                </div>
              </div>
              <p>
                We manage targeted paid social campaigns, SEO, and email
                marketing funnels that convert browsers into loyal customers and
                drive measurable ROI.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service flex-1 border-t-2 border-l-2 border-r-4 border-black  pt-4 px-8 text-center overflow-hidden">
            <div className="overflow-hidden">
              <h2 className="text-3xl font-roboto-semibold text-black tracking-tighter">
                Data & Analytics
              </h2>
            </div>
            <div className="w-full relative flex flex-col gap-24">
              <div className="flex w-full justify-between px-7 pt-11">
                <div
                  className="img size-44 rounded-xl bg-teal-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                  }}
                >
                  img
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-3xl font-roboto-bold">
                    Data & Analytics
                  </h3>
                </div>
              </div>
              <p>
                We don’t guess, we know. We track, measure, and analyze every
                campaign to optimize performance and prove the value of your
                marketing spend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
