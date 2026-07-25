import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/pages/landing/Hero";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
        <Hero/>
      </main>
    </div>
  );
}
