import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Bangalore",
    image: "/images/users/user1.jpg",
    review:
      "Our Kerala trip was amazing! The Innova Crysta was spotless, the driver was professional, and the itinerary was perfectly planned. Highly recommended!",
  },
  {
    name: "Anjali Nair",
    location: "Kochi",
    image: "/images/users/user2.jpg",
    review:
      "Excellent service from airport pickup to sightseeing. Very comfortable journey throughout the trip.",
  },
  {
    name: "Mohammed Ali",
    location: "Chennai",
    image: "/images/users/user3.jpg",
    review:
      "Best taxi service I've experienced in Kerala. Transparent pricing and a friendly driver.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Happy Travellers
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by families, couples and solo travellers across Kerala.
          </p>

          <div className="flex justify-center items-center mt-6 gap-2">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                className="fill-yellow-400 text-yellow-400"
                size={22}
              />
            ))}

            <span className="font-semibold ml-2">
              4.9 / 5 Rating
            </span>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >

              <div className="flex items-center gap-4">

                <Image
                  src={review.image}
                  alt={review.name}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-xl">
                    {review.name}
                  </h3>

                  <p className="text-gray-500">
                    {review.location}
                  </p>

                </div>

              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{review.review}"
              </p>

              <div className="flex gap-1 mt-6">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}