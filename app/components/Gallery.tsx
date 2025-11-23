"use client";

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Image 1 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
              alt="Lote 1"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1303090/pexels-photo-1303090.jpeg"
              alt="Lote 2"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg"
              alt="Lote 3"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg"
              alt="Naturaleza"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/681268/pexels-photo-681268.jpeg"
              alt="Terreno"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
              alt="Montañas"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
