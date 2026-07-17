import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}
