import React from 'react';
import videoBackground from '../video/videoplayback.mp4';

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[70vh]">
      
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={videoBackground}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Máscara de cor azul */}
      <div className="absolute inset-0 bg-neutral-600 opacity-60 z-0"></div>

      {/* Conteúdo sobreposto */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 text-white h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Família Bons Fluidos
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Bem-vindo ao nosso canil familiar, onde o carinho e bem-estar dos pets
            são nossa prioridade. Oferecemos filhotes saudáveis, com pedigree CBKC,
            castrados, vacinados e microchipados.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#quem-somos"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Nossa História
            </a>
            <a
              href="#servicos"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              O que fazemos?
            </a>
            <a
              href="#contato"
              className="bg-white hover:bg-blue-100 text-blue-500 font-semibold py-2 px-4 rounded-lg border border-blue-700 transition-colors"
            >
              Agende sua visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
