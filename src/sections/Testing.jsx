import SectionTitle from "../components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const parSplit = SplitText.create("#about-title", {
      type: "words, chars",
      linesClass: "about_big_txt",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sticky_parent",
        start: "center center",
        end: "+=1000 center",
        pin: true,
        scrub: 2,
        pinSpacing: true,
      },
    });

    tl.from(parSplit.chars, {
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.02,
    }).to("#clip", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      delay: 0.75,
    });
  });

  return (
    <section
      id="about"
      className="min-h-dvh py-14 pb-24 sm:py-20 mt-18 text-text-heading"
    >
      <SectionTitle text={"About us"} />
      <div className="bg-background-black w-screen min-h-dvh">
        <div className="w-full">
          <div id="sticky_parent" className="h-dvh relative">
            <div
              id="sticky"
              className="text-center sticky top-0 flex justify-center items-center py-12"
            >
              <p
                id="about-title"
                className="text-3xl md:text-7xl max-w-md mx-auto text-left text-background font-roboto-semibold md:leading-[4.3rem]"
              >
                We don't
                <br /> guess,
                <br />
                We measure , analyze, to prove the value of your marketing
                spend.
              </p>
            </div>
            <div
              id="clip"
              className="absolute top-0 left-0 h-dvh w-full grid place-content-center bg-background-black"
              style={{
                clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                voluptatem expedita doloremque repellendus, eius eveniet, magni
                hic quo excepturi, omnis ipsum dolor totam asperiores. Assumenda
                alias iste error necessitatibus voluptate.
              </p>
            </div>
          </div>

          <div
            id="story"
            className="mt-48 relative flex max-md:items-center justify-center items-center flex-col md:flex-row gap-24 md:gap-40"
          >
            <p className="text-xl text-text font-roboto-regular max-w-md text-center overflow-hidden">
              Founded in 2018, CreativeEdge Agency was born from a simple
              belief: every brand has a unique story worth telling. What started
              as a small team of passionate creatives working out of a shared
              workspace has evolved into a full-service advertising and
              publicity powerhouse.
            </p>
            <div id="story-imgs" className="relative max-md:pl-6 md:pb-9">
              <div
                className="size-60 rounded-lg overflow-hidden bg-emerald-400 grid place-content-center-safe"
                style={{
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div className="w-full h-full">img</div>
              </div>
              <div className="size-60 rounded-lg overflow-hidden bg-blue-400 grid place-content-center-safe absolute right-20 top-20 ">
                <div className="w-full h-full">img</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
