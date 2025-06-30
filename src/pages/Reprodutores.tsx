import React from "react";
import FloatingSocialButtons from "../components/FloatingSocialButtons";

const imagens = {
  Rosinha: "/src/reprodutoresCachorros/Rosinha2.jpg",
  Sarita: "/src/reprodutoresCachorros/Sarita2.jpg",
  Sugar: "/src/reprodutoresCachorros/Sugar.jpg",
  Lua: "/src/reprodutoresCachorros/EVA.avif",
  Potira: "/src/reprodutoresCachorros/Potira2.jpg",
  Lizye: "/src/reprodutoresCachorros/lizye.jpg",
  Papito: "/src/reprodutoresCachorros/papito.jpg",
  Jessy: "/src/reprodutoresCachorros/Jessy.jpg",
  Rihanna: "/src/reprodutoresCachorros/Rihanna.jpg",
  Aiko: "/src/reprodutoresCachorros/Aiko 2.jpg",
  Malibu: "/src/reprodutoresCachorros/Malibu.jpg",
  Tucker: "/src/reprodutoresCachorros/Tucker.jpg",
  Naomi: "/src/reprodutoresCachorros/Naomi.jpg",
  Imperatriz: "/src/reprodutoresCachorros/Imperatriz.jpg",
  Chika: "/src/reprodutoresCachorros/Chika.jpg",
  Jolie: "/src/reprodutoresCachorros/Jolie2.jpg",
  Lilibeth: "/src/reprodutoresCachorros/Lilibeth.jpg",
  Savana: "/src/reprodutoresCachorros/Savana.jpg",
  Rapunzel: "/src/reprodutoresCachorros/Rapunzel.jpg",
  Giovanna: "/src/reprodutoresCachorros/Giovanna.jpg",
  Liege: "/src/reprodutoresCachorros/Liege.jpg",
  cloe: "/src/reprodutoresCachorros/cloe.jpg",
  Lari: "/src/reprodutoresCachorros/Lari.jpg",
  Nevada: "/src/reprodutoresCachorros/Nevada.jpg",
  Bijuo: "/src/reprodutoresCachorros/Bijuo.jpg",
  Penélope: "/src/reprodutoresCachorros/Penélope.jpg",
  Berenice: "/src/reprodutoresCachorros/Berenice.jpg",
  Maju: "/src/reprodutoresCachorros/Maju.jpg",
  Pérola: "/src/reprodutoresCachorros/Pérola.jpg",
  Bob: "/src/reprodutoresCachorros/Bob.jpg",
  Amora: "/src/reprodutoresCachorros/Amora.jpg",
  Cavalier: "/src/reprodutoresCachorros/Cavalier.jpg",
};

export default function Reprodutores() {
  return (
    <div className="py-12 px-4 bg-blue-50 min-h-screen relative" id="reprodutores">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Nossos Reprodutores
        </h2>

        {/* CORGI */}
        <h3 className="text-2xl font-serif italic font-bold text-blue-800 mb-6 mt-10">Corgi</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Rosinha", "Sarita", "Sugar", "Lua", "Potira", "Papito", "Lizye", "Jessy", "Rihanna", "Aiko", "Malibu", "Tucker", "Naomi", "Imperatriz", "Chika"].map((nome, index) => {
            const imagem = imagens[nome] || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nome)}`;
            return (
              <div key={index} className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
                <img src={imagem} alt={nome} className="w-full h-52 object-cover object-bottom rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">{nome}</h3>
              </div>
            );
          })}
        </div>

        {/* AMERICAN CORGI */}
        <h3 className="text-2xl font-serif italic font-bold text-blue-800 mb-6 mt-10">American Corgi</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Jolie", "Lilibeth", "Savana", "Rapunzel"].map((nome, index) => {
            const imagem = imagens[nome] || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nome)}`;
            return (
              <div key={index} className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
                <img src={imagem} alt={nome} className="w-full h-52 object-cover object-bottom rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">{nome}</h3>
              </div>
            );
          })}
        </div>

        {/* BICHON FRISÉ */}
        <h3 className="text-2xl font-serif italic font-bold text-blue-800 mb-6 mt-10">Bichon Frisé</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Giovanna", "Liege", "cloe", "Lari", "Nevada"].map((nome, index) => {
            const imagem = imagens[nome] || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nome)}`;
            return (
              <div key={index} className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
                <img src={imagem} alt={nome} className="w-full h-52 object-cover object-bottom rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">{nome}</h3>
              </div>
            );
          })}
        </div>

        {/* SPITZ */}
        <h3 className="text-2xl font-serif italic font-bold text-blue-800 mb-6 mt-10">Spitz</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Bijuo", "Penélope", "Berenice", "Maju", "Pérola", "Bob", "Amora"].map((nome, index) => {
            const imagem = imagens[nome] || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nome)}`;
            return (
              <div key={index} className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
                <img src={imagem} alt={nome} className="w-full h-52 object-cover object-bottom rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">{nome}</h3>
              </div>
            );
          })}
        </div>

        {/* CAVALIER */}
        <h3 className="text-2xl font-serif italic font-bold text-blue-800 mb-6 mt-10">Cavalier</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Cavalier"].map((nome, index) => {
            const imagem = imagens[nome] || `https://via.placeholder.com/300x200?text=${encodeURIComponent(nome)}`;
            return (
              <div key={index} className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
                <img src={imagem} alt={nome} className="w-full h-52 object-cover object-bottom rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">{nome}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <FloatingSocialButtons />
    </div>
  );
}
