import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';

const breeds = [
  {
    id: 'corgi',
    name: 'Corgi',
    description:
      'Estão entre as 11 raças mais inteligentes segundo ranking da inteligência canina de Coren .',
    image:
      'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    characteristics: [
      'Ativo e atlético',
      'Ótimo com crianças',
      'Necessita de exercícios regulares',
      'Afetuoso e leal',
    ],
    size: 'Pequeno a Médio',
    weight: '10-13 kg',
    height: '25-30 cm',
    lifeExpectancy: '11-13 anos',
    temperament: 'Amigável, Alerta, Afetuoso',
  },
  {
    id: 'cavachon',
    name: 'Cavachon',
    description:
      'Híbrido entre Bichon Frisé e Cavalier. Estrutura robusta e pelagem hipoalergênica.',
    image:
      'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    characteristics: [
      'Pelagem hipoalergênica',
      'Ótimo para apartamentos',
      'Temperamento doce e gentil',
      'Baixa necessidade de exercícios',
    ],
    size: 'Pequeno',
    weight: '5-10 kg',
    height: '20-30 cm',
    lifeExpectancy: '10-15 anos',
    temperament: 'Afetuoso, Brincalhão, Gentil',
  },
  {
    id: 'bichon-frise',
    name: 'Bichon Frisé',
    description:
      'Reconhecido por sua pelagem branca em espiral e aparência de “puff”, além de ser um cão de performance em shows .',
    image:
      'https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    characteristics: [
      'Não solta pelo (hipoalergênico)',
      'Excelente para apartamentos',
      'Muito sociável e afetuoso',
      'Brincalhão e inteligente',
    ],
    size: 'Pequeno',
    weight: '3-5 kg',
    height: '23-30 cm',
    lifeExpectancy: '12-15 anos',
    temperament: 'Brincalhão, Afetuoso, Gentil',
  },
  {
    id: 'spitz-alemao',
    name: 'Spitz Alemão',
    description:
      'Descendente de cães nórdicos e dos povos vikings, sua aparência lembra a de raposas e mantém seu instinto atento.',
    image:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    characteristics: [
      'Personalidade vivaz e alerta',
      'Adaptável a diferentes ambientes',
      'Afetuoso e enérgico',
      'Ótimo cão de companhia',
    ],
    size: 'Pequeno',
    weight: '1.5-4.5 kg',
    height: '18-22 cm',
    lifeExpectancy: '12-16 anos',
    temperament: 'Alerta, Inteligente, Confiante',
  },
  {
    id: 'cavalier',
    name: 'Cavalier',
    description:
      'Bom convívio com pessoas e pets. Descendente de cães de companhia reais, era usado para aquecer colo de nobres no século XVII.',
    image:
      'https://images.unsplash.com/photo-1626231537276-e7200c84459c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    characteristics: [
      'Excelente com crianças',
      'Adaptável a qualquer ambiente',
      'Necessita de companhia constante',
      'Pelagem sedosa e fácil de cuidar',
    ],
    size: 'Pequeno',
    weight: '5.5-8 kg',
    height: '30-33 cm',
    lifeExpectancy: '12-15 anos',
    temperament: 'Afetuoso, Gentil, Paciente',
  },
];

export function BreedList() {
  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Nossas Raças</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Conheça todas as raças disponíveis em nosso canil. Todos os nossos
            filhotes são entregues com pedigree CBKC, castrados, vacinados e
            microchipados.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breeds.map((breed) => (
            <div
              key={breed.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={breed.image}
                  alt={`Raça ${breed.name}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  {breed.name}
                </h2>
                <p className="text-gray-600 mb-4">{breed.description}</p>
                <div className="mb-4">
                  <h3 className="font-medium text-blue-800 mb-2">
                    Características:
                  </h3>
                  <ul className="space-y-1">
                    {breed.characteristics.slice(0, 2).map((characteristic, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <CheckIcon
                          className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
                        />
                        <span>{characteristic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/racas/${breed.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Por que escolher nossos filhotes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckIcon className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800">Pedigree CBKC</h3>
                <p className="text-gray-600">
                  Garantia de linhagem pura e qualidade genética
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckIcon className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800">Saúde Garantida</h3>
                <p className="text-gray-600">Todos os filhotes são vacinados e vermifugados</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckIcon className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800">Suporte Contínuo</h3>
                <p className="text-gray-600">
                  Acompanhamento veterinário nos primeiros meses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
