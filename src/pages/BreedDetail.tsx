import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon, HeartIcon, RulerIcon, ScaleIcon, ClockIcon } from 'lucide-react';
// Usando o mesmo array de raças definido em BreedList.tsx
const breeds = [{
  id: 'corgi',
  name: 'Corgi',
  description: 'Ativo, inteligente e sociável. Ideal para quintal. Longevidade de 11-13 anos. Requer cuidados com discos e displasia.',
  image: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  characteristics: ['Inteligente e fácil de treinar', 'Ótimo com crianças', 'Necessita de exercícios regulares', 'Pelagem que requer escovação frequente'],
  size: 'Pequeno a Médio',
  weight: '10-13 kg',
  height: '25-30 cm',
  lifeExpectancy: '11-13 anos',
  temperament: 'Amigável, Alerta, Afetuoso',
  healthConcerns: ['Displasia coxofemoral', 'Problemas de coluna', 'Problemas oculares'],
  grooming: ['Escovação semanal', 'Banho mensal', 'Tosa a cada 2-3 meses'],
  training: ['Fácil de treinar', 'Responde bem ao reforço positivo', 'Precisa de socialização precoce']
}
// ... outros breeds (mesmo array do BreedList.tsx)
];
export function BreedDetail() {
  const {
    breedId
  } = useParams();
  const breed = breeds.find(b => b.id === breedId);
  if (!breed) {
    return <div className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-amber-800 mb-4">
            Raça não encontrada
          </h1>
          <Link to="/racas" className="inline-flex items-center text-amber-600 hover:text-amber-800">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Voltar para lista de raças
          </Link>
        </div>
      </div>;
  }
  return <div className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <Link to="/racas" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Voltar para lista de raças
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img src={breed.image} alt={breed.name} className="w-full h-96 object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-amber-800 mb-4">
                Informações Básicas
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <RulerIcon className="w-5 h-5 text-amber-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Altura</p>
                    <p className="font-medium">{breed.height}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ScaleIcon className="w-5 h-5 text-amber-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Peso</p>
                    <p className="font-medium">{breed.weight}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 text-amber-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Expectativa de Vida</p>
                    <p className="font-medium">{breed.lifeExpectancy}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <HeartIcon className="w-5 h-5 text-amber-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Temperamento</p>
                    <p className="font-medium">{breed.temperament}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-amber-800 mb-4">
                {breed.name}
              </h1>
              <p className="text-gray-700 mb-6">{breed.description}</p>
              <h2 className="text-xl font-semibold text-amber-800 mb-3">
                Características
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {breed.characteristics.map((characteristic, index) => <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{characteristic}</span>
                  </li>)}
              </ul>
              <h2 className="text-xl font-semibold text-amber-800 mb-3">
                Cuidados com a Saúde
              </h2>
              <ul className="space-y-2 mb-6">
                {breed.healthConcerns.map((concern, index) => <li key={index} className="flex items-start text-gray-700">
                    <CheckIcon className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    {concern}
                  </li>)}
              </ul>
              <h2 className="text-xl font-semibold text-amber-800 mb-3">
                Cuidados com a Pelagem
              </h2>
              <ul className="space-y-2 mb-6">
                {breed.grooming.map((item, index) => <li key={index} className="flex items-start text-gray-700">
                    <CheckIcon className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>)}
              </ul>
              <h2 className="text-xl font-semibold text-amber-800 mb-3">
                Treinamento
              </h2>
              <ul className="space-y-2">
                {breed.training.map((item, index) => <li key={index} className="flex items-start text-gray-700">
                    <CheckIcon className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>)}
              </ul>
            </div>
            <div className="bg-amber-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-amber-800 mb-4">
                Interessado nesta raça?
              </h2>
              <p className="text-gray-700 mb-4">
                Entre em contato conosco para saber mais sobre disponibilidade
                de filhotes e processo de adoção.
              </p>
              <Link to="/#contato" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
}