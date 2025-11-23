import Benefits from "./components/Beneficits";
import Gallery from "./components/Gallery";
import UseCase from "./components/UseCase";
import WhatsAppButton from "./components/Wsbtn";

export default function Home() {
  return (
    <main>
      <Gallery />
      <Benefits />
      <UseCase />
      <WhatsAppButton />
    </main>
  );
}
