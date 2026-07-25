import Navbar from "@/components/navbar/Navbar";
import Archetypes from "@/components/pages/landing/Archetypes";
import Footer from "@/components/pages/landing/Footer";
import Hero from "@/components/pages/landing/Hero";
import HowItWorks from "@/components/pages/landing/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
        <Hero/>
        <HowItWorks/>
        <Archetypes/>
      </main>
      <Footer/>
    </div>
  );
}
