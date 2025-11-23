import Benefits from "./components/Beneficits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/Wsbtn";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <WhatsAppButton />
    </main>
  );
}
