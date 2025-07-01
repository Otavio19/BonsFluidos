import React from "react";
import FloatingSocialButtons from "../components/FloatingSocialButtons";

const imagens = {
  Rosinha: "/src/reprodutoresCachorros/Rosinha2.png",
  Sarita: "/src/reprodutoresCachorros/Sarita2.png",
  Sugar: "/src/reprodutoresCachorros/Sugar.png",
  Lua: "/src/reprodutoresCachorros/EVA.png",
  Potira: "/src/reprodutoresCachorros/Potira2.png",
  Lizye: "/src/reprodutoresCachorros/lizye.png",
  Papito: "/src/reprodutoresCachorros/papito.png",
  Jessy: "/src/reprodutoresCachorros/Jessy.png",
  Rihanna: "/src/reprodutoresCachorros/Rihanna.png",
  Aiko: "/src/reprodutoresCachorros/Aiko 2.png",
  Malibu: "/src/reprodutoresCachorros/Malibu.png",
  Tucker: "/src/reprodutoresCachorros/Tucker.png",
  Naomi: "/src/reprodutoresCachorros/Naomi.png",
  Imperatriz: "/src/reprodutoresCachorros/Imperatriz.png",
  Chika: "/src/reprodutoresCachorros/Chika.png",
  Jolie: "/src/reprodutoresCachorros/Jolie2.png",
  Lilibeth: "/src/reprodutoresCachorros/Lilibeth.png",
  Savana: "/src/reprodutoresCachorros/Savana.png",
  Rapunzel: "/src/reprodutoresCachorros/Rapunzel.png",
  Giovanna: "/src/reprodutoresCachorros/Giovanna.png",
  Liege: "/src/reprodutoresCachorros/Liege.png",
  cloe: "/src/reprodutoresCachorros/cloe.png",
  Lari: "/src/reprodutoresCachorros/Lari.png",
  Nevada: "/src/reprodutoresCachorros/Nevada.png",
  Bijuo: "/src/reprodutoresCachorros/Bijuo.png",
  Penélope: "/src/reprodutoresCachorros/Penélope.png",
  Berenice: "/src/reprodutoresCachorros/Berenice.png",
  Maju: "/src/reprodutoresCachorros/Maju.png",
  Pérola: "/src/reprodutoresCachorros/Pérola.png",
  Bob: "/src/reprodutoresCachorros/Bob.png",
  Amora: "/src/reprodutoresCachorros/Amora.png",
  Cavalier: "/src/reprodutoresCachorros/Cavalier.png",
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
