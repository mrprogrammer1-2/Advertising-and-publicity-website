import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

// register SplitText so it can be used
gsap.registerPlugin(SplitText);

const Menu = ({ isOpen, onClose }) => {
  useGSAP(() => {
    const menu = "#mobile-menu";
    const menuSections = gsap.utils.toArray(".menu-section p");

    if (isOpen) {
      const tl = gsap.timeline();
      menuSections.forEach((section) => {
        gsap.set(section, { yPercent: 100 });
      });
      // open clip
      tl.to(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 0.28,
        ease: "power2.out",
      });

      // create SplitText for each section and animate their words with stagger
      menuSections.forEach((section, index) => {
        tl.to(
          section,
          {
            yPercent: 0,
            stagger: 0.06,
            duration: 0.45,
            ease: "power2.out",
          },
          index * 0.06 + 0.05
        );
      });
    }

    if (!isOpen) {
      // animate close
      const tlClose = gsap.timeline();

      // animate words down and then collapse the menu
      menuSections.forEach((section, index) => {
        tlClose.to(
          section,
          {
            yPercent: 100,
            stagger: 0.05,
            duration: 0.28,
            ease: "power2.in",
          },
          index * 0.03
        );
      });

      tlClose.to(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 0.32,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 h-screen w-full bg-background-black z-40 md:hidden"
      style={{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // initial closed state
      }}
    >
      <div className="flex flex-col h-full p-6 pt-20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ×
        </button>

        <nav className="flex flex-col gap-8 text-center mt-16">
          <a
            href="#home"
            onClick={onClose}
            className="menu-section text-white text-2xl font-roboto-regular hover:text-gray-300 transition overflow-hidden"
          >
            <p>Home</p>
          </a>
          <a
            href="#about"
            onClick={onClose}
            className="menu-section text-white text-2xl font-roboto-regular hover:text-gray-300 transition overflow-hidden"
          >
            <p>About</p>
          </a>
          <a
            href="#services"
            onClick={onClose}
            className="menu-section text-white text-2xl font-roboto-regular hover:text-gray-300 transition overflow-hidden"
          >
            <p>Services</p>
          </a>
          <a
            href="#portfolio"
            onClick={onClose}
            className="menu-section text-white text-2xl font-roboto-regular hover:text-gray-300 transition overflow-hidden"
          >
            <p>Portfolio</p>
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="menu-section text-white text-2xl font-roboto-regular hover:text-gray-300 transition overflow-hidden"
          >
            <p>Contact</p>
          </a>
          <a
            href="#testimonial"
            onClick={onClose}
            className="menu-section text-white text-2xl font-roboto-regular hover:text-gray-300 transition overflow-hidden"
          >
            <p>Testimonials</p>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
