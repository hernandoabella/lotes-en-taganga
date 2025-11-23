"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505238680356-667803448bb6"
          alt="Terreno campestre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Lotes Campestres en Venta
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Invierte en tierra. Alta valorización, escritura inmediata y precios desde <strong>$40 millones</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* CTA Main */}
          <a
            href="#precios"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold text-white shadow-lg"
          >
            Ver precios
          </a>

          {/* CTA Secondary */}
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            className="px-8 py-4 bg-white text-green-700 hover:bg-gray-200 transition rounded-full font-semibold shadow-lg"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
