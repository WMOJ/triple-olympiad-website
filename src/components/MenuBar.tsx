"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const MenuContainer = styled.div<{ scrolled: string }>`
  position: fixed;
  z-index: 50;
  transition: all 0.5s ease-out;
  animation: fade-in-down-delay-3 1s ease-out;

  top: ${(props) => (props.scrolled === "true" ? "0.5rem" : "1.5rem")};
  left: ${(props) => (props.scrolled === "true" ? "2rem" : "1rem")};
  right: ${(props) => (props.scrolled === "true" ? "2rem" : "1rem")};

  @media (min-width: 768px) {
    top: ${(props) => (props.scrolled === "true" ? "1rem" : "3rem")};
    left: ${(props) => (props.scrolled === "true" ? "5rem" : "2.5rem")};
    right: ${(props) => (props.scrolled === "true" ? "5rem" : "2.5rem")};
  }

  @media (min-width: 1024px) {
    left: ${(props) => (props.scrolled === "true" ? "8rem" : "2.5rem")};
    right: ${(props) => (props.scrolled === "true" ? "8rem" : "2.5rem")};
  }

  @media (min-width: 1280px) {
    left: ${(props) => (props.scrolled === "true" ? "12rem" : "2.5rem")};
    right: ${(props) => (props.scrolled === "true" ? "12rem" : "2.5rem")};
  }
`;

const MenuDiv = styled.div<{ scrolled: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${(props) =>
    props.scrolled === "true" &&
    `
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(30px) saturate(200%);
    -webkit-backdrop-filter: blur(30px) saturate(200%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
  `}

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
    border-radius: 1.25rem;
  }
`;

export function MenuBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0 && lastScrollY === 0) {
        // Just started scrolling down from top - add delay
        timeoutId = setTimeout(() => {
          setScrolled(true);
        }, 150);
      } else if (currentScrollY === 0 && lastScrollY > 0) {
        // Just reached the top - clear timeout and reset immediately
        clearTimeout(timeoutId);
        setScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <MenuContainer scrolled={scrolled.toString()}>
      <MenuDiv scrolled={scrolled.toString()}>
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto md:h-10"
          />
        </div>

        {/* Centered Menu Items - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="text-white/70 hover:text-white transition-all font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            About
          </a>
          <a
            href="#schedule"
            className="text-white/70 hover:text-white transition-all font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            Schedule
          </a>
          <a
            href="#venue"
            className="text-white/70 hover:text-white transition-all font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            Venue
          </a>
          <a
            href="#faq"
            className="text-white/70 hover:text-white transition-all font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            FAQ
          </a>
          <a
            href="#team"
            className="text-white/70 hover:text-white transition-all font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            Team
          </a>
        </nav>

        {/* Right side - Login button on desktop, hamburger on mobile */}
        <div className="flex items-center">
          {/* Login Button - Hidden on mobile */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSekrMwHMV2sJHNmuIWCgMm3ndVJ_n0CRSNz753GqwgN2cAtvw/viewform?usp=dialog"
            target="_blank"
            className="hidden md:block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
          >
            Register
          </a>

          {/* Mobile Menu Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSekrMwHMV2sJHNmuIWCgMm3ndVJ_n0CRSNz753GqwgN2cAtvw/viewform?usp=dialog"
            target="_blank"
            className="md:hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-emerald-500/50"
          >
            Apply Now
          </a>
        </div>
      </MenuDiv>
    </MenuContainer>
  );
}
