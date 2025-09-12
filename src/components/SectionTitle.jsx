import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const SectionTitle = ({ text }) => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#title h1", {
      type: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#title",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });

    tl.from(titleSplit.chars, {
      yPercent: -400,
      ease: "power2.out",
      stagger: {
        each: 0.02,
        from: "center",
      },
    });
  });

  return (
    <div id="title" className="text-center overflow-hidden">
      <h1 className="text-3xl sm:text-5xl md:text-8xl font-playfair-semibold mt-11 mb-8">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
