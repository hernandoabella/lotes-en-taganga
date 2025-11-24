"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Gallery() {
  const images = [
    { src: "/images/img1.jpg", alt: "Lote 1" },
    { src: "/images/img2.jpg", alt: "Lote 2" },
    { src: "/images/img3.jpg", alt: "Lote 3" },
    { src: "/images/img4.jpg", alt: "Naturaleza" },
    { src: "/images/img5.jpg", alt: "Terreno" },
    { src: "/images/img6.jpg", alt: "Montañas" },
    { src: "/images/img7.jpg", alt: "Lote 1" },
    { src: "/images/img8.jpg", alt: "Lote 2" },
    { src: "/images/img9.jpg", alt: "Lote 3" },
    { src: "/images/img10.jpg", alt: "Naturaleza" },
    { src: "/images/img11.jpg", alt: "Terreno" },
    { src: "/images/img12.jpg", alt: "Montañas" },
    { src: "/images/img13.jpg", alt: "Lote 1" },
    { src: "/images/img14.jpg", alt: "Lote 2" },
    { src: "/images/img15.jpg", alt: "Lote 3" },
    { src: "/images/img16.jpg", alt: "Naturaleza" },
    { src: "/images/img17.jpg", alt: "Terreno" },
    { src: "/images/img18.jpg", alt: "Montañas" },
    { src: "/images/img19.jpg", alt: "Montañas" },
    { src: "/images/img20.jpg", alt: "Lote 1" },
    { src: "/images/img21.jpg", alt: "Lote 2" },
    { src: "/images/img22.jpg", alt: "Lote 3" },
    { src: "/images/img23.jpg", alt: "Naturaleza" },
    { src: "/images/img24.jpg", alt: "Terreno" },
    { src: "/images/img25.jpg", alt: "Montañas" },
    { src: "/images/img26.jpg", alt: "Montañas" },
    { src: "/images/img27.jpg", alt: "Montañas" },
    { src: "/images/img29.jpg", alt: "Lote 2" },
    { src: "/images/img30.jpg", alt: "Lote 3" },
    { src: "/images/img31.jpg", alt: "Naturaleza" },
  ];

  const [current, setCurrent] = useState<number | null>(null);

  const goNext = () => {
    if (current === null) return;
    setCurrent((current + 1) % images.length);
  };

  const goPrev = () => {
    if (current === null) return;
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setCurrent(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {current !== null && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => setCurrent(null)}
          >
            {/* Stop click propagation so clicking the image doesn't close */}
            <div className="relative max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
              
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="max-h-[80vh] rounded-lg shadow-xl"
              />

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-white text-3xl"
                onClick={() => setCurrent(null)}
              >
                <FaTimes />
              </button>

              {/* Left Arrow */}
              <button
                className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-4xl px-4"
                onClick={goPrev}
              >
                <FaChevronLeft />
              </button>

              {/* Right Arrow */}
              <button
                className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-4xl px-4"
                onClick={goNext}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
