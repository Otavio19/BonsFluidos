import React from 'react';
import { FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Família Bons Fluidos</h3>
            <p className="flex items-center mb-2 text-blue-300">
              <MapPinIcon className="mr-2 text-blue-300" size={18} />
              R. Itaucama, 161 – Bosque da Saúde, São Paulo/SP
            </p>
            <p className="flex items-center mb-2 text-blue-300">
              <PhoneIcon className="mr-2 text-blue-300" size={18} />
              (11) 5083‑7071 | (11) 97854‑4334
            </p>
            <p className="mb-2 text-blue-300">WhatsApp: 11 94718‑9164</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-blue-400">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#racas" className="hover:text-blue-400">
                  Raças
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Siga-nos</h3>
            <div className="flex space-x-4">

      
              <a href="https://www.instagram.com/familiabonsfluidos/" className="hover:text-blue-400">
                <InstagramIcon size={24} className="text-blue-300" />
              </a>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-300"
                >
               
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <p>Parceiro:</p>
              <p className="font-semibold text-blue-300">CBKC</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-blue-800 text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} Família Bons Fluidos. Todos os
            direitos reservados.
          </p>
          <img src="/src/img/CBKC.avif" alt="CBKC Logo" className="mx-auto mt-2" />
        </div>
      </div>
    </footer>
  );
}
