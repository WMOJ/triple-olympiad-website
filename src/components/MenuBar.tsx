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
  border-radius: 0.75rem;
  transition: all 0.5s ease-out;

  ${(props) =>
    props.scrolled === "true" &&
    `
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px) saturate(200%);
    -webkit-backdrop-filter: blur(20px) saturate(200%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  `}

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
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
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-white opacity-50 hover:opacity-75 transition-all font-medium"
          >
            About
          </a>
          <a
            href="#schedule"
            className="text-white opacity-50 hover:opacity-75 transition-all font-medium"
          >
            Schedule
          </a>
          <a
            href="#venue"
            className="text-white opacity-50 hover:opacity-75 transition-all font-medium"
          >
            Venue
          </a>
          <a
            href="#faq"
            className="text-white opacity-50 hover:opacity-75 transition-all font-medium"
          >
            FAQ
          </a>
          <a
            href="#team"
            className="text-white opacity-50 hover:opacity-75 transition-all font-medium"
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
            rel="noopener noreferrer"
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Register
          </a>

          {/* Mobile Menu Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSekrMwHMV2sJHNmuIWCgMm3ndVJ_n0CRSNz753GqwgN2cAtvw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            Apply Now
          </a>
        </div>
      </MenuDiv>
    </MenuContainer>
  );
}
