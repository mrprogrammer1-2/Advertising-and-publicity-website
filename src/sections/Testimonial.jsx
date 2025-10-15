import React from "react";
import SectionTitle from "../components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Testimonial = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonial",
        start: "center 60%",
      },
    });
    tl.to(".test-clip", {
      ease: "power1.inOut",
      duration: 0.5,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    });
  });
  return (
    <section id="testimonial" className="min-h-dvh relative w-screen py-5">
      <SectionTitle text={"Testimonial"} />
      <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:gap-16 lg:gap-32 md:px-16 lg:px-32 mt-24 md:mt-40">
        <div
          className="test-clip max-w-[90vw] md:flex-1 lg:min-h-44 p-8 border-2 border-black rounded-2xl"
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <div
              id="profile"
              className=" size-20 rounded-full border border-black bg-gray-200"
            ></div>
            <p className="text-2xl font-roboto-semibold leading-5 text-black">
              Sarah Chen <br />
              <span className="text-sm">CEO, Brew & Bean</span>
            </p>
          </div>
          <p className="mt-4 font-playfair-bold text-center text-gray-800">
            <q>
              Pixel & Pulse transformed our online presence. They are the
              perfect blend of creative and analytical - we finally have a brand
              that looks amazing and actually drives sales.
            </q>
          </p>
        </div>
        <div
          className="test-clip flex-1 max-w-[90vw] min-h-44 p-8 border-2  border-black rounded-2xl"
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center text-center gap-3">
            <div
              id="profile"
              className=" size-20 rounded-full border border-black bg-gray-200"
            ></div>
            <p className="text-2xl font-roboto-semibold leading-5 text-black">
              Michael Doe
              <br />
              <span className="text-sm">Marketing Director, Nova Watches</span>
            </p>
          </div>
          <p className="mt-4 font-playfair-bold text-center text-gray-800">
            <q>
              Other agencies just guess. Pixel & Pulse provides the data to back
              up every decision. Their campaign for our product launch was a
              home run.
            </q>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
