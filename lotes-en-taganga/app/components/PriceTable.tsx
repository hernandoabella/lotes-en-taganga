"use client";

export default function PriceTable() {
  return (
    <section
      id="precios"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tabla de Precios
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Lotes disponibles con precios actualizados y áreas variadas 
            para diferentes necesidades.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-4 px-6 font-semibold">Lote</th>
                <th className="py-4 px-6 font-semibold">Medidas</th>
                <th className="py-4 px-6 font-semibold">Área</th>
                <th className="py-4 px-6 font-semibold">Precio</th>
                <th className="py-4 px-6 font-semibold">Acción</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">

              {/* Lote A */}
              <tr className="border-b">
                <td className="py-4 px-6">Lote A</td>
                <td className="py-4 px-6">20 × 30 m</td>
                <td className="py-4 px-6">600 m²</td>
                <td className="py-4 px-6 font-semibold">$40.000.000</td>
                <td className="py-4 px-6">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                  >
                    Consultar
                  </a>
                </td>
              </tr>

              {/* Lote B */}
              <tr className="border-b">
                <td className="py-4 px-6">Lote B</td>
                <td className="py-4 px-6">20 × 50 m</td>
                <td className="py-4 px-6">1.000 m²</td>
                <td className="py-4 px-6 font-semibold">$80.000.000</td>
                <td className="py-4 px-6">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                  >
                    Consultar
                  </a>
                </td>
              </tr>

              {/* Lote C */}
              <tr className="border-b">
                <td className="py-4 px-6">Lote C</td>
                <td className="py-4 px-6">—</td>
                <td className="py-4 px-6">2.000 m²</td>
                <td className="py-4 px-6 font-semibold">$150.000.000</td>
                <td className="py-4 px-6">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                  >
                    Consultar
                  </a>
                </td>
              </tr>

              {/* Lote D */}
              <tr>
                <td className="py-4 px-6">Lote D</td>
                <td className="py-4 px-6">—</td>
                <td className="py-4 px-6">10.000 m²</td>
                <td className="py-4 px-6 font-semibold">$300.000.000</td>
                <td className="py-4 px-6">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                  >
                    Consultar
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Notes */}
        <p className="text-gray-600 text-sm mt-6 text-center">
          * Precios sujetos a cambio sin previo aviso.  
        </p>
      </div>
    </section>
  );
}
