import React from "react";
import FloatingSocialButtons from "../components/FloatingSocialButtons";

import rosinha from "../../src/reprodutoresCachorros/Rosinha2.png"
import sarita from "../../src/reprodutoresCachorros/Sugar.png"
import sugar from "../../src/reprodutoresCachorros/Sugar.png"
import lua from "../../src/reprodutoresCachorros/EVA.png"
import potira from "../../src/reprodutoresCachorros/Potira2.png"
import lizye from "../../src/reprodutoresCachorros/lizye.png"
import papito from "../../src/reprodutoresCachorros/papito.png"
import jessy from "../../src/reprodutoresCachorros/Jessy.png"
import rihanna from "../../src/reprodutoresCachorros/Rihanna.png"
import aiko from "../../src/reprodutoresCachorros/Aiko 2.png"
import malibu from "../../src/reprodutoresCachorros/Malibu.png"
import tucker from "../../src/reprodutoresCachorros/Tucker.png"
import naomi from "../../src/reprodutoresCachorros/Naomi.png"
import imperatriz from "../../src/reprodutoresCachorros/Imperatriz.png"
import chika from "../../src/reprodutoresCachorros/Chika.png"
import jolie from "../../src/reprodutoresCachorros/Jolie2.png"
import lilibeth from "../../src/reprodutoresCachorros/Lilibeth.png"
import savana from "../../src/reprodutoresCachorros/Savana.png"
import rapunzel from "../../src/reprodutoresCachorros/Rapunzel.png"
import giovanna from "../../src/reprodutoresCachorros/Rapunzel.png"
import liege from "../../src/reprodutoresCachorros/Liege.png"
import cloe from "../../src/reprodutoresCachorros/cloe.png"
import lari from "../../src/reprodutoresCachorros/Lari.png"
import nevada from "../../src/reprodutoresCachorros/Nevada.png"
import bijuo from "../../src/reprodutoresCachorros/Bijuo.png"
import penelope from "../../src/reprodutoresCachorros/Penélope.png"
import berenice from "../../src/reprodutoresCachorros/Berenice.png"
import maju from "../../src/reprodutoresCachorros/Maju.png"
import perola from "../../src/reprodutoresCachorros/Pérola.png"
import bob from "../../src/reprodutoresCachorros/Bob.png"
import amora from "../../src/reprodutoresCachorros/Amora.png"
import cavalier from "../../src/reprodutoresCachorros/Cavalier.png"

const imagens = {
  Rosinha: rosinha,
  Sarita: sarita,
  Sugar: sugar,
  Lua: lua,
  Potira: potira,
  Lizye: lizye,
  Papito: papito,
  Jessy: jessy,
  Rihanna: rihanna,
  Aiko: aiko,
  Malibu: malibu,
  Tucker: tucker,
  Naomi: naomi,
  Imperatriz: imperatriz,
  Chika: chika,
  Jolie: jolie,
  Lilibeth: lilibeth,
  Savana: savana,
  Rapunzel: rapunzel,
  Giovanna: giovanna,
  Liege: liege,
  cloe: cloe,
  Lari: lari,
  Nevada: nevada,
  Bijuo: bijuo,
  Penélope: penelope,
  Berenice: berenice,
  Maju: maju,
  Pérola: perola,
  Bob: bob,
  Amora: amora,
  Cavalier: cavalier,
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
