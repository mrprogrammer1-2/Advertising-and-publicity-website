import SectionTitle from "../components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useGSAP(() => {
    const parSplit = SplitText.create("#about-title", {
      type: "words, chars",
      linesClass: "about_big_txt",
    });

    const storySplit = SplitText.create("#story-text", {
      type: "lines, words",
      linesClass: "story_text_line",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sticky_parent",
        start: "center center",
        end: "+=1500 center",
        pin: true,
        scrub: 2,
        pinSpacing: true,
      },
    });

    tl.from(parSplit.chars, {
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.02,
    })
      .to("#clip", {
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        delay: 0.75,
        duration: 2,
      })
      .from(
        storySplit.words,
        {
          y: "-200px",
          stagger: 0.02,
        },
        "-=1.3"
      )
      .to(
        "#story-imgs > div",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        },
        "-=1"
      );

    const secondP = SplitText.create("#second-p", {
      type: "lines, words",
      linesClass: "story_text_line",
    });

    gsap.from(secondP.words, {
      scrollTrigger: {
        trigger: "#about-second-part",
        start: "top center",
        // end: "center center",
        // scrub: 2,
      },
      y: "-200px",
      stagger: 0.02,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.02,
    });

    gsap.to("#team > .imgs > div:first-of-type", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: "#team",
        start: "top center",
        end: "center center",
        scrub: 3,
      },
    });
    gsap.to("#team > .imgs > div:nth-child(2)", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: "#team",
        start: "top 60%",
        end: "center 60%",
        scrub: 1.5,
      },
    });
    gsap.to("#team > .imgs > div:nth-child(3)", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: "#team",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  });

  return (
    <section
      id="about"
      className="min-h-dvh pt-8 sm:py-20 mt-2 text-text-heading"
    >
      <SectionTitle text={"about us"} />
      <div className="bg-background-black w-screen min-h-svh pb-14">
        <div className="w-full">
          <div id="sticky_parent" className="min-h-svh relative">
            <div
              id="sticky"
              className="text-center max-md:px-11 z-10 flex justify-center h-dvh items-center py-12"
            >
              <p
                id="about-title"
                className="text-6xl md:text-7xl md:max-w-md mx-auto text-center md:text-left text-background font-roboto-semibold md:leading-[4rem]"
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
              className="absolute top-0 left-0 z-20 h-dvh w-full grid place-content-center bg-background-black"
              style={{
                clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
              }}
            >
              <div
                id="story"
                className="-mt-20 relative flex max-md:items-center justify-center items-center flex-col-reverse md:flex-row gap-24 md:gap-40"
              >
                <p
                  id="story-text"
                  className="text-xl text-text font-roboto-regular max-w-md text-left overflow-hidden"
                >
                  Founded in 2018, CreativeEdge Agency was born from a simple
                  belief: every brand has a unique story worth telling. What
                  started as a small team of passionate creatives working out of
                  a shared workspace has evolved into a full-service advertising
                  and publicity powerhouse.
                </p>
                <div id="story-imgs" className="relative max-md:pl-6 md:pb-9">
                  <div
                    className="size-48 md:size-60 rounded-lg overflow-hidden bg-emerald-400 grid place-content-center-safe"
                    style={{
                      clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                    }}
                  >
                    <div className="w-full h-full">img</div>
                  </div>
                  <div
                    className="size-48 md:size-60 rounded-lg absolute overflow-hidden bg-blue-400 grid place-content-center-safe right-20 top-20 "
                    style={{
                      clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                    }}
                  >
                    <div className="w-full h-full">img</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="about-second-part"
            className="w-full bg-background-black min-h-dvh px-9"
          >
            <div className="w-full h-full border-t-2 border-[#666] pt-12 md:pt-32">
              <div className="md:pl-14 md:mt-8">
                <p
                  id="second-p"
                  className="text-3xl md:text-4xl lg:text-5xl md:leading-14 font-playfair-semibold"
                >
                  {window.screen > 768 ? (
                    <>
                      Our journey began when our{" "}
                      <span className="px-8">founders</span> chose to{" "}
                      <span className="px-6">build</span> distinctive work —
                      preventing brands from getting{" "}
                      <span className="px-10">lost</span> and making it our{" "}
                      <span className="px-14">mission</span> to create{" "}
                      <span className="px-4">unforgettable</span> campaigns.
                    </>
                  ) : (
                    <>
                      Our journey began when our founders chose to build
                      distinctive work — preventing brands from getting lost and
                      making it our mission to create unforgettable campaigns.
                    </>
                  )}
                </p>
              </div>
              <div
                id="team"
                className="h-dvh mt-16 md:mt-60 flex gap-10 md:gap-16 flex-col md:flex-row justify-end"
              >
                <div className="imgs flex gap-3 md:gap-9">
                  <div
                    className="w-60 object-cover max-h-90"
                    style={{
                      clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                    }}
                  >
                    <img
                      src="/images/team-1.jpg"
                      className="object-cover h-full"
                    />
                  </div>
                  <div
                    style={{
                      clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                    }}
                  >
                    <img
                      src="/images/team-2.jpg"
                      className="w-60 mt-8 object-cover max-h-64"
                    />
                  </div>
                  <div
                    className="w-40 -mt-9 md:-mt-9 max-h-64 "
                    style={{
                      clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
                    }}
                  >
                    <img
                      src="/images/team-3.jpg"
                      className="h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-7">
                  <p className="text-2xl mt-16 max-w-[34rem] font-roboto-regular leading-6">
                    <q>
                      Our team is a fusion of strategic minds and creative
                      visionaries, turning bold ideas into unforgettable
                      campaigns.
                    </q>
                  </p>
                  <p className="text-2xl max-w-[34rem] font-roboto-regular leading-6">
                    <q>
                      We're the dreamers and doers, crafting data-driven
                      campaigns that don't just capture attention—they capture
                      market share.
                    </q>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
