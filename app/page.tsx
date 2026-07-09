import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import TaxiTours from "@/components/TaxiTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Vehicle from "@/components/Vehicle";
import Reviews from "@/components/Reviews";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <TaxiTours />
      <WhyChooseUs />
      <Vehicle />
      <Reviews />
      <Enquiry />
      <Footer />
    </>
  );
}