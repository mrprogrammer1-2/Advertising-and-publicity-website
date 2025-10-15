import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTitle";
import { SplitText } from "gsap/all";
import gsap from "gsap";

function Contact() {
  useGSAP(() => {
    const contactSplit_1 = SplitText.create(".head_1", {
      type: "chars, words",
    });
    const contactSplit_2 = SplitText.create(".head_2", {
      type: "chars, words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 20%",
        end: "top -=500",
        scrub: true,
      },
    });
    tl.from(contactSplit_1.chars, {
      yPercent: -200,
      stagger: {
        each: 0.05,
        from: "center",
      },
    }).from(
      contactSplit_2.chars,
      {
        yPercent: -200,
        stagger: {
          each: 0.05,
          from: "center",
        },
      },
      0.2
    );
  });

  return (
    <section id="contact" className="min-h-dvh w-full mt-20 md:mt-52">
      <SectionTitle text={"contact us"} />
      <div className="min-h-dvh bg-background-black py-24 px-4">
        <div className=" flex flex-col justify-center items-center gap-5">
          <h2 className="text-3xl md:text-7xl uppercase font-roboto-semibold text-white text-center tracking-tighter">
            <span className="head_1 block overflow-hidden">
              A modern advertising agency
            </span>
            <br />
            <span className="text-xl block tracking-[0.4em] font-playfair-regular">
              focused on
            </span>
            <br />
            <span className="head_2 block overflow-hidden">
              data-driven creativity and results
            </span>
          </h2>
          <p className="text-xl text-center max-w-lg   mt-5 capitalize">
            Let's talk about your project and how we can help you achieve your
            goals.
          </p>
        </div>
        <form
          className=" mt-6 text-center flex justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-9 justify-center text-white py-7 w-full max-w-2xl mt-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="YOUR NAME"
              autoComplete="off"
              className=" placeholder:text-white py-3 px-2 border-b-2 focus:outline-none"
            />
            <input
              type="text"
              name="number"
              id="number"
              placeholder="YOUR NUMBER"
              autoComplete="off"
              className=" placeholder:text-white py-3 px-2 border-b-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="YOUR EMAIL"
              autoComplete="off"
              className=" placeholder:text-white py-3 px-2 border-b-2 focus:outline-none"
            />
            <button className="mt-4 bg-background text-black py-2 texxt-center font-roboto-semibold text-2xl cursor-pointer transition-all duration-200 hover:bg-gray-200">
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
