import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const introSplit = SplitText.create("#split", {
      type: "chars",
    });
    const txtSplit = SplitText.create("#txt", {
      type: "lines",
    });
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.from(introSplit.chars, {
      yPercent: 200,
      stagger: {
        each: 0.03,
        from: window.innerWidth > 480 ? "center" : "",
      },
      ease: "power2.out",
    })

      .to(
        "#img",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.6,
          ease: "circ.out",
        },
        "-=0.5"
      )
      .to(
        "#img2",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.3,
          ease: "circ.out",
        },
        "-=1"
      )
      .from(
        txtSplit.lines,
        {
          yPercent: 400,
          stagger: 0.02,
          ease: "circ.out",
        },
        "-=0.4"
      );

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
  });

  return (
    <section id="home" className="min-h-dvh w-screen relative">
      <div className="container !min-h-dvh relative">
        <div className="z-10 mt-28 text-center relative overflow-hidden">
          <h1
            id="split"
            className="font-playfair-bold text-black text-3xl sm:text-5xl md:text-7xl md:whitespace-nowrap leading-tight tracking-tight uppercase"
          >
            We Build Brands{window.innerWidth <= 480 ? <br /> : " "}That Pulse
          </h1>
        </div>

        <div
          className="size-64 md:size-72 overflow-hidden rounded-lg absolute top-[23rem] -translate-x-1/2 md:top-45 md:translate-none md:right-5 max-md:left-1/2 border-muted border"
          id="img"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src="/images/hero-img-1.jpg"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div
          className="hidden w-72 md:grid overflow-hidden rounded-lg absolute bottom-24 left-24 place-content-center border-muted border"
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
        <div className="max-w-80 mx-auto mt-11 overflow-hidden">
          <p
            id="txt"
            className="text-center text-sm font-roboto-regular text-gray-800 text-shadow-2xs md:pr-3"
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
