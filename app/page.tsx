import Starfield from "@/components/Starfield";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Vision from "@/components/Vision";
import People from "@/components/People";
import Institutions from "@/components/Institutions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Starfield />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Vision />
        <People />
        <Institutions />
      </main>
      <Footer />
    </>
  );
}
