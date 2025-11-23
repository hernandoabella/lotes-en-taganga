"use client";

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ubicación del Proyecto
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Estamos ubicados en una zona estratégica con excelente acceso, cerca de vías principales 
            y puntos de interés.
          </p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Map Image */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Medellin,Colombia&zoom=12&size=600x400&key=AIzaSyDUMMYKEY"
              alt="Mapa del proyecto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Location Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              A solo 10 minutos del casco urbano
            </h3>

            <ul className="text-gray-600 space-y-4">
              <li>✔ Acceso pavimentado casi hasta la entrada</li>
              <li>✔ Transporte público cercano</li>
              <li>✔ Rodeado de naturaleza y tranquilidad</li>
              <li>✔ Zona de alta valorización</li>
            </ul>

            <a
              href="#contacto"
              className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-semibold"
            >
              Solicitar ubicación exacta
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
