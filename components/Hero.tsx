"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <Image
          src="/images/keralabg.png"
          alt="Kerala"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"></div>

      {/* Decorative Blur */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-green-500/20 blur-[120px]"></div>

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-green-400/40 bg-green-600/20 backdrop-blur-md px-5 py-2 text-sm text-green-200">
            🚖 Kerala Taxi & Holiday Services
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">

            Explore Kerala

            <br />

            <span className="text-green-400">
              with Comfort
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg md:text-xl leading-9 text-gray-200 max-w-2xl">

            Discover God's Own Country in comfort with
            <span className="font-semibold text-white">
              {" "}Namaste Holidays{" "}
            </span>

            offering airport transfers, sightseeing,
            family trips and fully customized Kerala taxi tours.

          </p>

          {/* Buttons */}

          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
          >

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:bg-green-700 hover:scale-105"
            >
              Plan Your Trip

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </a>

            <a
              href="https://wa.me/917012090882"
              target="_blank"
              className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
            >

              <MessageCircle size={20} />

              WhatsApp Us

            </a>

          </motion.div>

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">

            <div>
              <h2 className="text-4xl font-bold text-green-400">
                500+
              </h2>

              <p className="mt-2 text-gray-300">
                Happy Travellers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">
                24×7
              </h2>

              <p className="mt-2 text-gray-300">
                Customer Support
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">
                100%
              </h2>

              <p className="mt-2 text-gray-300">
                Safe Journey
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >

        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">

          <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>

        </div>

      </motion.div>

    </section>
  );
}