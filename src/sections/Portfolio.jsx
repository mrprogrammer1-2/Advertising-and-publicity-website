import React from "react";
import SectionTitle from "../components/SectionTitle";
import { MdDescription } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Portfolio = () => {
  const projects = [
    {
      title: "Brew & Bean Rebrand",
      category: "Branding, Packaging",
      description:
        "A complete visual identity overhaul for a local coffee roastery, helping them stand out on supermarket shelves and connect with a younger audience.",
    },
    {
      title: "Nova Watches E-Commerce",
      category: "Web Design, Development",
      description:
        "Design and development of a sleek, high-converting e-commerce experience for a luxury watchmaker, focusing on mobile-first users.",
    },
    {
      title: 'Find Your Fit" Campaign for EcoVibe Apparel',
      category: "Social Media, Video",
      description:
        "A multi-platform viral video campaign promoting sustainable fashion, utilizing influencer partnerships and user-generated content.",
    },
  ];

  useGSAP(() => {
    gsap.set(".project", {
      clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
    });

    gsap.to(".project", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.95,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "center 60%",
        markers: true,
      },
    });
  });

  return (
    <section id="portfolio" className="min-h-dvh w-screen">
      <SectionTitle text={"Portfolio"} />
      <div className="text-center py-6 text-3xl font-playfair-semibold">
        <p> Our Pulse & Featured Work</p>
      </div>
      <div className=" min-h-dvh px-4 py-9">
        <div className="flex justify-center flex-wrap gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              //   style={{
              //     flexBasis: "calc(33% - 1.25rem)",
              //   }}
              className="project min-h-[27rem] h-fit bg-black rounded-md overflow-hidden font-roboto-regular max-w-96 md:flex-1 "
            >
              <div className="size-44 border-2 border-gray-300 rounded-tl-md rounded-tr-md bg-red-400 w-full">
                img
              </div>
              <div className="p-4 mt-8">
                <h2 className="text-xl text-white mb-2">{project.title}</h2>
                <h5 className="mb-1"># {project.category}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
