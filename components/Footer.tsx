"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-green-900">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Explore Kerala?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-green-100 leading-8">
            Experience comfortable journeys across Kerala with our premium
            Toyota Innova Crysta. Airport transfers, sightseeing, family
            trips and fully customized taxi services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-green-700 transition hover:scale-105"
            >
              Plan Your Trip
            </a>

            <a
              href="https://wa.me/917012090882"
              target="_blank"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-[#081C15] text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-green-400">
              Namaste Holidays
            </h2>

            <p className="mt-6 text-gray-400 leading-8">

              Premium Kerala Taxi & Tour Services with Toyota Innova Crysta.

              We provide airport transfers, sightseeing, family vacations,

              honeymoon trips and customized Kerala travel experiences.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>

              <li><a href="#destinations" className="hover:text-green-400 transition">Destinations</a></li>

              <li><a href="#tours" className="hover:text-green-400 transition">Taxi Tours</a></li>

              <li><a href="#fleet" className="hover:text-green-400 transition">Our Vehicle</a></li>

              <li><a href="#reviews" className="hover:text-green-400 transition">Reviews</a></li>

              <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>

            </ul>

          </div>

          {/* Destinations */}

          <div>

            <h3 className="text-xl font-semibold">
              Popular Destinations
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>Munnar</li>

              <li>Thekkady</li>

              <li>Alleppey</li>

              <li>Vagamon</li>

              <li>Wayanad</li>

              <li>Kovalam</li>

              <li>Varkala</li>

              <li>Athirappilly</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+91 7012090882</span>

              </div>

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+91 9446788929</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>namasteholidays@gmail.com</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>Kerala, India</span>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://instagram.com/"
                target="_blank"
                className="h-11 w-11 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                className="h-11 w-11 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://wa.me/917012090882"
                target="_blank"
                className="h-11 w-11 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-green-900">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm">

              © {new Date().getFullYear()} Namaste Holidays. All Rights Reserved.

            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-green-400 hover:text-white transition"
            >

              <ArrowUp size={18} />

              Back to Top

            </button>

          </div>

        </div>

      </footer>
    </>
  );
}