import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import People from "@/components/People";
import Institutions from "@/components/Institutions";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <People />
        <Institutions />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
