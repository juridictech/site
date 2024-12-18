import React from 'react';
import { FileText, MessageSquare, Scale } from 'lucide-react';

const services = [
  {
    title: 'Montagem Automatizada de Peças',
    description: 'Crie documentos jurídicos de alta qualidade em minutos com nossa tecnologia de IA.',
    icon: FileText,
  },
  {
    title: 'Discussões de Processos com IA',
    description: 'Analise casos e obtenha insights valiosos através de nossa plataforma inteligente.',
    icon: MessageSquare,
  },
  {
    title: 'Suporte Jurídico Completo',
    description: 'Conte com assistência especializada para todas as suas necessidades legais.',
    icon: Scale,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções inovadoras para modernizar sua prática jurídica
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="inline-flex p-3 rounded-xl bg-lime-400 text-black">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;