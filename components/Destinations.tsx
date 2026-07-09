"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Munnar",
    subtitle: "Tea Gardens & Misty Hills",
    image: "/images/destination/munnar.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Thekkady",
    subtitle: "Wildlife Sanctuary",
    image: "/images/destination/thekkady.png",
    className: "",
  },
  {
    name: "Alleppey",
    subtitle: "Backwaters",
    image: "/images/destination/alleppey.png",
    className: "md:col-span-2",
  },
  {
    name: "Vagamon",
    subtitle: "Rolling Meadows",
    image: "/images/destination/vagamon.png",
    className: "",
  },
  {
    name: "Wayanad",
    subtitle: "Nature & Adventure",
    image: "/images/destination/wayanad.png",
    className: "",
  },
  {
    name: "Athirappilly",
    subtitle: "Waterfalls",
    image: "/images/destination/athirapally.png",
    className: "",
  },
  {
    name: "Kovalam",
    subtitle: "Golden Beach",
    image: "/images/destination/kovalam.png",
    className: "md:row-span-2",
  },
  {
    name: "Varkala",
    subtitle: "Cliff Beach",
    image: "/images/destination/varkala.png",
    className: "",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="text-green-600 uppercase tracking-[4px] font-semibold">
            Discover Kerala
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            God's Own Country
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-500 text-lg leading-8">
            Explore Kerala's breathtaking hill stations,
            beaches, waterfalls and backwaters with
            comfortable taxi services from Namaste Holidays.
          </p>

        </motion.div>

        {/* Masonry Grid */}

       <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6">

  {destinations.map((place, index) => (

    <motion.div
      key={place.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-[28px] shadow-xl cursor-pointer ${place.className}`}
    >

      <Image
        src={place.image}
        alt={place.name}
        fill
        className="object-cover duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-black/80 transition"></div>

      <div className="absolute top-5 left-5">

        <div className="rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-white flex items-center gap-2 text-sm">

          <MapPin size={15} />

          Kerala

        </div>

      </div>

      <div className="absolute bottom-0 p-8">

        <p className="text-green-300">
          {place.subtitle}
        </p>

        <h3 className="mt-2 text-4xl font-bold text-white">
          {place.name}
        </h3>

        <div className="mt-5 flex items-center gap-2 text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500">

          Discover

          <ArrowUpRight size={20} />

        </div>

      </div>

    </motion.div>

  ))}

</div>
<div className="mt-24 rounded-[36px] bg-gradient-to-r from-green-700 to-green-900 text-white overflow-hidden">

  <div className="max-w-5xl mx-auto px-10 py-16 text-center">

    <h2 className="text-4xl font-bold">
      Planning a Trip Across Kerala?
    </h2>

    <p className="mt-5 text-lg text-green-100 max-w-3xl mx-auto leading-8">

      Don't worry if your destination isn't listed above.

      Namaste Holidays provides comfortable taxi services
      throughout Kerala with our premium Toyota Innova Crysta.

    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <a
        href="#contact"
        className="rounded-full bg-white text-green-800 px-8 py-4 font-semibold hover:scale-105 transition"
      >
        Plan My Trip
      </a>

      <a
        href="https://wa.me/917012090882"
        target="_blank"
        className="rounded-full border border-white px-8 py-4 hover:bg-white hover:text-green-800 transition"
      >
        WhatsApp Us
      </a>

    </div>

  </div>

</div>
            

      </div>
    </section>
  );
}