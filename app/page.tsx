import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import UseCase from "./components/UseCase";
import WhatsAppButton from "./components/Wsbtn";

export default function Home() {
  return (
    <main>
      <Gallery />
      <Maps/>
      <UseCase />
      <WhatsAppButton />
    </main>
  );
}
