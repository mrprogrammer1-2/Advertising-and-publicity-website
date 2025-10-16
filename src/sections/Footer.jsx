import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Footer = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".footer_title", {
      type: "chars",
    });

    gsap.from(titleSplit.chars, {
      yPercent: -200,
      scrollTrigger: {
        trigger: "#footer",
        start: "top 40%",
        end: "top 20%",
        scrub: true,
      },
      stagger: {
        each: 0.03,
        from: "center",
      },
    });
  });

  return (
    <footer id="footer" className=" pt-16 md:pt-28 pb-20 ">
      <div className=" pt-28 flex w-full py-4">
        <div className="h-full w-full flex px-16 flex-col-reverse md:flex-row justify-between items-center md:items-end">
          <div className="section-tags flex  md:flex-col gap-4 text-sm sm:text-xl font-roboto-regular">
            <a href="#about" className="flex-1 whitespace-nowrap">
              ABOUT US
            </a>
            <a href="#services" className="flex-1">
              SERVICES
            </a>
            <a href="#portfolio" className="flex-1">
              PORTFOLIO
            </a>
          </div>
          <div className="flex flex-col gap-4 md:pr-4">
            <div className="text-right pb-5 overflow-hidden">
              <h2 className="footer_title text-5xl md:text-7xl font-roboto-bold text-black">
                Pixel & Pulse
              </h2>
              <h3 className="text-2xl md:text-5xl text-black">
                hello@pixelandpulse.com
              </h3>
            </div>
            <div className="flex gap-4 justify-between">
              <a
                href="/"
                className="uppercase text-black text-2xl font-roboto-medium pb-1 border-b-2 border-black"
              >
                facebook
              </a>
              <a
                href="/"
                className="uppercase text-black text-2xl font-roboto-medium pb-1 border-b-2 border-black"
              >
                instagram
              </a>
              <a
                href="/"
                className="uppercase text-black text-2xl font-roboto-medium pb-1 border-b-2 border-black"
              >
                reddit
              </a>
            </div>
            <div className="text-right mt-10 mb-8 md:max-w-96 md:self-end">
              <p>
                <b className="text-left block leading-1">Address:</b>
                <br />
                <span className="block leading-0 text-left">
                  123 Creative Avenue, Innovation City
                </span>
              </p>
              <p className="mt-8">
                <b className="text-left block leading-1">Number:</b>
                <br />
                <span className="block leading-0 text-left">
                  {" "}
                  +1 (555) 123-4567
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
