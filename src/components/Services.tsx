import React from 'react';
import { FileText, MessageSquare, Brain, Scale, Clock, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Montagem de Peças Jurídicas",
      description: "Automatize a criação de documentos jurídicos com nossa IA especializada."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Análise de Processos",
      description: "Discussão e análise detalhada de processos utilizando inteligência artificial."
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Consultoria Jurídica IA",
      description: "Obtenha insights valiosos através de nossa IA especializada em direito."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Jurisprudência Inteligente",
      description: "Pesquisa avançada de jurisprudência com análise preditiva."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Gestão de Prazos",
      description: "Controle automatizado de prazos processuais e alertas inteligentes."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Compliance Legal",
      description: "Monitore e garanta conformidade legal com suporte de IA."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções jurídicas inovadoras potencializadas por IA
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}