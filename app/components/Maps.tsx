"use client";

export default function Map() {
  const lat = 11.2713904;
  const lng = -74.1844314;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=18&output=embed`;

  return (
    <section id="ubicacion" className="w-full">
      <iframe
        title="Ubicación del lote en Dumbirá, Taganga"
        src={embedSrc}
        className="w-full h-96 border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}