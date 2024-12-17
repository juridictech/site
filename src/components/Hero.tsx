import React from 'react';
import { Bot, FileText, Scale } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Inteligência Artificial</span>
            <span className="block text-blue-200">para o Mundo Jurídico</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Revolucione sua prática jurídica com soluções baseadas em IA. 
            Automatize processos, analise documentos e tome decisões mais inteligentes.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Bot className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">IA Jurídica Avançada</h3>
            <p className="text-blue-100">Análise inteligente de processos e documentos jurídicos com precisão e rapidez.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <FileText className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Automação de Documentos</h3>
            <p className="text-blue-100">Geração automatizada de peças jurídicas com base em modelos inteligentes.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Scale className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Suporte Jurídico 24/7</h3>
            <p className="text-blue-100">Assistência jurídica disponível a qualquer momento através de nossa IA.</p>
          </div>
        </div>
      </div>
    </div>
  );
}