"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-green-700">
            Namaste Holidays
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-green-700 transition">
            Home
          </a>

          <a href="#destinations" className="hover:text-green-700 transition">
            Destinations
          </a>

          <a href="#tours" className="hover:text-green-700 transition">
            Taxi Tours
          </a>

          <a href="#fleet" className="hover:text-green-700 transition">
            Our Vehicle
          </a>

          <a href="#reviews" className="hover:text-green-700 transition">
            Reviews
          </a>

          <a href="#contact" className="hover:text-green-700 transition">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <a
            href="tel:+917012090882"
            className="rounded-full border border-green-700 px-5 py-2 font-medium text-green-700 hover:bg-green-700 hover:text-white transition"
          >
            📞 Call
          </a>

          <a
            href="https://wa.me/917012090882"
            target="_blank"
            className="rounded-full bg-green-700 px-5 py-2 font-medium text-white hover:bg-green-800 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a href="#home">Home</a>
            <a href="#destinations">Destinations</a>
            <a href="#tours">Taxi Tours</a>
            <a href="#fleet">Our Vehicle</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>

            <a
              href="tel:+917012090882"
              className="rounded-lg bg-green-700 text-white py-3 text-center"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/917012090882"
              target="_blank"
              className="rounded-lg bg-green-600 text-white py-3 text-center"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}