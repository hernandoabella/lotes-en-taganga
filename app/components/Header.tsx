"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-green-700">
          MiProyecto
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-green-700 transition">Inicio</a>
          <a href="#beneficios" className="hover:text-green-700 transition">Beneficios</a>
          <a href="#ubicacion" className="hover:text-green-700 transition">Ubicación</a>
          <a href="#precios" className="hover:text-green-700 transition">Precios</a>
          <a href="#contacto" className="hover:text-green-700 transition">Contacto</a>

          <a
            href="https://wa.me/573001234567"
            target="_blank"
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
             onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform transition md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="text-3xl mb-6 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        <nav className="flex flex-col gap-6 text-gray-700 text-lg font-medium">
          <a href="#inicio" onClick={() => setOpen(false)} className="hover:text-green-700">Inicio</a>
          <a href="#beneficios" onClick={() => setOpen(false)} className="hover:text-green-700">Beneficios</a>
          <a href="#ubicacion" onClick={() => setOpen(false)} className="hover:text-green-700">Ubicación</a>
          <a href="#precios" onClick={() => setOpen(false)} className="hover:text-green-700">Precios</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="hover:text-green-700">Contacto</a>

          <a
            href="https://wa.me/573001234567"
            target="_blank"
            className="px-4 py-2 bg-green-600 text-white rounded-full text-center hover:bg-green-700 transition mt-4"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
