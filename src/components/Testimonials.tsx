import React from 'react';

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
    <div id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Histórias de sucesso de quem já transformou sua prática jurídica
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;