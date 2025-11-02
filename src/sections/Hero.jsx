import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {useState } from "react";
import { waitForFonts } from "../utils/fontLoader";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useGSAP(() => {
    waitForFonts().then(() => {

      

      const introSplit = SplitText.create("#split", {
        type: "words, chars",
      });
      gsap.set(introSplit.chars, { yPercent: 200 });
      const txtSplit = SplitText.create("#txt", {
        type: "lines",
        linesClass: "hero_line",
      });
      gsap.set(txtSplit.lines, { yPercent: 500 });
      const hashes = gsap.utils.toArray(".mobile_hash p");
      const tl = gsap.timeline({
        delay: 1,
      });
      tl.set("#split", { opacity: 1 })
      .to(introSplit.chars, {
        yPercent: 0,
        stagger: {
          each: 0.03,
          from: screenWidth > 480 ? "center" : "left",
          // from: "left",
        },
        ease: "bounce.inOur",
      }).to(
        "#img",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.6,
          ease: "circ.out",
        },
        "-=0.5"
      );
      if (screenWidth < 648) {
        hashes.forEach((hash) => {
          const hashSplit = SplitText.create(hash, {
            type: "lines, words",
            linesClass: "line",
          });

          tl.from(
            hashSplit.words,
            {
              yPercent: -100,
            },
            "<"
          );
        });
      }
      tl.to(
        "#img2",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.3,
          ease: "circ.out",
        },
        "-=1"
      )
      .to("#txt", { opacity: 1 }, "-=1")
      .to(
        txtSplit.lines,
        {
          yPercent: 0,
          stagger: 0.02,
          ease: "circ.out",
        },
        "-=0.4"
      );

      if (screenWidth > 768) {
        const imgTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        });

        imgTl
          .to("#img", {
            y: 150,
          })
          .to("#img2", {
            y: -200,
          });
      }
    });
  });
  // ======================================================
  // add to hero section => (Discover, Strategize, Create, Launch, Analyze)
  // ======================================================

  return (
    <section id="home" className="min-h-dvh w-screen relative pt-16">
      <div className="w-full !min-h-[80vh] relative">
        <div className="z-10 mt-28 text-center relative overflow-hidden">
          <h1
            id="split"
            className="font-roboto-bold opacity-0 text-black w-full text-5xl md:text-6xl xl:text-[8rem] leading-tighter tracking-[-0.07em] uppercase"
            style={{ wordSpacing: "-0.05em" }}
          >
            We Build Brands{window.innerWidth <= 480 ? <br /> : " "}That Pulse
          </h1>
        </div>

        <div className="flex items-end justify-center mx-auto md:block ">
          <div
            className="h-48 w-40 md:size-72 overflow-hidden rounded-lg md:absolute md:top-45 md:translate-none md:right-60"
            id="img"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
            }}
          >
            <img
              src="/images/hero-img-1.jpg"
              className="w-full h-full object-cover object-center relative z-10"
            />
            <div className="size-64 lg:size-72 absolute top-4 right-8 bg-text rounded-lg " />
          </div>
          {screenWidth < 648 && (
            <div className="mobile_hash text-black font-roboto-semibold">
              <p className="leading-3.5">#Discover</p>
              <p className="leading-3.5">#Strategize</p>
              <p className="leading-3.5">#Create</p>
              <p className="leading-3.5">#Launch</p>
              <p className="leading-3.5">#Analyze</p>
            </div>
          )}
        </div>

        <div
          className="hidden w-72 max-h-96 lg:block overflow-hidden rounded-lg absolute bottom-25 left-60"
          id="img2"
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
        >
          <img
            src="/images/hero-img-2.jpg"
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>
        <div className="px-3 md:max-w-md md:absolute sm:left-[40%] md:left-1/2 md:-translate-x-1/2 mt-6 overflow-hidden">
          <p
            id="txt"
            className="opacity-0 text-center sm:text-left md:!text-center text-sm font-roboto-regular text-gray-800 text-shadow-2xs"
          >
            A modern advertising agency where data-driven strategy meets
            breathtaking creativity.
            <br />
            We help forward-thinking brands connect with their audience and
            drive real growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
