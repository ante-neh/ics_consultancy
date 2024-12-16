"use client";
import Image from "next/image";
import Container from "./Container";
import { navigations } from "@/data/nav";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md sticky top-0 z-50">
      <Container className="flex justify-between py-4 items-center">
        <Image
          src="/assets/logo.svg"
          width={80}
          height={80}
          alt="isc's logo"
          priority
        />
        <nav className="hidden md:flex gap-4 items-center">
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
