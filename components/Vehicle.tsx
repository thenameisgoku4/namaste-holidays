import Image from "next/image";
import {
  Car,
  Snowflake,
  Users,
  Briefcase,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "7 Seater Comfort",
  },
  {
    icon: Snowflake,
    title: "Air Conditioned",
  },
  {
    icon: Briefcase,
    title: "Large Luggage Space",
  },
  {
    icon: ShieldCheck,
    title: "Safe Journey",
  },
  {
    icon: BadgeCheck,
    title: "Professional Driver",
  },
  {
    icon: Car,
    title: "Well Maintained",
  },
];

export default function Vehicle() {
  return (
    <section
      id="fleet"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div className="text-white">

            <span className="uppercase tracking-widest text-green-200">
              Our Vehicle
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Toyota
              <br />
              Innova Crysta
            </h2>

            <p className="mt-6 text-green-100 leading-8 text-lg">
              Experience Kerala with unmatched comfort.
              Our Innova Crysta is spacious, luxurious,
              air-conditioned and maintained to the highest
              standards for long-distance travel.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              {features.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-4"
                  >

                    <Icon size={22} />

                    <span>{item.title}</span>

                  </div>

                );

              })}

            </div>

            <a
              href="https://wa.me/917012090882"
              target="_blank"
              className="inline-block mt-10 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book This Vehicle
            </a>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <Image
              src="/images/innova.png"
              alt="Toyota Innova Crysta"
              width={900}
              height={600}
              className="drop-shadow-[0_40px_50px_rgba(0,0,0,0.45)] hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}