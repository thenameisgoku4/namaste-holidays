"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-6">

        {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-3 transition duration-300 hover:opacity-90"
>
  {/* Logo */}
  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-green-100">
    <Image
      src="/images/logo.png"
      alt="Namaste Holidays"
      fill
      priority
      className="object-contain p-1"
    />
  </div>

  {/* Company Name */}
  <div className="leading-tight">
    <h1 className="text-2xl font-extrabold tracking-tight">
      <span className="text-green-700">Namaste</span>{" "}
      <span className="text-green-700">Holidays</span>
    </h1>

    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
      Kerala Taxi & Tour Services
    </p>
  </div>
</Link>

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