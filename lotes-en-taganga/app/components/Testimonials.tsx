"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Ramírez",
      role: "Comprador de lote 20x30",
      comment:
        "La zona es espectacular, segura y con un paisaje increíble. El proceso de compra fue rápido y transparente.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "María Fernández",
      role: "Inversionista",
      comment:
        "Excelente oportunidad de inversión. La valorización en esta zona ha sido impresionante durante los últimos años.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Julián Torres",
      role: "Propietario de lote 2000m2",
      comment:
        "Me enamoré del entorno natural. Las vías de acceso están muy buenas y el acompañamiento fue profesional.",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Testimonios de Compradores
          </h2>
          
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              {/* Photo */}
              <div className="flex justify-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Name + Role */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{t.role}</p>
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-center leading-relaxed">
                “{t.comment}”
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
