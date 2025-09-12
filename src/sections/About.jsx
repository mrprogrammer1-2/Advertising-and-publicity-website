import SectionTitle from "../components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const spanSplit_1 = SplitText.create("#about-title span:first-of-type", {
      type: "chars",
    });
    const spanSplit_2 = SplitText.create("#about-title span:nth-child(2)", {
      type: "chars",
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about .container",
        start: "top 40%",
        end: "top 15%",
      },
    });

    titleTl.from(spanSplit_1.chars, {
      yPercent: 200,
      ease: "power1.inOut",
    });
    titleTl.from(spanSplit_2.chars, {
      yPercent: 200,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      id="about"
      className="min-h-dvh overflow-hidden py-14 sm:py-18 text-text-heading"
    >
      <SectionTitle text={"About us"} />
      <div className="bg-background-black w-screen min-h-dvh py-7">
        <div className="container">
          <div className="text-center">
            <p
              id="about-title"
              className="text-3xl md:text-5xl text-text font-roboto-semibold leading-14"
            >
              <span className="block overflow-hidden">Crafting Stories</span>
              <span className="block overflow-hidden">That Move Markets</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
