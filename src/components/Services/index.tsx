import React from 'react';
import { FileText, MessageSquare, Scale } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from './ServiceCard';

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
    <Section id="services" background="gray">
      <Container>
        <SectionHeading
          title="Nossos Serviços"
          subtitle="Soluções inovadoras para modernizar sua prática jurídica"
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;