import Image from "next/image";

const tours = [
  {
    title: "3 Days Kerala Tour",
    route: "Kochi → Munnar → Kochi",
    image: "/images/munnar.jpg",
    duration: "3 Days / 2 Nights",
  },
  {
    title: "4 Days Kerala Tour",
    route: "Kochi → Munnar → Thekkady",
    image: "/images/thekkady.jpg",
    duration: "4 Days / 3 Nights",
  },
  {
    title: "5 Days Kerala Tour",
    route: "Kochi → Munnar → Thekkady → Alleppey",
    image: "/images/alleppey.jpg",
    duration: "5 Days / 4 Nights",
  },
];

export default function TaxiTours() {
  return (
    <section
      id="tours"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/tours-bg.jpg"
        alt="Kerala Background"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Popular Kerala Taxi Tours
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Explore Kerala with our comfortable Toyota Innova Crysta.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (
            <div
              key={tour.title}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-green-500/20 transition-all duration-500"
            >

              {/* Tour Image */}
              <div className="relative h-60">

                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Card Content */}
              <div className="p-6">

                <span className="inline-block text-green-700 font-semibold">
                  {tour.duration}
                </span>

                <h3 className="text-2xl text-black font-bold mt-3">
                  {tour.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {tour.route}
                </p>

                <button
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Get Free Quote
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}