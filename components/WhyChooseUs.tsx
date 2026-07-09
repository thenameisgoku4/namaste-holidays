import {
  ShieldCheck,
  Car,
  Headphones,
  MapPinned,
  BadgeIndianRupee,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: <Car size={38} />,
    title: "Premium Innova Crysta",
    description: "Clean, spacious and comfortable taxi for every journey.",
  },
  {
    icon: <MapPinned size={38} />,
    title: "Kerala Local Experts",
    description: "Travel with experienced local drivers who know Kerala well.",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Safe & Reliable",
    description: "Professional drivers with a focus on your safety.",
  },
  {
    icon: <BadgeIndianRupee size={38} />,
    title: "Transparent Pricing",
    description: "No hidden charges. Fair and honest pricing.",
  },
  {
    icon: <Headphones size={38} />,
    title: "24×7 Support",
    description: "We're available whenever you need assistance.",
  },
  {
    icon: <Clock3 size={38} />,
    title: "Always On Time",
    description: "Timely pickups and smooth travel experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="why-us"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/why-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Why Choose Namaste Holidays?
          </h2>

          <p className="text-gray-300 mt-5 text-lg">
            Experience comfortable, safe and memorable journeys across Kerala.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-green-700/20 transition duration-300"
            >
              <div className="text-green-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-3 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}