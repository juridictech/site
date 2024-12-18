import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="relative bg-black text-white pt-24 pb-16">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
              Inteligência Artificial
              <span className="block text-lime-400">a serviço do Direito</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Revolucione sua prática jurídica com soluções tecnológicas avançadas. 
              Automatize processos, tome decisões mais precisas e aumente sua produtividade.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <Button variant="secondary" icon={ArrowRight}>
                Comece Agora
              </Button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-md">
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gradient-to-br from-lime-400/20 to-black/40 animate-gradient" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;