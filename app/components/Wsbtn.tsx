"use client";

export default function WhatsAppButton() {
  const phone = "573001234567"; // <-- cámbialo por tu número real
  const message = encodeURIComponent("Hola, estoy interesado en los lotes. ¿Me das más información?");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6.17-1.56A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52ZM12 21.82c-2.1 0-4.15-.58-5.92-1.67l-.43-.26-3.66.93.98-3.55-.28-.46A9.76 9.76 0 0 1 2.18 12c0-5.41 4.41-9.82 9.82-9.82 2.63 0 5.1 1.03 6.95 2.9a9.77 9.77 0 0 1 2.87 6.92c0 5.41-4.41 9.82-9.82 9.82Zm5.55-7.36c-.3-.14-1.77-.87-2.05-.97-.27-.1-.47-.14-.67.14-.2.29-.77.97-.95 1.17-.17.2-.35.22-.64.07-.29-.14-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.14.2 2.11 3.22 5.1 4.51.71.31 1.26.5 1.69.64.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.24-.71.24-1.32.17-1.42-.07-.1-.27-.17-.57-.31Z" />
      </svg>

      WhatsApp
    </a>
  );
}
