import React from 'react';
import { FileText, MessageSquare, Brain, Scale, Clock, Shield } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Montagem de Peças Jurídicas",
      description: "Automatize a criação de documentos jurídicos com nossa IA especializada."
    },
    {
      icon: MessageSquare,
      title: "Análise de Processos",
      description: "Discussão e análise detalhada de processos utilizando inteligência artificial."
    },
    {
      icon: Brain,
      title: "Consultoria Jurídica IA",
      description: "Obtenha insights valiosos através de nossa IA especializada em direito."
    },
    {
      icon: Scale,
      title: "Jurisprudência Inteligente",
      description: "Pesquisa avançada de jurisprudência com análise preditiva."
    },
    {
      icon: Clock,
      title: "Gestão de Prazos",
      description: "Controle automatizado de prazos processuais e alertas inteligentes."
    },
    {
      icon: Shield,
      title: "Compliance Legal",
      description: "Monitore e garanta conformidade legal com suporte de IA."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nossos Serviços"
          subtitle="Soluções jurídicas inovadoras potencializadas por IA"
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}