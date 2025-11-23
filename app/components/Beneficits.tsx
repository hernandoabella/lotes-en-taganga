"use client";

import { FaMapMarkedAlt, FaBolt, FaRegCheckCircle, FaRoad, FaLeaf } from "react-icons/fa";

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Beneficios del Proyecto
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Vive o invierte con tranquilidad. Nuestro proyecto campestre ofrece 
          características únicas que garantizan comodidad, valorización y seguridad.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 1 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
            <FaMapMarkedAlt className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excelente Ubicación</h3>
            <p className="text-gray-600">
              A minutos del pueblo, con acceso rápido y seguro.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
            <FaRoad className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Acceso Pavimentado</h3>
            <p className="text-gray-600">
              Vías en perfecto estado para llegar sin inconvenientes.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
            <FaBolt className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Servicios Públicos</h3>
            <p className="text-gray-600">
              Agua y luz disponibles para construir sin demoras.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
            <FaRegCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Escritura Inmediata</h3>
            <p className="text-gray-600">
              Compra segura y directa. Sin intermediarios.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
            <FaLeaf className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ambiente Natural</h3>
            <p className="text-gray-600">
              Aire puro, vistas espectaculares y tranquilidad.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb"
              className="w-16 mx-auto mb-4 rounded-full"
              alt="Calidad de vida"
            />
            <h3 className="text-xl font-semibold mb-2">Alta Valorización</h3>
            <p className="text-gray-600">
              Un proyecto que aumenta su valor año tras año.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
