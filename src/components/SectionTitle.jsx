import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
import { waitForFonts } from "../utils/fontLoader";

gsap.registerPlugin(ScrollTrigger);
const SectionTitle = ({ text }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useGSAP(() => {
    waitForFonts().then(() => {
      const titles = gsap.utils.toArray(".title");
      
      if (!titles.length) return;

      titles.forEach((title) => {
        const h1Element = title.querySelector("h1");
        if (!h1Element) return;
        
        const split = SplitText.create(h1Element, {
          type: "chars",
        });

      gsap.from(split.chars, {
        yPercent: -400,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: screenWidth > 640 ? "top 60%" : "top 90%",
          end: screenWidth > 640 ? "top 20%" : "top 60%",
          scrub: true,
        },
        stagger: {
          each: 0.02,
          from: "center",
        },
        });
      });
    });
  });

  return (
    <div className="title text-center overflow-hidden">
      <h1 className="text-6xl md:text-[10rem] lg:text-[15rem] tracking-[-0.08em] text-black uppercase font-roboto-bold  mt-11 mb-8">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
