import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCarousel } from '../components/ImageCarousel';
import { ArrowLeftIcon } from 'lucide-react';

import logoCanil from '../img/logocanil.png';
import mariaEJose from '../img/mariaejose.png';
import tiaMabel from '../img/tiamabel.png';
import ana from '../img/ana.png';
import jairoebernadita from '../img/jairoebernadita.png';
import laurinha from '../img/laurinha.png';

import estatuas from '../img/estatuas.png';
import jardim from '../img/jardim.png';
import buda from '../img/buda.png';
import descanso from '../img/descanso.png';
import premios from '../img/premios.png';

const spaceImages = [
  {
    src: 'https://i.postimg.cc/DybFJMN1/clique-para-ajudar.png',
    alt: 'Família bons Fluidos'
  },
  {
    src: premios,
    alt: 'Premiações'
  },
  {
    src: estatuas,
    alt: 'Nosso Jardim'
  },
  {
    src: descanso,
    alt: 'Nossa Loja'
  },
  {
    src: jardim,
    alt: 'Nosso Jardim'
  },
  {
    src: buda,
    alt: 'Cantinho do Guerreiro'
  }
];

const teamMembers = [
  {
    name: 'Maria Eugênia e José Carlos',
    role: 'Fundadores do Canil Bons Fluidos',
    image: mariaEJose,
    description: 'Apaixonados por animais, Maria Eugênia e José Carlos fundaram o Canil Bons Fluidos com a missão de proporcionar bem-estar e qualidade de vida para os pets e suas famílias.'
  },
  {
    name: 'Dra. Maria Isabel (Tia Mabel)',
    role: 'Veterinária',
    image: tiaMabel,
    description: 'Mãe do Pug Shaolin, a Dra. Maria Isabel cuida com carinho e dedicação da saúde de todos os nossos bichinhos.'
  },
  {
    name: 'Vovô Jairo e Vovó Bernardita',
    role: 'Cuidadores',
    image: jairoebernadita,
    description: 'Dedicados e atentos, Vovô Jairo e Vovó Bernardita adoram mimar os pets, garantindo que recebam todo o carinho e atenção que merecem.'
  },
  {
    name: 'Tia Ana',
    role: 'Atendimento e Documentação',
    image: ana,
    description: 'Mãe das Shitzus Mel e Belinha, Tia Ana é responsável pelos pedigrees e atendimento ao cliente. Ela adora dar petiscos escondidos para os pets.'
  },
  {
    name: 'Tia Laurinha',
    role: 'Banho e Tosa',
    image: laurinha,
    description: 'Tia favorita dos peludos, Laurinha é especialista em dar aquele banho gostoso nos pets, deixando-os limpos, cheirosos e felizes.'
  }
];


export function TeamPage() {
  return <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Voltar para a página inicial
        </Link>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Conheça os membros da nossa equipe dedicada, que trabalham com amor
            e carinho para garantir o bem-estar dos nossos pets.
          </p>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4"></div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Nosso Espaço
          </h2>
          <ImageCarousel images={spaceImages} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-70 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 bg-blue-100 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Junte-se à Nossa Família
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Nossa equipe trabalha com amor e dedicação para garantir o bem-estar
            dos nossos animais. Venha conhecer pessoalmente nosso espaço e nossa
            equipe!
          </p>
          <Link to="/#contato" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Agende uma Visita
          </Link>
        </div>
      </div>
    </div>;
}