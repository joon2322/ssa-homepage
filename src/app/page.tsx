import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Program from "@/components/Program";
import Screenshots from "@/components/Screenshots";
import Feedback from "@/components/Feedback";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Program />
        <Screenshots />
        <Feedback />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
