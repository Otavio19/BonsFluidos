import React from "react";
import {
  HomeIcon,
  HeartIcon,
  ScissorsIcon,
  SyringeIcon,
  TruckIcon,
  StethoscopeIcon,
} from "lucide-react";

const services = [
  {
    name: "Hotelzinho",
    description:
      "Hospedagem com cuidado e carinho para seu pet enquanto você viaja.",
    icon: <HomeIcon size={36} className="text-blue-700" />,
  },
  {
    name: "Venda de Filhotes",
    description:
      "Auxílio na escolha do filhote de acordo com seu estilo de vida.",
    icon: <HeartIcon size={36} className="text-blue-700" />,
  },
  {
    name: "Banho e Tosa",
    description:
      "Além da estética, proporcionamos um cuidado completo para seu pet.",
    icon: <ScissorsIcon size={36} className="text-blue-700" />,
  },
  {
    name: "Vacinação",
    description:
      "Acompanhamento completo da carteirinha de vacinação do seu pet.",
    icon: <SyringeIcon size={36} className="text-blue-700" />,
  },
  {
    name: "Leva & Traz",
    description:
      "Transporte para banho, consulta ou vacina com toda segurança.",
    icon: <TruckIcon size={36} className="text-blue-700" />,
  },
  {
    name: "Consultas e Exames",
    description:
      "Atenção completa à saúde do seu pet com profissionais qualificados.",
    icon: <StethoscopeIcon size={36} className="text-blue-700" />,
  },
];

export function ServicesPreview() {
  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Oferecemos serviços completos para garantir a saúde e o bem-estar do
            seu pet. Nossos profissionais são capacitados e apaixonados por
            animais.
          </p>
          <div className="h-1 w-20 bg-blue-800 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-blue-50 rounded-lg p-6 shadow hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-100 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                Consulta de cuidado reprodutivo
              </h3>
              <p className="text-gray-700">
                Pensando no bem-estar do seu pet, oferecemos orientações
                personalizadas sobre saúde reprodutiva. Também realizamos
                procedimentos seguros para controle populacional, sempre com
                carinho e responsabilidade. Fale com a gente para saber mais!
              </p>
            </div>
            <a
              href="#contato"
              className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
