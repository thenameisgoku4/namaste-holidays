import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <Image
        src="/images/keralabg.png"
        alt="Kerala"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <span className="inline-block bg-green-600 px-5 py-2 rounded-full text-sm font-medium shadow-lg">
              🚖 Kerala Taxi & Holiday Services
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              Explore Kerala
              <br />
              with
              <span className="text-green-400"> Namaste Holidays</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-200 leading-8">
              Experience God's Own Country in our premium Toyota Innova Crysta.
              We provide airport transfers, sightseeing, family trips,
              honeymoon tours and completely customized Kerala taxi services.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                <p>Airport Pickup & Drop</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                <p>Customized Kerala Trips</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                <p>Professional Drivers</p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-green-600 hover:bg-green-600 px-8 py-4 font-semibold transition"
              >
                Plan Your Trip
              </a>

              <a
                href="https://wa.me/917012090882"
                target="_blank"
                className="rounded-full border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
              >
                WhatsApp Us
              </a>

            </div>

          </div>



        </div>

      </div> 

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <span className="text-3xl">⌄</span>
      </div>

    </section>
  );
}