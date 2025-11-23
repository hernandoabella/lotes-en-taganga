"use client";

import {
  FaHome,
  FaTree,
  FaWarehouse,
  FaCampground,
  FaHotel,
  FaSeedling,
} from "react-icons/fa";

export default function UsageOptions() {
  const items = [
    {
      title: "Construcción de Cabañas",
      icon: <FaCampground className="w-10 h-10 text-green-600" />,
      description: "Perfecto para quienes buscan crear espacios turísticos o vacacionales.",
    },
    {
      title: "Casa Campestre",
      icon: <FaHome className="w-10 h-10 text-green-600" />,
      description: "Ideal para una vivienda amplia, tranquila y rodeada de naturaleza.",
    },
    {
      title: "Hostal o Eco–Hotel",
      icon: <FaHotel className="w-10 h-10 text-green-600" />,
      description: "Zona excelente para proyectos de alojamiento y turismo ecológico.",
    },
    {
      title: "Glamping",
      icon: <FaWarehouse className="w-10 h-10 text-green-600" />,
      description: "Muy demandado para turismo de naturaleza y experiencias únicas.",
    },
    {
      title: "Agricultura",
      icon: <FaSeedling className="w-10 h-10 text-green-600" />,
      description: "Terreno fértil, perfecto para huertas, cultivos orgánicos y proyectos verdes.",
    },
    {
      title: "Áreas de Recreación",
      icon: <FaTree className="w-10 h-10 text-green-600" />,
      description: "Puedes hacer senderos, miradores y zonas de descanso.",
    },
  ];

  return (
    <section id="usos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Usos Permitidos del Lote
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Proyectos que puedes desarrollar según las características del terreno.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-center text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
