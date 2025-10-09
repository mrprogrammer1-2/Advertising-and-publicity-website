import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const SectionTitle = ({ text }) => {
  useGSAP(() => {
    const titles = gsap.utils.toArray(".title");

    titles.forEach((title) => {
      const split = SplitText.create(title.querySelector("h1"), {
        type: "chars",
      });

      gsap.from(split.chars, {
        yPercent: -400,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
        stagger: {
          each: 0.02,
          from: "center",
        },
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
