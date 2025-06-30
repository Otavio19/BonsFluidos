import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Fale Conosco</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Estamos à disposição para tirar suas dúvidas, agendar uma visita ou
            ajudar você a encontrar o filhote perfeito para sua família.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Entre em Contato
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Endereço:</p>
                    <p className="text-gray-600">
                      R. Itaucama, 161 – Bosque da Saúde, São Paulo/SP
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Telefones:</p>
                    <p className="text-gray-600">
                      (11) 5083‑7071 | (11) 97854‑4334
                    </p>
                    <p className="text-gray-600">WhatsApp: 11 94718‑9164</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">
                      familiabonsfluidos@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="font-medium text-blue-800">Visitas ao Canil:</p>
                <p className="text-gray-600">Agende sua Visita.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
