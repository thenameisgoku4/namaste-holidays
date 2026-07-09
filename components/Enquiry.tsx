"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    persons: "",
  });

  const sendWhatsApp = () => {
    const message = `Hello Namaste Holidays,

Name: ${form.name}
Phone: ${form.phone}
Pickup Location: ${form.pickup}
Destination: ${form.destination}
Travel Date: ${form.date}
Travellers: ${form.persons}

I would like a quotation for my Kerala trip.`;

    window.open(
      `https://wa.me/917012090882?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/enquiry-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="text-white">

            <span className="uppercase tracking-widest text-green-400">
              Plan Your Trip
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Let's Plan Your
              <br />
              Kerala Holiday
            </h2>

            <p className="mt-6 text-gray-200 leading-8">
              Tell us your travel plans and we'll prepare a customized
              Kerala taxi itinerary for you.
            </p>

            <div className="mt-10 space-y-4">

              <div>✔ Customized Trips</div>
              <div>✔ Airport Pickup & Drop</div>
              <div>✔ Family & Group Tours</div>
              <div>✔ Innova Crysta Available</div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-black">

            <h3 className="text-3xl font-bold mb-8 text-black">
              Send Your Enquiry
            </h3>

            <div className="grid gap-5">

              <input
                placeholder="Your Name"
                className="border rounded-xl p-4 text-black"
                onChange={(e)=>setForm({...form,name:e.target.value})}
              />

              <input
                placeholder="Phone Number"
                className="border rounded-xl p-4 text-black"
                onChange={(e)=>setForm({...form,phone:e.target.value})}
              />

              <input
                placeholder="Pickup Location"
                className="border rounded-xl p-4 text-black"
                onChange={(e)=>setForm({...form,pickup:e.target.value})}
              />

              <input
                placeholder="Destination"
                className="border rounded-xl p-4 text-black"
                onChange={(e)=>setForm({...form,destination:e.target.value})}
              />

              <input
                type="date"
                className="border rounded-xl p-4 text-black"
                onChange={(e)=>setForm({...form,date:e.target.value})}
              />

              <input
                placeholder="Number of Travellers"
                className="border rounded-xl p-4 text-black"
                onChange={(e)=>setForm({...form,persons:e.target.value})}
              />

              <button
                onClick={sendWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-4 flex justify-center items-center gap-3 font-semibold"
              >
                <MessageCircle size={22}/>
                Get Quote on WhatsApp
              </button>

              <a
                href="tel:+917012090882"
                className="border-2 border-green-600 text-green-700 rounded-xl p-4 flex justify-center items-center gap-3 font-semibold hover:bg-green-600 hover:text-white transition"
              >
                <Phone size={22}/>
                Call Now
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}