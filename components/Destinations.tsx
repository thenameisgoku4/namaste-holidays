const destinations = [
  {
    name: "Munnar",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Thekkady",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Alleppey",
    image:
      "https://images.unsplash.com/photo-1602301724507-6d4f7d2d9962?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kovalam",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Varkala",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Athirappilly",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Popular Destinations
          </h2>

          <p className="mt-4 text-gray-600">
            Discover Kerala's most loved tourist destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {destinations.map((place) => (
            <div
              key={place.name}
              className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {place.name}
                </h3>

                <button className="mt-5 text-green-700 font-semibold hover:underline">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}