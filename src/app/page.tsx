import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050810]">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Products />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
