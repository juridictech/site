import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    content: "A JuridicTech revolucionou nossa forma de trabalhar. A automação de documentos nos economiza horas preciosas todos os dias.",
    author: "Dra. Maria Silva",
    role: "Advogada Sênior",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&w=128&h=128&q=80"
  },
  {
    content: "A precisão e eficiência da plataforma são impressionantes. Conseguimos aumentar nossa produtividade em mais de 200%.",
    author: "Dr. João Santos",
    role: "Sócio de Escritório",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&w=128&h=128&q=80"
  },
  {
    content: "O suporte da IA nas análises jurídicas tem sido fundamental para tomarmos decisões mais assertivas e rápidas.",
    author: "Dra. Ana Oliveira",
    role: "Coordenadora Jurídica",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&w=128&h=128&q=80"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          title="O que dizem nossos clientes"
          subtitle="Histórias de sucesso de quem já transformou sua prática jurídica"
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;