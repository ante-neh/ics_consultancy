"use client";
// import Image from "next/image";
import Container from "./Container";
import { navigations } from "@/data/data";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#01013A]/70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <Container className="flex justify-between py-4 items-center max-w-[1300px]">
        <div className="h-max relative w-96">
          <img
            src="/assets/logoOne.png"
            alt="isc's logo"
          />
        </div>
        <nav className="hidden md:flex md:gap-1 xl:gap-4 items-center">
          {navigations.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="hover:bg-[#00EDCF] hover:rounded-lg px-2 py-1 hover:text-[#01013A] text-white font-euclid font-medium"
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        <button
          className="block md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-[#01013A] shadow-lg border-t border-white">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navigations.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="hover:bg-[#00EDCF] hover:rounded-lg px-4 py-2 hover:text-[#01013A] text-white font-euclid font-medium"
                target={nav.name === "Apply" ? "_blank" : undefined}
                rel={nav.name === "Apply" ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
