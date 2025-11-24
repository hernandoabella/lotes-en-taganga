"use client";

import { 
  FaMapMarkedAlt, 
  FaBolt, 
  FaRoad, 
  FaLeaf,
  FaHome,
  FaTree,
  FaWarehouse,
  FaCampground,
  FaHotel,
  FaSeedling,
  FaChartLine,
  FaShieldAlt
} from "react-icons/fa";

export default function InvestmentPotential() {
  const benefits = [
    {
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      title: "Ubicación Privilegiada",
      description: "En la zona más exclusiva de Dumbira, a solo minutos de las playas y con las mejores vistas de Taganga.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaRoad className="w-8 h-8" />,
      title: "Fácil Acceso",
      description: "Vías en perfecto estado que garantizan acceso fácil y seguro durante todo el año.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Servicios Disponibles",
      description: "Agua, energía y alcantarillado listos para construir inmediatamente.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Alta Plusvalía",
      description: "Zona en desarrollo acelerado con crecimiento de valor garantizado.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Entorno Natural",
      description: "Rodeado de naturaleza pero con todas las comodidades urbanas cercanas.",
      color: "from-green-600 to-lime-500"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Seguridad y Tranquilidad",
      description: "Área segura, perfecta para inversión a largo plazo.",
      color: "from-gray-600 to-blue-600"
    }
  ];

  const usageOptions = [
    {
      icon: <FaHome className="w-10 h-10" />,
      title: "Casa Familiar",
      description: "Construye tu hogar soñado con vistas panorámicas al mar y montañas.",
      potential: "Alta plusvalía residencial",
      color: "hover:border-blue-500"
    },
    {
      icon: <FaHotel className="w-10 h-10" />,
      title: "Eco-Hotel",
      description: "Capitaliza el turismo en Taganga con alojamiento sostenible.",
      potential: "Rentabilidad turística comprobada",
      color: "hover:border-green-500"
    },
    {
      icon: <FaCampground className="w-10 h-10" />,
      title: "Cabañas Turísticas",
      description: "Proyecto ideal para renta vacacional en alta demanda.",
      potential: "Retorno de inversión rápido",
      color: "hover:border-yellow-500"
    },
    {
      icon: <FaWarehouse className="w-10 h-10" />,
      title: "Glamping Premium",
      description: "Experiencias únicas de lujo en la naturaleza.",
      potential: "Mercado en crecimiento explosivo",
      color: "hover:border-purple-500"
    },
    {
      icon: <FaSeedling className="w-10 h-10" />,
      title: "Agricultura Orgánica",
      description: "Aprovecha el terreno fértil para cultivos premium.",
      potential: "Mercado de productos orgánicos",
      color: "hover:border-lime-500"
    },
    {
      icon: <FaTree className="w-10 h-10" />,
      title: "Centro de Retiros",
      description: "Espacio para yoga, wellness y eventos especiales.",
      potential: "Turismo de bienestar en auge",
      color: "hover:border-cyan-500"
    }
  ];

  return (
    <section id="inversion" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Oportunidad de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Inversión Única</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre por qué este lote en Dumbira es la inversión más inteligente 
            que puedes hacer en Taganga hoy. Combina beneficios inmediatos con 
            potencial ilimitado.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ventajas Exclusivas del Terreno
            </h3>
            <p className="text-gray-600 text-lg">
              Características que garantizan el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
        </div>

        {/* Usage Options Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Potencial de Desarrollo Ilimitado
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transforma este terreno en un negocio exitoso. Estas son solo algunas 
              de las oportunidades que puedes desarrollar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usageOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent ${option.color} group hover:scale-105`}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-green-50 transition-colors">
                    {option.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-center text-gray-800 mb-3">
                  {option.title}
                </h4>

                <p className="text-center text-gray-600 mb-4 leading-relaxed">
                  {option.description}
                </p>

                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {option.potential}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
}