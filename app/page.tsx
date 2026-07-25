import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/pages/landing/Hero";
import HowItWorks from "@/components/pages/landing/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
        <Hero/>
        <HowItWorks/>
      </main>
    </div>
  );
}
