import React from 'react';
import { Send } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Section id="contact" background="gray">
      <Container>
        <SectionHeading
          title="Entre em Contato"
          subtitle="Estamos prontos para ajudar você a transformar sua prática jurídica"
        />

        <div className="mt-16 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                required
              />
            </div>

            <div>
              <Button type="submit" icon={Send}>
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default ContactForm;