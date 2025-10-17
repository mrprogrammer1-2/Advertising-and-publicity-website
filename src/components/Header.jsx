import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Menu from "./Menu";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { y: currentScrollY } = useWindowScroll();
  const headerRef = useRef(null);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsHeaderVisible(true);
      headerRef.current.classList.remove("floating-nav");
      console.log("hello");
    } else if (currentScrollY > lastScrollY) {
      setIsHeaderVisible(false);
      headerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsHeaderVisible(true);
      headerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useGSAP(
    () => {
      gsap.to(headerRef.current, {
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0,
        duration: 0.2,
      });
    },
    { dependencies: [isHeaderVisible] }
  );

  return (
    <header
      ref={headerRef}
      id="header"
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 px-4"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img
                src="/images/logo.svg"
                alt="pixel & pulse"
                className="w-32 max-h-full"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    className="transition hover:text-gray-500/75 uppercase font-roboto-regular text-black text-xl"
                    href="#home"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-gray-500/75 uppercase font-roboto-regular text-black text-xl"
                    href="#about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-gray-500/75 uppercase font-roboto-regular text-black text-xl"
                    href="#services"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-gray-500/75 uppercase font-roboto-regular text-black text-xl"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-gray-500/75 uppercase font-roboto-regular text-black text-xl"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-gray-500/75 uppercase font-roboto-regular text-black text-xl"
                    href="#testimonial"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
